export default function Marquee({ text = "RECRUITMENT SPECIALIST . TALENT ACQUISITION . METRO ASSOCIATES . HR PROFESSIONAL ." }) {
  const repeated = Array(6).fill(text).join(" ");
  return (
    <div
      className="py-5 overflow-hidden border-y"
      style={{ background: "var(--color-yellow)", borderColor: "var(--color-yellow)" }}
    >
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex gap-12 pr-12">
          {Array(12).fill(text).map((t, i) => (
            <span
              key={i}
              className="text-lg font-black tracking-tight shrink-0"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-dark)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
