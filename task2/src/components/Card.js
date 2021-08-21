import React from 'react';
const Card = ({ email, first_name, last_name, avatar }) => {
    return(
               <div className="as">

                <div className='container'>
                       <div className="tob">

                        <img id="image" src={avatar} alt="Avatar" style={{width: "100%"}}style={{height: "100%"}}/>
                       </div>
                
                        <ul className="list-group">
                            <li className="list-group-item">Name: {first_name+' '+last_name}</li>
                            <li className="list-group-email">Email: {email}</li>
                        </ul>
                </div>
               </div>
    )
}

export default Card;