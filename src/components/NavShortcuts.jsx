import { CalendarDays, Ticket, Megaphone } from "lucide-react";

const shortcuts = [
  { href: "#events", label: "Explore Events", icon: CalendarDays },
  { href: "#registrations", label: "Manage Bookings", icon: Ticket },
  { href: "#announcements", label: "Announcements", icon: Megaphone },
];

/**
 * Quick navigation entry points into the page's main sections.
 */
export default function NavShortcuts() {
  return (
    <nav
      aria-label="Section shortcuts"
      className="mx-auto max-w-6xl px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-10"
    >
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {shortcuts.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <a
              href={href}
              className="flex items-center gap-3 bg-white rounded-lg shadow-md border border-gold/30 px-4 py-3 hover:border-gold hover:shadow-lg transition-shadow"
            >
              <span className="h-9 w-9 rounded-full bg-cream text-navy flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4" strokeWidth={2.25} />
              </span>
              <span className="text-sm font-medium text-navy">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
