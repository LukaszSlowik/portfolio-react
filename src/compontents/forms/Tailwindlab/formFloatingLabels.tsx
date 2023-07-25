import React from 'react'

type Props = {}

const formFloatingLabels = (props: Props) => {
  return (
    <>
      <div>
        <form className="mt-12">
          <div className="relative">
            <input
              id="email"
              name="email"
              type="text"
              className="peer-focus peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
              placeholder="john"
            />
            <label
              htmlFor="email"
              className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Email address
            </label>
          </div>
          <div className="relative mt-10">
            <input
              id="password"
              name="password"
              type="password"
              className="peer-focus peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Password
            </label>
          </div>
        </form>
      </div>
    </>
  )
}

export default formFloatingLabels
