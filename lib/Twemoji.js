import React, { memo } from "react"
import Image from "next/image"
import twemoji from 'twemoji'

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component")
}

const Twemoji = ({ emoji = isRequired() }) => {
  const codePoint = twemoji.convert.toCodePoint(emoji);

  return (
    <Image
      src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codePoint}.svg`}
      width={14}
      height={14}
      alt={emoji}
      />
  )
}

export default memo(Twemoji)
