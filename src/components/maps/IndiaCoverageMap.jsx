import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {
  coverageLocations,
  indiaMapCenter,
  indiaMapZoom,
} from "../../data/coverageLocations";

function MapFocus({ activeIndex }) {
  const map = useMap();

  useEffect(() => {
    if (activeIndex === null) {
      map.flyTo(
        indiaMapCenter,
        indiaMapZoom,
        {
          duration: 0.6,
        }
      );

      return;
    }

    const loc =
      coverageLocations[activeIndex];

    map.flyTo(
      [loc.lat, loc.lng],
      6,
      {
        duration: 0.55,
      }
    );
  }, [activeIndex, map]);

  return null;
}

  function IndiaCoverageMap() {
  const [active, setActive] =
    useState(null);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">

      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">

        {/* MAP */}
        <div className="relative min-h-[280px] lg:min-h-[360px]">

          <MapContainer
            center={indiaMapCenter}
            zoom={indiaMapZoom}
            scrollWheelZoom={false}
            className="z-0 h-full min-h-[280px] w-full [&_.leaflet-control-zoom]:rounded-lg [&_.leaflet-control-zoom]:border-border"
            aria-label="Interactive map of Hasti Security Solutions service locations across India"
          >

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapFocus activeIndex={active} />

            {coverageLocations.map(
              (loc, idx) => {
                const isActive =
                  active === idx;

                const isPrimary =
                  loc.primary;

                return (
                  <CircleMarker
                    key={loc.id}
                    center={[
                      loc.lat,
                      loc.lng,
                    ]}
                    radius={
                      isPrimary
                        ? isActive
                          ? 14
                          : 11
                        : isActive
                        ? 11
                        : 8
                    }
                    pathOptions={{
                      color: isPrimary
                        ? "#c2410c"
                        : "#ea580c",

                      fillColor:
                        "#ea580c",

                      fillOpacity:
                        isActive
                          ? 0.95
                          : 0.75,

                      weight:
                        isActive
                          ? 3
                          : 2,
                    }}
                    eventHandlers={{
                      mouseover: () =>
                        setActive(idx),

                      mouseout: () =>
                        setActive(null),

                      focus: () =>
                        setActive(idx),

                      blur: () =>
                        setActive(null),
                    }}
                  >

                    <Popup>
                      <strong>
                        {loc.label}
                      </strong>

                      <br />

                      <span className="text-xs">
                        {loc.sub}
                      </span>
                    </Popup>

                  </CircleMarker>
                );
              }
            )}
          </MapContainer>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col justify-center border-t border-border bg-card p-6 lg:border-l lg:border-t-0 lg:p-8">

          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">
            Coverage
          </p>

          <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-foreground">
            Pan-India footprint
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            Real delivery and support
            corridors across India.
            Hover a region on the map
            or list to focus the view.
          </p>

          <ul className="mt-5 space-y-1">

            {coverageLocations.map(
              (h, i) => (
                <li key={h.id}>

                  <button
                    type="button"
                    onMouseEnter={() =>
                      setActive(i)
                    }
                    onMouseLeave={() =>
                      setActive(null)
                    }
                    onFocus={() =>
                      setActive(i)
                    }
                    onBlur={() =>
                      setActive(null)
                    }
                    className={`flex w-full items-start gap-2 rounded-lg px-2 py-2 text-left text-sm transition ${
                      active === i
                        ? "bg-accent/10 text-foreground"
                        : "text-muted hover:bg-bg2 hover:text-foreground"
                    }`}
                  >

                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full transition ${
                        h.primary
                          ? "bg-accent ring-2 ring-accent/25"
                          : "bg-accent/70"
                      } ${
                        active === i
                          ? "scale-125"
                          : ""
                      }`}
                      aria-hidden
                    />

                    <span>
                      <span className="font-medium text-foreground">
                        {h.label}
                      </span>

                      <span className="block text-xs text-muted">
                        {h.sub}
                      </span>
                    </span>

                  </button>

                </li>
              )
            )}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default IndiaCoverageMap;
