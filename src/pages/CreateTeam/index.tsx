/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { useState } from 'react'

import { CREATE } from '../../functions/team.function'
import {v4} from'uuid';

const CreateTeamPage = () => {

  const BASE_URL = "http://localhost:7000/api/v1"
  
  const navigate = useNavigate();

  const [team, setTeam] = useState({
    teamId : v4().split('-')[0],
    teamName: '',
    leader: '',
    espektroId : '',
    members: [{
      name: '',
      espektroId: ''
    }]
  })
  const [loading, setLoading] = useState(false)

  const handleCreateTeam = async() => {

    // console.log(team)
    if(team.teamName === '' || team.leader === '' || team.members.length === 0) {
      return alert('Please fill all the details')
    }else {
      setLoading(true);
      const res = await CREATE(team);
      console.log(res);
      setLoading(false);
    }

    navigate('/login')
  }
  
  const [teamData, setTeamData] = useState({
    teamName : '',
    leader : '',
    leaderEmail : '',
    password : '',
    confirmPassword : ''
  })

  const handleInputChange = (e: any, field :string) => {
    const value = e.target.value;
    setTeamData({
      ...teamData,
      [field]: value
    });
  };
  

  const handleProceed= () => {

    const postTeamData = async() => {
      const data = await axios.get(BASE_URL, 
        {
          headers:{
              'Content-type': 'application/json'
          },
        }
        )

        console.log(data)
    }
    
    if(!teamData.leader || !teamData.leaderEmail || !teamData.teamName)
      alert('All Fields are required to move forward');
    else if(teamData.password !== teamData.confirmPassword)
      alert('Passwords do not match')
    else{
      postTeamData()
      navigate('/addMembers')
    }
  } 
  
  return (
    <div className={styles.create__main__container}>
        <div>
            <div className={styles.team__ID}>
              <p>Your Team Id :</p>
              <p>{team.teamId}</p>
            </div>
            
            <p>Enter your details</p>
            <div className={styles.create__main__container__inputs}>
              <input type="text" placeholder='Team Name' value={
                team.teamName
              } 
              onChange={(e) => setTeam({...team, teamName: e.target.value})
              }/>
              <input type="text" placeholder='Team Leader Name' 
              value={team.leader}
              onChange={(e) => setTeam({...team, leader: e.target.value})
              }
              />
              <input type="text" placeholder='Espektro Id' 
              value={team.espektroId}
              onChange={(e) => setTeam({...team, espektroId: e.target.value})
              }
              />
            </div>

            <div className={styles.add__member__container}>

              <div>
                <p>Add Members</p>
              </div>
              <div>
              {
                team.members.map((_, index) => {
                  return (
                    <div key={index}>
                      <p>Member {index + 1}</p>
                      <input type="text" placeholder='Name' 
                      value={team.members[index].name}
                      onChange={(e) => {
                        const updatedMembers = team.members.map((member, i) => {
                          if(i === index) {
                            return {
                              ...member,
                              name: e.target.value
                            }
                          }
                          return member
                        })
                        setTeam({
                          ...team,
                          members: updatedMembers
                        })
                      }}
                      />
                      <input type="text" placeholder= 'Espektro ID' 
                      value={team.members[index].espektroId}
                      onChange={(e) => {
                        const updatedMembers = team.members.map((member, i) => {
                          if(i === index) {
                            return {
                              ...member,
                              espektroId: e.target.value
                            }
                          }
                          return member
                        })
                        setTeam({
                          ...team,
                          members: updatedMembers
                        })
                      }}
                      />
                    </div>
                  )
                })
              }
              </div>
              <div>
              <button className={styles.add__member__button} onClick={() => {
                if(team.members.length >= 3) return alert('You can add only 3 members');
                setTeam({
                  ...team,
                  members: [...team.members, {
                    name: '',
                    espektroId: ''
                  }]
                })
              }}>Add Member</button>
              <button className={styles.add__member__button} onClick={handleCreateTeam}>
                {
                  loading ? 'Creating Team...' : 'Create Team'
                }
              </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CreateTeamPage