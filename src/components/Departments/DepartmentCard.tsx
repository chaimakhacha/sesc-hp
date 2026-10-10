import type { Department } from "../../types/department";

type DepartmentCardProps = { department: Department };

function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <article className={`hp-department-card relative overflow-hidden border ${department.borderColor} ${department.background} p-7 transition-transform duration-300 hover:-translate-y-2 magic-glow`}>
      <div className={`text-5xl ${department.textColor}`} aria-hidden="true">{department.symbol}</div>
      <p className={`mt-6 font-body text-xs uppercase tracking-[0.25em] ${department.textColor}`}>{department.house}</p>
      <h3 className="mt-3 text-3xl text-foreground">{department.name}</h3>
      <p className="mt-4 font-body leading-relaxed text-gray">{department.description}</p>
    </article>
  );
}

export default DepartmentCard;
