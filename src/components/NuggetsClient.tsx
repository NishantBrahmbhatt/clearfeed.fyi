"use client";

import { useState } from "react";

interface Nugget {
  id: number;
  category: string;
  nugget: string;
  explanation: string;
  source: string;
  href: string;
  year: string;
}

export default function NuggetsClient({
  nuggets,
  categories,
}: {
  nuggets: Nugget[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? nuggets
      : nuggets.filter((n) => n.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedId(null);
            }}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              activeCategory === cat
                ? "bg-signal text-white border-signal"
                : "bg-paper text-ink/60 border-mist hover:border-signal/40 hover:text-ink"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Nuggets list */}
      <div className="space-y-2">
        {filtered.map((nugget) => {
          const isOpen = expandedId === nugget.id;
          return (
            <div
              key={nugget.id}
              className={`border rounded-lg transition-all duration-200 ${
                isOpen
                  ? "border-signal/40 bg-signal-light/30"
                  : "border-mist bg-paper hover:border-signal/30"
              }`}
            >
              <button
                onClick={() => setExpandedId(isOpen ? null : nugget.id)}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span
                    className="text-xs text-signal/60 mt-0.5 shrink-0 hidden sm:block"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {String(nugget.id).padStart(2, "0")}
                  </span>
                  <p
                    className={`text-base leading-snug transition-colors ${
                      isOpen
                        ? "text-ink font-medium"
                        : "text-ink/80 group-hover:text-ink"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {nugget.nugget}
                  </p>
                </div>
                <span
                  className={`text-signal shrink-0 mt-0.5 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0">
                  <div className="ml-0 sm:ml-8 border-t border-signal/10 pt-4">
                    <p
                      className="text-sm text-ink/70 leading-relaxed mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {nugget.explanation}
                    </p>
                    <a
                      href={nugget.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="citation-pill"
                      title={`Source: ${nugget.source} (${nugget.year})`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="5"
                          cy="5"
                          r="4.5"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                        <text
                          x="5"
                          y="7.5"
                          textAnchor="middle"
                          fontSize="6"
                          fill="currentColor"
                          fontFamily="serif"
                          fontStyle="italic"
                        >
                          i
                        </text>
                      </svg>
                      {nugget.source}
                      <span className="citation-year">{nugget.year}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p
        className="text-xs text-ink/30 mt-10 text-center"
        style={{ fontFamily: "var(--font-body)" }}
      >
        More nuggets added regularly.
      </p>
    </div>
  );
}
