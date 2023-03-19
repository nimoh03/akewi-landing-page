import './Genres.css'
import Genrescard from './Genrescard'
import Poetry1 from '../assets/poetry1.png'
import contentWriting from '../assets/content-writing1.png'
import iconBooks from '../assets/icons8-books-64.png'
import colorPalette from '../assets/color-Palette1.png'
import audioBook from '../assets/audio-book.png'
import music1 from '../assets/music1.png'

export default function Genres() {
    return(
       <section className='genres'>
            <Genrescard
            img={Poetry1}
            number="142"
            genre="Poetry"
            
            />
            <Genrescard
            img={contentWriting}
            number="300"
            genre="Articles"
            />
            <Genrescard
            img={iconBooks}
            number="313"
            genre="Books"
            />
            <Genrescard
            img={colorPalette}
            number="142"
            genre="Paintings"
            />
            <Genrescard
            img={audioBook}
            number="30"
            genre="Audiobooks"
            />
            <Genrescard
            img={music1}
            number="30"
            genre="Music"
            />
       </section>
    )
}