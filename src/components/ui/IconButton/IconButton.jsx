import './style.scss'
import Icon from '../Icon/Icon'

function IconButton({ name, classMod, onClick }) {
    return (
        <button
            className={`icon-button ${classMod ? classMod : ''}`}
            onClick={onClick}
        >
            <Icon name={name} />
        </button>
    )
}

export default IconButton
