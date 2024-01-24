'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search) router.push(`/results/${search}`)
        setSearch('')
    }

    return (
        <form className="flex justify-center md:justify-between gap-2" onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
          />
          <button
            type="submit" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl"
          >
            Search
          </button>
        </form>
      );
}
