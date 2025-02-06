import logo from '../../assets/images/Rocket.gif';
import '../../assets/styles/preloader.css';

export default function Preloader() {
    return (
        <div className="preloader">
            <div className="preloader-content">
                <div className="preloader-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="preloader-text">
                    <h1>Myat Min Thant</h1>
                </div>
            </div>
        </div>
    )
}