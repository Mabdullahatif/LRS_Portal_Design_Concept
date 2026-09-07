import { useState } from "react";
import { MapPin, Users } from "lucide-react";

const STATUS_STYLES = {
  open: "bg-emerald-100 text-emerald-800",
  "closing-soon": "bg-amber-100 text-amber-800",
  closed: "bg-gray-200 text-gray-600",
};

const STATUS_LABELS = {
  open: "Registration open",
  "closing-soon": "Closing soon",
  closed: "Registration closed",
};

/**
 * @param {{ event: import("../data/mockData").Event, alreadyRegistered: boolean }} props
 */
function EventCard({ event, alreadyRegistered }) {
  const [justRequested, setJustRequested] = useState(false);
  const isClosed = event.registrationStatus === "closed";
  const showAsRegistered = alreadyRegistered || justRequested;

  function handleRegister() {
    if (isClosed || showAsRegistered) return;
    setJustRequested(true);
  }

  return (
    <li className="border border-navy/10 rounded-lg p-4 sm:p-5 flex flex-col gap-3 bg-white">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg text-navy">{event.title}</h3>
          <p className="text-sm text-ink/70">{event.track}</p>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${STATUS_STYLES[event.registrationStatus]}`}
        >
          {STATUS_LABELS[event.registrationStatus]}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {event.venue}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" /> {event.seatsRemaining} seats left
        </span>
        <span>
          {new Date(event.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <button
        type="button"
        onClick={handleRegister}
        disabled={isClosed || showAsRegistered}
        className="mt-1 self-start text-sm font-medium px-4 py-1.5 rounded-md bg-navy text-cream disabled:bg-gray-200 disabled:text-gray-500 hover:bg-navy-light transition-colors"
      >
        {showAsRegistered ? "Registered" : isClosed ? "Closed" : "Register"}
      </button>
    </li>
  );
}

/**
 * Featured/upcoming events list, enough detail to act on directly.
 * @param {{
 *   events: import("../data/mockData").Event[],
 *   registeredEventIds: Set<string>
 * }} props
 */
export default function EventList({ events, registeredEventIds }) {
  return (
    <section id="events" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-display text-2xl text-navy">Upcoming Events</h2>
        <span className="text-xs text-ink/50">{events.length} tracks featured</span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            alreadyRegistered={registeredEventIds.has(event.id)}
          />
        ))}
      </ul>
    </section>
  );
}
