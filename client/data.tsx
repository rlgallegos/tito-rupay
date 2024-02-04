// Interfaces

export interface ServiceType {
    title: string
    text: string
    bullets: string[]
}
export interface ServiceTypes {
    coaching: ServiceType
    business: ServiceType
    group: ServiceType
    [key: string]: ServiceType
}

export interface TestimonialType {
    name: string
    text: string
}


// Services

const coaching: ServiceType = {
    title: 'coaching',
    text: "Unlock your full potential with personalized 1-on-1 coaching tailored just for you. Our experienced life coach is dedicated to guiding you through a transformative journey, providing individualized support, and helping you overcome obstacles. Experience the power of focused attention and tailored strategies as you embark on a path of self-discovery and achievement.",
    bullets: [
        'Tailored',
        'Accountability Partner',
    ]
}
const business: ServiceType = {
    title: 'business',
    text: "Elevate your business to new heights with our expert business coaching services. Our seasoned coach brings a wealth of knowledge to the table, offering strategic insights and tailored advice to propel your business forward. Experience the impact of dedicated coaching as you navigate challenges, optimize operations, and achieve your professional goals with confidence.",
    bullets: [
        'Strategy Development',
        'Goal-Oriented'
    ]
}
const group: ServiceType = {
    title: 'group',
    text: "Embark on a journey of personal growth and connection with our transformative group life coaching sessions. Join a supportive community where individuals come together to explore their potential, share experiences, and foster mutual inspiration. Experience the strength of collective motivation as our skilled life coach guides the group towards achieving individual goals within a collaborative and empowering environment.",
    bullets: [
        'Shared Experiences',
        'Mutual Inspiration'
    ]
}
export const services: ServiceTypes = {
    coaching: coaching,
    business: business,
    group: group
}


// Testimonials

const bobby: TestimonialType = {
    name: "Bobby Gallegos",
    text: "Roberto is the best!"
}
const tayler: TestimonialType = {
    name: "Tayler Pugliese",
    text: "He's been an incredible help."
}
const pikachu: TestimonialType = {
    name: 'Pikachu',
    text: "Pika pika! Pika pika pika pika pika...."
}
export const testimonials: TestimonialType[] = [bobby, tayler, pikachu]