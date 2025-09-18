import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import SidebarItem from "./sidebar-item"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"

type Props = {
    className?: string,
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex left-0 top-0 px-4 border-r-2 flex-col h-full lg:w-[256px] lg:fixed", className)}>
            <Link href="/learn">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.svg" width={40} height={40} alt="Mascot image" />
                    <h1 className="text-2xl font-extrabold text-red-600 tracking-wide">Papagal</h1>
                </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1 mt-4">
                <SidebarItem label="Learn" iconSrc="/book.svg" href="/learn" />
                <SidebarItem label="Leaderboard" iconSrc="/leaderboard.png" href="/leaderboard" />
                <SidebarItem label="Quests" iconSrc="/quests.svg" href="/quests" />
                <SidebarItem label="Shop" iconSrc="/shop.svg" href="/shop" />
            </div>

            <div className="p-4 ">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>

            </div>
        </div>
    )
}

export default Sidebar