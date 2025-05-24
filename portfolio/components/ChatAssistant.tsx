'use client'
import ChatBot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatbot/config'
import MessageParser from './chatbot/MessageParser'
import ActionProvider from './chatbot/ActionProvider'

export default function ChatAssistant() {
  return (
    <div className="fixed bottom-4 right-4 w-[300px] z-50">
      <ChatBot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}