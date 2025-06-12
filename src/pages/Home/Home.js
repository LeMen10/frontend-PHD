import className from 'classnames/bind';
import styles from './Home.module.scss';

const cx = className.bind(styles);

const Home = () => {
    return (
        <>
            <section id="home" className={cx('hero-section')}>
                <div className={cx('container')}>
                    <div className={cx('hero-content')}>
                        <div className={cx('text-content')}>
                            <h2 className={cx('hero-title')}>Trở thành Streamer chuyên nghiệp</h2>
                            <p className={cx('hero-description')}>
                                Chúng tôi cung cấp các khóa đào tạo streamer từ cơ bản đến nâng cao, giúp bạn xây dựng
                                thương hiệu cá nhân và phát triển kênh stream của mình.
                            </p>
                            <button className={cx('hero-button')}>Đặt dịch vụ</button>
                        </div>
                        <div className={cx('image-content')}>
                            <img
                                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop"
                                alt="Streamer Setup"
                                className={cx('hero-image')}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
