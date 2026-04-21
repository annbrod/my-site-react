import './style.scss'
import Picture from '../../components/ui/Picture/Picture'
import Title from '../../components/ui/Title/Title'

function Intro({ intro }) {
    return (
        <section className="intro">
            <div className="intro__image fade-in">
                <Picture
                    classMod="intro__picture"
                    img={{
                        src: intro.img.src,
                        alt: intro.img.alt,
                        width: intro.img.width,
                        height: intro.img.height,
                    }}
                />
            </div>
            <div className="intro__about ">
                <Title classMod="title--h1 fade-in" text={intro.title} />
                <div
                    className="intro__description fade-in"
                    dangerouslySetInnerHTML={{ __html: intro.description }}
                />
            </div>
        </section>
    )
}

export default Intro
