import { useEffect } from 'react';
import usePost from './Hooks/usePost';
import './App.css';

function App() {

  const { loading, error, data, post } = usePost('user/signin')

  useEffect(()=> {

    if(data) {
      console.log("Ok", data);
    }

  }, [data])

  return (
    <>
      {loading && <>Loading...</>}
      {error && <h2>{error}</h2>}

      <button onClick={() => post({username: 'abdulloh', password: '4321'})}>Click</button>
    </>
  )
}

export default App;
