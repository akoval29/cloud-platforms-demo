// pages/platforms.tsx
import Head from "next/head";

const deployments = [
  {
    name: "Firebase (App Hosting)",
    url: "https://cloud-demo-backend--cloud-demo-a0a32.us-central1.hosted.app/",
    desc: "Next.js SSR через Firebase App Hosting.",
  },
  {
    name: "AWS Amplify",
    url: "https://master.d2zlwngdwboojg.amplifyapp.com/",
    desc: "Автодеплой з GitHub (branch master).",
  },
  {
    name: "VPS (AWS EC2)",
    url: "http://13.53.168.4/",
    desc: "Docker контейнер на EC2, редеплой через GitHub Actions.",
  },
  {
    name: "Google Cloud (Cloud Run)",
    url: "https://cloud-platforms-demo-cr-1053202535424.europe-north1.run.app",
    desc: "Контейнерний деплой в Cloud Run через GitHub Actions (WIF).",
  },
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
            Клікни на платформу, щоб відкрити відповідний live deploy.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          {deployments.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              className="glass glass-hover group p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                  <p className="mt-3 text-xs text-slate-400 break-all">
                    {p.url}
                  </p>
                </div>

                <span className="glass-btn px-3 py-1 text-xs">Open ↗</span>
              </div>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
