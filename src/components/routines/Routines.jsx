import React, { useState, useEffect, Link} from 'react'
import './routines.css'

const url = `https://fitnesstrac-kr.herokuapp.com/api/routines`;





const Routines = ({token, user}) => {

  const [routines, setRoutines] = useState([]);
  const [data, setData] = useState(null);


useEffect(() => {
  const fetchRoutines = async () => {
  const resp =await fetch (url, 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    
    );
    if (!resp.ok){
      throw new Error(`HTTP error! status: ${resp.status}`)
    }
  const data = await resp.json();
  setRoutines(data);

}
  fetchRoutines(data);
}, [])



    return (
        
      <div className='routines_page_containter'>
        <div className='routines_top_cont'>
            <div className='routines_top_center'>
                <h1>Routines</h1>
            </div>
        {user ? (
        <button className='btn'><Link to="/MyRountines">See My Rountines</Link></button>
        ) : (
        <div className='act_top_right'>
            <button className='btn'>Login to See Your Routines</button>
        </div>
        )}
        </div>  

        <div className='routines_container'>
            {routines.map(routines => {
              if (routines.isPublic){
                return (
                  <div className='routines_card' key={routines.id} >
                    <h1>{routines.creatorName}</h1>
                    <h2>{routines.name}</h2>
                    <h3>Goal: {routines.goal}</h3>
                    <div className='creator_activities'>
                    {routines.activities.map((activities)=> {
                      return (
                        <>
                        <h3>Activity: {activities.name}</h3>
                        <h4>
                          {" "}
                          Duration: {activities.duration} Count: {activities.count}

                        </h4>
                        <br/>
                        </>
                      );

                    })}
                  </div>
                  
                  </div>
                  
                  

                 
                 
                  )
                    }
                
            })}
        </div>










      </div>





      );
}





export default Routines