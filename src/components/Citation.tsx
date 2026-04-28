interface CitationProps {
  source: string;
  href: string;
  year?: string;
}

export default function Citation({ source, href, year }: CitationProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="citation-pill"
      title={`Source: ${source}${year ? ` (${year})` : ""}`}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="citation-icon"
      >
        <circle cx="5" cy="5" r="4.5" stroke="currentColor" strokeWidth="1" />
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
      {source}
      {year && <span className="citation-year">{year}</span>}
    </a>
  );
}
