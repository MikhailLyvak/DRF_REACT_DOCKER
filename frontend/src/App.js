import { useEffect, useState } from 'react'
import getUsers from './api/getUsers.ts'

function App() {
  const [user, setUser] = useState()
  useEffect(() => {
    getUsers().then((data) => setUser(data))
  }, [])
  
  return (
    <div>{
      JSON.stringify(user)
    }</div>
  );
}

export default App
