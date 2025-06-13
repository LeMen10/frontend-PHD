import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
// import { FacebookIcon, GithubIcon, LinkedinIcon } from '../Icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <>
            <footer>

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
