import Link from "next/link"
import { ModeToggle } from '@/components/ModeToggle'
import Logo from "@/components/Logo"
export default function Navbar() {
    return(
        <nav className="w-full relative flex items-center justify-between py-5 border-b">
            <Link href="/">
                <Logo />
            </Link>
            <ModeToggle />
        </nav>
    )
}