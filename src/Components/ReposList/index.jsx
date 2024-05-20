import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({userName}) => {
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.github.com/users/${userName}/repos`)
        .then( res => {
            if(!res.ok ){
                throw new Error('HTTP error, status = ' + res.status)
            } 
            return res.json()
        })
        .then(resJson => {
            setTimeout(()=> {
                setHasError(false)
                setIsLoading(false)
                setRepos(resJson)
            }, 2000)
        })
        .catch(e => {
            setIsLoading(false)
            setHasError(true)
        })
    }, [userName])

    function userNotFound(hasError){
        if (hasError){
            return(
                <h2>Can't find GitHub user</h2>
            )
        } else {
            return (
                <ul className={styles.list}>
                    {repos.map(({id, name, language, html_url}) => (
                        <li key={id} className={styles.listItem}>
                            <div className={styles.itemName}>
                                <p><b>Name: </b> {name}</p>
                            </div>
                            <div>
                                <p className={styles.itemLanguage}><b>Language: </b> {language}</p>
                            </div>
                            <a href={html_url} target="_blank" className={styles.itemLink}>See on GitHub</a>
                        </li>
                    ))}
               </ul>
            )
        }
    }

    return(
        <div className="container">
            {isLoading ? (
                <h2>LOADING...</h2>
            ): ( 
                userNotFound(hasError)
            )}
        </div>
    )
}

export default ReposList