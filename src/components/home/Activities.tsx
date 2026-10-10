import { activities } from "../../data/activities";
import ActivityCard from "../Activities/ActivityCard";

function Activities() {
  return (
    <section id="activities" className="bg-background px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-body text-sm uppercase tracking-[0.35em] text-amber">Explore</p>
          <h2 className="mt-4 text-5xl text-gold md:text-6xl">Activities</h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
            Discover the creative, technical, and community experiences SESC has to offer.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => <ActivityCard key={activity.title} activity={activity} />)}
        </div>
      </div>
    </section>
  );
}

export default Activities;
