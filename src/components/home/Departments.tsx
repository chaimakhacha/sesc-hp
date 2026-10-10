import { departments } from "../../data/departments";
import DepartmentCard from "../Departments/DepartmentCard";

function Departments() {
  return (
    <section id="departments" className="bg-black px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-body text-sm uppercase tracking-[0.35em] text-gold">Choose Your House</p>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">Our Departments</h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
            Four teams, four ways to create, learn, and bring ideas to life.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => <DepartmentCard key={department.name} department={department} />)}
        </div>
      </div>
    </section>
  );
}

export default Departments;
