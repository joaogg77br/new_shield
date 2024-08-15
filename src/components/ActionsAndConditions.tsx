
import { Settings } from "lucide-react"

export default function ActionAndCondicions({}){

    return(
        <>
        <div className="flex justify-between p-2 m-10 ">
            <div>
            <button className="border-2 p-2 italic rounded text-xl duration-500 hover:shadow-lg hover:border-indigo-700">Condicion</button>
            </div>            
            <Settings className="p-2 rounded duration-500 cursor-pointer hover:bg-zinc-100"  size={50}/>
        </div>

        </>
    )
}