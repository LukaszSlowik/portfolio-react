import React, { useEffect, useRef, useState } from 'react'

import { ArrowUpCircle } from 'lucide-react'
// import JavaScriptImage from '../../public/js.png'
// import ReactImage from '../../public/react-icon.svg'
// import Html5Logo from '../../public/HTML5_logo.svg'
// import Css3Logo from '../../public/CSS3_logo.svg'
// import NextJSLogo from '../../public/Nextjs-logo.svg'
// import PrismaLogo from '../../public/prisma.svg'
// //import TypescriptImage from '../../public/TypeScript.png'
// import SQLLogo from '../../public/sql.svg'
// import MongoDbLogo from '../../public/mongodb.svg'
// import Nodejs from '../../public/nodejs.svg'
// import GitLogo from '../../public/git.svg'
// import TailwindCssLogo from '../../public/tailwindcss.svg'

type Props = {}
//card show = translate-x-0 opacity-100
const TechSkills = (props: Props) => {
  const itemsEls = useRef<HTMLDivElement[]>([])
  const items = [
    <img
      src={'public/HTML5_logo.svg'}
      width={350}
      height={350}
      className="mt-20"
      alt="html logo"
    />,
    <img
      src={'public/CSS3_logo.svg'}
      width={300}
      height={300}
      className="mt-20"
      alt="css logo"
    />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mt-20"
      alt="javascript logo"
    />,
    // <img
    //   src={TypescriptImage}
    //   width={350}
    //   height={350}
    //   className="mt-20"
    //   alt="typescript logo"
    // />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mt-20 dark:bg-slate-200 dark:p-8"
      alt="node.js logo"
    />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mt-20"
      alt="react logo"
    />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mx-4 mt-20 "
      alt="tailwindcss logo"
    />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mt-20 "
      alt="next.js logo"
    />,
    <img
      src={'public/js.png'}
      width={250}
      height={250}
      className="mt-20"
      alt="sql logo"
    />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mx-4 mt-20 dark:bg-slate-200 dark:p-8"
      alt="prisma logo"
    />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mt-20"
      alt="mongodb logo"
    />,
    <img
      src={'public/js.png'}
      width={350}
      height={350}
      className="mt-20 dark:bg-slate-200 dark:p-8"
      alt="git logo"
    />
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries)
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
        <a href="#">
          <ArrowUpCircle
            className="m-4 text-2xl"
            width={48}
            height={48}
            opacity={50}
          />
        </a>
      </div>
    </div>
  )
}

export default TechSkills
