import React from "react";

type Props = {
  text?: React.ReactNode
}

const Title = ({ text }: Props) => {
    return(
    <h2 className="m-8 text-lg font-IBMjp font-bold tracking-tighter leading-tight tag flex justify-center">
        # {text}
    </h2>)
}

export default Title;