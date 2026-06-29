import './style.scss'
import Picture from '../../components/ui/Picture/Picture'


function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__title">
                <span className="hero__title-wrap"><span className="fade-in">Frontend developer.</span></span>
                <span className="hero__title-wrap"><span className="fade-in">Writer.</span></span>
                <span className="hero__title-wrap"><span className="fade-in">Dreamer.</span></span>
            </h1>
        </section>
    )
}

export default Hero
