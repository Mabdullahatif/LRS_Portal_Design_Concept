import { Sparkles } from "lucide-react";

/**
 * Persistent top header with LRF branding and the signed-in participant's identity.
 * @param {{ participantName: string }} props
 */
export default function Header({ participantName }) {
  return (
    <header className="bg-navy text-cream border-b-4 border-gold">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-full bg-gold flex items-center justify-center text-navy font-display font-bold"
            aria-hidden="true"
          >
            <Sparkles className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-display text-lg sm:text-xl leading-none tracking-wide">
              LRF Portal
            </p>
            <p className="text-xs text-gold-light leading-none mt-1">
              LUMS Religious Festival · 4.0
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm sm:text-base font-medium">{participantName}</p>
          <p className="text-xs text-gold-light">Participant</p>
        </div>
      </div>
    </header>
  );
}
