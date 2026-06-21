import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Trash2 } from "lucide-react";

import { company, partnerBrands } from "../data/siteContent";
import { usePageSeo } from "../hooks/usePageSeo";

export default function ContactPage() {
  usePageSeo({
    title: "Contact Us",
    description: `Contact ${company.name} for security solutions.`,
    path: "/contact",
  });

  // Store all submissions
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add timestamp and ID
    const entry = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      ...data,
    };

    // Save to state (adds to list)
    setSubmissions((prev) => [entry, ...prev]);

    // Log to console
    console.log("=== New Submission ===");
    console.log("Entry:", entry);
    console.log("All Submissions:", [entry, ...submissions]);
    console.log("======================");

    // Clear the form
    e.currentTarget.reset();
  };

  const deleteEntry = (id) => {
    setSubmissions((prev) => prev.filter((item) => item.id !== id));
  };

  /* ---------------- INPUT FIELD COMPONENT ---------------- */
  const InputField = ({ label, ...props }) => (
    <div>
      <label className="block text-sm font-medium mb-1 text-foreground">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-border bg-card text-foreground p-3 outline-none focus:border-accent placeholder:text-muted"
      />
    </div>
  );

  const TextArea = ({ label, ...props }) => (
    <div>
      <label className="block text-sm font-medium mb-1 text-foreground">{label}</label>
      <textarea
        {...props}
        className="w-full rounded-xl border border-border bg-card text-foreground p-3 outline-none focus:border-accent placeholder:text-muted"
        rows={5}
      />
    </div>
  );

  return (
    <main className="px-4 space-y-12">
      {/* HEADER */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Let's scope your project</h1>
        <p className="text-muted mt-3">
          Share details and we'll respond quickly with a proposal.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-border bg-card p-6 rounded-xl space-y-4"
        >
          <h2 className="text-xl font-bold text-foreground">Send Message</h2>

          <InputField label="Name" name="name" required />
          <InputField label="Email" name="email" type="email" required />
          <InputField label="Phone" name="phone" type="tel" />

          <TextArea
            label="Project Details"
            name="message"
            placeholder="Location, budget, timeline..."
            required
          />

          <button
            type="submit"
            className="w-full bg-accent text-cta-text py-3 rounded-xl font-bold hover:bg-accent2 transition"
          >
            Submit Inquiry
          </button>
        </motion.form>

        {/* INFO SECTION */}
        <div className="space-y-6">
          {/* OFFICE */}
          <div className="border border-border bg-card p-6 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-foreground">Head Office</h2>

            <div className="space-y-3 text-sm text-muted">
              <div className="flex gap-2">
                <MapPin className="text-accent" />
                <span>{company.address}</span>
              </div>

              <div className="flex gap-2">
                <Phone className="text-accent" />
                <div>
                  <p>{company.phonePrimary}</p>
                  {company.phoneSecondary?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Clock className="text-accent" />
                <span>{company.hours}</span>
              </div>

              <div className="flex gap-2">
                <Mail className="text-accent" />
                <span>{company.email}</span>
              </div>
            </div>
          </div>

          {/* NOTE */}
          <div className="border border-border bg-card p-6 rounded-xl text-sm text-muted">
            For urgent support, mention AMC or invoice number.
          </div>

          {/* BRANDS */}
          <div className="border border-border bg-card p-6 rounded-xl">
            <h3 className="font-bold text-foreground">Brands we work with</h3>

            <div className="flex flex-wrap gap-2 mt-3">
              {partnerBrands.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 border border-border rounded-full text-xs text-muted"
                >
                  {b}
                </span>
              ))}
            </div>

            <Link
              to="/solutions/electronic-safety-security"
              className="text-accent text-sm mt-4 inline-block hover:underline"
            >
              View solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* SUBMISSIONS LIST */}
      {submissions.length > 0 && (
        <section className="border border-border bg-card p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">
              Submissions ({submissions.length})
            </h2>
            <button
              onClick={() => setSubmissions([])}
              className="text-xs text-red-400 hover:text-red-300 transition"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {submissions.map((entry) => (
              <div
                key={entry.id}
                className="border border-border rounded-lg p-4 bg-bg2 relative group"
              >
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-red-400 hover:text-red-300"
                >
                  <Trash2 size={16} />
                </button>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted text-xs">Name</span>
                    <p className="text-foreground font-medium">{entry.name}</p>
                  </div>
                  <div>
                    <span className="text-muted text-xs">Email</span>
                    <p className="text-foreground">{entry.email}</p>
                  </div>
                  <div>
                    <span className="text-muted text-xs">Phone</span>
                    <p className="text-foreground">{entry.phone || "-"}</p>
                  </div>
                  <div>
                    <span className="text-muted text-xs">Time</span>
                    <p className="text-muted text-xs">{entry.timestamp}</p>
                  </div>
                </div>

                <div className="mt-2">
                  <span className="text-muted text-xs">Message</span>
                  <p className="text-foreground text-sm mt-1">{entry.message}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}