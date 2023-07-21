import styles from '@/styles/Carousel.module.scss';
import Image from 'next/image';

import img1 from '@/assets/avif/carousel/01.avif';
import img2 from '@/assets/avif/carousel/02.avif';
import img3 from '@/assets/avif/carousel/03.avif';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import Img from './utils/Img';

export default function Carousel() {
    const images = [
        img1.src,
        img2.src,
        img3.src,
        img1.src,
        img2.src,
        img3.src,
        img1.src,
        img2.src,
        img3.src,
    ];
    const image: any = useRef();
    const carousel: any = useRef();
    const [position, setPosition] = useState(0);
    const [size, setSize] = useState(6);
    const styleImage = { width: '100%', height: '100%' };

    useEffect(() => {
        resize();
        window.addEventListener('resize', () => {
            resize();
            scroll(0);
        });
    }, []);

    // const resize = () => {
    //     const windowSize = window.innerWidth;
    //     if (windowSize >= 769) return setSize(9 - 3);
    //     else if (windowSize < 769 && windowSize > 500) return setSize(9 - 2);
    //     setSize(9 - 1);
    // };

    //This works if you know how many image are needed -> Image per image
    // function scroll(num: number) {
    //     const width = image.current.offsetWidth;
    //     const updtadePos = position + num;

    //     if (updtadePos < 0) {
    //         carousel.current.scrollLeft = (width + 14) * size;
    //         return setPosition(size);
    //     }
    //     if (updtadePos >= size + 1) {
    //         carousel.current.scrollLeft = (width + 14) * 0;
    //         return setPosition(0);
    //     }

    //     carousel.current.scrollLeft = (width + 14) * updtadePos;
    //     setPosition(updtadePos);
    // }

    const resize = () => {
        const windowSize = window.innerWidth;
        if (windowSize >= 769) return setSize(9 / 3 - 1);
        else if (windowSize < 769 && windowSize > 500) return setSize(9 / 2 - 1);
        setSize(9 - 1);
    };

    function scroll(num: number) {
        const width = carousel.current.offsetWidth;
        const updtadePos = position + num;
        let margin = 14;

        if (size <= 3) margin = 20;

        if (num === 0) carousel.current.scrollLeft = 0;

        if (updtadePos < 0) {
            carousel.current.scrollLeft = (width + margin) * size;
            return setPosition(size);
        }
        if (updtadePos >= size + 1) {
            carousel.current.scrollLeft = (width + margin) * 0;
            return setPosition(0);
        }

        carousel.current.scrollLeft = (width + margin) * updtadePos;
        setPosition(updtadePos);
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_buttons}>
                <button onClick={() => scroll(-1)} aria-label="previous-button">
                    <FaAngleLeft />
                </button>
                <button onClick={() => scroll(1)} aria-label="next-button">
                    <FaAngleRight />
                </button>
            </div>
            <div className={styles.carousel_items} ref={carousel}>
                {images.map((img, index) => (
                    <div className={styles.image} key={img + index} ref={image}>
                        {/* <div className={styles.carousel_wallpaper}>
                            <Img src={img} alt="" style={styleImage} />
                        </div> */}
                        <div className={styles.item}>
                            <h3>Aqui ficará as memorias</h3>
                            <p>Aqui ficará todas as memórias com a pessoa.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
