import { useEffect, useState } from 'react';
import './App.css';
import ChatBox from './components/chat-box.component';
import Header from './components/header.component';
import Content from './components/content.component';
import { socket, SocketContext } from './context/socket';

function App() {
  const [tabActived, setTabActived] = useState<string>("MessageOutlined")
  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Connected to server with id: ${socket.id}`);
      socket.emit('connecting', { userId: 'richard', socketId: socket.id })
    })
  }, [])
  return (

    <SocketContext.Provider value={socket}>
      <div className="container h-screen w-screen flex">
        <div className="w-[7%] h-full">
          <Header tab={tabActived} action={setTabActived} />
        </div>
        <div className="w-[30%] h-full bg-slate-300">
          <Content tab={tabActived} />
        </div>
        <div className='w-[63%] h-full'>
          <ChatBox />
        </div>

      </div>
    </SocketContext.Provider>

  );
}

export default App;
