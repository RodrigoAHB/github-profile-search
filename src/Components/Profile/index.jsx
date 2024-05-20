import styles from './Profile.module.css'

const Profile = ({userName}) => {

    return (
        <div className={styles.profile}>
            <img src={`https://github.com/${userName}.png`} alt="Avatar profile" className={styles.avatar}/>
            <h1 className={styles.profileName}>{userName}</h1>
        </div>
    )
}

export default Profile