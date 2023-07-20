import { useEffect, useState } from 'react';
import styles from '@/styles/endings/BadEnding.module.scss';
import Container from '../utils/Container';
import Img from '../utils/Img';

import badImage from '@/assets/endings/bad.jpg';
import { GiLotusFlower } from 'react-icons/gi';

export default function BadEnding() {
    const [glitch, setGlitch] = useState(false);
    const styleImage = { width: '100%', height: '100%' };

    useEffect(() => {
        setGlitch(true);
    }, []);

    useEffect(() => {
        const random = Math.round(Math.random() * 1500) + 200;
        const event = setInterval(() => {
            setGlitch(true);

            setTimeout(() => {
                setGlitch(false);
            }, 360);
        }, random);

        return () => {
            clearInterval(event);
        };
    }, [glitch]);

    return (
        <div className={styles.bad_ending}>
            <div className={styles.bad_ending_wallpaper}>
                <Img src={badImage.src} alt="" style={styleImage} priority={true} />
            </div>
            <Container>
                <div className={styles.bad_ending_container}>
                    <h1 className={glitch ? styles.glitch : ''}>Então tudo era uma ilusão...</h1>
                    <GiLotusFlower />
                </div>
            </Container>
        </div>
    );
}
