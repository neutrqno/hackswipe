"use client"

import { useState } from "react"

export default function Home() {

  const [name,setName] = useState("")
  const [skills,setSkills] = useState("")
  const [hackathon,setHackathon] = useState("")
  const [location,setLocation] = useState("")

 const submit = async () => {

  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      skills,
      hackathon,
      location
    })
  })

  const data = await response.json()

  console.log(data)

  alert("Profile saved!")
}
  return (

    <div className="p-10 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        HackMatch 🚀
      </h1>

      <p className="mb-6">
        Find teammates for your next hackathon
      </p>

      <input
        placeholder="Name"
        className="border p-2 w-full mb-3"
        onChange={e=>setName(e.target.value)}
      />

      <input
        placeholder="Skills (Python, React...)"
        className="border p-2 w-full mb-3"
        onChange={e=>setSkills(e.target.value)}
      />

      <input
        placeholder="Hackathon name"
        className="border p-2 w-full mb-3"
        onChange={e=>setHackathon(e.target.value)}
      />

      <input
        placeholder="Location"
        className="border p-2 w-full mb-3"
        onChange={e=>setLocation(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-black text-white px-4 py-2"
      >
        Create Profile
      </button>

    </div>

  )
}