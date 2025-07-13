import className from 'classnames/bind';
import styles from './Service.module.scss';

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
            ]       
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
                <div className={cx('container')}>
                    <div className={cx('text-center')}>
                        <h2 className={cx('title')}>Dịch vụ của chúng tôi</h2>
                        <p className={cx('subtitle')}>
                            Chúng tôi cung cấp các dịch vụ đào tạo toàn diện để giúp bạn trở thành một streamer thành
                            công
                        </p>
                    </div>
                    <div className={cx('services-grid')}>
                        {services.map((service, index) => (
                            <div key={index} className={cx('service-card')}>
                                <div className={cx('service-content')}>
                                    {service.icon}
                                    <h3 className={cx('service-title')}>{service.title}</h3>
                                    <p className={cx('service-price')}>{service.price}</p>
                                    <div className={cx('service-description')}>
                                        {Array.isArray(service.description) ? (
                                            service.description.map((line, idx) => (
                                                <p key={idx}>{line}</p>
                                            ))
                                        ) : (
                                            <p>{service.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('cta-section')}>
                        <div className={cx('cta-card')}>
                            <h3 className={cx('cta-title')}>ĐẶC BIỆT</h3>
                            <p className={cx('cta-text')}>
                                Tuyển dụng, đào tạo Streamer chuyên nghiệp, hỗ trợ xây dựng thương hiệu cá nhân và
                                phát triển kênh stream của bạn.
                            </p>
                            <button className={cx('cta-button')}>Live Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
