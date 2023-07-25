import React from 'react'
// import my from '@/assets/my.png'
import { ArrowDown } from 'lucide-react'
import {
  Navigate,
  redirect,
  useNavigate,
  useNavigation
} from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="w-44  px-4  sm:w-52 ">
          <img
            src={'public/my.png'}
            alt="my logo"
            className="h-auto max-w-full rounded-full border-none align-middle  shadow-2xl "
          />
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center  py-9">
        <h1 className=" text-xl font-semibold"> Hi, I'm Lukasz</h1>

        <p className="">I'm a web developer.</p>
        <p className="">Click the button to know me better</p>
        <div className="mt-4   animate-bounce rounded-full bg-black text-white">
          <ArrowDown className="m-2  " />
        </div>

        <button
          onClick={() => navigate('/KnowMeBetter')}
          className="m-4 rounded-md bg-slate-400 px-4 py-2 hover:bg-slate-500"
        >
          Let's start
        </button>
      </div>
    </div>
  )
}

export default Home
