import styles from '@/styles/buttons/LinkButton.module.scss';
import Link from 'next/link';

interface PropTypes {
    text: string;
    to: string;
}

export default function LinkButton(props: PropTypes) {
    const { text, to } = props;

    return (
        <div className={styles.button}>
            <Link href={to} className={styles.link}>
                {text}
            </Link>
        </div>
    );
}
