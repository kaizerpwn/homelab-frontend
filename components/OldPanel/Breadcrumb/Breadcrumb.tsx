'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import { AiOutlineHome } from "react-icons/ai"
import { MdArrowRight } from "react-icons/md"

const Breadcrumb = () => {
    const pathname = usePathname();

    return (
        <>
            <div aria-label="breadcrumb" className="w-full p-4">
                <ol className="flex h-8 space-x-2">
                    <li className="flex items-center">
                        <Link rel="noopener noreferrer" href="/" title="Back to homepage" className="hover:underline">
                            <AiOutlineHome className="w-5 h-5" />
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <MdArrowRight className="w-6 h-6" />
                        <Link rel="noopener noreferrer" href={pathname} className="flex items-center px-1 capitalize">{pathname.includes('/panel/') ? (pathname.replace('/panel/', '')) : (pathname.replace('/', ''))}</Link>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default Breadcrumb