import './style.scss'
import Title from '../../components/ui/Title/Title'
import IntroCard from '../../components/cards/IntroCard/IntroCard'

function IntroList({ introList }) {
    return (
        <section className="intro-list">
            <Title
                tag="h2"
                classMod="title--h2 fade-in"
                text={introList.title}
            />
            <div className="intro-list__list">
                {introList.list.map((item, index) => (
                    <IntroCard key={index} introCard={item} />
                ))}
            </div>
        </section>
    )
}

export default IntroList
