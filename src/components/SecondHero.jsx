import SecondHeroImg from '../assets/secondheroimg.png'
import literatureimg from '../assets/literature.png'
import books from '../assets/books.png'
import events from '../assets/red-carpet.png'
import music from '../assets/music-note.png'
import editorial from '../assets/editorial-design.png'
import politics from '../assets/Flat.png'
import photography from '../assets/photography.png'
import './SecondHero.css'
import SecondHeroCardTop from './SecondHeroCardTop'
import Secondherobottomcard from './Secondherobttomcard'

export default function SecondHero () {
    return(
        <div className='second-hero-container'>
            <section className='second-hero-top'>
                <div className="secondhero-img">
                    <img src={SecondHeroImg} alt="image" />
                </div>
                <div className="books-category">
                    <div className="texts">
                        <h3>Select Category</h3>
                        <p>Select from different categories to enjoy millions of articles, poetry, e-books, audiobooks, and more from creative content writers around the world.</p>
                    </div>
                    <div className="card-holder">
                        <div className="top-card">
                            <SecondHeroCardTop 
                            img={literatureimg}
                            description="Literature"
                            />
                            <SecondHeroCardTop 
                            img={books}
                            description="Bookstores"
                            />
                            <SecondHeroCardTop 
                            img={events}
                            description="Events"
                            />
                            <SecondHeroCardTop 
                            img={music}
                            description="Music"
                            />
                            <SecondHeroCardTop 
                            img={editorial}
                            description="Editorial"
                            />
                            <SecondHeroCardTop 
                            img={politics}
                            description="Politics"
                            />
                        </div>
                        <div className="bottomcard">
                            <div className="lastcard">
                                <div className='lastimg'>
                                    <img src={photography} />
                                </div>
                                <p>
                                    Photography & Painting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
        </div>
    )
}