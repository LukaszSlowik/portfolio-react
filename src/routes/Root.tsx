import { doc } from 'prettier'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, NavLink, useNavigate, useMatch } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import Footer from '@/pages/Footer'
type Props = {}

function getWindowSize() {
  const { innerWidth, innerHeight } = window
  return { innerWidth, innerHeight }
}

const Root = (props: Props) => {
  const navigate = useNavigate()
  // const match = useMatch(location.pathname)
  const [show, setShow] = React.useState(false)

  // console.log('match:', match)
  // console.log(location.pathname)
  const [darkMode, setDarkMode] = useState<boolean | null>(false)
  useLayoutEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-schema:dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    }
  }, [])
  const handleDarkMode = () => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  return (
    <>
      <div
        className=" min-h-screen   text-black dark:bg-slate-800 dark:text-white "
        id="topID"
      >
        <nav className="flex   w-full  flex-col  ">
          <div className="flex h-16 flex-row-reverse items-center bg-black text-white">
            <button onClick={handleDarkMode}>
              {!darkMode ? (
                <Moon className="mr-4 " />
              ) : (
                <Sun className=" mr-4 " />
              )}
            </button>

            <span className=" mr-4 text-center text-2xl ">
              Lukasz's Portfolio
            </span>
            {/* {match?.pathname !== '#/KnowMeBetter' &&
              match?.pathname !== '#/home' &&
              match?.pathname !== '/' && ( */}
            <span
              onClick={() => navigate('KnowMeBetter')}
              className="ml-20 mr-auto hidden  cursor-pointer  p-4 text-center text-2xl hover:bg-slate-600 sm:block"
            >
              Know me better
            </span>
            {/* ) */}
            {/* } */}

            <a
              onClick={() => setShow(!show)}
              href="#"
              className="absolute left-4 top-5  flex w-8 flex-col  gap-2 bg-black text-white"
            >
              {!show ? (
                <>
                  <span className="h-[4px] w-full rounded-sm bg-white "></span>
                  <span className="h-[4px] w-full rounded-sm bg-white "></span>
                  <span className="h-[4px] w-full rounded-sm bg-white "></span>
                </>
              ) : (
                <span className="z-30 h-[2px] w-full  pb-2 text-4xl">x</span>
              )}
            </a>
          </div>

          <ul
            className={`   fixed top-4  z-20  pt-20 ${
              show ? 'flex' : 'hidden'
            }  w-2/3 flex-col   bg-black text-slate-50 sm:w-1/3 `}
          >
            <NavLink
              className="border-border dark:border-border-dark border-t p-4  opacity-50  hover:opacity-100  "
              to={`/home`}
              onClick={() => setShow(!show)}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setShow(!show)}
              className=" border-border dark:border-border-dark border-t p-4 opacity-50  hover:opacity-100 "
              to={`KnowMeBetter`}
            >
              Know Me Better
            </NavLink>
            <NavLink
              onClick={() => setShow(!show)}
              className=" border-border dark:border-border-dark border-t p-4 opacity-50  hover:opacity-100 "
              to={`techskills`}
            >
              Tech Skills
            </NavLink>
            <NavLink
              onClick={() => setShow(!show)}
              className=" border-border dark:border-border-dark border-t p-4 opacity-50  hover:opacity-100 "
              to={`hobbygame`}
            >
              Hobby
            </NavLink>
          </ul>
        </nav>
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Root
