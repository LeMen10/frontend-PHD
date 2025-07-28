import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FacebookIcon, TikTokIcon, YouTubeIcon } from '../Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <>
            <footer>
                <div
                    className={cx('footer-top')}
                    role="region"
                    aria-label="Subscription and social media follow section"
                >
                    <section className={cx('footer-section', 'for-updates')}>
                        <h2>PHD STUDIO</h2>

                        <div className={cx('contact-info')}>
                            <p>
                                <strong>Địa chỉ:</strong>
                                <br />
                                Tầng 5, TTM Building, 309 Bạch Đằng, P.2, Q. Bình Thạnh, TP.HCM
                            </p>
                            <p>
                                <strong>Điện thoại:</strong>
                                <br />
                                <a href="tel:+84327906965">+84 327 906 965</a>
                            </p>
                            <p>
                                <strong>Email:</strong>
                                <br />
                                <a href="mailto:congtyphdstudio@gmail.com">congtyphdstudio@gmail.com</a>
                            </p>
                        </div>

                        {/* <button className={cx('subscribe-button')} aria-label="Subscribe for updates">
                            Liên hệ ngay
                        </button> */}
                        <p
                            onClick={() => window.open('https://forms.gle/ZC8mAbxMLnZ3qRci8', '_blank')}
                            className={cx('subscribe-button')}
                        >
                            Liên hệ ngay
                        </p>
                    </section>

                    <section className={cx('footer-section', 'follow')} aria-label="Follow on social media">
                        <h3>Theo dõi tại</h3>
                        <div className={cx('social-icons')} role="list">
                            <Link
                                to="https://www.tiktok.com/@phdstudio.official?_t=ZS-8xzKmyTUc4X&_r=1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TikTokIcon />
                            </Link>
                            <Link
                                to="https://www.facebook.com/groups/828823889050986/user/61573988580801?locale=vi_VN"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FacebookIcon />
                            </Link>
                            <Link
                                to="https://www.youtube.com/c/Truy%E1%BB%87nT%E1%BB%95ngH%E1%BB%A3p"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <YouTubeIcon />
                            </Link>
                        </div>
                    </section>
                </div>

                <div className={cx('footer-middle')} aria-label="Contact email">
                    <span>
                        <strong>© 2025 by PHD Studio</strong>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
