import styles from './ErrorMassage.module.css'

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                The dark side of force has won.<br />
                We cannot display data.<br />
                Come back when we fix everything<br />
            </p>
        </>
    )
}

export default ErrorMessage
