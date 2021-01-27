import Background from '../components/Background'
import Widget from '../components/Widget'
import FoundationTokens from '../foundation-tokens.json'

export default function Home() {
  return (
    <Background>
      <Widget>
        <h1>{FoundationTokens.title}</h1>
        <h2>{FoundationTokens.titleSecondary}</h2>
        <input></input><br/>
        <button>ENTRAR</button>
      </Widget>
    </Background>
  )
}
