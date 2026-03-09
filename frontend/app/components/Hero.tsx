export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <h1 className="text-6xl font-bold leading-tight">
            Find your one
            <br />
            <span className="text-purple-500">&lt; For Hacking /&gt;</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Connect with talented developers, designers, and innovators
            to build amazing projects at hackathons.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-medium">
              Find Partners
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-700">
              Upload Profile
            </button>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="relative flex justify-center">

          {/* glow */}
          <div className="absolute w-[400px] h-[400px] bg-purple-600 blur-[150px] opacity-20"></div>

          {/* phone 1 */}

          <div className="phone w-56 h-[420px] rounded-[40px] border border-gray-800 bg-zinc-900 rotate-6"></div>

          {/* phone 2 */}

          <div className="phone w-56 h-[420px] rounded-[40px] border border-gray-800 bg-zinc-900 -rotate-6 absolute right-0"></div>

          {/* floating badge */}

          <div className="absolute top-32 bg-white text-black px-6 py-2 rounded-full shadow-lg">
            💜 It's a Match
          </div>

        </div>

      </div>

    </section>
  );
}