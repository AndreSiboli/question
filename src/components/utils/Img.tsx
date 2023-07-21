import Image from 'next/image';
import styles from '@/styles/pages/Image.module.scss';

interface PropTypes {
    src: string;
    alt: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    style: {};
    priority?: boolean;
}

export default function Img(props: PropTypes) {
    const { src, alt, style, priority = true, objectFit = 'cover' } = props;

    return (
        <Image
            src={src}
            alt={alt}
            // width={0}
            // height={0}
            fill
            objectFit={objectFit}
            sizes="100vw"
            style={{ ...style, objectFit: objectFit }}
            priority={priority}
        />
    );
}
