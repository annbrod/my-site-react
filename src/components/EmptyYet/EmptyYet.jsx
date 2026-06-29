import './style.scss'
import Title from '@/components/ui/Title/Title'
import Picture from '@/components/ui/Picture/Picture'

function EmptyYet() {
    return (
        <div className="empty-yet fade-in">
            <Picture
                classMod="empty-yet__picture"
                img={{
                    src: '/images/inhtml/logo-light.svg',
                    alt: 'Пустой раздел',
                    width: 400,
                    height: 400,  
                }}
            />
            <Title tag="h1" classMod="title--h2" text="Раздел пока в разработке :)" />
        </div>
    )
}

export default EmptyYet
