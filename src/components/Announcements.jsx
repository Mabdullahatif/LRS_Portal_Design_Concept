import { Megaphone } from "lucide-react";

/**
 * Announcements feed published by Directors / EC & Convening Council.
 * @param {{ announcements: import("../data/mockData").Announcement[] }} props
 */
export default function Announcements({ announcements }) {
  return (
    <section id="announcements" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h2 className="font-display text-2xl text-navy mb-4">Announcements</h2>

      {announcements.length === 0 ? (
        <p className="text-sm text-ink/60">No announcements right now — check back soon.</p>
      ) : (
        <ul className="space-y-3">
          {announcements.map((item) => (
            <li
              key={item.id}
              className="flex gap-3 border border-gold/30 bg-gold/5 rounded-lg p-4"
            >
              <Megaphone className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={2.25} />
              <div>
                <p className="font-medium text-navy text-sm sm:text-base">{item.title}</p>
                <p className="text-sm text-ink/70 mt-1">{item.body}</p>
                <p className="text-xs text-ink/50 mt-2">
                  {item.publishedBy} ·{" "}
                  {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
