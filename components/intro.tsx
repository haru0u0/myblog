import { CMS_NAME } from '../lib/constants'
import React from 'react'
import Twemoji from '../lib/Twemoji'

const Intro = () => {
  return (
    <section className="text-center m-16">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
       senharu blog.
      </h1>
      <h4 className="text-center md:text-lg mt-5 md:pl-8">
        イギリスで働いたり、プログラミングの勉強をしたりしている人の日記です <Twemoji emoji="👋" />　自己紹介は <a href="/about">こちら！<Twemoji emoji="🥰" /></a>
      </h4>
    </section>
  )
}

export default Intro
