function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-center">
      <div className="px-6">
        <div className="text-6xl text-gold" aria-hidden="true">✦</div>
        <p className="mt-5 text-4xl text-gold">SESC</p>
        <p className="mt-3 font-body text-sm uppercase tracking-[0.3em] text-amber">Welcome to the adventure</p>
      </div>
    </div>
  );
}

export default SplashScreen;
