import { AssignmentTurnedInOutlined, FeaturedPlayListOutlined, Home, Language, NotificationsOutlined, PeopleAltOutlined, Search } from '@mui/icons-material';
import { Avatar, Button,Input } from '@mui/material';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import "../css/Navbar.css"; 
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Modal from 'react-modal';
import { ExpandMore, Link } from '@mui/icons-material'
import firebase from 'firebase/compat/app'

const Navbar = () => {

    const user = useSelector(selectUser)
    const [openModal, setOpenModal] = useState(false)
    const [input, setInput]= useState("")
    const [inputUrl, setInputUrl]=useState("")
    const questionName= input;
  
    const handleQuestion=(e) =>{
      
      setOpenModal(false);
  
      
      if(questionName){
      db.collection('questions').add({
        questions: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user
      })
    }
      setInput("");
      setInputUrl("");
  
    }

  return (
    <div className='qHeader'>
     <div className="qHeader_logo">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGZVurt8r1so9YWuK5gV3pIVuhxgzg-dvUhm4bdcUAaMZPNpu9PI9KzWPGPDB7HqUHw&usqp=CAU' alt='' />
        </div>
        <div className="qHeader_icons">
            <div className="qHeader_icon">
                <Home />
            </div>
            <div className="qHeader_icon">
                <FeaturedPlayListOutlined />
            </div>
            <div className="qHeader_icon">
                <AssignmentTurnedInOutlined />
            </div>
            <div className="qHeader_icon">
                <PeopleAltOutlined />
            </div>
            <div className="qHeader_icon">
                <NotificationsOutlined />
            </div>
        </div>
    
     <div className="qHeader_input">
        <Search />
        <input type='text' placeholder='Search Questions' />
     </div>
     <div className="qHeader_Rem">
        <div className="qHeader_avatar">
            <Avatar onClick = {() => auth.signOut()} className='avatar' src={user.photo} />
        </div>
        <Language />
        <Button onClick={() => setOpenModal(true)}>Add Question</Button>
        <Modal 
        isOpen={openModal} onRequestClose={() => setOpenModal(false)} shouldCloseOnOverlayClick={false}
        style={{
          overlay:
          {width:700,
             height:600,
              backgroundColor: 'rgba(0,0,0,0.8)', 
              zIndex:'1000',
              top:'50%', 
              left:"50%",
            marginTop:'-300px',
          marginLeft: '-350px',
        },
      }}
      >
          <div className='modal__title'>
            <h5>Add Question</h5>
            <h5>Share Link</h5>
            </div>
            <div className='modal__info'>
              <Avatar className='avatar'
              src={user.photo} />
              <p>{user.displayName ? user.displayName :
              user.email} asked </p>

              <div className='modal__scope'>
                <PeopleAltOutlined/>
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className='modal__field'>
              <Input
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder="Start your question with 'What', 'How', 'Why' etc.'"
              />
            
            <div className='modal__fieldLink'>
              <Link />
              <input 
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              type='text'
              placeholder="Optional: include a link that gives context">
                </input>

            </div>
            </div>
            <div className='modal__buttons'>
            <button onClick={() => setOpenModal(false)} className='cancel'>Close</button>
            <button type='submit' onClick={handleQuestion}  className='add'>Add Question</button>
            </div>
            
        </Modal>
     </div>
    </div>
  );
}

export default Navbar;
