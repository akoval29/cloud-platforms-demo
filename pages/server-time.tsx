// pages/server-time.tsx
import Head from "next/head";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  time: string;
}> = async () => {
  return { props: { time: new Date().toISOString() } };
};

export default function ServerTimePage({
  time,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Server Time • Cloud Platforms Demo</title>
      </Head>

      <main className="space-y-6">
        <section className="glass p-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Server Time (SSR)
          </h1>
          <p className="mt-2 text-slate-300">Поточний час із сервера:</p>

          <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
            {time}
          </pre>
        </section>
      </main>
    </>
  );
}
