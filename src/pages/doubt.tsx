import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from '@/styles/pages/doubt.module.scss';

import Container from '@/components/utils/Container';
import ButtonBad from '@/components/buttons/ButtonBad';
import ButtonGood from '@/components/buttons/ButtonGood';
import BadEnding from '@/components/endings/BadEnding';
import GoodEnding from '@/components/endings/GoodEnding';
import Head from 'next/head';

export default function Doubt() {
    const music: any = useRef();
    const button: any = useRef();
    const [no, setNo] = useState(0);
    const [firstLoad, setFirstLoad] = useState(true);
    const [decision, setDecision] = useState<boolean | null>(null);
    const [talk, setTalk] = useState('Agora a escolha é sua. ❤️');

    // useEffect(() => {
    //     const play = () => {
    //         music.current.volume = 0.2;
    //         music.current.play();
    //     };
    //     window.addEventListener('click', play);

    //     return () => {
    //         window.removeEventListener('click', play);
    //     };
    // }, []);

    useEffect(() => {
        if (no === 5) return setTalk('O Botão de "Sim" é o azul :)');
        if (no === 10) return setTalk('Acho que você não entendeu, o botão do "Sim" está em AZUL.');
        if (no === 15) return setTalk('Ééé... Talvez você goste de botões vermelhos.');
        if (no === 20)
            return setTalk('Tá, eu troco as cores dos botões. Tudo para te ver feliz :)');
        if (no === 25) return setTalk('Ok... Clique no "Não", então.');
    }, [no]);

    useEffect(() => {
        function size() {
            if (decision !== null || no === 0) return;

            const width = window.innerWidth;
            const height = window.innerHeight;
            const btn = button.current;
            btn.style.position = 'absolute';

            if (btn.offsetLeft > width - 200 || btn.offsetLeft < 200) {
                btn.style.left = `${width - 200}px`;
            }
            if (btn.offsetTop > height - 100 || btn.offsetTop < 100) {
                btn.style.top = `${height - 100}px`;
            }
        }

        window.onresize = size;

        window.removeEventListener('resize', size);
    }, [decision, no]);

    function goodEnding() {
        setDecision(true);
        button.current.style.position = 'static';
        const msc = music.current;
        msc.src = './music/fun.mp3';
        msc.volume = 0.4;
        msc.loop = false;
        msc.currentTime = 2;
        msc.play();
        msc.addEventListener('ended', () => {
            msc.pause();
            msc.muted = true;
        });
    }

    function badEnding() {
        setDecision(false);
        const msc = music.current;
        msc.pause();
        msc.muted = true;
    }

    function moveButton(e: ChangeEvent<HTMLElement>) {
        if (no >= 25) return;
        const parent = e.target.parentElement;
        if (!parent) return;
        setNo((prevState) => prevState + 1);
        if (no + 1 === 25) return (parent.style.position = 'static');
        const randomX = Math.round(Math.random() * (innerWidth - 200));
        const randomY = Math.round(Math.random() * (innerHeight - 80));
        parent.style.position = 'absolute';
        parent.style.top = `${randomY}px`;
        parent.style.left = `${randomX}px`;
    }

    const play = () => {
        music.current.volume = 0.2;
        music.current.play();
    };

    return (
        <>
            <Head>
                <title>Wanna date me?</title>
            </Head>
            <main className={styles.doubt}>
                <audio src="./music/love.mp3" loop ref={music}></audio>
                <Container>
                    <div className={styles.doubt_container}>
                        <div className={styles.doubt_text}>
                            <h1>Um titulo deveras importante</h1>
                            <p>{talk}</p>
                        </div>
                        <div className={styles.button_container}>
                            <div className={styles.button}>
                                <ButtonGood
                                    text="Sim"
                                    customClass={no >= 20 ? 'bad' : 'good'}
                                    handleSubmit={goodEnding}
                                    disabled={
                                        typeof decision === 'boolean' || no >= 25 ? true : false
                                    }
                                />
                            </div>
                            <div
                                className={styles.button}
                                ref={button}
                                style={{ zIndex: '9', position: 'relative' }}
                            >
                                <ButtonBad
                                    text="Não"
                                    customClass={no >= 20 ? 'good' : 'bad'}
                                    onMouseOver={(e: ChangeEvent<HTMLElement>) => {
                                        moveButton(e);
                                    }}
                                    onClick={(e: ChangeEvent<HTMLElement>) => {
                                        if (no < 25) return moveButton(e);
                                        badEnding();
                                    }}
                                    disabled={typeof decision === 'boolean' ? true : false}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                {firstLoad && (
                    <div className={styles.question}>
                        <div className={styles.question_title}>
                            <h1>Se quer responder a pergunta, vá em frente.</h1>
                        </div>
                        <div className={styles.question_button}>
                            <button
                                onClick={() => {
                                    setFirstLoad(false);
                                    play();
                                }}
                            >
                                Responder
                            </button>
                        </div>
                    </div>
                )}
                {decision === true && <GoodEnding />}
                {decision === false && <BadEnding />}
            </main>
        </>
    );
}
