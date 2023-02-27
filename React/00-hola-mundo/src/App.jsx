import { TwitterCard } from './twitterCard.jsx'
import {useState} from 'react'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  // const format = (userName) => `@${userName}`

  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing}) => {
          return (
            <TwitterCard
              key={userName}
              userName={userName}
              initialIsFollowing = {isFollowing}
            >
              {name}
            </TwitterCard>
          )
        })
      }
    </section>
  )
}
