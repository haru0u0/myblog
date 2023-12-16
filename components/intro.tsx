import { CMS_NAME } from '../lib/constants'
import React from 'react'
import Twemoji from '../lib/Twemoji'
import Link from 'next/link';
import { Badge } from 'flowbite-react';

const Intro = () => {
  return (
    <section className="text-center m-16">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
       sen blog.
      </h1>
      <h4 className="text-center md:text-lg mt-5 md:pl-8">
	  おふとんだいすき。
		</h4>
<div className="flex m-4 justify-center">
<Badge color="pink" size="md"><Link href="/about">About me</Link></Badge>
      </div>
    </section>
  )
}

export default Intro
