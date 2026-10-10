import castle from "../../assets/castle.png";

function Hero() {
  return (
    <section id="home" className="hp-hero relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28">
      <div className="hp-hero-image" style={{ backgroundImage: `url(${castle})` }} />
      <div className="hp-hero-vignette" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-amber sm:text-sm">Scientific &amp; Educational Community</p>
        <h1 className="mt-5 font-heading text-6xl leading-none text-gold sm:text-7xl md:text-8xl lg:text-9xl">Welcome Day</h1>
        <div className="magic-divider mx-auto my-7 max-w-xl" />
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-foreground sm:text-xl">Step into a new chapter, meet your community, discover new opportunities, and begin your journey with us.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#program" className="hp-button hp-button-primary px-8 py-4 font-body text-lg">Discover the Program</a>
          <a href="#about" className="hp-button hp-button-outline px-8 py-4 font-body text-lg">Explore Welcome Day</a>
        </div>
        <div className="mt-12 flex justify-center gap-3" aria-hidden="true"><span className="hp-house-dot bg-burgundy"/><span className="hp-house-dot bg-gold"/><span className="hp-house-dot bg-forest"/><span className="hp-house-dot bg-navy"/></div>
      </div>
      <div className="custom-shape-divider-bottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" className="shape-fill" /></svg></div>
    </section>
  );
}
export default Hero;
