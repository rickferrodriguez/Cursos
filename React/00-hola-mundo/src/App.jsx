import { TwitterCard } from './twitterCard.jsx'
import {useState} from 'react'

export function App () {
  // const format = (userName) => `@${userName}`
  const [name, setName] = useState('midudev')

  return (
    <section className="App">
      <TwitterCard 
        initialIsFollowing 
        userName={name}>
        Miguel Ángel Durán
      </TwitterCard>

      <TwitterCard 
        initialIsFollowing={false} 
        userName="pheralb">
        Pablo Hernandez
      </TwitterCard>

      <button onClick={()=> (setName('pheralb'))}>
        Cambiar Nombre
      </button>

    </section>
  )
}
