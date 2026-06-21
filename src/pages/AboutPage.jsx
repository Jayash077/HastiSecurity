import { useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { company, partnerBrands, valueCards } from "../data/siteContent";
import { solutionCategories, solutionPath } from "../data/navigation";
import { menuFeaturedSrc } from "../data/menuFeaturedImages";
import {
  ArrowUpRight,
  Building2,
  Eye,
  Globe,
  Leaf,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { LazyIndiaCoverageMap } from "../components/layout/AppLayout";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { getOrganizationJsonLd, usePageSeo } from "../hooks/usePageSeo";

/* ICONS */
const valueIcons = [Leaf, Building2, Sparkles, Eye, Users, Target];

/* JOURNEY */
const journeySteps = [
  {
    year: "2008",
    title: "Founded in Indore",
    text: "Started as CCTV security company",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Private Limited",
    text: "Expanded services & structure",
    icon: Building2,
  },
  {
    year: "2020s",
    title: "Pan India Growth",
    text: "Multiple states coverage",
    icon: Globe,
  },
  {
    year: "Today",
    title: "Trusted Partner",
    text: "Serving thousands of customers",
    icon: Users,
  },
];

export default function AboutPage() {
  usePageSeo({
    title: "About Us",
    description: `${company.name} security solutions`,
    path: "/about",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(getOrganizationJsonLd());
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  const stats = [
    { target: company.stats.years, suffix: "+", label: "Years" },
    { target: company.stats.staff, suffix: "+", label: "Staff" },
    { target: company.stats.states, suffix: "+", label: "States" },
    { target: company.stats.customers, suffix: "+", label: "Customers", big: true },
  ];

  return (
    <main className="space-y-16 px-4">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Best Security System Dealers in Indore
          </h1>
          <p className="mt-4 text-gray-600">
            Since {company.founded}, we provide CCTV, solar and automation systems.
          </p>

          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="px-4 py-2 bg-black text-white rounded">
              Get in touch
            </Link>
            <Link to="/clients" className="px-4 py-2 border rounded">
              Our clients
            </Link>
          </div>
        </div>

        <img
          src={menuFeaturedSrc("electronic-safety-security")}
          className="rounded-xl w-full"
          alt="Security"
        />
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((item) => (
          <div key={item.label} className="border p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-green-600">
              <AnimatedCounter
                target={item.target}
                suffix={item.suffix}
                isCustomers={item.big}
              />
            </h2>
            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </section>

      {/* JOURNEY */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Journey</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {journeySteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border p-4 rounded-xl"
              >
                <div className="flex justify-between">
                  <Icon />
                  <span className="font-bold text-green-600">{step.year}</span>
                </div>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What We Deliver</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {solutionCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={solutionPath(cat.slug)}
              className="border rounded-lg overflow-hidden"
            >
              <img src={menuFeaturedSrc(cat.slug)} alt={cat.title} />
              <div className="p-3">
                <h3 className="font-semibold">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Values</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {valueCards.map((card, i) => {
            const Icon = valueIcons[i] || Sparkles;

            return (
              <div key={card.title} className="border p-4 rounded-lg">
                <Icon className="text-green-600" />
                <h3 className="font-semibold mt-2">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAP */}
      <Suspense fallback={<p>Loading map...</p>}>
        <LazyIndiaCoverageMap />
      </Suspense>

      {/* PARTNERS */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Partners</h2>

        <div className="flex flex-wrap gap-2">
          {partnerBrands.map((b) => (
            <span key={b} className="border px-3 py-1 rounded-full text-sm">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection
        eyebrow="Testimonials"
        title="Trusted by clients"
      />

      {/* CONTACT */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-xl">
          <MapPin />
          <h3 className="font-bold mt-2">Head Office</h3>
          <p className="text-sm text-gray-500">{company.address}</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h3 className="font-bold">Ready to start?</h3>
          <p className="text-sm text-gray-500">
            Contact us for security solutions.
          </p>

          <Link to="/contact" className="inline-block mt-4 text-blue-600">
            Request Demo →
          </Link>
        </div>
      </section>

    </main>
  );
}