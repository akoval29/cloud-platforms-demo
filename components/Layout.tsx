// components/Layout.tsx
import Link from "next/link";

const nav = [
  ["Home", "/"],
  ["Platforms", "/platforms"],
  ["Server time", "/server-time"],
  ["Ping", "/api/ping"],
] as const;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* background glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-10rem] h-72 w-[40rem] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <header className="mb-10 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Cloud Platforms Demo
          </Link>

          <span className="text-white font-medium">
            {process.env.NEXT_PUBLIC_PLATFORM_NAME ?? "unknown"}
          </span>

          <nav className="flex items-center gap-2">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="glass-btn">
                {label}
              </Link>
            ))}
          </nav>
        </header>

        {children}

        <footer className="mt-14 border-t border-white/10 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Cloud Platforms Demo
        </footer>
      </div>
    </div>
  );
}
