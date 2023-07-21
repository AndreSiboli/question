import Image from 'next/image';
import styles from '@/styles/pages/Image.module.scss';

interface PropTypes {
    src: string;
    alt: string;
    style: {};
    priority?: boolean;
}

export default function Img(props: PropTypes) {
    const { src, alt, style, priority = true } = props;

    return (
        <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="(max-width: 768px) 50vw, 100vw"
            style={style}
            priority={priority}
        />
    );
}
