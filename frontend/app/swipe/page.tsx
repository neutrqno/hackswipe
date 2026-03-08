"use client"

import TinderCard from "react-tinder-card"
import { useEffect, useState } from "react"

export default function Swipe() {

  const [users,setUsers] = useState<any[]>([])
  const [hackathon,setHackathon] = useState("")

  useEffect(()=>{
    fetch("https://hackmatch-api.onrender.com/users")
      .then(res=>res.json())
      .then(data=>setUsers(data))
  },[])

  const copy = (text:string) => {
    if(!text) return
    navigator.clipboard.writeText(text)
    alert("Copied!")
  }

  const filteredUsers = users.filter((user:any)=>
    user.hackathon?.toLowerCase().trim() === hackathon.toLowerCase().trim()
  )

  return(

    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20">

      <h1 className="text-4xl font-bold mb-6">
        Find Teammates 🚀
      </h1>

      <input
        placeholder="Enter Hackathon Name"
        className="border border-gray-700 bg-zinc-900 p-2 rounded mb-10 w-80"
        onChange={(e)=>setHackathon(e.target.value)}
      />

      {filteredUsers.length === 0 && hackathon && (
        <p className="text-gray-400 mb-6">
          No teammates found for this hackathon yet.
        </p>
      )}

      <div className="flex flex-col items-center">

        {filteredUsers.map((user:any,index)=>(

          <TinderCard
            key={index}
            preventSwipe={["up","down"]}
          >

            <div className="bg-zinc-900 text-white shadow-xl rounded-xl p-6 w-80 mb-6">

              <h2 className="text-2xl font-bold mb-2">
                {user.name}
              </h2>

              <p className="text-gray-400 mb-2">
                {user.location}
              </p>

              <div className="mb-3">
                <span className="text-purple-400 font-semibold">
                  Skills
                </span>

                <p className="text-gray-300">
                  {user.skills}
                </p>
              </div>

              <div className="mb-4">
                <span className="text-purple-400 font-semibold">
                  Hackathon
                </span>

                <p className="text-gray-300">
                  {user.hackathon}
                </p>
              </div>

              <hr className="my-4 border-gray-700"/>

              <div className="space-y-3">

                <div className="flex justify-between items-center">
                  <span>GitHub</span>

                  <button
                    onClick={()=>copy(user.github)}
                    className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
                  >
                    Copy
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span>LinkedIn</span>

                  <button
                    onClick={()=>copy(user.linkedin)}
                    className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
                  >
                    Copy
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <span>Discord</span>

                  <button
                    onClick={()=>copy(user.discord)}
                    className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
                  >
                    Copy
                  </button>
                </div>

              </div>

            </div>

          </TinderCard>

        ))}

      </div>

    </div>
  )
}