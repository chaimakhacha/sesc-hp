import type { Sescer } from "../../types/sescer";

type SescerCardProps = { sescer: Sescer; onClick: () => void };

function SescerCard({ sescer, onClick }: SescerCardProps) {
  return (
    <button type="button" onClick={onClick} className="magic-border bg-card p-5 text-left transition-transform hover:-translate-y-1">
      {sescer.image ? (
        <img src={sescer.image} alt={sescer.name} className="h-56 w-full object-cover" loading="lazy" />
      ) : (
        <div className="flex h-56 items-center justify-center bg-black text-6xl text-gold" aria-hidden="true">✦</div>
      )}
      <h3 className="mt-5 text-2xl text-foreground">{sescer.name}</h3>
      <p className="mt-2 font-body text-sm text-amber">{sescer.role}</p>
      {sescer.department && <p className="mt-2 font-body text-sm text-gray">{sescer.department}</p>}
    </button>
  );
}

export default SescerCard;
