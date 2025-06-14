import className from 'classnames/bind';
import styles from './Home.module.scss';

const cx = className.bind(styles);

const Home = () => {
    return (
        <>
            <section id="home" className={cx('hero-section')}>
                <div className={cx('container')}>
                    <div className={cx('hero-content')}>
                        <div className={cx('text-content')}>
                            <h2 className={cx('hero-title')}>Trở thành Streamer chuyên nghiệp</h2>
                            <p className={cx('hero-description')}>
                            - Có hợp đồng rõ ràng<br/>  
                            - Được hỗ trợ hoàn thuế thu nhập cá nhân hằng năm<br/>                       
                            - Nhận toàn bộ tiền quảng cáo nếu được các nhãn hàng book ( có quyền từ chối nếu nội dung quảng cáo không phù hợp)<br/>  
                            - Được hỗ trợ ý tưởng xây dựng video và nội dung livestream để phát triển lâu dài<br/>  
                            - Hỗ trợ đẩy phiên live, đẩy video lên xu hướng tiếp cận viewer rộng rãi<br/>  
                            - Hỗ trợ dựng video cho kênh<br/>  
                            - Cung cấp kênh tiktok, cấp nút Live, cài đặt OBS, hướng dẫn dùng các phần mềm livestream...<br/>  
                            - Hỗ trợ xử lý các trường hợp bị cấm live, báo cáo vi phạm, bản quyền vô lý, bị ban tài khoản...<br/>  
                            - Hỗ trợ miễn phí các khóa học dựng video, edit video capcut trên pc của Quạ HD, edit video trên điện thoại của Kobe<br/>  
                            </p>
                            <button className={cx('hero-button')}>Live Now</button>
                        </div>
                        <div className={cx('image-content')}>
                            <img
                                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2070&auto=format&fit=crop"
                                alt="Streamer Setup"
                                className={cx('hero-image')}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
