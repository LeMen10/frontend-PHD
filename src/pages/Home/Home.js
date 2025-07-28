import className from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images/images';
import Banner from '~/components/Banner/Banner';
import { useState } from 'react';
import { ChalkboardUserIcon, DollarIcon, PersonIcon } from '~/components/Icons';

const cx = className.bind(styles);

const Home = () => {
    const services = [
        {
            title: 'Tư vấn xây kênh Tiktok/Youtube',
            price: 'Từ 500.000 đến 1.000.000',
            description: [
                '✅ Phân tích thị trường và định hướng nội dung.',
                '✅ Hướng dẫn xây dựng profile cá nhân.',
                '✅ Tối ưu hóa video.',
                '✅ Chiến lược tăng follow, tương tác và giữ chân người xem.',
                '✅ Xây dựng lịch đăng video và quản lý nội dung nhất quán.',
                '✅ Tư vấn phát triển thương hiệu cá nhân và kiếm tiền trên nền tảng.',
            ],
        },
        {
            title: 'Tư vấn live stream',
            price: 'Từ 500.000 đến 1.000.000',
            description: [
                '✅ Hướng dẫn chuẩn bị nội dung và kịch bản livestream.',
                '✅ Tư vấn thiết bị, phần mềm, ánh sáng, âm thanh phù hợp.',
                '✅ Cách tương tác với người xem để giữ chân và tăng tương tác.',
                '✅ Chiến lược xây dựng thương hiệu cá nhân khi livestream.',
                '✅ Hỗ trợ lên kế hoạch livestream định kỳ và quản lý lịch trình.',
            ],
        },
        {
            // icon: <UsersIcon size={48} className="service-icon" />,
            title: 'Dịch vụ viết kịch bản Youtube/Tiktok',
            price: 'Từ 100.000 đến 1.000.000',
            description: [
                '✅ Viết kịch bản theo chủ đề: tin tức, giải trí, phim, anime/manga, vlog,...',
                '✅ Tối ưu nội dung theo định dạng nền tảng (ngắn gọn, cuốn hút).',
                '✅ Hỗ trợ sáng tạo nội dung cho từng video hoặc theo series.',
                '✅ Tư vấn cách thể hiện nội dung để tăng tương tác và giữ chân người xem.',
                '✅ Cam kết nội dung không vi phạm bản quyền hoặc chính sách nền tảng.',
            ],
        },
        {
            // icon: <UsersIcon size={48} className="service-icon" />,
            title: 'Dựng video Youtube/Tiktok',
            price: 'Từ 100.000 đến 1.000.000',
            description: [
                '✅ Dựng video theo kịch bản có sẵn hoặc đề xuất ý tưởng nội dung.',
                '✅ Cắt ghép, thêm hiệu ứng, âm thanh, sub (phụ đề) chuyên nghiệp.',
                '✅ Tối ưu định dạng video theo chuẩn TikTok hoặc YouTube.',
                '✅ Chèn logo, intro, outro theo thương hiệu cá nhân.',
                '✅ Hỗ trợ xuất file chất lượng cao, sẵn sàng đăng tải.',
            ],
        },
    ];

    const faqData = [
        {
            question: '1. PHD Studio chuyên cung cấp những dịch vụ gì?',
            answer: (
                <>
                    PHD Studio cung cấp dịch vụ truyền thông đa dạng và chuyên sâu, bao gồm:
                    <br />– Tư vấn chiến lược thương hiệu và định hướng nội dung
                    <br />– Sản xuất video, TVC, viral clip, motion graphics
                    <br />– Quản lý và phát triển kênh Tiktok, Youtube, Facebook
                    <br />– Thiết kế bộ nhận diện thương hiệu (logo, slogan, hồ sơ năng lực)
                    <br />– Tổ chức sự kiện truyền thông, booking KOLs/KOCs theo ngành nghề
                </>
            ),
        },
        {
            question: '2. Tôi chưa có kinh nghiệm truyền thông, công ty có hỗ trợ từ đầu không?',
            answer: (
                <>
                    Chắc chắn có. PHD Studio có nhiều kinh nghiệm làm việc với cá nhân, startup và doanh nghiệp nhỏ chưa
                    từng triển khai truyền thông. Chúng tôi sẽ tư vấn chiến lược phù hợp, hỗ trợ xây dựng hình ảnh
                    thương hiệu, thiết kế nhận diện và hướng dẫn bạn từng bước để phát triển hiệu quả trên các nền tảng
                    số như Tiktok, Youtube, v.v.
                </>
            ),
        },
        {
            question: '3. Chi phí dịch vụ tại PHD Studio được tính như thế nào?',
            answer: (
                <>
                    Chi phí dịch vụ phụ thuộc vào quy mô, loại hình và thời lượng dự án. Chúng tôi luôn trao đổi rõ ràng
                    với khách hàng, gửi báo giá chi tiết từng hạng mục, đảm bảo minh bạch – không phát sinh chi phí bất
                    ngờ. Với từng ngân sách cụ thể, PHD Studio đều có phương án tối ưu để mang lại hiệu quả cao nhất.
                </>
            ),
        },
        {
            question: '4. PHD Studio có nhận sản xuất video hoặc TVC riêng lẻ không?',
            answer: (
                <>
                    Có. Ngoài các gói dịch vụ trọn gói, PHD Studio nhận sản xuất video riêng lẻ theo yêu cầu như: Video
                    giới thiệu doanh nghiệp, TVC quảng cáo, Clip viral cho mạng xã hội, Video phỏng vấn, review sản
                    phẩm. Chúng tôi có đội ngũ đạo diễn, quay dựng và biên kịch chuyên nghiệp để đảm bảo chất lượng đầu
                    ra theo đúng ý tưởng và mục tiêu truyền thông của bạn.
                </>
            ),
        },
        {
            question: '5. Thời gian triển khai một dự án là bao lâu?',
            answer: (
                <>
                    Thời gian thực hiện phụ thuộc vào mức độ phức tạp và số lượng đầu việc. Các dự án đơn giản như video
                    ngắn thường hoàn thành trong 5–7 ngày, còn các chiến dịch lớn hoặc sản phẩm cần lên ý tưởng kỹ lưỡng
                    sẽ kéo dài từ 2–4 tuần. PHD Studio sẽ cung cấp lịch trình chi tiết ngay từ đầu để bạn dễ theo dõi và
                    phối hợp.
                </>
            ),
        },
        {
            question: '6. Tôi muốn phát triển kênh Tiktok/Youtube cá nhân, PHD Studio có gói dịch vụ phù hợp không?',
            answer: (
                <>
                    Hoàn toàn phù hợp. Chúng tôi có các gói dịch vụ riêng cho cá nhân muốn xây dựng kênh chuyên nghiệp
                    từ đầu, bao gồm:
                    <br />– Tư vấn xây dựng nội dung và cá tính thương hiệu cá nhân
                    <br />– Lên lịch đăng bài, kịch bản video
                    <br />– Hướng dẫn quay dựng cơ bản hoặc hỗ trợ full-service theo ngân sách
                </>
            ),
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section id="home" className={cx('hero-section')}>
                <div
                    className={cx('position-relative', 'w-100', 'mb-5')}
                    style={{ height: '100vh', overflow: 'hidden' }}
                >
                    <Banner />
                    <div
                        className={cx('container', 'h-100', 'd-flex', 'align-items-center', 'position-relative')}
                        style={{ zIndex: 2 }}
                    >
                        <div className={cx('text-white', 'banner-content')}>
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
                            <p
                                onClick={() => window.open('https://forms.gle/ZC8mAbxMLnZ3qRci8', '_blank')}
                                className={cx('btn', 'btn-primary', 'btn-lg', 'mt-3')}
                            >
                                Liên hệ ngay
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('container')}>
                    <div className="text-center mb-5">
                        <h2 className={cx('title', 'mb-3')}>Dịch vụ của chúng tôi</h2>
                        <p className={cx('subtitle')}>
                            Chúng tôi cung cấp các dịch vụ chuyên về sáng tạo nội dung.
                        </p>
                    </div>

                    <div className="row">
                        {services.map((service, index) => (
                            <div key={index} className="col-md-6 col-lg-6 mb-4">
                                <div className={cx('h-100', 'service-card')}>
                                    <div className={cx('card-body', 'service-content')}>
                                        {service.icon && (
                                            <div className={cx('service-icon', 'mb-2')}>{service.icon}</div>
                                        )}
                                        <h5 className={cx('card-title', 'service-title')}>{service.title}</h5>
                                        <p className={cx('service-price', 'text-primary', 'fw-semibold')}>
                                            {service.price}
                                        </p>
                                        <div className={cx('card-text', 'service-description')}>
                                            {Array.isArray(service.description) ? (
                                                <ul className="ps-3 mb-0">
                                                    {service.description.map((line, idx) => (
                                                        <p key={idx} className="mb-1">
                                                            {line}
                                                        </p>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{service.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 col-lg-12">
                            <div className={cx('cta-card', 'bg-dark', 'text-white', 'p-4', 'rounded', 'text-center')}>
                                <h3 className={cx('cta-title', 'mb-3')}>ĐẶC BIỆT</h3>
                                <p className={cx('cta-text', 'mb-3')}>
                                    Tuyển dụng, đào tạo Streamer chuyên nghiệp, hỗ trợ xây dựng thương hiệu cá nhân và
                                    phát triển kênh stream của bạn.
                                </p>
                                <button
                                    onClick={() => window.open('https://forms.gle/ZC8mAbxMLnZ3qRci8', '_blank')}
                                    className={cx('cta-button', 'btn', 'btn-light', 'fw-bold')}
                                >
                                    Ứng tuyển ngay
                                </button>
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
                                        <PersonIcon />
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
                                        <DollarIcon />
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
                                        <ChalkboardUserIcon />
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
                        <h2 style={{ fontWeight: 'bold', marginBottom: '3rem' }}>
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
                        {faqData.map((item, index) => (
                            <div key={index} className={cx('col-md-4', 'mb-4')}>
                                <div className={cx('faq-item', openIndex === index && 'active', 'p-4', 'bg-light')}>
                                    <h4 onClick={() => toggleFAQ(index)}>{item.question}</h4>

                                    <div className={cx('faq-answer', openIndex === index && 'open')}>
                                        <p style={{ whiteSpace: 'pre-line' }}>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
