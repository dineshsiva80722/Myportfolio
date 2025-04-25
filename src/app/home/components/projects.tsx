"use client";
import { useRef, useEffect, useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import HeroBackground from '@/app/Herosection/components/HeroBackround';
import Image from "next/image";
import gsap from "gsap";

const projects = () => {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted) return;
        if (cardsRef.current.length && cardsRef.current[0]) {
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: "top 80%",
                },
            });
        }
    }, [hasMounted]);
    const tabs = [
        {
            title: "Product",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-[40rem] py-10 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <Image
                        src="https://res.cloudinary.com/dn60aovto/image/upload/v1745164648/02b022fb-f1ad-434c-81bd-7d2cc562b7b8.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[30rem] top-32 absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-[40rem] py-10 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <Image
                        src="https://res.cloudinary.com/dn60aovto/image/upload/v1745165229/07166246-4550-452b-a364-24068b925034.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[30rem] top-32 absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-[40rem] py-10 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <Image
                        src="https://res.cloudinary.com/dn60aovto/image/upload/v1745165443/c1a0cd30-b294-4b90-b04c-3fd6b8342f8f.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[30rem] top-32 absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Content",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-[40rem] py-10 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <Image
                        src="https://res.cloudinary.com/dn60aovto/image/upload/v1745165554/120b6383-cd48-4354-8021-535ff84763fc.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[30rem] top-32 absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Random",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-[40rem] py-10 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <Image
                        src="https://res.cloudinary.com/dn60aovto/image/upload/v1745165623/7dc0568c-8920-4f5a-99f9-6dfd37671427.png"
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[30rem] top-32 absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
    ];


    return (
        <>
            {/* bg-gradient-to-tr from-black/70 to-black  */}
            <section ref={el => { cardsRef.current[0] = (el instanceof HTMLDivElement || el === null) ? el : null }} className='min-h-[60rem] w-full flex justify-center items-start  py-20 relative'>
                {/* Animated Particle Background */}
                <HeroBackground />
                <div className="h-[20rem]  z-50 md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start pb-20">
                    <p className="text-2xl md:text-4xl font-bold mb-4 text-white underline py-2">My Projects</p>
                    <Tabs tabs={tabs} />
                </div>
            </section>
        </>
    )
}


export default projects