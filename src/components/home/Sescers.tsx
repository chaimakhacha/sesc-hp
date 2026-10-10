import { useState } from "react";
import { sescers } from "../../data/sescers";
import type { Sescer } from "../../types/sescer";
import SescerCard from "../Sescers/SescerCard";
import SescerLightbox from "../Sescers/SescerLightbox";

function Sescers() {
  const [selectedSescer, setSelectedSescer] = useState<Sescer | null>(null);

  return (
    <section id="sescers" className="bg-background px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-body text-sm uppercase tracking-[0.35em] text-amber">The People Behind the Magic</p>
          <h2 className="mt-4 text-5xl text-gold md:text-6xl">Meet Our Members</h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
            The people who turn curiosity and collaboration into projects.
          </p>
        </div>

        {sescers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sescers.map((sescer) => (
              <SescerCard key={sescer.name} sescer={sescer} onClick={() => setSelectedSescer(sescer)} />
            ))}
          </div>
        ) : (
          <div className="magic-border mx-auto max-w-2xl bg-black p-8 text-center">
            <p className="text-3xl text-gold">✦</p>
            <p className="mt-4 font-body text-lg text-foreground">Member profiles will be added soon.</p>
            <p className="mt-2 font-body text-gray">The section is ready for the official names, photos, and roles.</p>
          </div>
        )}
      </div>

      {selectedSescer && <SescerLightbox sescer={selectedSescer} onClose={() => setSelectedSescer(null)} />}
    </section>
  );
}

export default Sescers;
