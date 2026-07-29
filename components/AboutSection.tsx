const facts = [
  {
    value: "2026",
    label: "Bachelorabschluss",
  },
  {
    value: "3+",
    label: "Jahre Praxiserfahrung",
  },
  {
    value: "5",
    label: "Portfolio-Projekte",
  },
  {
    value: "3",
    label: "Sprachen",
  },
];

export default function AboutSection() {
  return (
    <section
      id="ueber-mich"
      className="bg-white px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Über mich
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Technik verstehen.
              <span className="block text-slate-400">
                Lösungen gestalten.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Ich bin Absolvent der Wirtschaftsinformatik an der Hochschule
              für Technik Stuttgart. Während meines Studiums und meiner
              beruflichen Stationen habe ich Erfahrungen in der
              Webentwicklung, Datenverarbeitung, Qualitätssicherung und
              Projektkoordination gesammelt.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mein Schwerpunkt liegt auf der Entwicklung verständlicher,
              nutzerzentrierter und technisch zuverlässiger Lösungen. Dabei
              verbinde ich wirtschaftliche Anforderungen mit moderner
              Technologie und einer strukturierten, analytischen
              Arbeitsweise.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-3xl font-bold text-slate-950">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}