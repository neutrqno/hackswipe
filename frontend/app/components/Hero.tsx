export default function Hero() {

  return (

    <section className="bg-black text-white min-h-screen flex items-center justify-center">

      <div className="flex gap-12 relative">

        {/* PHONE 1 */}

        <div className="phone group w-56 h-[420px] rounded-[40px] border border-gray-800 p-3 bg-zinc-950 shadow-phone rotate-6">

          {/* notch */}
          <div className="w-16 h-2 bg-black rounded-full mx-auto mb-3"></div>

          <div className="relative h-full overflow-hidden flex items-center justify-center">

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

        <div className="phone group w-56 h-[420px] rounded-[40px] border border-gray-800 p-3 bg-zinc-950 shadow-phone -rotate-6">

          <div className="w-16 h-2 bg-black rounded-full mx-auto mb-3"></div>

          <div className="relative h-full overflow-hidden">

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

      </div>

    </section>

  )

}