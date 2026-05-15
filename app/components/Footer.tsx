export default function Footer() {
  return (
    <footer
      className="py-6 border-t"
      style={{ background: "var(--color-dark)", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>LM</span>
          <span className="w-1.5 h-1.5 rounded-full ml-0.5" style={{ background: "var(--color-yellow)" }} />
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} Lavish Mahadev. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["#about","#projects","#skills","#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs capitalize hover:text-white transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
