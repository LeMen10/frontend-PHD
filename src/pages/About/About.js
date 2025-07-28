import className from 'classnames/bind';
import styles from './About.module.scss';
import {
    ShieldIcon,
    RocketIcon,
    HeadphonesIcon,
    LightbulbIcon,
} from '~/components/Icons';
import Banner from '~/components/Banner/Banner';

const cx = className.bind(styles);

const About = () => {
    return (
        <>
            <section className={cx('contact-section')} id="contact">
                <div
                    className={cx('position-relative', 'w-100', 'mb-5')}
                    style={{ height: '100vh', overflow: 'hidden' }}
                >
                    <Banner />
                    <div
                        className={cx('container', 'h-100', 'd-flex', 'align-items-center', 'position-relative')}
                        style={{ zIndex: 2 }}
                    >
                        <div
                            className={cx('text-white', 'banner-content')}
                        >
                            <h1 className={cx('display-4', 'mb-4')} style={{ color: '#ffffff' }}>
                                Chúng tôi là ai?
                            </h1>
                            <p style={{ color: '#ffffff', fontWeight: 500 }}>
                                PHD Studio được thành lập từ niềm tin rằng bất cứ ai cũng có thể tỏa sáng nếu có đúng
                                người đồng hành. Chúng tôi tạo ra giải pháp trọn gói giúp bạn phát triển thương hiệu cá
                                nhân và nội dung số trên TikTok, YouTube một cách chuyên nghiệp.
                            </p>
                            <p style={{ color: '#ffffff', fontWeight: 500 }}>
                                Với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực truyền thông, marketing và sản
                                xuất nội dung, PHD Studio mang đến giải pháp toàn diện: từ tư vấn định hướng chiến lược
                                nội dung, hỗ trợ kỹ thuật livestream, cấp quyền TikTok, dựng video chuẩn xu hướng, đến
                                chống vi phạm bản quyền và tối ưu hiệu quả quảng cáo. Không chỉ cung cấp các công cụ,
                                chúng tôi còn đồng hành, đào tạo và phát triển kỹ năng cho khách hàng để tự tin làm chủ
                                nền tảng và tạo dấu ấn riêng biệt.
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

                <div className={cx('container-about')}>
                    <div className={cx('about-container')}>
                        <div className={cx('hero-section')}>
                            <h2 className={cx('about-title')}>Về PHD Studio</h2>
                        </div>
                        <div className={cx('intro-section')}>
                            <p className={cx('intro-text')}>
                                PHD Studio là đơn vị tiên phong trong lĩnh vực đào tạo và hỗ trợ phát triển nội dung số,
                                đặc biệt trên các nền tảng như TikTok và YouTube. Chúng tôi ra đời với sứ mệnh đồng hành
                                cùng các cá nhân, doanh nghiệp và nhà sáng tạo nội dung trên hành trình xây dựng thương
                                hiệu cá nhân, mở rộng tầm ảnh hưởng và khai thác hiệu quả tiềm năng của nền kinh tế sáng
                                tạo.
                            </p>
                        </div>
                        <div className={cx('values-section')}>
                            <div className={cx('value-card')}>
                                <div className={cx('icon-container')}>
                                    <LightbulbIcon className={cx('value-icon')} />
                                </div>
                                <h3>Sáng tạo dẫn lối – Kết quả làm chuẩn</h3>
                                <p>
                                    Tại PHD Studio, chúng tôi không chỉ làm nội dung – chúng tôi tạo ra trải nghiệm khác
                                    biệt. Mỗi ý tưởng được khởi nguồn từ nhu cầu thực tế, được hiện thực hóa bằng chiến
                                    lược và đo lường bằng kết quả.
                                </p>
                                <blockquote>Chúng tôi sáng tạo không phải để đẹp hơn – mà để hiệu quả hơn.</blockquote>
                            </div>
                            <div className={cx('value-card')}>
                                <div className={cx('icon-container')}>
                                    <HeadphonesIcon className={cx('value-icon')} />
                                </div>
                                <h3>Lắng nghe sâu – Hiểu đúng việc – Làm đúng cách</h3>
                                <p>
                                    Mỗi khách hàng là một hành trình riêng biệt. PHD Studio luôn đặt mình vào vị trí
                                    người đối diện để hiểu đúng mong muốn, văn hóa thương hiệu và tập khán giả. Từ đó,
                                    chúng tôi tư duy giải pháp thay vì chỉ đơn thuần "làm theo yêu cầu".
                                </p>
                            </div>
                            <div className={cx('value-card')}>
                                <div className={cx('icon-container')}>
                                    <RocketIcon className={cx('value-icon')} />
                                </div>
                                <h3>Luôn vượt chuẩn – Luôn vượt giới hạn</h3>
                                <p>
                                    Chúng tôi không hài lòng với "đủ đúng" – mà luôn hướng đến "vượt kỳ vọng". Tại PHD
                                    Studio, mỗi thành viên đều mang tinh thần học hỏi, chủ động và dám làm khác. Vì chỉ
                                    khi vượt ra khỏi vùng an toàn, bạn mới tạo ra điều chưa từng tồn tại.
                                </p>
                            </div>
                            <div className={cx('value-card')}>
                                <div className={cx('icon-container')}>
                                    <ShieldIcon className={cx('value-icon')} />
                                </div>
                                <h3>Rõ ràng từ đầu – Bền vững về sau</h3>
                                <p>
                                    Niềm tin không đến từ lời nói – mà từ sự minh bạch trong cách làm việc. PHD Studio
                                    cam kết rõ ràng về quy trình, ngân sách, timeline và trách nhiệm với từng sản phẩm.
                                    Chúng tôi xây dựng mối quan hệ đối tác lâu dài, không chỉ một lần cộng tác.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
