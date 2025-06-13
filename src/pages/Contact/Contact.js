import className from 'classnames/bind';
import styles from './Contact.module.scss';
import { AddressIcon, EmailIcon, FacebookIcon, PhoneIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

const Contact = () => {
    return (
        <>
            <section className={cx('contact-section')} id="contact">
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
                                <h3 className={cx('card-title')}>Gửi tin nhắn cho chúng tôi</h3>
                                <form>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="name" className={cx('form-label')}>
                                            Họ và tên
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className={cx('form-input')}
                                            placeholder="Nhập họ tên của bạn"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="email" className={cx('form-label')}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className={cx('form-input')}
                                            placeholder="Nhập email của bạn"
                                        />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label htmlFor="message" className={cx('form-label')}>
                                            Tin nhắn
                                        </label>
                                        <textarea
                                            id="message"
                                            className={cx('form-textarea')}
                                            placeholder="Nhập nội dung tin nhắn"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className={cx('submit-button')}>
                                        Gửi tin nhắn
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={cx('info-container')}>
                            <div className={cx('card', 'contact-info')}>
                                <h3 className={cx('card-title')}>Thông tin liên hệ</h3>
                                <div>
                                    <div className={cx('info-item')}>
                                        <FacebookIcon className={cx('info-icon')} fill="#A855F7" />
                                        <div>
                                            <h4 className={cx('info-title')}>Fanpage</h4>
                                            <p className={cx('info-text')}>Phạm Hải Đăng Senpai</p>
                                        </div>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <PhoneIcon className={cx('info-icon')} fill="#A855F7" />
                                        <div>
                                            <h4 className={cx('info-title')}>Điện thoại</h4>
                                            <p className={cx('info-text')}>+84 327 906 965</p>
                                        </div>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <EmailIcon className={cx('info-icon')} fill="#A855F7" />
                                        <div>
                                            <h4 className={cx('info-title')}>Email</h4>
                                            <p className={cx('info-text')}>congtyphdstudio@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className={cx('info-item')}>
                                        <AddressIcon className={cx('info-icon')} fill="#A855F7" />
                                        <div>
                                            <h4 className={cx('info-title')}>Địa chỉ</h4>
                                            <p className={cx('info-text')}>
                                                Tầng 5, tòa nhà TTM Building, số 309 Bạch Đằng, Phường 2, Quận Bình Thạnh, TP. Hồ Chí Minh
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
                                    <p className={cx('hours-text')}>Chủ Nhật: Đóng cửa</p>
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
