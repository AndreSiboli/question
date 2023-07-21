import styles from '@/styles/Home.module.scss';

import Head from 'next/head';
import Container from '@/components/utils/Container';
import Img from '@/components/utils/Img';
import LinkButton from '@/components/buttons/LinkButton';

import wallpaper from '@/assets/avif/home/paper.avif';
import descImage from '@/assets/avif/home/heart.avif';
import doubtImage from '@/assets/avif/home/doubt.avif';
import prosImage from '@/assets/avif/graph/pros.avif';
import happyImage from '@/assets/avif/graph/happiness.avif';

import { BsFlower1 } from 'react-icons/bs';
import { GiFlowerTwirl } from 'react-icons/gi';
import Carousel from '@/components/Carousel';

export default function Home() {
    const styleImage = { width: '100%', height: '100%' };

    return (
        <>
            <Head>
                <title>I have a question</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.main_wallpaper}>
                    <Img src={wallpaper.src} alt="" style={styleImage} />
                </div>
                <Container>
                    <div className={styles.main_container}>
                        <div className={styles.main_title}>
                            <h1>
                                Você deve estar se perguntando o porquê enviar esse site. Role para
                                descobrir.
                            </h1>
                        </div>
                        <div className={styles.main_joke}>
                            <BsFlower1 />
                        </div>
                    </div>
                </Container>
            </main>

            <section className={styles.description}>
                <Container>
                    <div className={styles.description_container}>
                        <div className={styles.description_text}>
                            <p>
                                Para começar, não é tão fácil eu fazer esses tipos de coisas. Então
                                peço a sua paciencia {':)'} <br /> <br />
                                Há algum tempo que venho pensando em formas de dizer isso, mas não
                                havia encontrado. Cá estou eu... Eu tenho uma pergunta para você,
                                porém antes de responde-la, eu quero mostrar algumas coisas.
                            </p>
                        </div>
                        <div className={styles.description_image}>
                            <div className={styles.image}>
                                <Img
                                    src={descImage.src}
                                    alt="Uma image de um coração neon"
                                    style={styleImage}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.memories}>
                <Container>
                    <div className={styles.memories_container}>
                        <div className={styles.memories_title}>
                            <h2>Memórias</h2>
                        </div>
                        <div className={styles.memories_wrapper}>
                            <div className={styles.memories_text}>
                                <p>
                                    Antes do <em>grand finale</em>, quero destacar alguns pontos
                                    importantes para esse acontecimento. Bem, momentos importantes.
                                </p>
                            </div>
                            <div className={styles.memories_carousel}>
                                <Carousel />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.duality}>
                <Container>
                    <div className={styles.duality_container}>
                        <div className={styles.duality_title}>
                            <h2>
                                <span>Prós</span> e <span>Contras</span>
                            </h2>
                        </div>
                        <div className={styles.duality_wrapper}>
                            <div className={styles.duality_text}>
                                <p>
                                    Para aliviar um pouco o tópico e descontrair. Iremos ver os{' '}
                                    <span>prós</span> e os <span>contras</span>.
                                </p>
                            </div>
                            <div className={styles.duality_proposal}>
                                <div className={styles.image}>
                                    <Img
                                        src={prosImage.src}
                                        alt="Prós e contras"
                                        style={styleImage}
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.graph}>
                <Container>
                    <div className={styles.graph_container}>
                        <div className={styles.graph_title}>
                            <h2>Mais Dados</h2>
                        </div>
                        <div className={styles.graph_wrapper}>
                            <div className={styles.graph_text}>
                                <p>
                                    Se ainda estiver confusa, nossos especialistas montaram um
                                    gráfico 100% confiável, claro.
                                </p>
                            </div>
                            <div className={styles.graph_proposal}>
                                <div className={styles.image}>
                                    <Img
                                        src={happyImage.src}
                                        alt="Gráfico sobre felicidade"
                                        style={styleImage}
                                        objectFit="contain"
                                    />
                                </div>
                            </div>

                            <div className={styles.graph_text}>
                                <p>
                                    Como visto acima, especialistas dizem que pessoas que convivem
                                    comigo tem um aumento de 90% na taxa de felicidade ainda no
                                    primeiro mês.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.doubt}>
                <div className={styles.doubt_wallpaper}>
                    <Img src={doubtImage.src} alt="" style={styleImage} />
                </div>
                <Container>
                    <div className={styles.doubt_container}>
                        <div className={styles.doubt_title}>
                            <h2>
                                <GiFlowerTwirl /> Dúvida <GiFlowerTwirl />
                            </h2>
                        </div>
                        <div className={styles.doubt_wrapper}>
                            <div className={styles.doubt_text}>
                                <p>
                                    Você pode estar se perguntando o porquê de tudo isso. Clique no
                                    botão e responda.
                                </p>
                            </div>
                            <div className={styles.doubt_button}>
                                <LinkButton text="Responder pergunta" to="/doubt" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
