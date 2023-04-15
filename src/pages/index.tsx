// Libs
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-around p-24 ${manrope.className}`}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-teal-900/10 after:from-teal-900 after:via-teal-800/40 before:lg:h-[360px]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={24.6}
          priority
        />
        <span className="bg-gradient-to-b from-white via-teal-200 to-teal-400 rounded-md ml-3">
          <Image
            className="m-1.5"
            src="/thirteen.svg"
            alt="Thirteen Logo"
            width={40}
            height={31}
            priority
          />
        </span>
      </div>

      <Link href="/awesome">
        <div className="rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30">
          <h1 className="text-2xl font-semibold">
            Get answers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt; 🦊
            </span>
          </h1>
        </div>
      </Link>
    </main>
  );
}
