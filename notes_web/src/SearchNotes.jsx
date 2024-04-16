import React, { useState } from 'react'

export default function SearchNotes() {
    const a=["apple","strawberry", "watermelon", "kiwi", "pear", "mango",
    "blueberry", "peach", "plum", "lemon", "lime",
    "cherry", "raspberry", "blackberry", "apricot", "fig",
    "pomegranate", "nectarine", "cantaloupe", "honeydew", "dragonfruit",
    "guava", "lychee"]
    const [lists,setListe]=useState(a)
    const [a1,setA1]=useState(lists)
    function searchW(e){
        const newLists=lists.filter((elements)=>elements.includes(e.target.value))
        setA1(newLists)
    }

  return (
    <div className=' flex justify-center flex-col pt-28  items-center min-h-screen w-screen bg-black'>
      <div>
      <input type="text" name="" id="" className='p-1 rounded-lg font-bold px-3' onKeyUp={searchW} />
      </div>
      <div className="flex flex-col h-52 overflow-y-scroll ">
      {a1.map((eleme)=>(
      
      <p key={eleme} className=' text-white pt-6'>{eleme}</p>
     
    ))}
      </div>
    </div>
  )
}
