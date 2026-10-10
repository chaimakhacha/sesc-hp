import { useEffect } from "react";
import type { Sescer } from "../../types/sescer";

type SescerLightboxProps = { sescer: Sescer; onClose: () => void };

function SescerLightbox({ sescer, onClose }: SescerLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-5" role="presentation" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="sescer-name" className="magic-border relative w-full max-w-lg bg-background p-7" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-4 top-3 px-2 py-1 text-2xl text-gold" aria-label="Close member details">×</button>
        {sescer.image && <img src={sescer.image} alt={sescer.name} className="mb-5 max-h-80 w-full object-cover" />}
        <h2 id="sescer-name" className="pr-8 text-3xl text-gold">{sescer.name}</h2>
        <p className="mt-2 font-body text-amber">{sescer.role}</p>
        {sescer.department && <p className="mt-2 font-body text-gray">{sescer.department}</p>}
        {sescer.bio && <p className="mt-5 font-body leading-relaxed text-foreground">{sescer.bio}</p>}
      </div>
    </div>
  );
}

export default SescerLightbox;
