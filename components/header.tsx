import Link from 'next/link'
import { Button } from 'flowbite-react';
import { CMS_NAME } from '../lib/constants'
import React from 'react'
import Twemoji from '../lib/Twemoji'

const Header = () => {
  return (
    <>
      <h1 className="text-center mb-8 text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        haru blog.
      </h1>
      <div className="flex justify-center rounded-md">
        <a href="#" aria-current="page" className="transition ease-in-out delay-150 px-4 py-2 text-sm font-medium text-blue-700 bg-white border-4 border-black shadow-md rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          さいきん
        </a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-4 border-black shadow-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          りゅうがく
        </a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-4 border-black shadow-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          おしごと
        </a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-4 border-black shadow-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          つぶやき
        </a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-4 border-black shadow-md rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          わたし
        </a>
      </div>
    </>
  );
}

export default Header
