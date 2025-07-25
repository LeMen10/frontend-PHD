import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import images from '~/assets/images/images';

const cx = classNames.bind(styles);

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={cx('header', { sticky: isSticky })}>
                <div className={cx('container-fluid', 'bg-dark')}>
                    <div className={cx('row', 'py-2', 'px-lg-5')}>
                        <div className={cx('col-lg-6', 'text-center', 'text-lg-left', 'mb-2', 'mb-lg-0')}>
                            <div className={cx('d-inline-flex', 'align-items-center', 'text-white')}>
                                <small>
                                    <i className={cx('fa', 'fa-phone-alt', 'mr-2')}></i>+84 327 906 965
                                </small>
                                <small className={cx('px-3')}>|</small>
                                <small>
                                    <i className={cx('fa', 'fa-envelope', 'mr-2')}></i>congtyphdstudio@gmail.com
                                </small>
                            </div>
                        </div>
                        <div className={cx('col-lg-6', 'text-center', 'text-lg-right')}>
                            <div className={cx('d-inline-flex', 'align-items-center')}>
                                <Link to="#" className={cx('text-white', 'px-2')}>
                                    <i className={cx('fab', 'fa-facebook-f')}></i>
                                </Link>
                                <Link to="#" className={cx('text-white', 'px-2')}>
                                    <i className={cx('fab', 'fa-instagram')}></i>
                                </Link>
                                <Link to="#" className={cx('text-white', 'pl-2')}>
                                    <i className={cx('fab', 'fa-youtube')}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('container-fluid', 'p-0')}>
                    <nav
                        className={cx(
                            'navbar',
                            'navbar-expand-lg',
                            'bg-white',
                            'navbar-light',
                            'py-3',
                            'py-lg-0',
                            'px-lg-5',
                        )}
                    >
                        <Link to="/" className={cx('navbar-brand', 'ml-lg-3')}>
                            <h1 className={cx('m-0', 'text-uppercase', 'text-primary')}>
                                {/* <i className={cx('fa', 'fa-book-reader', 'mr-3')}></i>PHD Studio */}
                                
                            </h1>
                        </Link>
                        <button
                            type="button"
                            className={cx('navbar-toggler')}
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className={cx('navbar-toggler-icon')}></span>
                        </button>
                        <div
                            className={cx('collapse', 'navbar-collapse', 'justify-content-between', 'px-lg-3')}
                            id="navbarCollapse"
                        >
                            <div className={cx('navbar-nav', 'mx-auto', 'py-0')}>
                                <Link to="/" className={cx('nav-item', 'nav-link', 'active')}>
                                    Trang chủ
                                </Link>
                                <Link to="/about" className={cx('nav-item', 'nav-link')}>
                                    Giới thiệu
                                </Link>
                                <Link to="/services" className={cx('nav-item', 'nav-link')}>
                                    Dịch vụ
                                </Link>
                                <Link to="/contact" className={cx('nav-item', 'nav-link')}>
                                    Liên hệ
                                </Link>
                            </div>
                            <Link
                                to="/join"
                                className={cx('btn', 'btn-primary', 'py-2', 'px-4', 'd-none', 'd-lg-block')}
                            >
                                Join Us
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
