import React from 'react'

type Props = {}

const projects = [
  {
    name: 'Cf Diet App',
    img: '/cfdiet.png',
    url: 'https://cfdiet.vercel.app/'
  },
  {
    name: 'Clone - Blazity.com',
    img: '/Blazity.png',
    url: 'https://clone-blazity.vercel.app/'
  },
  {
    name: 'Clone - Quercus.eu',
    img: '/Quercus-clone.png',
    url: 'https://clone-quercus.vercel.app/'
  },
  {
    name: 'Clone - Zoneit.pl',
    img: '/ZoneIT-clone.png',
    url: 'https://clone-zone-it.vercel.app'
  },
  {
    name: 'Clone - Corusconsulting.com',
    img: '/Corus.png',
    url: 'https://clone-corusconsulting.vercel.app/'
  }
]

const MyProjects = (props: Props) => {
  return (
    <div className="  mt-20  h-full sm:m-0 ">
      <h1 className="m-8 text-center text-2xl">My Projects: </h1>
      <div className=" mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-8">
        {projects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            className=" mx-8  flex aspect-video max-w-full shrink-0 grow cursor-pointer flex-col justify-between rounded-xl  border bg-slate-100 text-center  text-xl  font-semibold shadow-xl  transition-all hover:scale-105 hover:bg-slate-300 dark:border-0 dark:bg-slate-900 dark:hover:bg-slate-700 sm:max-w-[300px]"
          >
            <img
              src={project.img}
              className="  rounded-t-xl    object-cover "
            />
            <p className="p-4">{project.name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default MyProjects
