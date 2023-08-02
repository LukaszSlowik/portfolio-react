import React from 'react'
import { imagesForCarousel } from '../Helpers/CarouselData'
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  ArrowLeftCircle
} from 'lucide-react'
;<ArrowLeftCircle />
type Props = {
  setGame?: React.Dispatch<React.SetStateAction<boolean>>
}

export const reducerFunctionForCarousel = (
  state: number,
  action: { type: string; placeholder?: number }
) => {
  switch (action.type) {
    case 'left':
      const isFirstImage = state === 0
      const nextImage = isFirstImage ? imagesForCarousel.length - 1 : state - 1
      return nextImage
    case 'right':
      const isLastImage = state === imagesForCarousel.length - 1
      const nextImage2 = isLastImage ? 0 : state + 1
      return nextImage2
    case 'goto':
      return action.placeholder!
    default:
      return state
  }
}

const Carousel = ({ setGame }: Props) => {
  //with useReducer but with switch
  const [currentImage, dispatch] = React.useReducer(
    reducerFunctionForCarousel,
    0
  )
  //const onKeyPress to image navigation with keyboard
  const onKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('key pressed', e.key)
    if (e.key === 'ArrowLeft') {
      dispatch({ type: 'left' })
    } else if (e.key === 'ArrowRight') {
      dispatch({ type: 'right' })
    }
  }

  return (
    <div className="m-0  flex min-h-[calc(100vh-20rem)] flex-col items-center justify-center  p-0">
      <div className=" relative h-[500px] w-full sm:w-2/3">
        <ArrowLeftCircle
          className="peer absolute -top-7  right-5 cursor-pointer sm:right-[100px]"
          onClick={() => setGame!(true)}
        ></ArrowLeftCircle>
        <span
          className="absolute right-0 top-2 hidden  cursor-pointer rounded-md bg-slate-500 p-2 text-white  shadow-lg after:absolute 
          after:bottom-[100%] after:right-6 after:border-x-[15px] after:border-b-[15px]  after:border-slate-500 after:border-x-transparent after:border-t-[none] 
          peer-focus-within:block peer-hover:block  sm:right-[75px]"
        >
          back to the game
        </span>

        <div
          className="group  flex  h-full  w-full bg-contain bg-center bg-no-repeat duration-500 ease-linear sm:bg-cover"
          style={{
            backgroundImage: `url(${imagesForCarousel[currentImage].image})`
          }}
          onKeyDown={onKeyPress}
          tabIndex={0}
        >
          <div className=" my-32 hidden basis-[5%] flex-col items-center justify-center bg-black text-white  opacity-60 duration-1000 group-hover:flex sm:m-0">
            <ChevronLeft
              className="h-12 w-12  cursor-pointer hover:opacity-80"
              onClick={() => dispatch({ type: 'left' })}
            />
          </div>
          <div className="hidden basis-[90%] group-hover:block">
            <p
              className={`
                  m-0
               rounded-md bg-black p-4 text-center font-semibold text-white opacity-80 dark:bg-white dark:text-black sm:m-8`}
            >
              {imagesForCarousel[currentImage].title}{' '}
            </p>
          </div>
          <div className="my-32 hidden basis-[5%] flex-col items-center justify-center bg-black text-white opacity-60 duration-1000 group-hover:flex sm:m-0">
            <ChevronRight
              className="h-12 w-12 cursor-pointer hover:opacity-80"
              onClick={() => dispatch({ type: 'right' })}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          {imagesForCarousel.map((image, index) => (
            <div
              key={index}
              className={`m-2 h-2 w-2 cursor-pointer rounded-full p-1 ${
                index === currentImage
                  ? 'bg-black'
                  : 'bg-slate-400 dark:bg-white'
              }`}
              onClick={() => dispatch({ type: 'goto', placeholder: index })}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
