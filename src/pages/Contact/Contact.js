import className from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = className.bind(styles);

const Contact = () => {
    return (
        <>
            <div className={cx('main-content')}>
                <div className={cx('section')}>
                    <h2>Liên hệ</h2>
                </div>
            </div>
        </>
    );
};

export default Contact;
