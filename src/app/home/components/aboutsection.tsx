"use client";
import React from "react";
import HeroBackground from '@/app/Herosection/components/HeroBackround';
import { LinkPreview } from "@/components/ui/link-preview";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const aboutsection = () => {
  return (
    <>
      {/*  bg-gradient-to-br from-black/70 to-black */}
      <section className="min-h-screen relative  w-full hidden justify-center  items-center py-10 ">
        {/* Animated Particle Background */}

        <div style={{ overflowY: 'hidden' }} className="absolute z-50 -top-10 -rotate-3 flex w-full bg-transparent flex-col text-white h-20  items-center justify-center overflow-hidden">
          <VelocityScroll>
            React &nbsp; Next.js &nbsp; Tailwind CSS &nbsp; HTML &nbsp; CSS &nbsp; JavaScript &nbsp; TypeScript &nbsp; Framer Motion &nbsp; Shadcn UI &nbsp; GSAP &nbsp; UI/UX &nbsp; Animations
          </VelocityScroll>
        </div>

        <div className="bg-none rounded-3xl z-40 flex flex-col md:flex-row items-center gap-8 p-8 max-w-5xl w-full mx-4 animate-fade-in">
          <div className="flex-1 text-center bg-none md:text-left">

            <p className="text-2xl md:text-4xl font-bold mb-4 text-white underline">About Me</p>
            <p className="text-2xl md:text-3xl font-bold mb-4 text-white">Frontend Wizard <span className="text-blue-500">& UI Magician</span></p>
            <div className="space-y-3 text-start md:text-lg bg-none text-white">
              <p>

                Hey, I&apos;m Dinesh — a frontend wizard who turns wild UI dreams into fully functional realities using
                <span className="font-semibold mx-1">React</span>,
                <span className="font-semibold mx-1">Next.js</span>, and
                <span className="font-semibold mx-1">Tailwind CSS</span>. If you&apos;ve got a design, I&apos;ve got the code to bring it to life — pixel-perfect, responsive, and blazing fast.
              </p>
              <p>
                I don&apos;t just build interfaces — I build <span className="font-semibold">experiences</span>. Explore my recent work: I crafted the interactive, modern <LinkPreview url="https://www.dezprox.com/" className="text-green-700  text-xl font-bold mx-1">Dezprox Company Website</LinkPreview> and engineered the dynamic <LinkPreview url="https://cybernaut.co.in/" className="text-purple-700 text-xl font-bold mx-1">Cybernaut Edu-Tech Platform</LinkPreview>. I bring life into every line of code.
              </p>
              <p>
                I&apos;m obsessed with <span className="font-semibold">clean architecture</span>, <span className="font-semibold">reusability</span>, and making sure every project not only looks great but feels right. I also dabble with <span className="font-semibold mx-1">GSAP animations</span>, adding that extra wow factor that makes users stay just a little longer.
              </p>
              <p>
                Always exploring, always building — my passion lies in creating web products that people <span className="font-semibold">love to use</span>.
              </p>
              <p className="font-bold text-lg text-blue-500">Let&apos;s make the web a cooler place. One component at a time.</p>
            </div>
          </div>

        </div>
        <HeroBackground />
      </section>
      <div className="z-50">
        <HeroBackground />
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">

          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <div className="flex-1 text-center bg-none md:text-left">

                <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold mb-4 text-white underline">About Me</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold mb-4 text-white">Frontend Wizard <span className="text-blue-500">& UI Magician</span></p>
                <div className="space-y-3 text-start text-base sm:text-lg md:text-xl lg:text-base bg-none text-white">
                  <p>
                    Hi, I&apos;m Dinesh — I craft beautiful, responsive UIs with <span className="font-semibold mx-1">React</span>, <span className="font-semibold mx-1">Next.js</span>, and <span className="font-semibold mx-1">Tailwind CSS</span>.
                  </p>
                  <p>
                    I build <span className="font-semibold">experiences</span>, not just interfaces. Check out my work on the
                     <LinkPreview url="https://www.dezprox.com/" className="text-green-700 font-bold mx-1">Dezprox Website</LinkPreview>,
                     <LinkPreview url="https://cybernaut.co.in/" className="text-green-700 font-bold mx-1">Cybernaut Edu-Tech Website</LinkPreview>.
                  </p>
                  <p>
                    Passionate about <span className="font-semibold">clean code</span>, <span className="font-semibold">reusability</span>, and adding a touch of <span className="font-semibold mx-1">GSAP magic</span> for that wow factor.
                  </p>
                  <p className="font-bold text-base sm:text-lg md:text-xl lg:text-base text-blue-500">Let&apos;s make the web cooler, one component at a time.</p>
                </div>
              </div>
            </div>
            <div className="relative  mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1745511944/programming-1873854_1920_c4qnak.png"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default aboutsection