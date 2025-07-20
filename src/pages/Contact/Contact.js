import className from 'classnames/bind';
import styles from './Contact.module.scss';
import { AddressIcon, EmailIcon, FacebookIcon, PhoneIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import images from '~/assets/images/images';
import Banner from '~/components/Banner/Banner';

const cx = className.bind(styles);

const Contact = () => {
    return (
        <>
            <section className={cx('contact-section')} id="contact">
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
                                Bạn cần hỗ trợ? Có ngay PHD Studio.
                            </h1>
                            <p style={{ color: '#ffffff', fontWeight: 500 }}>
                                Dù bạn là cá nhân, doanh nghiệp hay nhà sáng tạo nội dung, chúng tôi luôn sẵn sàng lắng
                                nghe, tư vấn và đồng hành cùng bạn trong mọi bước xây dựng và phát triển kênh TikTok,
                                YouTube một cách hiệu quả và bền vững.
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
                    <div className={cx('text-center')}>
                        <h2 className={cx('title')}>Liên hệ với chúng tôi</h2>
                        <p className={cx('subtitle')}>
                            Bạn có câu hỏi về các dịch vụ của chúng tôi? Hãy liên hệ ngay để được tư vấn MIỄN PHÍ!
                        </p>
                    </div>
                    <div className={cx('flex-container')}>
                        <div className={cx('form-container')}>
                            <div className={cx('card')}>
                                <Link to="/">
                                    <img className={cx('logo')} alt="" src={images.logo} />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('info-container')}>
                            <div className={cx('card', 'contact-info')}>
                                <h3 className={cx('card-title')}>Thông tin liên hệ</h3>
                                <div>
                                    <div className={cx('info-item')}>
                                        <FacebookIcon
                                            className={cx('info-icon')}
                                            fill="#A855F7"
                                            width="30"
                                            height="30"
                                        />
                                        <div>
                                            <h4 className={cx('info-title')}>Fanpage</h4>
                                            <p className={cx('info-text')}>PHD Studio</p>
                                        </div>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <PhoneIcon className={cx('info-icon')} fill="#A855F7" width="30" height="30" />
                                        <div>
                                            <h4 className={cx('info-title')}>Điện thoại</h4>
                                            <p className={cx('info-text')}>+84 327 906 965</p>
                                        </div>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <EmailIcon className={cx('info-icon')} fill="#A855F7" width="30" height="30" />
                                        <div>
                                            <h4 className={cx('info-title')}>Email</h4>
                                            <p className={cx('info-text')}>congtyphdstudio@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <AddressIcon
                                            className={cx('info-icon')}
                                            fill="#A855F7"
                                            width="50"
                                            height="30"
                                        />
                                        <div>
                                            <h4 className={cx('info-title')}>Địa chỉ</h4>
                                            <p className={cx('info-text')}>
                                                Tầng 5, tòa nhà TTM Building, số 309 Bạch Đằng, Phường 2, Quận Bình
                                                Thạnh, TP. Hồ Chí Minh
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('hours-card')}>
                                <h3 className={cx('hours-title')}>Giờ làm việc</h3>
                                <div>
                                    <p className={cx('hours-text')}>Thứ Hai - Thứ Sáu: 9:00 - 18:00</p>
                                    <p className={cx('hours-text')}>Thứ Bảy: 9:00 - 12:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
