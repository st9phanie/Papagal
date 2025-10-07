"use client"
import { challengeOptions, challenges } from "@/db/schema";
import Header from "./header";
import { useState } from "react";

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
    const [hearts,setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage)
    return (
        <>
            <Header hearts={hearts} percentage={percentage} hasActiveSubscription={!!userSubscription?.isActive} />
        </>
    )
}

export default Quiz