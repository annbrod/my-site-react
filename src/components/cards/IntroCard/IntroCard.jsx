import './style.scss'
import Title from '@/components/ui/Title/Title'
import Icon from '@/components/ui/Icon/Icon'

function IntroCard({ introCard }) {
    return (
        <section className="intro-card">
            <Icon name={introCard.icon} classMod="icon--intro-card" />
            <div className="intro-card__text">
                <Title tag="h3" classMod="title--h3" text={introCard.title} />
                <p className="intro-card__description">
                    {introCard.description}
                </p>
            </div>
        </section>
    )
}

export default IntroCard
