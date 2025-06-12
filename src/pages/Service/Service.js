import className from 'classnames/bind';
import styles from './Service.module.scss';

const cx = className.bind(styles);

const Service = () => {
    const services = [
        {
            // icon: <MonitorIcon size={48} className="service-icon" />,
            title: 'Thiết lập kỹ thuật',
            description: 'Hướng dẫn cài đặt phần mềm, thiết bị và tối ưu hóa chất lượng stream.',
        },
        {
            // icon: <MicIcon size={48} className="service-icon" />,
            title: 'Kỹ năng trình bày',
            description: 'Đào tạo kỹ năng giao tiếp, luyện giọng nói và tương tác với người xem.',
        },
        {
            // icon: <TrendingUpIcon size={48} className="service-icon" />,
            title: 'Phát triển kênh',
            description: 'Chiến lược xây dựng thương hiệu cá nhân và tăng lượng người theo dõi.',
        },
        {
            // icon: <UsersIcon size={48} className="service-icon" />,
            title: 'Cộng đồng & Networking',
            description: 'Kết nối với các streamer khác và xây dựng cộng đồng người hâm mộ.',
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
                                    <p className={cx('service-description')}>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('cta-section')}>
                        <div className={cx('cta-card')}>
                            <h3 className={cx('cta-title')}>Khóa học đặc biệt</h3>
                            <p className={cx('cta-text')}>
                                Đăng ký khóa học "Streamer Pro" và nhận ngay ưu đãi 20% cho 10 học viên đầu tiên
                            </p>
                            <button className={cx('cta-button')}>Đặt dịch vụ ngay</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
