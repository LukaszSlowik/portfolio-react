import Cards from '@/compontents/memorygame/Cards'
import React from 'react'
import { HelpCircle } from 'lucide-react'
import Carousel from '@/compontents/Carousel'
type Props = {}

const Hobbygame = (props: Props) => {
  const [game, setGame] = React.useState<boolean>(true)
  return (
    <div className="relative h-full">
      {/* {game ? ( */}
      <div className={`${game ? 'block' : 'hidden'}`}>
        <h1 className="text-center text-3xl">Hobby Memory Game</h1>
        <HelpCircle
          className="peer absolute -top-5  right-5 cursor-pointer sm:right-[100px]"
          onClick={() => setGame(false)}
        ></HelpCircle>
        <span
          className="absolute right-0 top-5 hidden  cursor-pointer rounded-md bg-slate-500 p-2 text-white  shadow-lg after:absolute 
          after:bottom-[100%] after:right-6 after:border-x-[15px] after:border-b-[15px]  after:border-slate-500 after:border-x-transparent after:border-t-[none] 
          peer-focus-within:block peer-hover:block  sm:right-[75px]"
        >
          See a Carousel
        </span>

        <div className="flex flex-col items-center justify-center">
          <Cards />
        </div>
      </div>
      {/* ) : ( */}
      <div className={`${!game ? 'block' : 'hidden'}`}>
        <Carousel setGame={setGame} />
      </div>
      {/* ) */}
      {/* } */}
    </div>
  )
}

export default Hobbygame
