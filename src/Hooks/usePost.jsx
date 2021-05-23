import { useEffect, useState } from "react"

const usePost = () => {

  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect( () => {

    // setLoading(true)
    ;(async() => {

      try {

        const response = await fetch('http://localhost:5000/user/signin')
        console.log(response);

        if(response.status >= 200 && response.status <= 299) {

        } else {
          throw new Error(response.statusText || response.status)
        }

      } catch(e) {
        console.log(e.message);
      }

    })()

  }, [])
    return {
      loading,
      error,
      data: null
    }
}

export default usePost