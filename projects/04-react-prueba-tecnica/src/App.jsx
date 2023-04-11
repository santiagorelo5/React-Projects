import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}> Get new fact </button>

      {fact && <p>{fact}</p>}
      {imgUrl && <img src={imgUrl} alt={`image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
