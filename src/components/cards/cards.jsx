import './cards.css'
export default function Cards(props){
    return(
        <>
        <div className='card'  style={{ backgroundColor: props.bgColor }}>
            <img src={props.icon} alt=""className="card-icon" />
            <div className='card-in'>
                <div className='titre'>
                    <p>{props.title}</p>
                    <img src={props.img} alt="" />
                </div>
                <div className='card-center'>
                    <h1>{props.temps}</h1>
                    <h3>{props.description}</h3>
                </div>
            </div>
        </div>
        </>
    )
}