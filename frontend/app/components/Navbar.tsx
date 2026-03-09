"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Navbar() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full flex justify-between items-center px-10 py-6 bg-black text-white dark:bg-black light:bg-white">

      <h1 className="text-xl font-bold text-purple-400">
        HackSwipe
      </h1>

      <div className="flex gap-8 text-gray-300">

        <Link href="/">Home</Link>
        <Link href="/swipe">Hack Partners</Link>
        <Link href="/">Upload Yourself</Link>
        <Link href="/">About</Link>

      </div>

      {/* Theme Toggle */}

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="border border-gray-700 px-3 py-2 rounded-lg hover:bg-zinc-900"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

    </div>
  )
}