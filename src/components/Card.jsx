import {React, useContext, useEffect} from 'react'
import ApiContext from '../context/ApiContext'

const Card = () => {
 const {api, setApi} = useContext(ApiContext);

 const llamadoApi = async () => {
     const url = (`https://rickandmortyapi.com/api/character`);
     const response = await fetch(url)
     const data = await response.json()
     setApi(data.results)
 }
 
useEffect(() => {
    llamadoApi();
}, [])
  return (
    <div className=' grid grid-cols-3 grid-rows-3 gap-4  bg-cyan-400'>
        {
            api.map((a) => {
                return (
                    <div   key={a.id} className="block mx-auto mt-5 mb-5 rounded-r-lg border-4 border-white bg-yellow-50 hover:bg-yellow-100 drop-shadow-lg">
                    <div > 
                        <img src={a.image} alt={a.name} className=" overflow-hidden  "/>
                    </div>
                    <div className='p-3'>
                    <h1>{a.name}</h1>
                    <strong>{a.species}</strong>
                    <h4>{a.status}</h4>
                    </div>
                    <div className='flex  justify-evenly  px-3 py-3'>
                        <button className='rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-800 w-20 h-10 text-zinc-100  drop-shadow-xl' >Like</button>
                        <button className='rounded-full bg-red-500  hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-800 w-20 h-10 text-zinc-100 drop-shadow-xl '>Dislike</button>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Card