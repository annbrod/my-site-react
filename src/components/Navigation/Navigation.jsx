import './style.scss'
import Link from '../ui/Link/Link'

function Navigation({ classMod }) {
    return (
        <nav className={`navigation ${classMod ? classMod : ''}`}>
            <Link classMod="link--header" to="/">
                Главная
            </Link>
            <Link classMod="link--header" to="/work">
                Работа
            </Link>
            <Link classMod="link--header" to="/hobby">
                Хобби
            </Link>
            <Link classMod="link--header" to="/socials">
                Соцсети
            </Link>
            <Link classMod="link--header" to="/wall">
                Стена
            </Link>
        </nav>
    )
}

export default Navigation
