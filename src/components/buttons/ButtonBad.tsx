import styles from '@/styles/buttons/Button.module.scss';
import { ChangeEvent } from 'react';

interface PropTypes {
    text: string;
    customClass: string;
    disabled: boolean;
    onClick?: Function;
    onMouseOver?: Function;
}

export default function ButtonBad(props: PropTypes) {
    const { text, customClass, onClick, onMouseOver, disabled } = props;

    return (
        <button
            className={`${styles.button} ${styles[customClass]}`}
            onMouseEnter={(e) => {
                if (!onMouseOver) return;
                onMouseOver(e);
            }}
            onClick={(e) => {
                if (!onClick) return;
                onClick(e);
            }}
            disabled={disabled}
        >
            {text}
        </button>
    );
}
