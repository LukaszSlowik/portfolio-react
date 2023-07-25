import Cards from '@/compontents/memorygame/Cards'
import React from 'react'

type Props = {}

const Hobbygame = (props: Props) => {
  return (
    <div className="h-full">
      <h1 className="text-center text-3xl">Hobby Memory Game</h1>
      <div className="flex flex-col items-center justify-center">
        <Cards />
      </div>
    </div>
  )
}

export default Hobbygame
