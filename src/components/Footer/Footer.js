import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FacebookIcon, GithubIcon, LinkedinIcon } from '../Icons';

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
                        <h2>FOR UPDATES</h2>
                        <button className={cx('subscribe-button')} aria-label="Subscribe for updates">
                            SUBSCRIBE
                        </button>
                    </section>

                    <section className={cx('footer-section', 'follow')} aria-label="Follow on social media">
                        <h2>Theo dõi tại</h2>
                        <div className={cx('social-icons')} role="list">
                            <LinkedinIcon />
                            <GithubIcon />
                            <a href="https://www.facebook.com/groups/828823889050986/user/61573988580801?locale=vi_VN"><FacebookIcon /></a> 
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
