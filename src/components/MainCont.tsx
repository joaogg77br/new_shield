import { Plus } from "lucide-react"
import React from "react"
import { UserProps } from "../objCondition/types"

const  MainCont: React.FC<UserProps> = (table) =>{
    const x = table.table;
    return(
        <main className="grid grid-cols-3 justify-center items-start gap-10 border-2 border-indigo-700 m-10 border-dashed rounded h-96 overflow-x-scroll p-10 ">
          {
            x.map((e:number,index:number)  =>(
                <div key={index} className="flex items-center justify-between bg-zinc-0 p-2 text-2xl rounded border-2 border-zinc-600 cursor-pointer hover:border-indigo-700 hover:text-indigo-700 duration-500">{e.nameCondition}<Plus className="rounded-full p-2 duration-500 hover:bg-zinc-200" size={40}/></div>
            ))
          } 
        </main>

    )
}
export default MainCont;