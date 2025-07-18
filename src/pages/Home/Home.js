import className from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images/images';

const cx = className.bind(styles);

const Home = () => {
    return (
        <>
            <section id="home" className={cx('hero-section')}>
                <div className={cx('position-relative', 'w-100')} style={{ height: '100vh', overflow: 'hidden' }}>
                    <img
                        src={images.banner}
                        alt="Banner"
                        className={cx('position-absolute', 'w-100', 'h-100')}
                        style={{ objectFit: 'cover', top: 0, left: 0 }}
                    />

                    <div
                        className={cx('position-absolute', 'w-100', 'h-100')}
                        style={{
                            top: 0,
                            left: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1,
                        }}
                    ></div>

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
                        <div
                            className={cx('d-flex', 'align-items-center', 'h-100')}
                            style={{
                                position: 'relative',
                                zIndex: 2,
                                padding: '2rem',
                            }}
                        >
                            <div style={{ width: '50%' }}>
                                <div className={cx('text-white')}>
                                    <h1 className={cx('display-4', 'mb-4')} style={{ color: '#ffffff' }}>
                                        Trở thành Streamer chuyên nghiệp
                                    </h1>

                                    <p style={{ color: '#ffffff' }}>
                                        PHD Studio là đơn vị chuyên nghiệp hàng đầu trong lĩnh vực đào tạo và hỗ trợ
                                        phát triển kênh TikTok dành cho cá nhân, doanh nghiệp và nhà sáng tạo nội dung.
                                        Với cam kết đồng hành trọn gói, PHD Studio cung cấp kênh TikTok sẵn sàng hoạt
                                        động, hỗ trợ cấp quyền livestream, hướng dẫn sử dụng OBS, edit video, chống vi
                                        phạm bản quyền, và đặc biệt là đẩy livestream lên xu hướng nhanh chóng.
                                    </p>

                                    <p style={{ color: '#ffffff' }}>
                                        PHD Studio còn giúp creator nhận 100% tiền quảng cáo từ nhãn hàng, tặng khóa học
                                        dựng video miễn phí trên cả PC và điện thoại, cùng nhiều quyền lợi hấp dẫn khác
                                        – tất cả để giúp bạn tăng trưởng mạnh mẽ, chuyên nghiệp và bền vững trên nền
                                        tảng TikTok.
                                    </p>

                                    <a href="#dangky" style={{ color: '#ff00ff', textDecoration: 'underline' }}>
                                        Đăng ký ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('container-fluid', 'bg-image')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-7', 'my-5', 'pt-5', 'pb-lg-5')}>
                                <div className={cx('section-title', 'position-relative', 'mb-4')}>
                                    <h1 className={cx('display-4')}>Cam kết của chúng tôi</h1>
                                </div>
                                <p className={cx('mb-4', 'pb-2')}>
                                    Với sứ mệnh giúp mọi người tự tin livestream, tạo ra nội dung chất lượng và xây dựng
                                    thương hiệu cá nhân mạnh mẽ trên TikTok, PHD Studio cam kết đồng hành cùng bạn từ
                                    những bước đầu đến khi bạn thật sự thành công.
                                </p>

                                <div className={cx('d-flex', 'mb-3')}>
                                    <div className={cx('btn-icon', 'bg-primary', 'mr-4')}>
                                        <i className={cx('fa', 'fa-2x', 'fa-graduation-cap', 'text-white')}></i>
                                    </div>
                                    <div className={cx('mt-n1')}>
                                        <h4>Chuyên gia đồng hành 1:1</h4>
                                        <p>
                                            Chúng tôi có đội ngũ hỗ trợ riêng cho từng học viên, luôn kèm cặp và giải
                                            đáp chi tiết từng vấn đề về livestream, video và phát triển kênh TikTok.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('d-flex', 'mb-3')}>
                                    <div className={cx('btn-icon', 'bg-secondary', 'mr-4')}>
                                        <i className={cx('fa', 'fa-2x', 'fa-certificate', 'text-white')}></i>
                                    </div>
                                    <div className={cx('mt-n1')}>
                                        <h4>Cam kết thu nhập từ quảng cáo</h4>
                                        <p>
                                            Chúng tôi cam kết hỗ trợ bạn tối đa trong việc phát triển kênh TikTok và gia
                                            tăng thu nhập từ quảng cáo.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx('d-flex')}>
                                    <div className={cx('btn-icon', 'bg-warning', 'mr-4')}>
                                        <i className={cx('fa', 'fa-2x', 'fa-book-reader', 'text-white')}></i>
                                    </div>
                                    <div className={cx('mt-n1')}>
                                        <h4>Cấp kênh TikTok & quyền livestream</h4>
                                        <p className={cx('m-0')}>
                                            Học viên được cấp kênh TikTok sẵn sàng hoạt động, hỗ trợ quyền live, hướng
                                            dẫn kỹ thuật qua OBS và các công cụ chuyên nghiệp.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('col-lg-5', 'my-5', 'pt-5', 'pb-lg-5')} style={{ minHeight: '500px' }}>
                                <div className={cx('position-relative', 'h-100')}>
                                    <img
                                        className={cx('position-absolute', 'w-100', 'h-100')}
                                        src={images.camKet}
                                        alt="Why Choose Us"
                                        style={{ objectFit: 'cover' }}
                                    />
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
