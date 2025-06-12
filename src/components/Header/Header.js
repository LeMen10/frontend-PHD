import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/images/images';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <>
            <div className={cx('header')}>
                <header>
                    <div aria-label="Logo and Home link" className={cx('logo-home')}>
                        <div aria-label="Hub X logo text" className={cx('logo')}>
                            <Link to="/">
                                <img alt="" src={images.Logo} />
                            </Link>
                        </div>
                    </div>

                    <nav aria-label="Primary navigation" className={cx('nav')}>
                        <p>
                            <Link to="/">Trang chủ</Link>
                        </p>
                        <p>
                            <Link to="/service">Dịch vụ</Link>
                        </p>
                        <p>
                            <Link to="/contact">Liên hệ</Link>
                        </p>
                    </nav>

                    <div className={cx('search-write')}>
                        <i aria-label="Search icon" className={cx('fas', 'fa-search', 'search-icon')} role="img"></i>
                        <button aria-label="Write button" className={cx('write-button')}>
                            Write
                        </button>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
