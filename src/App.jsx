import { useState } from 'react';
import Profile from "./Components/Profile";
import ReposList from "./Components/ReposList"

function App() {
  const [inputValue, setInputValue] = useState('')
  const [githubUser, setGithubUser] = useState(inputValue)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setGithubUser(inputValue)
  } 

  return (
    <>
      <header className='header'>
        <input type="text" placeholder="Type the GitHub user" onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
      </header>
      {githubUser.length > 4 && (
        <>
          <Profile userName={githubUser}/>
          <ReposList userName={githubUser}/>
        </>
      )}
    </>
  )
}

export default App
