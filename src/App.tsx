//Chaima : this code is ai generated , its purpose is just to test if the design is working properly , it will be replaced by the real content later on .
import { useState } from "react";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Program", href: "#program" },
    { label: "Activities", href: "#activities" },
    { label: "Contact", href: "#contact" },
  ];

  const activities = [
    {
      title: "Welcome Ceremony",
      description:
        "Begin the day with a memorable welcome and discover what awaits you.",
      icon: "✦",
      iconColor: "text-gold",
      borderColor: "border-gold",
      background: "bg-card",
    },
    {
      title: "Meet & Connect",
      description:
        "Meet new people, make friends, and become part of our community.",
      icon: "♜",
      iconColor: "text-amber",
      borderColor: "border-amber",
      background: "bg-forest",
    },
    {
      title: "Magical Activities",
      description:
        "Enjoy interactive activities designed to make your first day unforgettable.",
      icon: "⚡",
      iconColor: "text-burgundy",
      borderColor: "border-burgundy",
      background: "bg-navy",
    },
    {
      title: "Discover More",
      description:
        "Explore everything our community has prepared for this special occasion.",
      icon: "✧",
      iconColor: "text-bronze",
      borderColor: "border-bronze",
      background: "bg-section",
    },
  ];

  const schedule = [
    {
      time: "09:00",
      title: "Arrival & Welcome",
      description: "Gather with everyone and begin the celebration.",
      color: "text-gold",
    },
    {
      time: "10:00",
      title: "Opening Ceremony",
      description: "An official welcome to start the day.",
      color: "text-amber",
    },
    {
      time: "11:00",
      title: "Activities",
      description:
        "Games, challenges, discoveries, and magical moments.",
      color: "text-bronze",
    },
    {
      time: "13:00",
      title: "Closing",
      description:
        "A final moment together before the day comes to an end.",
      color: "text-burgundy",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="font-heading text-2xl text-gold transition-colors hover:text-amber"
          >
            SeSC
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-foreground transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="border border-gold px-3 py-2 text-gold md:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border bg-black px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body text-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pt-24"
      >
        {/* Burgundy atmosphere */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-burgundy/30 via-black to-navy/40" />

        {/* Gold glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

        {/* Forest glow */}
        <div className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full bg-forest/20 blur-3xl" />

        {/* Amber glow */}
        <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.4em] text-amber">
            Scientific & Educational Community
          </p>

          <h1 className="mt-6 font-heading text-6xl leading-none text-gold sm:text-7xl md:text-8xl lg:text-9xl">
            Welcome Day
          </h1>

          <div className="mx-auto my-8 max-w-xl magic-divider" />

          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-foreground sm:text-xl">
            Step into a new chapter, meet your community, discover new
            opportunities, and begin your journey with us.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#program"
              className="magic-glow bg-primary px-8 py-4 font-body text-lg text-foreground transition-all hover:bg-burgundy hover:text-gold"
            >
              Discover the Program
            </a>

            <a
              href="#about"
              className="magic-border px-8 py-4 font-body text-lg text-gold transition-all hover:bg-secondary hover:text-black"
            >
              Explore Welcome Day
            </a>
          </div>

          {/* Decorative palette */}
          <div className="mt-16 flex justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-burgundy" />
            <span className="h-3 w-3 rounded-full bg-gold" />
            <span className="h-3 w-3 rounded-full bg-forest" />
            <span className="h-3 w-3 rounded-full bg-gray" />
            <span className="h-3 w-3 rounded-full bg-navy" />
            <span className="h-3 w-3 rounded-full bg-bronze" />
            <span className="h-3 w-3 rounded-full bg-amber" />
          </div>
        </div>

        {/* Bottom divider */}
        <div className="custom-shape-divider-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="relative overflow-hidden bg-forest px-6 py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.35em] text-gold">
              Begin Your Journey
            </p>

            <h2 className="mt-5 font-heading text-5xl text-foreground md:text-6xl">
              A Day to Remember
            </h2>

            <div className="my-7 max-w-md magic-divider" />

            <p className="font-body text-lg leading-relaxed text-foreground">
              Welcome Day is the beginning of a new chapter. It is a moment to
              meet your community, discover new opportunities, and experience
              the spirit of SeSC.
            </p>

            <p className="mt-5 font-body text-lg leading-relaxed text-gray">
              Whether you are joining us for the first time or returning for
              another year, there is something waiting for you.
            </p>
          </div>

          {/* Decorative card */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative magic-border bg-black p-10 magic-glow">
              <div className="text-center">
                <div className="text-7xl text-gold">✦</div>

                <h3 className="mt-6 font-heading text-4xl text-foreground">
                  Your Adventure
                </h3>

                <p className="mt-4 font-body text-lg text-muted">
                  Starts here.
                </p>

                <div className="mx-auto my-7 max-w-xs magic-divider" />

                <p className="font-body text-sm uppercase tracking-[0.3em] text-amber">
                  Learn · Connect · Discover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAM
      ========================================================= */}
      <section
        id="program"
        className="relative overflow-hidden bg-section px-6 py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="font-body text-sm uppercase tracking-[0.35em] text-gold">
              The Schedule
            </p>

            <h2 className="mt-4 font-heading text-5xl text-foreground md:text-6xl">
              Program
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
              A carefully prepared day filled with discovery, connection, and
              memorable moments.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-[31px] top-0 hidden h-full w-px bg-bronze/60 md:block" />

            <div className="space-y-8">
              {schedule.map((item) => (
                <div
                  key={item.time}
                  className="grid gap-6 md:grid-cols-[100px_1fr]"
                >
                  <div className="relative z-10 flex md:justify-center">
                    <div className="flex h-16 w-16 items-center justify-center border border-bronze bg-black">
                      <span
                        className={`font-heading text-sm ${item.color}`}
                      >
                        {item.time}
                      </span>
                    </div>
                  </div>

                  <div className="magic-border bg-card p-7 magic-glow">
                    <h3 className="font-heading text-3xl text-gold">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-body text-lg text-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACTIVITIES
      ========================================================= */}
      <section
        id="activities"
        className="relative bg-background px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="font-body text-sm uppercase tracking-[0.35em] text-amber">
              Explore
            </p>

            <h2 className="mt-4 font-heading text-5xl text-gold md:text-6xl">
              Activities
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
              Discover the experiences prepared for your first day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className={`group ${activity.background} border ${activity.borderColor} p-7 transition-all duration-300 hover:-translate-y-2 magic-glow`}
              >
                <div
                  className={`text-5xl ${activity.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {activity.icon}
                </div>

                <h3 className="mt-7 font-heading text-2xl text-foreground">
                  {activity.title}
                </h3>

                <p className="mt-4 font-body leading-relaxed text-gray">
                  {activity.description}
                </p>

                <div className="mt-7 magic-divider" />

                <span className="mt-5 block font-body text-xs uppercase tracking-[0.25em] text-amber">
                  Discover
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURE / SECONDARY COLOR SECTION
      ========================================================= */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Secondary */}
            <div className="bg-secondary p-8 text-black">
              <span className="font-body text-sm uppercase tracking-widest">
                Secondary
              </span>

              <h3 className="mt-4 font-heading text-4xl">
                Golden Moments
              </h3>

              <p className="mt-4 font-body">
                Every moment of Welcome Day should feel special.
              </p>
            </div>

            {/* Accent */}
            <div className="bg-accent p-8 text-black">
              <span className="font-body text-sm uppercase tracking-widest">
                Accent
              </span>

              <h3 className="mt-4 font-heading text-4xl">
                Discover
              </h3>

              <p className="mt-4 font-body">
                Small details create the atmosphere.
              </p>
            </div>

            {/* Muted */}
            <div className="bg-muted p-8 text-black">
              <span className="font-body text-sm uppercase tracking-widest">
                Muted
              </span>

              <h3 className="mt-4 font-heading text-4xl">
                Details
              </h3>

              <p className="mt-4 font-body">
                Supporting information stays subtle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUOTE / CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-burgundy px-6 py-32">
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

        <div className="pointer-events-none absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-forest/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="font-heading text-7xl text-gold">“</div>

          <blockquote className="font-heading text-4xl leading-relaxed text-foreground md:text-5xl">
            Every great adventure begins with a single step.
          </blockquote>

          <div className="mx-auto my-8 max-w-sm magic-divider" />

          <p className="font-body text-lg text-gray">
            Make your first step unforgettable.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block bg-accent px-9 py-4 font-body text-lg text-black transition-all hover:bg-gold magic-glow"
          >
            Join the Adventure
          </a>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="bg-navy px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-body text-sm uppercase tracking-[0.35em] text-gold">
              Get In Touch
            </p>

            <h2 className="mt-4 font-heading text-5xl text-foreground md:text-6xl">
              Contact
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-gray">
              Have a question about Welcome Day? Reach out to our community.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="magic-border bg-black p-8 text-center">
              <div className="text-4xl text-gold">✉</div>

              <h3 className="mt-5 font-heading text-2xl text-foreground">
                Email
              </h3>

              <p className="mt-3 font-body text-muted">
                contact@sesc.example
              </p>
            </div>

            <div className="magic-border bg-black p-8 text-center">
              <div className="text-4xl text-amber">♜</div>

              <h3 className="mt-5 font-heading text-2xl text-foreground">
                Community
              </h3>

              <p className="mt-3 font-body text-muted">
                Meet us during Welcome Day.
              </p>
            </div>

            <div className="magic-border bg-black p-8 text-center">
              <div className="text-4xl text-bronze">✦</div>

              <h3 className="mt-5 font-heading text-2xl text-foreground">
                Location
              </h3>

              <p className="mt-3 font-body text-muted">
                Science & Technology Campus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-border bg-black px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-heading text-2xl text-gold">
              SeSC
            </p>

            <p className="mt-1 font-body text-sm text-muted">
              Welcome Day
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm text-gray transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          <p className="font-body text-sm text-muted">
            © 2026 SeSC
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-7xl">
          <div className="magic-divider" />
        </div>

        <p className="mt-6 text-center font-body text-sm text-muted">
          Built with curiosity, creativity, and a little magic.
        </p>
      </footer>
    </div>
  );
}

export default App;