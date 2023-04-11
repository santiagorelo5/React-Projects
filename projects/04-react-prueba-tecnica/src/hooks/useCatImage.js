import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFisrtWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFisrtWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImgUrl(url)
      })
      .catch(err => console.log(err))
  }, [fact])

  return { imgUrl: `${CAT_PREFIX_IMAGE_URL}${imgUrl}` }
}
