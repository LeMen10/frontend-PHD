import className from 'classnames/bind';
import styles from './Home.module.scss';

const cx = className.bind(styles);

const Home = () => {
    return (
        <>
            <div className={cx('main-content')}>
                <div className={cx('section')}>
                    <h2>Home</h2>
                </div>
            </div>
        </>
    );
};

export default Home;
