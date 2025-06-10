import className from 'classnames/bind';
import styles from './Service.module.scss';

const cx = className.bind(styles);

const Service = () => {
    return (
        <>
            <div className={cx('main-content')}>
                <div className={cx('section')}>
                    <h2>Dịch vụ</h2>
                </div>
            </div>
        </>
    );
};

export default Service;
