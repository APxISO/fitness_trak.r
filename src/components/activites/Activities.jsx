import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import './activities.css'

// import { useParams} from 'react-router-dom'
const url = `https://fitnesstrac-kr.herokuapp.com/api/activities`;



// {user}

const Activities = () => {
    const [activities, setActivities] = useState([])
    const [data, setData] = useState(null);
    console.log('activities: ', activities)
    
    
    
    useEffect(() => {
        const fetchActivities = async () => {
            const resp = await fetch (url);
            const data = await resp.json();
            setActivities(data);
        }
        fetchActivities();
    }, [])

            return (
        
        <>
        
          <div className="activitiies_card">
            <div className="activitiies_content">
                <div className='activitiies_card_options'>
                    <h1>Activities</h1>
                    {
                        activities.map(activities => <div key={activities.id}>
                           <h3> {activities.name}</h3>
                           <div>{activities.description}</div>
                            </div>)
                    }       
                </div>
            </div>
        </div>
        
        </>
      )};

      






export default Activities