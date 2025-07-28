import className from 'classnames/bind';
import styles from './Contact.module.scss';
import { AddressIcon, EmailIcon, PhoneIcon } from '~/components/Icons';
import Banner from '~/components/Banner/Banner';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const cx = className.bind(styles);

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lcnci0g', 'template_xtp02zu', form.current, 'dGeQ4WIrXMLr4t4dt').then(
            (result) => {
                form.current.reset();
            },
            (error) => {
                alert('❌ Gửi thất bại. Vui lòng thử lại sau!');
                console.error(error.text);
            },
        );
    };

    return (
        <>
            <section className={cx('contact-section')} id="contact">
                <div className={cx('position-relative', 'w-100')} style={{ height: '100vh', overflow: 'hidden' }}>
                    <Banner />
                    <div
                        className={cx('container', 'h-100', 'd-flex', 'align-items-center', 'position-relative')}
                        style={{ zIndex: 2 }}
                    >
                        <div className={cx('text-white', 'banner-content')}>
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
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className={cx('contact-title', 'mb-3')}>Liên hệ</h2>
                            <p className={cx('subtitle')}>
                                Chúng tôi cung cấp giải pháp xây dựng kênh, đào tạo và hỗ trợ toàn diện cho cá nhân,
                                doanh nghiệp và nhà sáng tạo nội dung.
                            </p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-5 mb-lg-0">
                                <div
                                    className="bg-light d-flex flex-column justify-content-center px-5"
                                    style={{ height: '450px' }}
                                >
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="btn-icon bg-primary mr-4">
                                            <AddressIcon />
                                        </div>
                                        <div className="mt-n1">
                                            <h4>Địa chỉ</h4>
                                            <p className="m-0">
                                                Tầng 5, TTM Building, 309 Bạch Đằng, P.2, Q. Bình Thạnh, TP.HCM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="btn-icon bg-secondary mr-4">
                                            <PhoneIcon fill="#fff" />
                                        </div>
                                        <div className="mt-n1">
                                            <h4>Điện thoại</h4>
                                            <p className="m-0">+84 327 906 965</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="btn-icon bg-warning mr-4">
                                            <EmailIcon />
                                        </div>
                                        <div className="mt-n1">
                                            <h4>Email</h4>
                                            <p className="m-0">congtyphdstudio@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7" style={{ backgroundColor: '#ecf4ff', padding: '40px' }}>
                                <div className="section-title position-relative mb-4">
                                    <h1 className="display-4">Liên hệ với chúng tôi</h1>
                                </div>
                                <div className="contact-form">
                                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-12 col-md-6 form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Họ và Tên"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-md-6 form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="title"
                                                className="form-control"
                                                placeholder="Chủ đề"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows="5"
                                                placeholder="Mô tả nội dung"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="form-group text-end">
                                            <button type="submit" className="btn btn-primary submit-button">
                                                Gửi liên hệ
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
