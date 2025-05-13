import { useState } from 'react'
import play from './assets/play.svg'
import care from './assets/care.svg'
import exercise from './assets/exercise.svg'
import icon1 from './assets/icon1.svg'
import jeremy from './assets/jeremy.png'
import social from './assets/social.svg'
import study from './assets/study.svg'
import work from './assets/work.svg'
import './App.css'
import Cards from './components/cards/cards'
import Unique from './components/unique/unique'
import data from './data.json'
function App() {
const [period, setPeriod] = useState('weekly')

const colors = {
  Work: "#ff8b64",
  Play: "#56c2e6",
  Study: "#ff5e7d",
  Exercise: "#4bcf83",
  Social: "#7235d1",
  "Self Care": "#f1c75b",
}

const icons = {
  Work: work,
  Play: play,
  Study: study,
  Exercise: exercise,
  Social: social,
  "Self Care": care,
}
   return (
    <section id='All'>
      <div>
        <Unique
          pfp={jeremy}
          report={"Report for"}
          name={"Jeremy Robson"}
          daily={() => setPeriod("daily")}
          weekly={() => setPeriod("weekly")}
          month={() => setPeriod("monthly")}
        />
      </div>
      <div>
        <section className='col1'>
          {data.slice(0, 3).map((item, i) => (
            <Cards
              key={i}
              icon={icons[item.title]}
              title={item.title}
              img={icon1}
              temps={`${item.timeframes[period].current}hrs`}
              description={`Last Week - ${item.timeframes[period].previous}hrs`}
              bgColor={colors[item.title]}
            />
          ))}
        </section>
        <section className='col2'>
          {data.slice(3).map((item, i) => (
            <Cards
              key={i + 3}
              icon={icons[item.title]}
              title={item.title}
              img={icon1}
              temps={`${item.timeframes[period].current}hrs`}
              description={`Last Week - ${item.timeframes[period].previous}hrs`}
              bgColor={colors[item.title]}
            />
          ))}
        </section>
      </div>
    </section>
  )
}

export default App
