import './unique.css'

export default function Unique(props) {
  return (
    <div className='profil'>
    <div className='profil-top'>
      <img src={props.pfp} alt="" />
      <p id='report'>{props.report}</p>
      <h1 id='name'>{props.name}</h1>
    </div>
      <div className='profil-in'>
        <div className='card-center'>
          <h1 id='daily' onClick={props.daily} style={{ cursor: 'pointer' }}>Daily</h1>
          <h3 id='weekly' onClick={props.weekly} style={{ cursor: 'pointer' }}>Weekly</h3>
          <p id='monthly' onClick={props.month} style={{ cursor: 'pointer' }}>Monthly</p>
        </div>
      </div>
    </div>
  )
}
