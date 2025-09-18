import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full flex-row">
                <Button size="lg" variant="ghost" >
                    <Image src="/am.svg" alt="Armenian" height={32} width={40} className="rounded-md mr-4" />
                    Armenian
                </Button>

                <Button size="lg" variant="ghost" >
                    <Image src="/es.svg" alt="Spanish" height={32} width={40} className="rounded-md mr-4" />
                    Spanish
                </Button>

                <Button size="lg" variant="ghost" >
                    <Image src="/en.svg" alt="English" height={32} width={40} className="rounded-md mr-4" />
                    English
                </Button>

                <Button size="lg" variant="ghost" >
                    <Image src="/fp.svg" alt="Filipino" height={32} width={40} className="rounded-md mr-4" />
                    Filipino
                </Button>

                <Button size="lg" variant="ghost" >
                    <Image src="/jp.svg" alt="Japanese" height={32} width={40} className="rounded-md mr-4" />
                    Japanese
                </Button>

                <Button size="lg" variant="ghost" >
                    <Image src="/kr.svg" alt="Korean" height={32} width={40} className="rounded-md mr-4" />
                    Korean
                </Button>
            </div>
        </footer>
    )
}