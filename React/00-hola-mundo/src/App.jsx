import { TwitterCard } from './twitterCard.jsx'

export function App () {
  // const format = (userName) => `@${userName}`
  return (
    <section className="App">
      <TwitterCard 
        // formatUserName={} 
        isFollowing 
        name="Miguel Ángel Durán" 
        userName="midudev">
        Miguel Ángel Durán
      </TwitterCard>

      <TwitterCard 
        // formatUserName={format} 
        isFollowing={false} 
        name="Pablo Hernandez" 
        userName="pheralb">
        Pablo Hernandez
      </TwitterCard>

    </section>
  )
}
