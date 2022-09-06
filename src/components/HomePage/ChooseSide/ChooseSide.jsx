import cn from 'classnames';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg'

import styles from './ChooseSide.module.css'


const ChooseSideItem = ({
    classes,
    theme,
    text,
    img,

}) => {
    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.itemHeader}>{text}</div>
            <img className={styles.itemImg} src={img} alt={text} />
        </div>
    )
}

const ChooseSide = () => {
    const items = [
        {
            theme: THEME_LIGHT,
            text: "Light Side",
            img: imgLightSide,
            classes: styles.itemLight,
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDarkSide,
            classes: styles.itemDark,

        },
        {
            theme: THEME_NEITRAL,
            text: "Han Solo Side",
            img: imgFalcon,
            classes: styles.itemNeitral,

        }
    ]


    return (
        <div className={styles.container}>
            {items.map(({ theme, text, img, classes }, index) => (
                <ChooseSideItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide
