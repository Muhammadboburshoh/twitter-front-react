import usePost from './Hooks/usePost';
import './App.css';

function App() {

  const { loading, error, data } = usePost()

  return (
    <>
      {loading && <>Loading...</>}
    </>
  )
}

export default App;
