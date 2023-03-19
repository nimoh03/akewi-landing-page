import './Popularcard.css'

 export default function Popularcard (props) {
   return(
        <section className='popular-card'>
            <img src={props.img} alt="img" />
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <small>{props.date}</small>
        </section>
   )
 }