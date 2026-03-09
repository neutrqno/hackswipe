import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE CONTENT */}

        <div>

          <h1 className="text-6xl font-bold leading-tight">
            Find your one
            <br />
            <span className="text-purple-500">&lt; For Hacking /&gt;</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Connect with talented developers, designers, and innovators
            to create amazing projects at hackathons.
          </p>

          {/* BUTTONS */}

          <div className="mt-8 flex gap-4">

            <Link
              href="/swipe"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-medium hover:scale-105 transition"
            >
              Find Partners
            </Link>

            <Link
              href="/"
              className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-zinc-900 transition"
            >
              Upload Profile
            </Link>

          </div>

        </div>


        {/* RIGHT SIDE PHONES */}

        <div className="relative flex justify-center items-center">

          {/* glow background */}

          <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[150px] opacity-20"></div>


          {/* PHONE 1 */}

          <div className="phone group w-56 h-[420px] rounded-[40px] border border-gray-800 p-3 bg-zinc-950 shadow-phone rotate-6 relative">

            {/* notch */}
            <div className="w-16 h-2 bg-black rounded-full mx-auto mb-3"></div>

            <div className="relative h-full overflow-hidden">

              <div className="absolute inset-0 bg-black rounded-[30px]" />

              <div className="card card1">
                <h3 className="font-bold">Alex</h3>
                <p className="text-xs text-gray-400">Python • ML</p>
                <p className="text-xs text-purple-400">HackAI</p>
              </div>

              <div className="card card2">
                <h3 className="font-bold">Sakura</h3>
                <p className="text-xs text-gray-400">React • UI</p>
                <p className="text-xs text-purple-400">TwitchLeague</p>
              </div>

              <div className="card card3">
                <h3 className="font-bold">Leo</h3>
                <p className="text-xs text-gray-400">AI • Data</p>
                <p className="text-xs text-purple-400">HackAI</p>
              </div>

            </div>

          </div>


          {/* PHONE 2 */}

          <div className="phone group w-56 h-[420px] rounded-[40px] border border-gray-800 p-3 bg-zinc-950 shadow-phone -rotate-6 relative">

            <div className="w-16 h-2 bg-black rounded-full mx-auto mb-3"></div>

            <div className="relative h-full overflow-hidden">

              <div className="absolute inset-0 bg-black rounded-[30px]" />

              <div className="card card1">
                <h3 className="font-bold">Maya</h3>
                <p className="text-xs text-gray-400">Backend • Node</p>
                <p className="text-xs text-purple-400">HackAI</p>
              </div>

              <div className="card card2">
                <h3 className="font-bold">Noah</h3>
                <p className="text-xs text-gray-400">DevOps • Cloud</p>
                <p className="text-xs text-purple-400">HackAI</p>
              </div>

              <div className="card card3">
                <h3 className="font-bold">Ava</h3>
                <p className="text-xs text-gray-400">Design • UI</p>
                <p className="text-xs text-purple-400">TwitchLeague</p>
              </div>

            </div>

          </div>


          {/* MATCH BADGE */}

          <div className="absolute top-32 bg-white text-black px-6 py-2 rounded-full shadow-lg">
            💜 It's a Match
          </div>

        </div>

      </div>

    </section>
  );
}