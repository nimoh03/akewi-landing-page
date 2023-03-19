import './Genrescard.css'

export default function Genrescard (props) {
    return(
    <section className="cards">
          <img src={props.img} />
          <h4>{props.number}</h4>
          <p>{props.genre}</p>
    </section>
    )
}