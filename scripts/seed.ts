import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from '../db/schema'

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
    try {
        console.log("seeding db")

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg"
            },
            {
                id: 2,
                title: "Armenian",
                imageSrc: "/am.svg"
            },
            {
                id: 3,
                title: "Korean",
                imageSrc: "/kr.svg"
            },
            {
                id: 4,
                title: "Japanese",
                imageSrc: "/jp.svg"
            },
            {
                id: 5,
                title: "Filipino",
                imageSrc: "/fp.svg"
            },
            {
                id: 6,
                title: "English",
                imageSrc: "/en.svg"
            },

        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Spanish",
                order: 1
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns"
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verbs"
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Adjectives"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                order: 1,
                question: 'Select the correct option for "El Hombre"',
                type: "SELECT"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: "/man.svg",
                text: 'The man',
                correct: true
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: "/boy.svg",
                text: 'The boy',
                correct: false
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: "/dog.svg",
                text: 'The dog',
                correct: false
            },
            {
                id: 4,
                challengeId: 1,
                imageSrc: "/woman.svg",
                text: 'The woman',
                correct: false
            },
        ])

        console.log("seeding finished")
    } catch (error) {
        console.error(error)
        throw new Error("Failed to seed the database")
    }
}

main(); 
