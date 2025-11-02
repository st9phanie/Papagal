import { SpeechIcon } from "lucide-react"
import Image from "next/image"
import { useCallback } from "react"
import {useAudio} from "react-use";

const QuestionBubble = ({ question, audioSrc }: { question: string, audioSrc?: string }) => {

    const [audio, _, controls] = useAudio({src:audioSrc || ""})

    const handleClick = useCallback(() => {
        controls.play()
    }, [controls]);

    return (
        <div className="flex items-cnter gap-x-4 mb-6">
            {audio}
            <Image src="/logo.svg" width={60} height={60} alt="Mascot" className="hidden lg:block" />
            <Image src="/logo.svg" width={40} height={40} alt="Mascot" className="block lg:hidden" />
            <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base flex flex-col">
                {question}
                <div className="absolute -left-3 top-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90" />
                {audioSrc && <div className="my-1" onClick={handleClick}>
                    <SpeechIcon className="size-5 text-slate-600 cursor-pointer" />
                </div>}
            </div>
        </div>
    )
}

export default QuestionBubble