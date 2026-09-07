/**
 * @typedef {Object} Participant
 * @property {string} id
 * @property {string} name
 * @property {string} lumsId
 * @property {string} degreeProgram
 * @property {"Participant"} role
 */

/**
 * @typedef {Object} Event
 * @property {string} id
 * @property {string} title
 * @property {string} track
 * @property {"team"|"individual"} type
 * @property {string} date
 * @property {string} venue
 * @property {"open"|"closing-soon"|"closed"} registrationStatus
 * @property {number} seatsRemaining
 */

/**
 * @typedef {Object} Registration
 * @property {string} id
 * @property {string} eventId
 * @property {"pending"|"confirmed"|"waitlisted"} status
 */

/**
 * @typedef {Object} Announcement
 * @property {string} id
 * @property {string} title
 * @property {string} body
 * @property {string} publishedBy
 * @property {string} publishedAt
 */

/** @type {Participant} */
export const currentParticipant = {
  id: "usr_1042",
  name: "Ali Hassan",
  lumsId: "24100XXX",
  degreeProgram: "BSc Computer Science",
  role: "Participant",
};

/** @type {Event[]} */
export const events = [
  {
    id: "evt_fehm",
    title: "Fehm-e-Islam",
    track: "Islamic Knowledge Quiz",
    type: "team",
    date: "2026-11-14",
    venue: "SSE Auditorium",
    registrationStatus: "open",
    seatsRemaining: 18,
  },
  {
    id: "evt_hujjat",
    title: "Hujjat-e-Haq",
    track: "Parliamentary Debate",
    type: "individual",
    date: "2026-11-14",
    venue: "PDC Seminar Hall",
    registrationStatus: "closing-soon",
    seatsRemaining: 4,
  },
  {
    id: "evt_tajalli",
    title: "Tajalli-e-Khat-o-Rang",
    track: "Calligraphy & Sketching",
    type: "individual",
    date: "2026-11-15",
    venue: "SDSB Lawn",
    registrationStatus: "open",
    seatsRemaining: 22,
  },
  {
    id: "evt_mizmar",
    title: "Mizmar-e-Dawood",
    track: "Qirat & Naat",
    type: "individual",
    date: "2026-11-15",
    venue: "Main Auditorium",
    registrationStatus: "closed",
    seatsRemaining: 0,
  },
];

/** @type {Registration[]} */
export const myRegistrations = [
  { id: "reg_1", eventId: "evt_fehm", status: "confirmed" },
  { id: "reg_2", eventId: "evt_hujjat", status: "pending" },
];

/** @type {Announcement[]} */
export const announcements = [
  {
    id: "an_1",
    title: "Venue change for Fehm-e-Islam heats",
    body: "The first-round heats move from SSE Auditorium to SSE 108 due to a scheduling overlap. Same time, new room.",
    publishedBy: "LRF Directors",
    publishedAt: "2026-09-05",
  },
  {
    id: "an_2",
    title: "Delegate registration crosses 250",
    body: "Thank you for the response so far — several tracks are nearing capacity. Register early to secure your seat.",
    publishedBy: "LRF EC & Convening Council",
    publishedAt: "2026-09-02",
  },
];

/** @type {{ current: string, next: string, daysRemaining: number }} */
export const festivalStatus = {
  current: "Registrations Open",
  next: "LRF 4.0 — 14–16 November 2026",
  daysRemaining: 68,
};
