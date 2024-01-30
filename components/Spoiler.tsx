'use client'
import React from 'react'

const Spoiler = ({ text }) => {
  return (
    <span className="bg-primary-400 h-full m-0 inline text-primary-400 hover:bg-transparent hover:text-inherit">
      {text}
    </span>
  )
}

export default Spoiler
