export default function HeroSection() {
  return (
    <section
      id="start"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pb-20 pt-32 lg:px-8"
    >
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Offen für berufliche Möglichkeiten
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Wirtschaftsinformatik · Web · Data · IT
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Hallo, ich bin
            <span className="block text-blue-600">Ibrahim Kolakji.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Wirtschaftsinformatiker mit Erfahrung in Webentwicklung,
            Datenverarbeitung, UX und IT-Projekten. Ich entwickle
            nutzerfreundliche und technisch zuverlässige digitale Lösungen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projekte"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-600"
            >
              Projekte ansehen
            </a>

            <a
              href="/Ibrahim-Kolakji-Lebenslauf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
            >
              Lebenslauf ansehen
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
            <span>Stuttgart, Deutschland</span>
            <span>Deutsch · Englisch · Arabisch</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-blue-600" />

          <div className="relative rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="flex aspect-[4/5] items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700">
              <div className="text-center text-white">
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-bold backdrop-blur">
                  IK
                </div>

                <p className="text-2xl font-bold">Ibrahim Kolakji</p>
                <p className="mt-2 text-blue-100">Wirtschaftsinformatiker</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-lg font-bold text-slate-950">React</p>
                <p className="text-xs text-slate-500">Frontend</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-lg font-bold text-slate-950">Next.js</p>
                <p className="text-xs text-slate-500">Web</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-lg font-bold text-slate-950">Python</p>
                <p className="text-xs text-slate-500">Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}