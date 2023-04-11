import { useRef, useState, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(false)

  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    console.log(`buscando ${search}`)
    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      console.log('error')
    //   throw new Error('Error searching movie')
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovies, loading }
}
