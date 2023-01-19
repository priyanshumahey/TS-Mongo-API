import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    return fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => setData(data))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  )
}

export default App
