import type { Activity } from "../../types/activity";

type ActivityCardProps = { activity: Activity };

function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className={`group border ${activity.borderColor} ${activity.background} p-7 transition-transform duration-300 hover:-translate-y-2 magic-glow`}>
      <div className={`text-5xl ${activity.iconColor}`} aria-hidden="true">{activity.icon}</div>
      <h3 className="mt-7 text-2xl text-foreground">{activity.title}</h3>
      <p className="mt-4 font-body leading-relaxed text-gray">{activity.description}</p>
      <div className="magic-divider mt-7" />
      <span className="mt-5 block font-body text-xs uppercase tracking-[0.25em] text-amber">Discover</span>
    </article>
  );
}

export default ActivityCard;
