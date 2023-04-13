
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react'
import { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/socket'


export default function ChatBox() {
  const socket = useContext(SocketContext)
  const [messages, setMessages] = useState<Array<{ message: string, isMe: boolean }>>([])

  function sendMessage(message: string) {
    if (!socket) return;
    socket.emit('send-message', { message, socketId: socket.id })
  }

  useEffect(() => {
    if (!socket) return;
    socket.on('receive-message', (data: { message: string, socketId: string }) => {
      const syncData = { message: data.message, isMe: data.socketId === socket.id }
      setMessages([...messages, syncData])
    })
  })


  return (
    <div className="fixed w-[63%] ">
      <div className="relative h-screen">
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, index) => {
                return (
                  <Message key={index} model={{
                    message: message.message,
                    sentTime: "just now",
                    sender: "Joe",
                    direction: !message.isMe ? "incoming" : "outgoing",
                    position: 3
                  }} />
                )
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={sendMessage} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}