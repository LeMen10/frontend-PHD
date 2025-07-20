import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Footer from '~/components/Footer/Footer';
import { useEffect, useState } from 'react';

const cx = className.bind(styles);

const DefaultLayout = ({ children }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
            {showButton && (
                <button onClick={scrollToTop} className={cx('scroll-to-top')}>
                    ↑
                </button>
            )}
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
