/* The job-seeker trust statement.
 *
 * Two facts decide whether a candidate reads on: whether this will cost them,
 * and whether it is their field. Both were already on the page, but as a pair
 * of 14px gray bullets sitting under the intro paragraph, styled the same as
 * every other supporting detail. This is the same two facts at the weight the
 * client asked for.
 *
 * Plain text on purpose: no panel, border or badge. A box here would read as
 * an advert, which is the one thing a trust statement cannot afford to look
 * like.
 *
 * Two tones because the page has two backgrounds. On the white hero the
 * emphasis line is navy; in the dark Metro section it is the brand yellow,
 * which is where that yellow already carries emphasis. Yellow on white would
 * fail contrast, so it is not simply reused.
 *
 * The client's wording arrived as three lines. The hero shows the first two,
 * which is what the spec asked for; the section version adds the third onto
 * the second rather than breaking where a line break would only look like a
 * list. This matches how the statement is set on metroassoc.com.
 */
type Props = {
  tone?: "light" | "dark";
  /* hero is the larger treatment the client specified against the headline;
     section is the quieter version for a block that already has a heading. */
  size?: "hero" | "section";
  className?: string;
};

export function CandidateTrust({
  tone = "light",
  size = "hero",
  className = "",
}: Props) {
  const dark = tone === "dark";
  const hero = size === "hero";

  return (
    <div className={`max-w-2xl ${className}`}>
      <p
        className={`font-bold leading-[1.35] ${
          hero ? "text-[21px] sm:text-2xl" : "text-[19px] sm:text-xl"
        }`}
        style={{
          color: dark ? "var(--color-yellow)" : "var(--color-dark)",
          fontFamily: "var(--font-heading)",
        }}
      >
        Always 100% Free for Job Seekers
      </p>
      <p
        className={`mt-1.5 font-medium leading-[1.4] text-pretty ${
          hero ? "text-[17px] sm:text-lg" : "text-[16px] sm:text-[17px]"
        }`}
        style={{ color: dark ? "rgba(255,255,255,0.75)" : "var(--color-gray)" }}
      >
        Metro Associates focuses exclusively on{" "}
        <strong className="font-bold" style={{ color: dark ? "#fff" : "var(--color-dark)" }}>
          engineering, architecture, and construction
        </strong>{" "}
        careers.{hero ? "" : " We specialize in connecting qualified professionals with opportunities nationwide."}
      </p>
    </div>
  );
}
