import { TwitterCard } from './twitterCard.jsx'

export function App () {
    const format = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterCard 
                formatUserName={format} 
                isFollowing 
                name="Miguel Ángel Durán" 
                userName="midudev"/>
            <TwitterCard 
                formatUserName={format} 
                isFollowing={false} 
                name="Pablo Hernandez" 
                userName="pheralb"/>
            <TwitterCard 
                formatUserName={format} 
                isFollowing 
                name="Elon Musk" 
                userName="elonmusk"/>
        </ section>
    )
}
