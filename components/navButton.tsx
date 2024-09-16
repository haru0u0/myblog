import React from "react";
import Link from 'next/link';
import Twemoji from "../lib/Twemoji";

type Props = {
    text?: string,
    emoji?: string,
    path?: string,
}

const NavButton = ({ text, emoji, path }: Props) => {
    return (
        <li className="hover:underline underline-offset-8 border-b-2 border-black hover:bg-c3 rounded-t-lg md:rounded-none md:border-0 md:p-3">
            <Link href={path} className="inline-flex align-center block py-2 px-3 rounded md:p-0 md:m-0 ">
                <Twemoji emoji={emoji} />&nbsp;{text}
            </Link>
        </li>)
}

export default NavButton;