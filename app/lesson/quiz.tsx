"use client"
import { challengeOptions, challenges } from "@/db/schema";
import Header from "./header";
import { useState } from "react";
import QuestionBubble from "./question-bubble";
import Challenge from "./challenge";

type Props = {
    initialLessonId: number;
    intiialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    initialHearts: number;
    initialPercentage: number;
    userSubscription: any;
}

const Quiz = ({ initialLessonId, intiialLessonChallenges, initialHearts, initialPercentage, userSubscription }: Props) => {
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage)
    const [challenges] = useState(intiialLessonChallenges)

    //if the user leaves and coeback theyll continue from the incomplete ones
    const [activeIndex, setActiveIndex] = useState(()=>{
        const incompleteIndex = challenges.findIndex((challenge)=> !challenge.completed);
        return incompleteIndex === -1 ? 0 : incompleteIndex;
    })

    const [selectedOption, setSelectedOption] = useState<number>();
    const [status, setStatus] = useState<"correct"|"wrong"|"none">("none")

    const challenge = challenges[activeIndex];
    const options = challenge?.challengeOptions ?? []

    const onSelect = (id:number) => {
        if (status !== "none") return
    }

    const title = challenge.type === "ASSIST" ? "Select the correct meaning" : challenge.question;

    return (
        <>
            <Header hearts={hearts} percentage={percentage} hasActiveSubscription={!!userSubscription?.isActive} />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
                            {title}
                        </h1>
                        <div className="">
                            {challenge.type === "ASSIST" && (
                                <QuestionBubble question={challenge.question} audioSrc={challenge.audioSrc || ""} />
                            )}
                            <Challenge options={challenge?.challengeOptions ?? []} onSelect={()=>{}} status="none" selectedOption={undefined} disabled={false} type={challenge.type}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz