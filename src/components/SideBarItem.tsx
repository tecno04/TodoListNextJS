'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export default function SideBarItem({ icon, path, title } : Props) {

    const pathname = usePathname()

    return (
        <li>
            <Link 
                href= { path }
                className={`${ pathname === path ? "text-white bg-gradient-to-r from-sky-600 to-cyan-600 group" : "" } relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400`}
            >
                { icon }
                <span className="-mr-1 font-medium">{ title }</span>
            </Link>
        </li>
    );
}