import './Secondherobottomcard.css'

export default function Secondherobottomcard (props) {
    return (
        <section className='bottom-card'>
            <img src={props.img} alt="photos" />
            <h3>{props.number}</h3>
            <h3>{props.name}</h3>
        </section>
    )
}