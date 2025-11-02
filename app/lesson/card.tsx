import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import {useAudio} from "react-use";

type Props = {
    id: number;
    text: string;
    imageSrc?: string | null;
    selected?: boolean;
    onClick: () => void;
    status?: "correct" | "wrong" | "none";
    audioSrc?: string | null;
    disabled?: boolean;
    type: typeof challenges.$inferSelect["type"];
}

const Card = ({ id, text, imageSrc, selected, onClick, status, audioSrc, disabled, type }: Props) => {

    const [audio, _, controls] = useAudio({src:audioSrc || ""})

    const handleClick = useCallback(() => {
        if (disabled) return;
        controls.play()

        onClick();
    }, [disabled, onClick, controls]);

    return (
        <div className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2", selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
            selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
            selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
            disabled && "pointer-events-none hover:bg-white",
            type === "ASSIST" && "lg:p-3 w-full"
        )} onClick={handleClick}>

            {audio}
            {imageSrc && (
                <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] mx-auto flex flex-col justify-center items-center">

                    <Image src={imageSrc} fill alt={text} />

                </div>
            )}

            <div className={cn("flex items-center justify-center font-bold ", type === "ASSIST" && "flex-row-reverse")}>
                <p className={cn("text-neutral-600 text-base lg:text-xl", selected && "text-sky-500",
                    selected && status === "correct" && "text-green-500",
                    selected && status === "wrong" && "text-rose-500"
                )}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Card