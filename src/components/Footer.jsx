import './Footer.css'
import Logo from '../assets/enochojotisa1.png'

export default function Footer () {
    return(
       <div className='footer'>
            <img src={Logo} alt="logo" />
            <div className='author-search'>
                <span className='logo-name'>
                    <span className='akewi'>
                        AKEWI 
                    </span>
                    <span className='Authors-name'>
                        By Enoch Ojotisa
                    </span>
                </span>
                <p>
                    Enter a keyword or tag to search for contents on Akewi App.
                </p>
            </div>
            <div className="general">
                <h3>General</h3>
                <ul>
                    <li>About</li>
                    <li>Privacy and Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className='explore'>
                <h3>Explore</h3>
                <ul>
                    <li>Bookstore</li>
                    <li>Articles</li>
                    <li>Events</li>
                </ul>
            </div>
            <div className='support'>
                <h3>Support</h3>
                <ul>
                    <li>Help/FAQ</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='social'>
                <h3>Social</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>
            </div>
       </div>
    )
}