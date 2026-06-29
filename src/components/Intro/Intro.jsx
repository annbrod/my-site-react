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
                <img class="intro__emodji intro__emodji--1" src="/images/inhtml/emodji.svg" alt="" width="60" height="60" />
                <img class="intro__emodji intro__emodji--2" src="/images/inhtml/heart.svg" alt="" width="60" height="60" />
                <img class="intro__emodji intro__emodji--3" src="/images/inhtml/flash.svg" alt="" width="60" height="60" />
            </div>
            <div className="intro__about ">
                <Title tag="h2" classMod="title--h1 fade-in" text={intro.title} />
                <div
                    className="intro__description fade-in"
                    dangerouslySetInnerHTML={{ __html: intro.description }}
                />
            </div>
        </section>
    )
}

export default Intro
