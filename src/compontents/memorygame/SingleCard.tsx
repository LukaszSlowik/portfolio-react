import React from 'react'
import { Card } from './Cards'

type Props = {
  card: Card
  handleChoice: (card: Card) => void
  flipped: boolean
  disabled: boolean
}

const SingleCard = ({ card, handleChoice, flipped, disabled }: Props) => {
  console.log(flipped)

  return (
    <div className="relative cursor-pointer p-2 ">
      <div className={`${flipped ? 'flipped' : ''} shadow-md`}>
        <img
          src={card.src}
          alt="card front"
          height={50}
          width={100}
          className={` duration-400   aspect-video h-28  w-full  rounded-md   transition-all ease-in dark:border-white  dark:bg-slate-200 ${
            flipped ? 'relative block ' : 'absolute hidden rotate-90'
          }`}
        />
        <img
          onClick={() => {
            if (!disabled) handleChoice(card)
          }}
          src={'react.svg'}
          alt="card back"
          height={50}
          width={100}
          className={`block aspect-video h-28 w-full rounded-md border-2 border-solid border-black p-2 hover:opacity-60  dark:border-white ${
            !flipped ? 'relative block' : 'absolute hidden rotate-90'
          }`}
        />
      </div>
    </div>
  )
}

export default SingleCard
