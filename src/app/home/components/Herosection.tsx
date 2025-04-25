'use client'
import React from 'react'
import LetterGlitch from '@/components/LetterGlitch';
import TextPressure from '@/components/TextPressure';
import Image from 'next/image';
import myimage from './assests/MKM.jpg'


const Herosection = () => {
    return (
        <>
            <section className='relative xl:container mx-auto'>
                <div>
                    <LetterGlitch
                        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
                        glitchSpeed={50}
                        centerVignette={true}
                        outerVignette={false}
                        smooth={true}
                    />
                    <div className='w-full h-full bg-black/20 absolute top-0 z-40 flex justify-center items-center'>
                        <div className='w-1/2 h-full flex items-center justify-center '>
                            <div className='w-6/12 mx-auto h-[25rem] rounded-2xl overflow-hidden bg-blue-500'>
                                <Image alt='dineshsiva' src={myimage} className='object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500' />
                            </div>
                        </div>
                        <div className='w-1/2' style={{ position: 'relative', height: '300px' }}>
                            <h1 className='text-2xl text-white '>Hi, I&apos;m </h1>
                            <div className='' style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '0.5em' }}>
                                <h1 className='text-9xl text-white font-bold'>Dinesh</h1>

                                <TextPressure
                                    className="tracking-widest drop-shadow-lg"
                                    text="Web Developer"
                                    flex={true}
                                    alpha={false}
                                    stroke={true}
                                    width={true}
                                    weight={true}
                                    italic={true}
                                    textColor="#fff200"
                                    strokeColor="#ff00c3"
                                    minFontSize={40}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection