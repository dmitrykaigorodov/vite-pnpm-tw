import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const User = (props) => {
  const params = useParams()
  const [user, setUser] = useState(null)
  useEffect(() => { 
    const doIt = async () => {
      const usersJson = await fetch(`/users.json`)
      const users = await usersJson.json()
      const user = users.users.find(user => {
        const retVal = "" + user.id == params.userId
        console.log("User user", user, retVal, params.userId)
        return "" + user.id == params.userId
      })
      console.log("User users", users)
      setUser(user)
    }
    doIt() // ignoring await
  }, [params.userId])

  console.log("User params", params); // => { userId: "123" }
  if (!user) return (
    <div>Загрузка...</div>
  )
  return <div>Привет, меня зовут {user.name}!</div>
}