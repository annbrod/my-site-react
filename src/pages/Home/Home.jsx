import { useBreakpoint } from '../../hooks/useBreakpoint'
import Intro from '../../components/Intro/Intro'

function Home() {
    // const { isMobile } = useBreakpoint()
    // return <h1>{isMobile ? 'Главная мобильная' : 'Главная'}</h1>
    const intro = {
        img: {
            src: '/images/content/my-image.webp',
            alt: 'my image',
            width: 800,
            height: 600,
        },
        title: 'Имя Фамилия',
        description: `<p>
            Какая-то информация какая-то информация какая-то информация
            какая-то информация какая-то информация какая-то информация
        </p>
        <p>
            Какая-то информация какая-то информация какая-то информация
            какая-то информация какая-то информация какая-то информация
        </p>`,
    }
    return <Intro intro={intro} />
}

export default Home
