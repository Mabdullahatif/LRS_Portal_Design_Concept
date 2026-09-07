const STATUS_STYLES = {
  confirmed: "bg-emerald-100 text-emerald-800",
  pending: "bg-amber-100 text-amber-800",
  waitlisted: "bg-gray-200 text-gray-700",
};

/**
 * @typedef {import("../data/mockData").Registration & { event: import("../data/mockData").Event }} RegistrationWithEvent
 */

/**
 * Participant's own registrations, resolved against their event details.
 * @param {{ registrations: RegistrationWithEvent[] }} props
 */
export default function MyRegistrations({ registrations }) {
  return (
    <section
      id="registrations"
      className="bg-white border-y border-navy/10"
      aria-labelledby="my-registrations-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h2 id="my-registrations-heading" className="font-display text-2xl text-navy mb-4">
          My Registrations
        </h2>

        {registrations.length === 0 ? (
          <p className="text-sm text-ink/60">
            You haven&apos;t registered for any events yet — explore the tracks above to get
            started.
          </p>
        ) : (
          <ul className="divide-y divide-navy/10">
            {registrations.map((reg) => (
              <li key={reg.id} className="py-3 flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-navy text-sm sm:text-base">
                    {reg.event.title}
                  </p>
                  <p className="text-xs text-ink/60">{reg.event.track}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize whitespace-nowrap ${STATUS_STYLES[reg.status]}`}
                >
                  {reg.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
