import { Plus, X } from "lucide-react"
import React from "react"
import { UserProps } from "../objCondition/types"
import { useState } from "react"

const MainCont: React.FC<UserProps> = (table) => {

  const [showPopup, setShowPopup] = useState(false);
  function tooglePopup() {
    setShowPopup(!showPopup);
  }
  const x = table.table;
  const [nameCom, setNameCom] = useState('')
  const [nameDex, setNameDex] = useState('');
  const [nameCause, setNameCause] = useState('')
  return (
    <main className="grid grid-cols-3 justify-center items-start gap-10 border-2 border-indigo-700 m-10 border-dashed rounded h-96 overflow-x-scroll p-10 ">
      {
        x.map((e: number, index: number) => {

          return (
            <div>
              <div key={index} onClick={() => {
                tooglePopup()
                setNameCom(e.nameCondition);
                setNameDex(e.description)
                setNameCause(e.cause);
              }} className="flex items-center justify-between bg-zinc-0 p-2 text-2xl rounded border-2 border-zinc-600 cursor-pointer hover:border-indigo-700 hover:text-indigo-700 duration-500">{e.nameCondition}<Plus className="rounded-full p-2 duration-500 hover:bg-zinc-200" size={40} /></div>
            </div>
          )
        })
      }
      {showPopup ? (

        <div className="fixed top-36 w-96 overflow-y-scroll bg-white text-2xl border-black border-2 p-4 rounded left-2/3">

          <button onClick={tooglePopup}><X className=" absolute right-2 top-2 duration-500 hover:text-red-500" /></button>
          <div className="flex flex-col  gap-5">

            <p className="text-red-500 ">|{nameCom}|</p>
<hr />
            <p className="text-indigo-500">(Description)</p>  <p className="overflow-x-scroll text-wrap">{nameDex}</p>
            <hr />
            <p className="text-indigo-500">(Cause)</p> <p className="overflow-x-scroll text-wrap">{nameCause}</p>

          </div>
        </div>
      ) : null}
    </main>

  )
}
export default MainCont;