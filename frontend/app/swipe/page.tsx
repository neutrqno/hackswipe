"use client"

import TinderCard from "react-tinder-card"
import { useEffect, useState } from "react"

export default function Swipe() {

  const [users,setUsers] = useState([])
  const [hackathon,setHackathon] = useState("")

  useEffect(()=>{
    fetch("http://localhost:5000/users")
      .then(res=>res.json())
      .then(data=>setUsers(data))
  },[])

  const filteredUsers = users.filter((user:any)=>
    user.hackathon.toLowerCase() === hackathon.toLowerCase()
  )

  return (

    <div className="flex flex-col items-center mt-10">

      <h1 className="text-3xl font-bold mb-6">
        Find Teammates 🚀
      </h1>

      <input
        placeholder="Enter Hackathon Name"
        className="border p-2 mb-8"
        onChange={(e)=>setHackathon(e.target.value)}
      />

      {filteredUsers.map((user:any,index)=>(
        
        <TinderCard
          key={index}
          preventSwipe={["up","down"]}
        >

          <div className="bg-white shadow-xl rounded-xl p-6 w-80 mb-4">

            <h2 className="text-xl font-bold">
              {user.name}
            </h2>

            <p className="mt-2">
              Skills: {user.skills}
            </p>

            <p>
              Hackathon: {user.hackathon}
            </p>

            <p>
              Location: {user.location}
            </p>

          </div>

        </TinderCard>

      ))}

    </div>
  )
}