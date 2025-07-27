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
                <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div className="bg-light d-flex flex-column justify-content-center px-5" style={{ height: '450px' }}>
                            <div className="d-flex align-items-center mb-5">
                                <div className="btn-icon bg-primary mr-4">
                                    <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="mt-n1">
                                    <h4>Địa chỉ</h4>
                                    <p className="m-0">Tầng 5, TTM Building, 309 Bạch Đằng, P.2, Q. Bình Thạnh, TP.HCM</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-5">
                                <div className="btn-icon bg-secondary mr-4">
                                    <i className="fa fa-2x fa-phone-alt text-white"></i>
                                </div>
                                <div className="mt-n1">
                                    <h4>Điện thoại</h4>
                                    <p className="m-0">+84 327 906 965</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="btn-icon bg-warning mr-4">
                                    <i className="fa fa-2x fa-envelope text-white"></i>
                                </div>
                                <div className="mt-n1">
                                    <h4>Email</h4>
                                    <p className="m-0">congtyphdstudio@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="section-title position-relative mb-4">
                            <h1 className="display-4">Liên hệ với chúng tôi</h1>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <input
                                            type="text"
                                            className="form-control border-top-0 border-right-0 border-left-0 p-0"
                                            placeholder="Họ và Tên"
                                            required
                                        />
                                    </div>
                                    <div className="col-6 form-group">
                                        <input
                                            type="email"
                                            className="form-control border-top-0 border-right-0 border-left-0 p-0"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                                        placeholder="Chủ đề"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control border-top-0 border-right-0 border-left-0 p-0"
                                        rows="5"
                                        placeholder="Mô tả nội dung"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-3 px-5" type="submit">
                                        Gửi
                                    </button>
                                </div>
                            </form>
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
