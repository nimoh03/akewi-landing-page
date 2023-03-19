import './Popular.css'
import img from '../assets/image38.png'
import img2 from '../assets/image39.png'
import img3 from '../assets/image41.png'
import Popularcard from './Popularcard'

export default function Popular () {
    return(
       <div className='popular-conatiner'>
            <h3>
                Popular Contents
            </h3>
            <section className='popular-card-holder'>
                <Popularcard 
                img={img2}
                title="Not beautiful any longer"
                author="By Enoch Ojotisa"
                date="Posted 31/01/2022"
                />
                <Popularcard 
                img={img}
                title="Mood swings"
                author="By Enoch Ojotisa"
                date="Posted 12/01/2022"
                />
                <Popularcard 
                img={img3}
                title="Posted 12/01/2022"
                author="By Enoch Ojotisa"
                date="Posted 12/01/2022"
                />

            </section>
       </div>
    )
}