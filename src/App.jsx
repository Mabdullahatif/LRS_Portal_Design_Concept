import Header from "./components/Header.jsx";
import StatusHero from "./components/StatusHero.jsx";
import NavShortcuts from "./components/NavShortcuts.jsx";
import EventList from "./components/EventList.jsx";
import MyRegistrations from "./components/MyRegistrations.jsx";
import Announcements from "./components/Announcements.jsx";
import {
  currentParticipant,
  events,
  myRegistrations,
  announcements,
  festivalStatus,
} from "./data/mockData.js";

/**
 * Joins raw registrations to their event records, dropping any registration
 * whose event can no longer be found (e.g. a cancelled event) instead of
 * rendering broken UI.
 * @param {import("./data/mockData").Registration[]} registrations
 * @param {import("./data/mockData").Event[]} allEvents
 */
function resolveRegistrations(registrations, allEvents) {
  return registrations
    .map((registration) => {
      const event = allEvents.find((e) => e.id === registration.eventId);
      return event ? { ...registration, event } : null;
    })
    .filter(Boolean);
}

export default function App() {
  const resolvedRegistrations = resolveRegistrations(myRegistrations, events);
  const registeredEventIds = new Set(resolvedRegistrations.map((r) => r.eventId));
  const firstName = currentParticipant.name.split(" ")[0];

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header participantName={currentParticipant.name} />
      <StatusHero participantFirstName={firstName} status={festivalStatus} />
      <NavShortcuts />
      <EventList events={events} registeredEventIds={registeredEventIds} />
      <MyRegistrations registrations={resolvedRegistrations} />
      <Announcements announcements={announcements} />
      <footer className="text-center text-xs text-ink/50 py-8">
        LRF Portal — a design concept for LRS Tech &amp; Innovation.
      </footer>
    </div>
  );
}
