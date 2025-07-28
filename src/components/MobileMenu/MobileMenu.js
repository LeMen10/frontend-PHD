import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import styles from './MobileMenu.module.scss';
const cx = classNames.bind(styles);

const MobileMenu = ({ onClose }) => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <div className={cx('mobile-menu')}>
            <div className={cx('mobile-overlay')} onClick={onClose}></div>
            <div className={cx('mobile-panel')}>
                <button className={cx('close-btn')} onClick={onClose}>
                    ✕
                </button>
                <div className={cx('menu-content')}>
                    <input className={cx('search')} placeholder="Tìm kiếm..." />
                    <nav>
                        <Link to="/" onClick={onClose} className={cx('nav-item', { active: pathname === '/' })}>
                            Trang chủ
                        </Link>
                        <Link
                            to="/about"
                            onClick={onClose}
                            className={cx('nav-item', { active: pathname === '/about' })}
                        >
                            Giới thiệu
                        </Link>
                        <Link
                            to="/contact"
                            onClick={onClose}
                            className={cx('nav-item', { active: pathname === '/contact' })}
                        >
                            Liên hệ
                        </Link>

                        <hr />
                        <div className={cx('phone')}>+84 969 699 879</div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
