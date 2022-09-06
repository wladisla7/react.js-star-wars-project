import ChooseSide from '@components/HomePage/ChooseSide';

import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <h1 className="headerText">Choose your side</h1>
            <ChooseSide />
        </>
    )
}

export default HomePage