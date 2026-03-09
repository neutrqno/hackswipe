export default function Hero() {

  return (

    <section className="bg-black text-white min-h-screen flex items-center px-16">

      <div className="flex w-full justify-between items-center">

        {/* LEFT SIDE TEXT */}

        <div className="max-w-xl">

          <h1 className="text-6xl font-bold leading-tight">
            Find your one
            <br/>
            <span className="text-purple-500">
              {"< For Hacking />"}
            </span>
          </h1>

          <p className="text-gray-400 mt-6">
            Swipe and discover the perfect teammates for your next hackathon.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="/swipe"
              className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500"
            >
              Find Partners
            </a>

            <a
              href="/"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-zinc-900"
            >
              Upload Yourself
            </a>

          </div>

        </div>


        {/* RIGHT SIDE PHONES */}

        <div className="flex gap-10 relative">

          {/* PHONE 1 */}

          <div className="w-56 h-[420px] bg-zinc-900 rounded-3xl shadow-2xl rotate-6 border border-gray-800 p-4">

            <div className="bg-black rounded-xl p-4 h-full flex flex-col justify-between">

              <div>

                <h3 className="font-bold text-lg">
                  Alex
                </h3>

                <p className="text-sm text-gray-400">
                  Python • ML
                </p>

              </div>

              <div className="text-xs text-gray-500">
                HackAI
              </div>

            </div>

          </div>


          {/* PHONE 2 */}

          <div className="w-56 h-[420px] bg-zinc-900 rounded-3xl shadow-2xl -rotate-6 border border-gray-800 p-4">

            <div className="bg-black rounded-xl p-4 h-full flex flex-col justify-between">

              <div>

                <h3 className="font-bold text-lg">
                  Sakura
                </h3>

                <p className="text-sm text-gray-400">
                  React • UI
                </p>

              </div>

              <div className="text-xs text-gray-500">
                TwitchLeague
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}