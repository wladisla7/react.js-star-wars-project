import { useNavigate } from 'react-router-dom'
import iconBack from './img/back.png'
import styles from './PersonLinkBack.module.css'


const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handlGoBack = e => {
        e.preventDefault();
        navigate(-1);

    }
    return (

        <a
            href="#"
            className={styles.backLink}
            onClick={handlGoBack}
        >
            <img className={styles.linkImg} src={iconBack} alt="Go back" />
            <span className={styles.link}>GoBack</span>
        </a>

    )
}

export default PersonLinkBack