import styles from '@/styles/buttons/Button.module.scss';

interface PropTypes {
    text: string;
    customClass: string;
    disabled: boolean;
    handleSubmit: Function;
}

export default function ButtonGood(props: PropTypes) {
    const { text, handleSubmit, customClass, disabled } = props;

    return (
        <button
            className={`${styles.button} ${styles[customClass]}`}
            onClick={() => {
                handleSubmit();
            }}
            disabled={disabled}
        >
            {text}
        </button>
    );
}
