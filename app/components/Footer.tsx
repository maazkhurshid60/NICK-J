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
        <div className="flex items-center gap-5">
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
          <a
            href="https://careers.topechelon.com/portals/3a7f6fd3-7cf7-447c-a20f-2354eb2031df"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105"
            style={{ background: "var(--color-yellow)", color: "var(--color-dark)", fontFamily: "var(--font-heading)" }}
          >
            View All Jobs
          </a>
        </div>
      </div>
    </footer>
  );
}
