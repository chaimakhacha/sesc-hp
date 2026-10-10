import Hero from "../components/home/Hero";
import Activities from "../components/home/Activities";
import Departments from "../components/home/Departments";
import Sescers from "../components/home/Sescers";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MainLayout from "../components/layout/MainLayout";

function Home() {
  return (
    <MainLayout>
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="bg-forest px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.35em] text-gold">
                Begin Your Journey
              </p>
              <h2 className="mt-5 text-5xl text-foreground md:text-6xl">
                A Day to Remember
              </h2>
              <div className="magic-divider my-7 max-w-md" />
              <p className="font-body text-lg leading-relaxed text-foreground">
                Welcome to SESC! Welcome Day is an opportunity to discover our
                community, meet curious minds, explore the club's departments,
                and find the place where your ideas can grow.
              </p>
              <p className="mt-5 font-body text-lg leading-relaxed text-gray">
                Whether you love technology, creativity, design, or storytelling,
                there is a place for you in our community.
              </p>
            </div>
            <div className="hp-feature-card magic-border magic-glow p-10 text-center">
              <div className="text-5xl text-gold" aria-hidden="true">✦</div>
              <h3 className="mt-6 text-4xl text-foreground">Your Adventure</h3>
              <p className="mt-4 font-body text-lg text-muted">Starts here.</p>
              <div className="magic-divider mx-auto my-7 max-w-xs" />
              <p className="font-body text-sm uppercase tracking-[0.3em] text-amber">
                Learn · Create · Connect
              </p>
            </div>
          </div>
        </section>

        <section id="program" className="hp-program relative overflow-hidden bg-section px-6 py-24 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="font-body text-sm uppercase tracking-[0.35em] text-gold">
                The Welcome Day
              </p>
              <h2 className="mt-4 text-5xl text-foreground md:text-6xl">The Journey</h2>
              <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
                Get to know the club, discover what each department does, and
                meet the people who make SESC special.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { number: "01", title: "Discover", description: "Explore the club, its goals, and its community." },
                { number: "02", title: "Choose Your House", description: "Meet the departments and find the team that fits your interests." },
                { number: "03", title: "Join the Adventure", description: "Connect with members and discover upcoming opportunities." },
              ].map((item) => (
                <article key={item.number} className="magic-border bg-black p-7">
                  <span className="font-body text-sm tracking-[0.25em] text-amber">{item.number}</span>
                  <h3 className="mt-4 text-3xl text-gold">{item.title}</h3>
                  <p className="mt-4 font-body leading-relaxed text-gray">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Activities />
        <Departments />

        <section className="hp-quote relative overflow-hidden bg-burgundy px-6 py-24 md:py-32">
          <div className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="text-7xl text-gold" aria-hidden="true">“</div>
            <blockquote className="text-4xl leading-relaxed text-foreground md:text-5xl">
              Every great adventure begins with a single step.
            </blockquote>
            <div className="magic-divider mx-auto my-8 max-w-sm" />
            <p className="font-body text-lg text-gray">Make your first step with SESC.</p>
            <a
              href="#departments"
              className="magic-glow mt-9 inline-block bg-accent px-9 py-4 font-body text-lg text-black transition-colors hover:bg-gold"
            >
              Find Your Department
            </a>
          </div>
        </section>

        <Sescers />

        <section id="contact" className="bg-navy px-6 py-24 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-body text-sm uppercase tracking-[0.35em] text-gold">Get In Touch</p>
            <h2 className="mt-4 text-5xl text-foreground md:text-6xl">Contact SESC</h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
              Follow our official channels for updates about Welcome Day and future activities.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#activities" className="magic-border px-7 py-3 font-body text-gold transition-colors hover:bg-gold hover:text-black">
                Explore Activities
              </a>
              <a href="#home" className="bg-primary px-7 py-3 font-body text-foreground transition-colors hover:bg-burgundy">
                Back to Top ↑
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </MainLayout>
  );
}

export default Home;
