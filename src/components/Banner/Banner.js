import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '~/assets/images/images';
import { Link, useLocation } from 'react-router-dom';
import { BarsIcon } from '../Icons';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Banner = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
            <img
                src={images.banner}
                alt="Banner"
                className={cx('w-100', 'h-100')}
                style={{
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />
            <div
                className={cx('position-absolute', 'top-0', 'start-0', 'w-100', 'h-100')}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            ></div>

            <nav
                className={cx('navbar', 'navbar-expand-lg', 'navbar-light', 'py-3', 'px-lg-5')}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    background: 'transparent',
                }}
            >
                <Link to="/" className={cx('navbar-brand', 'ml-lg-3')}>
                    <img
                        src={images.logo} 
                        alt="PHD Studio Logo"
                        className={cx('logo-img')} 
                    />
                </Link>
                <button type="button" className={cx('navbar-toggler')} onClick={() => setMenuOpen(true)}>
                    <span className={cx('navbar-toggler-icon')}>
                        <BarsIcon />
                    </span>
                </button>
                <div
                    className={cx('collapse', 'navbar-collapse', 'justify-content-between', 'px-lg-3')}
                    id="navbarCollapse"
                >
                    <div className={cx('navbar-nav', 'mx-auto', 'py-0')}>
                        <Link to="/" className={cx('nav-item', 'nav-link', { active: pathname === '/' })}>
                            Trang chủ
                        </Link>
                        <Link
                            to="/services"
                            className={cx('nav-item', 'nav-link', { active: pathname === '/services' })}
                        >
                            Dịch vụ
                        </Link>
                        <Link to="/about" className={cx('nav-item', 'nav-link', { active: pathname === '/about' })}>
                            Giới thiệu
                        </Link>
                        <Link to="/contact" className={cx('nav-item', 'nav-link', { active: pathname === '/contact' })}>
                            Liên hệ
                        </Link>
                    </div>
                    <Link to="/" className={cx('btn', 'btn-primary', 'py-2', 'px-4', 'd-none', 'd-lg-block')}>
                        Đăng nhập
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Banner;
