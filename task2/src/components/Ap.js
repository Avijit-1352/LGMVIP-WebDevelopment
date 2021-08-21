import React from 'react';
const Ap = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <div className="Ap">
                <button  className="but" onClick={clicked}>Get Users</button>
    
        </div>
    )
}
export default Ap;