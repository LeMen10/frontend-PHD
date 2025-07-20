import className from 'classnames/bind';
import styles from './Service.module.scss';
import Banner from '~/components/Banner/Banner';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

const Service = () => {
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

    return (
        <>
            <section id="services" className={cx('services-section')}>
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
                                Phát triển kênh chuyên nghiệp
                            </h1>
                            <p style={{ color: '#ffffff', fontWeight: '600' }}>
                                Bạn đang bắt đầu hành trình xây dựng thương hiệu cá nhân, phát triển kênh nội dung hoặc
                                tìm kiếm giải pháp sáng tạo hiệu quả? PHD Studio mang đến các dịch vụ từ tư vấn chiến
                                lược, livestream, viết kịch bản đến dựng video chuyên nghiệp – tất cả đều được thiết kế
                                để giúp bạn phát triển mạnh mẽ, bền vững và tạo dấu ấn riêng biệt trên nền tảng số.
                            </p>
                            <Link to="/services" className={cx('btn', 'btn-primary', 'btn-lg', 'mt-3')}>
                                Liên hệ ngay
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    <div className="text-center mb-5">
                        <h2 className={cx('title', 'mb-3')}>Dịch vụ của chúng tôi</h2>
                        <p className={cx('subtitle')}>
                            Chúng tôi cung cấp các dịch vụ đào tạo toàn diện để giúp bạn trở thành một streamer thành
                            công
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
                        <div className="col-md-8 col-lg-9">
                            <div className={cx('cta-card', 'bg-dark', 'text-white', 'p-4', 'rounded', 'text-center')}>
                                <h3 className={cx('cta-title', 'mb-3')}>ĐẶC BIỆT</h3>
                                <p className={cx('cta-text', 'mb-3')}>
                                    Tuyển dụng, đào tạo Streamer chuyên nghiệp, hỗ trợ xây dựng thương hiệu cá nhân và
                                    phát triển kênh stream của bạn.
                                </p>
                                <button className={cx('cta-button', 'btn', 'btn-light', 'fw-bold')}>Live Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
