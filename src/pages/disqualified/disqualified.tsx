import styles from './styles.module.scss'
// import { useNavigate } from 'react-router-dom'
// import { FETCHBYID, VERIFYANS } from '../../functions/question.function';

const Disqualified = () => {
    // const navigate = useNavigate();

    
    // useEffect(() => {
    //     const fetchQues = async()=> {
    //         const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
    //         // console.log(res)
    //         setTeamName(localData.teamName)
    //     }
    //     fetchQues()
    // },[])


    return (
        <div className={styles.create__main__container}>
            <div>
                {/* <div className={styles.team__name}>
                <p>Team Name :</p>
                <p className={styles.name}>{teamName}</p>
                </div> */}
                <div className={styles.next__container}>
                    <p><b>Better Luck Next Time!</b></p>
                    <p>You ran out of lives. 😕</p>
                    <p>Your team has been disqualified from Labyrinth.</p>
                    <div className={styles.gif__container}>
                        <img src="https://media1.tenor.com/m/CbEHei1L5O8AAAAC/slap-forehead-guppy.gif" className="cursor-zoom-in max-h-full max-w-full mb-md s:mb-0" alt="GIF Image" />
                    </div>
                    <p>Thank you for participating in Labyrinth.</p>
                </div>
            </div>
        </div>
    )
}

export default Disqualified