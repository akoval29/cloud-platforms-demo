import Head from "next/head";
import Link from "next/link";
const card = "glass glass-hover group relative p-6";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cloud Platforms Demo</title>
        <meta name="description" content="Next.js demo with dark glass UI" />
      </Head>

      <main className="space-y-10">
        <section className={card}>
          <h1 className="text-3xl font-semibold tracking-tight">
            Cloud Platforms Demo
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Демо Next.js застосунку: список платформ, SSR-час та простий API.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/platforms" className="glass-primary">
              Перейти на платформи
            </Link>
            <Link href="/server-time" className="glass-btn px-4 py-2">
              Подивитись SSR time
            </Link>
            <Link href="/api/ping" className="glass-btn px-4 py-2">
              /api/ping
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Platforms",
              desc: "Netlify, AWS Amplify, Firebase у вигляді карток.",
              href: "/platforms",
            },
            {
              title: "Server time (SSR)",
              desc: "Поточний час з сервера через getServerSideProps.",
              href: "/server-time",
            },
            {
              title: "API: /api/ping",
              desc: 'Повертає JSON: {"message":"pong"}.',
              href: "/api/ping",
            },
          ].map((x) => (
            <Link key={x.href} href={x.href} className={card}>
              <h2 className="text-lg font-semibold tracking-tight">
                {x.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{x.desc}</p>
              <p className="mt-4 text-sm text-slate-200 underline underline-offset-4 opacity-80 group-hover:opacity-100">
                Відкрити →
              </p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
