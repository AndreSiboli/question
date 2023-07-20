import { useEffect, useState } from 'react';
import styles from '@/styles/endings/GoodEnding.module.scss';
import Container from '../utils/Container';
import Img from '../utils/Img';

import goodImage from '@/assets/endings/good.jpg';

export default function BadEnding() {
    const styleImage = { width: '100%', height: '100%' };

    return (
        <div className={styles.good_ending}>
            <div className={styles.good_ending_wallpaper}>
                <Img src={goodImage.src} alt="" style={styleImage} priority={true} />
            </div>

            <Container>
                <div className={styles.good_ending_container}>
                    <div className={styles.good_ending_text}>
                        <p>Espera... Sério? Calma, não que eu duvidasse disso.</p>
                        <p>Seremos felizes!</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
