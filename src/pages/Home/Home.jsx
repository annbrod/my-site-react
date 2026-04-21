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
        title: 'Привет! Я Туласова Анастасия',
        description: `<p>
           alissa.volya — мой ник во многих социальных сетях и творческий псевдоним. Его мне придумал ChatGPT, пока я скучала в аэропорту. А теперь по нему меня узнают в интернете многие творческие люди и читатели.
        </p>
        <p>
            Я разработала этот сайт, чтобы продемонстрировать свои знания в области веб-разработки, а заодно рассказать о своих крутых увлечениях.
        </p>`,
    }
    const introList = {
        title: 'Коротко обо мне',
        list: [
            {
                title: 'У меня два высших образования',
                description: `Я лингвист-переводчик, а второй мой диплом — по специальности «Реклама и связи с общественностью». Кстати, оба диплома — красные. 
                    Несмотря на то, что я работаю не по специальности, считаю, что оба направления здорово помогают мне в жизни, работе и творчестве.`,
                icon: 'learn',
                img: {
                    src: '/images/content/intro-list/learn.webp',
                    alt: 'education',
                    width: 300,
                    height: 300,
                },
            },
            {
                title: '6+ лет я работаю в IT',
                description:
                    'Я frontend-разработчик. Люблю свою работу и считаю ее невероятно творческой. До сих пор не могу назвать себя «технарем».',
                icon: 'notebook',
                link: '/work',
                img: {
                    src: '/images/content/intro-list/notebook.webp',
                    alt: 'notebook',
                    width: 300,
                    height: 300,
                },
            },
            {
                title: 'А еще я пишу',
                description: `У меня есть несколько работ в фанфикшене, а также первая собственная книга, которую я выкладываю в сеть прямо в процессе.
                    Есть еще несколько идей, но не хочу раскрывать все карты сразу!
                    `,
                icon: 'write',
                link: '/write',
                img: {
                    src: '/images/content/intro-list/write.webp',
                    alt: 'write',
                    width: 300,
                    height: 300,
                },
            },
            {
                title: 'Читаю, когда есть свободное время',
                description:
                    'Люблю разные жанры, от классики до фэнтези. Больше люблю бумажные книги, потому что устаю от экранов за работой и письмом.',
                icon: 'books',
                link: '/read',
                img: {
                    src: '/images/content/intro-list/books.webp',
                    alt: 'books',
                    width: 300,
                    height: 300,
                },
            },
            {
                title: 'Я в социальных сетях',
                description:
                    'У меня есть настоящий тематический блог и даже пара-тройка сотен подписчиков :) А еще — личный аккаунт, в котором я просто делюсь своей жизнью.',
                icon: 'message',
                link: '/socials',
                img: {
                    src: '/images/content/intro-list/like.webp',
                    alt: 'like',
                    width: 300,
                    height: 300,
                },
            },
        ],
    }
    return (
        <div>
            <MainBlock mainBlock={mainBlock} />
            <Intro intro={intro} />
            <IntroList introList={introList} />
        </div>
    )
}

export default Home
