import GooeyNav from '@/components/GooeyNav'
const items = [
    {
        label: "Home",
        href: "/",
        pCount: 15,
        animationTime: 600,
        minDistance: 20,
        maxDistance: 42,
        maxRotate: 75,
        colors: [1, 2, 3, 1, 2, 3, 1, 4],
        timeVariance: 300,
    },
    {
        label: "About",
        href: "#about",
        pCount: 15,
        animationTime: 600,
        minDistance: 20,
        maxDistance: 42,
        maxRotate: 75,
        colors: [1, 2, 3, 1, 2, 3, 1, 4],
        timeVariance: 300,
    },
    {
        label: "Contact",
        href: "#contact",
        pCount: 15,
        animationTime: 600,
        minDistance: 20,
        maxDistance: 42,
        maxRotate: 75,
        colors: [1, 2, 3, 1, 2, 3, 1, 4],
        timeVariance: 300,
    },
];
const Nav = () => {
    return (
        <>
            <nav className='h-10 bg-black sticky top-0 z-50 flex justify-center shadow-[0px_0px_20px_20px_#000] p-2'>
                <div style={{ height: '600px', position: 'relative' }}>
                    <GooeyNav
                        items={items}
                        animationTime={600}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        timeVariance={300}
                    />
                </div>
            </nav>
        </>

    )
}
export default Nav