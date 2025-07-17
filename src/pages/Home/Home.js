import className from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images/images';

const cx = className.bind(styles);

const Home = () => {
    return (
        <>
            <section id="home" className={cx('hero-section')}>
                <div className={cx('position-relative', 'w-100')} style={{ height: '100vh' }}>
                    {/* Ảnh nền */}
                    <img
                        src={images.banner}
                        alt="Banner"
                        className={cx('position-absolute', 'w-100', 'h-100')}
                        style={{ objectFit: 'cover', top: 0, left: 0 }}
                    />

                    {/* Lớp overlay nội dung */}
                    <div
                        className={cx(
                            'container',
                            'h-100',
                            'd-flex',
                            'align-items-center',
                            'justify-content-start',
                            'position-relative',
                        )}
                        style={{ paddingLeft: '2rem', paddingRight: '2rem', zIndex: 1 }}
                    >
                        <div className={cx('text-white')}>
                            <h1 className={cx('display-4', 'mb-4')} style={{ color: '#00ffea' }}>
                                Trở thành Streamer chuyên nghiệp
                            </h1>

                            <p style={{ color: '#ffffffcc' }}>
                                PHD Studio là đơn vị chuyên nghiệp hàng đầu trong lĩnh vực đào tạo và hỗ trợ phát triển
                                kênh TikTok dành cho cá nhân, doanh nghiệp và nhà sáng tạo nội dung. Với cam kết đồng
                                hành trọn gói, PHD Studio cung cấp kênh TikTok sẵn sàng hoạt động, hỗ trợ cấp quyền
                                livestream, hướng dẫn sử dụng OBS, edit video, chống vi phạm bản quyền, và đặc biệt là
                                đẩy livestream lên xu hướng nhanh chóng.
                            </p>

                            <p style={{ color: '#ffffffcc' }}>
                                PHD Studio còn giúp creator nhận 100% tiền quảng cáo từ nhãn hàng, tặng khóa học dựng
                                video miễn phí trên cả PC và điện thoại, cùng nhiều quyền lợi hấp dẫn khác – tất cả để
                                giúp bạn tăng trưởng mạnh mẽ, chuyên nghiệp và bền vững trên nền tảng TikTok.
                            </p>

                            <a href="#dangky" style={{ color: '#ff00ff', textDecoration: 'underline' }}>
                                Đăng ký ngay
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('container-fluid', 'bg-image')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-7', 'my-5', 'pt-5', 'pb-lg-5')}>
                                <div className={cx('section-title', 'position-relative', 'mb-4')}>
                                    <h6
                                        className={cx(
                                            'd-inline-block',
                                            'position-relative',
                                            'text-secondary',
                                            'text-uppercase',
                                            'pb-2',
                                        )}
                                    >
                                        Why Choose Us?
                                    </h6>
                                    <h1 className={cx('display-4')}>Why You Should Start Learning with Us?</h1>
                                </div>
                                <p className={cx('mb-4', 'pb-2')}>
                                    Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet
                                    voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore
                                    clita est. Diam sanctus gubergren sit rebum clita amet.
                                </p>

                                <div className={cx('d-flex', 'mb-3')}>
                                    <div className={cx('btn-icon', 'bg-primary', 'mr-4')}>
                                        <i className={cx('fa', 'fa-2x', 'fa-graduation-cap', 'text-white')}></i>
                                    </div>
                                    <div className={cx('mt-n1')}>
                                        <h4>Skilled Instructors</h4>
                                        <p>
                                            Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita
                                            magna kasd no nonumy et eos dolor magna ipsum.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('d-flex', 'mb-3')}>
                                    <div className={cx('btn-icon', 'bg-secondary', 'mr-4')}>
                                        <i className={cx('fa', 'fa-2x', 'fa-certificate', 'text-white')}></i>
                                    </div>
                                    <div className={cx('mt-n1')}>
                                        <h4>International Certificate</h4>
                                        <p>
                                            Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita
                                            magna kasd no nonumy et eos dolor magna ipsum.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('d-flex')}>
                                    <div className={cx('btn-icon', 'bg-warning', 'mr-4')}>
                                        <i className={cx('fa', 'fa-2x', 'fa-book-reader', 'text-white')}></i>
                                    </div>
                                    <div className={cx('mt-n1')}>
                                        <h4>Online Classes</h4>
                                        <p className={cx('m-0')}>
                                            Labore rebum duo est Sit dolore eos sit tempor eos stet, vero vero clita
                                            magna kasd no nonumy et eos dolor magna ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('col-lg-5')} style={{ minHeight: '500px' }}>
                                <div className={cx('position-relative', 'h-100')}>
                                    {/* <img
                                        className={cx('position-absolute', 'w-100', 'h-100')}
                                        src="img/feature.jpg"
                                        alt="Why Choose Us"
                                        style={{ objectFit: 'cover' }}
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
