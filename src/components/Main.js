import { useState } from "react"

export default function Main(){
    const [img, setImg] = useState({
        url:""
    })

    async function getImg(){
        const val = await fetch(`https://meme-api.herokuapp.com/gimme`)
        const json = await val.json()
        setImg(json)
    }
    
    
    return (
        <div className="flex justify-center align-center min-w-full min-h-full flex-col bg-red-300">
            <img src={img.url} width="400px" height="400px" min-height="400px" min-width="400px" max-height="400px" max-width="400px" className="ml-auto mr-auto shadow-2xl my-5 p-5 bg-red-200 rounded-3xl"/>
            
            <button onClick={getImg} className="mx-auto p-5 hover:shadow-3xl shadow-xl rounded-full active:shadow-lg bg-red-200 active:shadow-red-300 shadow-red-300 hover:shadow-red-400 text-3xl ">New Meme</button>
        </div>
    )
}