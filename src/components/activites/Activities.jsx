import React, { useState, useEffect, Link } from 'react'
import './activities.css'

const url = `https://fitnesstrac-kr.herokuapp.com/api/activities`;


const Activities = ({routines, user, activites}) => {
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
    
    <div className='act_page_cont'>
        <div className='act_top_cont'>
            <div className='act_top_center'>
                <h1>Activities</h1>
            </div>
        {user ? (
        <button className='btn'><Link to="/MyActivities">Create new activity</Link></button>
        ) : (
        <div className='act_top_right'>
            <button className='btn'>Login to create activities</button>
        </div>
        )}
        </div>

        <div className='activities_container'>
            {activities.map(activities => {
                return (
                    <div className='activities_card' key={activities.id} >
                    <>
                        <h3>{activities.name}</h3>
                        <p>{activities.description}</p>
                    </>
                    </div>
                )
            })}
        </div>
</div>
    )};

      

export default Activities