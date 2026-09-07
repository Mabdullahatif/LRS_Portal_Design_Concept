/**
 * Hero/status band: where the festival stands right now, and a personal greeting.
 * @param {{
 *   participantFirstName: string,
 *   status: { current: string, next: string, daysRemaining: number }
 * }} props
 */
export default function StatusHero({ participantFirstName, status }) {
  return (
    <section
      className="bg-navy text-cream bg-geo-pattern bg-geo"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <p className="uppercase tracking-[0.2em] text-gold text-xs font-semibold mb-3">
          {status.current}
        </p>
        <h1
          id="hero-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl"
        >
          Welcome back, {participantFirstName}.
        </h1>
        <p className="mt-4 text-cream/85 max-w-xl text-sm sm:text-base">
          {status.next} is {status.daysRemaining} days away. Here&apos;s where
          things stand for you.
        </p>
      </div>
    </section>
  );
}
