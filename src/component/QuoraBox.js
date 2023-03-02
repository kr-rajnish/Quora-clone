import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import "../css/QuoraBox.css";
import { selectUser } from '../features/userSlice';

const QuoraBox = () => {
  const user = useSelector(selectUser);
  return (
    <div className='quoraBox'>
       <div className="quoraBox_info">
        <Avatar src={user.photo} />
        <h5>{user.displayName}</h5>
       </div>
       <div className="quoraBox_quora">
        <p>What is your question or link?</p>
       </div>
    </div>
  );
}

export default QuoraBox;
