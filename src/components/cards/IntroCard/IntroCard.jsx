import './style.scss'
import Title from '@/components/ui/Title/Title'
import Picture from '@/components/ui/Picture/Picture'

function IntroCard({ introCard }) {
    const Tag = introCard.link ? 'a' : 'div'
    return (
        <Tag
            className="intro-card fade-in"
            href={introCard.link}
            title="Перейти"
        >
            <Title tag="h3" classMod="title--h3" text={introCard.title} />
            <p className="intro-card__description">{introCard.description}</p>
            <Picture
                classMod="intro-card__picture"
                img={{
                    src: introCard.img.src,
                    alt: introCard.img.alt,
                    width: introCard.img.width,
                    height: introCard.img.height,
                }}
            />
        </Tag>
    )
}

export default IntroCard
