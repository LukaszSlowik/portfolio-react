import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

type Props = {}

const KnowMeBetter = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className="  mt-20  h-full sm:m-0 ">
      <h1 className="m-8 text-center text-2xl">
        Choose one of the topics below
      </h1>
      <div className="grid max-w-xl grid-cols-1 justify-center gap-5 sm:m-auto sm:grid-cols-2">
        <button
          onClick={() => navigate('/hobbygame')}
          className=" mx-8 h-60 rounded-xl bg-slate-200 p-4 text-center text-3xl font-semibold shadow-xl hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700"
        >
          Hobby
        </button>
        <button
          onClick={() => navigate('/techskills')}
          className=" mx-8 h-60 rounded-xl bg-slate-200 p-4 text-center text-3xl font-semibold shadow-xl hover:bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700"
        >
          Tech Skills
        </button>
      </div>
    </div>
  )
}

export default KnowMeBetter
