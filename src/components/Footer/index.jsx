import './footer.css'
import footerLogo from '../../assets/footer-logo.png'

function Footer() {

    return (
        <footer className="footer_container">
            <div className="div_footer">
                <img alt='logo_footer' src={footerLogo} className="footer_img" />
                <p className="footer_text">© 2023 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer