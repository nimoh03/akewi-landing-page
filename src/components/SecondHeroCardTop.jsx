import './SecondHeroTopCard.css'


export default function SecondHeroCardTop (props) {
    return(
      <div className='card'>
        <div className='card-img'>
            <img src={props.img} alt="Literature-img" />
        </div>
        <h3> 
          {props.description}
        </h3>
      </div>
    )
}