import React, { useEffect, useRef, useState } from 'react'

import { ArrowUpCircle } from 'lucide-react'
// import JavaScriptImage from '../../js.png'
// import ReactImage from '../../react-icon.svg'
// import Html5Logo from '../../HTML5_logo.svg'
// import Css3Logo from '../../CSS3_logo.svg'
// import NextJSLogo from '../../Nextjs-logo.svg'
// import PrismaLogo from '../../prisma.svg'
// //import TypescriptImage from '../../TypeScript.png'
// import SQLLogo from '../../sql.svg'
// import MongoDbLogo from '../../mongodb.svg'
// import Nodejs from '../../nodejs.svg'
// import GitLogo from '../../git.svg'
// import TailwindCssLogo from '../../tailwindcss.svg'

type Props = {}
//card show = translate-x-0 opacity-100
const TechSkills = (props: Props) => {
  const itemsEls = useRef<HTMLDivElement[]>([])

  const handleClickScroll = () => {
    const element = document.getElementById('topID')
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const items = [
    <img
      src={'HTML5_logo.svg'}
      width={350}
      height={350}
      className="mt-20"
      alt="html logo"
    />,
    <img
      src={'CSS3_logo.svg'}
      width={300}
      height={300}
      className="mt-20"
      alt="css logo"
    />,
    <img
      src={'js.png'}
      width={350}
      height={350}
      className="mt-20"
      alt="javascript logo"
    />,
    <img
      src={'Typescript_logo_2020.svg'}
      width={350}
      height={350}
      className="mt-20"
      alt="typescript logo"
    />,
    <img
      src={'Nodejs.svg'}
      width={350}
      height={350}
      className="mt-20 dark:bg-slate-200 dark:p-8"
      alt="node.js logo"
    />,

    <img
      src={'react.svg'}
      width={350}
      height={350}
      className="mt-20"
      alt="react logo"
    />,
    <img
      src={'tailwindcss.svg'}
      width={350}
      height={350}
      className="mx-4 mt-20 "
      alt="tailwindcss logo"
    />,
    <img
      src={'Nextjs-logo.svg'}
      width={350}
      height={350}
      className="mt-20 "
      alt="next.js logo"
    />,
    <img
      src={'sql.svg'}
      width={250}
      height={250}
      className="mt-20"
      alt="sql logo"
    />,
    <img
      src={'prisma.svg'}
      width={350}
      height={350}
      className="mx-4 mt-20 dark:bg-slate-200 dark:p-8"
      alt="prisma logo"
    />,
    <img
      src={'mongodb.svg'}
      width={350}
      height={350}
      className="mt-20"
      alt="mongodb logo"
    />,
    <img
      src={'git.svg'}
      width={350}
      height={350}
      className="mt-20 dark:bg-slate-200 dark:p-8"
      alt="git logo"
    />
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // entry.target.classList.toggle('translate-x-40')
            // entry.target.classList.toggle('opacity-0')
            entry.target.classList.remove('translate-x-40', 'opacity-0')
            entry.target.classList.add('translate-x-0', 'opacity-100')
            // observer.unobserve(entry.target)
          } else {
            // entry.target.classList.toggle('translate-x-40')
            // entry.target.classList.toggle('opacity-0')
            entry.target.classList.remove('translate-x-0', 'opacity-100')
            entry.target.classList.add('translate-x-40', 'opacity-0')
          }
        })
      },
      { threshold: 0.5, rootMargin: '-100px' }
    )
    itemsEls.current.forEach((item) => observer.observe(item))
    return () => {
      itemsEls.current.forEach((item) => {
        try {
          observer.unobserve(item)
        } catch (err) {
          console.log(err)
        }
      })
    }
  }, [itemsEls])

  return (
    <div className="  flex h-full  flex-col ">
      <div className=" mb-20 flex flex-col items-center gap-1">
        <h1 className="mb-10 text-center text-5xl">
          {' '}
          Scroll to see my tech skills
        </h1>
        {items.map((item, index) => {
          const getRef = (el: HTMLDivElement) => itemsEls.current.push(el)
          return (
            <div
              ref={getRef as any}
              key={index}
              className=" mt-10 translate-x-40  opacity-0 transition-all duration-1000 ease-in-out "
            >
              {item}
            </div>
          )
        })}
      </div>
      <div className="fixed bottom-24 right-5 z-40 ">
        <button onClick={handleClickScroll}>
          <ArrowUpCircle
            className="m-4 text-2xl"
            width={48}
            height={48}
            opacity={50}
          />
        </button>
      </div>
    </div>
  )
}

export default TechSkills
