// pages/platforms.tsx
import Head from "next/head";

const platforms = [
  { name: "Google Cloud", desc: "Хостинг, CI/CD, превʼю деплої, edge-фічі." },
  {
    name: "AWS Amplify",
    desc: "Деплой, auth, бекенд-інтеграції для web/mobile.",
  },
  { name: "Firebase", desc: "BaaS: auth, DB, hosting, functions, analytics." },
] as const;

export default function PlatformsPage() {
  return (
    <>
      <Head>
        <title>Platforms • Cloud Platforms Demo</title>
      </Head>

      <main className="space-y-6">
        <div className="glass p-6">
          <h1 className="text-2xl font-semibold tracking-tight">Platforms</h1>
          <p className="mt-2 text-slate-300">
            Контентна сторінка без реальної інтеграції.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          {platforms.map((p) => (
            <article key={p.name} className="glass glass-hover p-6">
              <h2 className="text-lg font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
