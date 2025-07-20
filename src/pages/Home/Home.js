import className from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images/images';
import { Link } from 'react-router-dom';
import Banner from '~/components/Banner/Banner';

const cx = className.bind(styles);

const Home = () => {
    return (
        <>
            <section id="home" className={cx('hero-section')}>
                {/* <div className={cx('position-relative', 'w-100')} style={{ height: '100vh', overflow: 'hidden' }}>
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
                            background: 'rgba(0, 0, 0, 0.3)',
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
                </div> */}
                <div className={cx('position-relative', 'w-100')} style={{ height: '100vh', overflow: 'hidden' }}>
                    <Banner />
                    <div
                        className={cx('container', 'h-100', 'd-flex', 'align-items-center', 'position-relative')}
                        style={{ zIndex: 2 }}
                    >
                        <div
                            className={cx('text-white')}
                            style={{
                                maxWidth: '720px',
                                textAlign: 'left',
                                paddingTop: '70px',
                            }}
                        >
                            <h1 className={cx('display-4', 'mb-4')} style={{ color: '#ffffff' }}>
                                Chào mừng đến với PHD Studio
                            </h1>
                            <p style={{ color: '#ffffff', fontWeight: 500 }}>
                                PHD Studio là đơn vị chuyên nghiệp hàng đầu trong lĩnh vực đào tạo và hỗ trợ phát triển
                                kênh TikTok dành cho cá nhân, doanh nghiệp và nhà sáng tạo nội dung. Với cam kết đồng
                                hành trọn gói, PHD Studio cung cấp kênh TikTok sẵn sàng hoạt động, hỗ trợ cấp quyền
                                livestream, hướng dẫn sử dụng OBS, edit video, chống vi phạm bản quyền, và đặc biệt là
                                đẩy livestream lên xu hướng nhanh chóng.
                            </p>
                            <p style={{ color: '#ffffff', fontWeight: 500 }}>
                                PHD Studio còn giúp creator nhận 100% tiền quảng cáo từ nhãn hàng, tặng khóa học dựng
                                video miễn phí trên cả PC và điện thoại, cùng nhiều quyền lợi hấp dẫn khác – tất cả để
                                giúp bạn tăng trưởng mạnh mẽ, chuyên nghiệp và bền vững trên nền tảng TikTok.
                            </p>
                            <Link to="/services" className={cx('btn', 'btn-primary', 'btn-lg', 'mt-3')}>
                                Liên hệ ngay
                            </Link>
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

                <section
                    className={cx('container-fluid')}
                    style={{ background: 'linear-gradient(to right, #facc15, #fbbf24)', padding: '4rem 2rem' }}
                >
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>✨ Chúng tôi mang đến những gì</p>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem' }}>
                            Giá Trị Của PHD Studio
                            <br />
                            Đối Với Khách Hàng
                        </h2>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1 1 0%', minWidth: '250px' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>1</div>
                                <h4 style={{ fontWeight: 'bold' }}>Sáng Tạo Không Giới Hạn</h4>
                                <p style={{ marginTop: '0.5rem' }}>
                                    Chúng tôi luôn tìm kiếm những ý tưởng mới mẻ, đột phá để tạo nên nội dung truyền
                                    thông khác biệt và thu hút. Sự sáng tạo là nền tảng giúp thương hiệu của bạn nổi bật
                                    và ghi dấu trong tâm trí khách hàng.
                                </p>
                            </div>

                            <div style={{ flex: '1 1 0%', minWidth: '250px' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>2</div>
                                <h4 style={{ fontWeight: 'bold' }}>Đồng Hành Cùng Khách Hàng</h4>
                                <p style={{ marginTop: '0.5rem' }}>
                                    PHD Studio không chỉ cung cấp dịch vụ, mà là người bạn đồng hành đáng tin cậy. Chúng
                                    tôi lắng nghe, thấu hiểu và cùng bạn phát triển chiến lược truyền thông phù hợp với
                                    mục tiêu và ngân sách thực tế.
                                </p>
                            </div>

                            <div style={{ flex: '1 1 0%', minWidth: '250px' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>3</div>
                                <h4 style={{ fontWeight: 'bold' }}>Hiệu Quả Là Ưu Tiên Hàng Đầu</h4>
                                <p style={{ marginTop: '0.5rem' }}>
                                    Mỗi dự án được triển khai đều hướng tới kết quả rõ ràng: tăng nhận diện thương hiệu,
                                    nâng cao tương tác, chuyển đổi hiệu quả. Chúng tôi đo lường bằng chỉ số cụ thể –
                                    không phải lời hứa suông.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={cx('faq-section', 'container-fluid', 'py-5')}>
                    <div className={cx('row', 'justify-content-center')}>
                        <div className={cx('col-lg-6')}>
                            <div className={cx('faq-title', 'text-center', 'mb-5')}>
                                <h6 className={cx('text-uppercase', 'text-secondary', 'pb-2')}>FAQ</h6>
                                <h2>Những Câu Hỏi Thường Gặp?</h2>
                                <p className="mb-0">
                                    PHD Studio giải đáp những thắc mắc phổ biến từ khách hàng của chúng tôi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('row')}>
                        <div className={cx('col-md-4', 'mb-4')}>
                            <div className={cx('faq-item', 'p-4', 'bg-light', 'h-100')}>
                                <h4>1. PHD Studio chuyên cung cấp những dịch vụ gì?</h4>
                                <p>
                                    PHD Studio cung cấp dịch vụ truyền thông đa dạng và chuyên sâu, bao gồm:
                                    <br />– Tư vấn chiến lược thương hiệu và định hướng nội dung
                                    <br />– Sản xuất video, TVC, viral clip, motion graphics
                                    <br />– Quản lý và phát triển kênh Tiktok, Youtube, Facebook
                                    <br />– Thiết kế bộ nhận diện thương hiệu (logo, slogan, hồ sơ năng lực)
                                    <br />– Tổ chức sự kiện truyền thông, booking KOLs/KOCs theo ngành nghề
                                </p>
                            </div>
                        </div>

                        <div className={cx('col-md-4', 'mb-4')}>
                            <div className={cx('faq-item', 'p-4', 'bg-light', 'h-100')}>
                                <h4>2. Tôi chưa có kinh nghiệm truyền thông, công ty có hỗ trợ từ đầu không?</h4>
                                <p>
                                    Chắc chắn có. PHD Studio có nhiều kinh nghiệm làm việc với cá nhân, startup và doanh
                                    nghiệp nhỏ chưa từng triển khai truyền thông. Chúng tôi sẽ tư vấn chiến lược phù
                                    hợp, hỗ trợ xây dựng hình ảnh thương hiệu, thiết kế nhận diện và hướng dẫn bạn từng
                                    bước để phát triển hiệu quả trên các nền tảng số như Tiktok, Youtube, v.v.
                                </p>
                            </div>
                        </div>

                        <div className={cx('col-md-4', 'mb-4')}>
                            <div className={cx('faq-item', 'p-4', 'bg-light', 'h-100')}>
                                <h4>3. Chi phí dịch vụ tại PHD Studio được tính như thế nào?</h4>
                                <p>
                                    Chi phí dịch vụ phụ thuộc vào quy mô, loại hình và thời lượng dự án. Chúng tôi luôn
                                    trao đổi rõ ràng với khách hàng, gửi báo giá chi tiết từng hạng mục, đảm bảo minh
                                    bạch – không phát sinh chi phí bất ngờ. Với từng ngân sách cụ thể, PHD Studio đều có
                                    phương án tối ưu để mang lại hiệu quả cao nhất.
                                </p>
                            </div>
                        </div>

                        <div className={cx('col-md-4', 'mb-4')}>
                            <div className={cx('faq-item', 'p-4', 'bg-light', 'h-100')}>
                                <h4>4. PHD Studio có nhận sản xuất video hoặc TVC riêng lẻ không?</h4>
                                <p>
                                    Có. Ngoài các gói dịch vụ trọn gói, PHD Studio nhận sản xuất video riêng lẻ theo yêu
                                    cầu như: Video giới thiệu doanh nghiệp, TVC quảng cáo, Clip viral cho mạng xã hội,
                                    Video phỏng vấn, review sản phẩm. Chúng tôi có đội ngũ đạo diễn, quay dựng và biên
                                    kịch chuyên nghiệp để đảm bảo chất lượng đầu ra theo đúng ý tưởng và mục tiêu truyền
                                    thông của bạn.
                                </p>
                            </div>
                        </div>

                        <div className={cx('col-md-4', 'mb-4')}>
                            <div className={cx('faq-item', 'p-4', 'bg-light', 'h-100')}>
                                <h4>5. Thời gian triển khai một dự án là bao lâu?</h4>
                                <p>
                                    Thời gian thực hiện phụ thuộc vào mức độ phức tạp và số lượng đầu việc. Các dự án
                                    đơn giản như video ngắn thường hoàn thành trong 5–7 ngày, còn các chiến dịch lớn
                                    hoặc sản phẩm cần lên ý tưởng kỹ lưỡng sẽ kéo dài từ 2–4 tuần. PHD Studio sẽ cung
                                    cấp lịch trình chi tiết ngay từ đầu để bạn dễ theo dõi và phối hợp.
                                </p>
                            </div>
                        </div>

                        <div className={cx('col-md-4', 'mb-4')}>
                            <div className={cx('faq-item', 'p-4', 'bg-light', 'h-100')}>
                                <h4>
                                    6. Tôi muốn phát triển kênh Tiktok/Youtube cá nhân, PHD Studio có gói dịch vụ phù
                                    hợp không?
                                </h4>
                                <p>
                                    Hoàn toàn phù hợp. Chúng tôi có các gói dịch vụ riêng cho cá nhân muốn xây dựng kênh
                                    chuyên nghiệp từ đầu, bao gồm: Tư vấn xây dựng nội dung và cá tính thương hiệu cá
                                    nhân, Lên lịch đăng bài, kịch bản video
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
