import Facebook from '../assets/fbimg.png'
import Instagram from '../assets/instaimg.png'
import Twiter from '../assets/twitimg.png'
import Linkedin from '../assets/linkedinimg.png'
import './Hero.css'

export default function Hero () {
    return(
        <section className='hero'>
            <section className='img'>
                <article className='texts'>
                    <h2>
                    Showcase & Read <br/> Creative Contents On Akewi App.
                    </h2>
                    <p>
                    Akewi is a platform for content writers and authors to publish and showcase there works. Enjoy millions of articles, poetry, e-books, audiobooks, and more from creative contentwriters around the world.
                    </p>
                    <div className='hero-button-container'>
                        <button>Join The Community</button>
                        <button>Explore</button>
                    </div>
                    <span className='social-images'>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Twiter} alt="Twitter" />
                        <img src={Linkedin} alt="Linkedin" />
                    </span>
                </article>
            </section>
        </section>
    )
}