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
                                <strong>Bạn sẽ được các quyền lợi:</strong> <br />
                                ✅ Hỗ trợ xây kênh & đẩy livestream lên xu hướng
                                <br />
                                ✅ Nhận toàn bộ tiền quảng cáo từ nhãn hàng
                                <br />
                                ✅ Được cung cấp kênh TikTok & cấp quyền Live
                                <br />
                                ✅ Hướng dẫn OBS, edit video, chống vi phạm bản quyền
                                <br />
                                ✅ Miễn phí khóa học dựng video (PC & điện thoại)
                                <br />
                                và nhiều quyền lợi khác.
                            </p>
                            <button
                                className={cx('hero-button')}
                                onClick={() => window.open('https://forms.gle/ZC8mAbxMLnZ3qRci8', '_blank')}
                            >
                                Live Now
                            </button>
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
