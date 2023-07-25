import { type } from 'os'
import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import ModalWin from '../modals/ModalWin'

type Props = {}
export type Card = {
  src: string
  id: number
  matched: boolean
}

const Cards = (props: Props) => {
  const [cards, setCards] = useState<Card[]>([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [disabled, setDisabled] = useState(false)
  const [won, setWon] = useState(false)
  console.log('disabled:', disabled)
  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    const matchedCards = cards.filter((card) => card.matched)
    console.log(matchedCards, matchedCards)
    console.log(cards.length, matchedCards.length)
    if (matchedCards.length === 12) {
      setWon(true)
    }
  }, [cards])

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            }

            return card
          })
        })
        console.log('match')
        resetTurn()
      } else {
        console.log('no match')
        setTimeout(() => {
          resetTurn()
        }, 1000)
      }
    }

    return () => {
      setDisabled(false)
    }
  }, [choiceOne, choiceTwo])
  console.log(cards)

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
    setDisabled(false)
  }

  const cardImages = [
    {
      src: '/src/assets/game/alejandra-ezquerro-74fo_s_wHl8-unsplash.jpg',
      matched: false
    },
    {
      src: '/src/assets/game/maja-kochanowska-WGc8axC8K5U-unsplash.jpg',
      matched: false
    },
    {
      src: '/src/assets/game/devon-dennis-4BhHIfljLdE-unsplash.jpg',
      matched: false
    },
    {
      src: '/src/assets/game/isaac-wendland-7DCZgKyp8vw-unsplash.jpg',
      matched: false
    },
    {
      src: '/src/assets/game/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg',
      matched: false
    },
    {
      src: '/src/assets/game/patrick-hendry-qDBbM9Erwo4-unsplash.jpg',
      matched: false
    }
  ]

  //shuffle the cards
  const shuffleCards = () => {
    let shuffledCards = [...cardImages, ...cardImages]

      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards, turns)

  return (
    <>
      <button
        onClick={shuffleCards}
        disabled={turns === 0 ? true : false}
        className={`
         mt-4 cursor-pointer rounded-md   bg-blue-400 px-4 py-2 text-lg font-bold shadow-xl hover:bg-blue-500  dark:border-white dark:text-white dark:hover:bg-blue-500 dark:hover:text-white `}
      >
        New Game
      </button>
      <ModalWin open={won} onClose={() => setWon(false)}>
        <div>
          <p>Gratulation !!!</p> <p>You won ! 🥇</p>
        </div>
      </ModalWin>
      <div className="mt-2 grid min-h-[300px] min-w-[300px] grid-cols-2 gap-3 rounded-md p-6 sm:grid-cols-3 md:grid-cols-4 ">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className="py-4"> Turns: {turns}</p>
    </>
  )
}

export default Cards
