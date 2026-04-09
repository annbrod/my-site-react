import { useBreakpoint } from '../hooks/useBreakpoint'

function Home() {
    // const { isMobile } = useBreakpoint()
    // return <h1>{isMobile ? 'Главная мобильная' : 'Главная'}</h1>
    return (
        <section class="intro">
            <div class="intro__image">
                <Picture
                    img={{
                        src: '/my-image.webp',
                        alt: 'my image',
                        width: 800,
                        height: 600,
                    }}
                />
            </div>
        </section>
    )
}

export default Home
