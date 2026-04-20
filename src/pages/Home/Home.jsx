import Intro from '../../components/Intro/Intro'
import MainBlock from '../../components/MainBlock/MainBlock'
import IntroList from '../../components/IntroList/IntroList'

function Home() {
    const mainBlock = {
        img: {
            src: '/images/content/main-block/background-mobile.webp',
            alt: 'bg',
            width: 1448,
            height: 1086,
            srcsets: [
                {
                    srcset: '/images/content/main-block/background.webp',
                    type: 'image/webp',
                    media: '(min-width: 768px)',
                },
            ],
        },
        imgLogo: {
            src: '/images/content/main-block/text-logo.svg',
            alt: 'text-logo',
        },
        parallax1: {
            src: '/images/content/main-block/parallax-1.webp',
            alt: 'parallax-1',
            width: 256,
            height: 384,
        },
        parallax2: {
            src: '/images/content/main-block/parallax-2.webp',
            alt: 'parallax-2',
            width: 256,
            height: 384,
        },
    }
    const intro = {
        img: {
            src: '/images/content/avatar.webp',
            alt: 'my image',
            width: 800,
            height: 600,
        },
        title: 'Имя Фамилия',
        description: `<p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec suscipit auctor dui, a efficitur ligula. Donec eget nunc sed enim efficitur convallis. 
        </p>
        <p>
            Donec eget nunc sed enim efficitur convallis. 
            Donec in odio ac nisl efficitur efficitur. Donec eget nunc sed enim efficitur convallis. Donec in odio ac nisl efficitur efficitur.
        </p>`,
    }
    const introList = {
        title: 'Заголовок',
        list: [
            {
                title: 'Заголовок 1',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, a efficitur ligula.',
                icon: 'learn',
            },
            {
                title: 'Заголовок 2',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, a efficitur ligula.',
                icon: 'notebook',
            },
            {
                title: 'Заголовок 3',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, a efficitur ligula.',
                icon: 'write',
            },
            {
                title: 'Заголовок 4',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, a efficitur ligula.',
                icon: 'books',
            },
            {
                title: 'Заголовок 5',
                description:
                    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, a efficitur ligula.',
                icon: 'message',
            },
        ],
    }
    return (
        <div>
            {/* <MainBlock mainBlock={mainBlock} />
            <Intro intro={intro} /> */}
            <IntroList introList={introList} />
        </div>
    )
}

export default Home
