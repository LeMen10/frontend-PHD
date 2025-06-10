import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <>
            <div className={cx('header')}>
                <header>
                    <div aria-label="Logo and Home link" className={cx('logo-home')}>
                        <div aria-label="Hub X logo text" className={cx('logo-text')}>
                            HUB <strong>X</strong>
                        </div>
                        <span>HOME</span>
                    </div>

                    <nav aria-label="Primary navigation">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/service">Dịch vụ</Link>
                        <Link to="/contact">Liên hệ</Link>
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
