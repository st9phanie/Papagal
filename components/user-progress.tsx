import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
    activeCourse: { imageSrc: string, title: string };
    hearts: number;
    points: number;
    hasActiveSub: boolean;
}
const UserProgress = ({ activeCourse, hearts, points, hasActiveSub }: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image src={activeCourse.imageSrc} height={32} width={32} alt={activeCourse.title} className="rounded-md border" />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500 text-lg">
                    <Image src="/points.svg" height={28} width={28} alt="Points" className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500 text-lg">
                    <Image src="/heart.svg" height={28} width={28} alt="Hearts" className="mr-2 " />
                    {hasActiveSub ? <InfinityIcon className="size-4 stroke-[3]" /> : hearts}
                </Button>
            </Link>
        </div>
    )
}

export default UserProgress