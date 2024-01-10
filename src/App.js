import { useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import CreateConv from './components/CreateConv';
import CreateMember from './components/CreateMember';
import ListConvs from './components/ListConvs';

function App() {
  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userId, setUserId] = useState('');
  const [convName, setConvName] = useState('');
  const [convDisplayName, setConvDisplayName] = useState('');
  const [convId, setConvId] = useState('');
  const [convList, setConvList] = useState([]);

  return (
    <div className="App">
      <section className='section-1'>
        <CreateUser userName={userName} 
          setUserName={setUserName} 
          displayName={displayName} 
          setDisplayName={setDisplayName}
          userId={userId}
          setUserId={setUserId}
          ></CreateUser>
        <CreateConv convName={convName}
          setConvName={setConvName}
          convDisplayName={convDisplayName}
          setConvDisplayName={setConvDisplayName}
          convId={convId}
          setConvId={setConvId}
          ></CreateConv>
        <CreateMember convid={convId} 
          setConvid={setConvId}
          userId={userId}
          ></CreateMember>
        <ListConvs convList={convList}
          setConvList = {setConvList}
          >
        </ListConvs>
      </section>
    </div>
  );
}

export default App;