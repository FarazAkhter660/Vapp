import { useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useChatStore } from '../stores/chats'

export const useChatHandler = () => {
  const history = useHistory()
  const { id: chatId } = useParams<{ id?: string }>()
  const { addMessage } = useChatStore()

  const defaultChatId = 'local'
  const cannedAssistantReply =
    "Hello! It's a pleasure to meet you. I am Vera, an AI assistant created by Vectrum.\n\nI am here to help you with a wide variety of tasks, whether you need information, help with problem-solving, creative writing, or even complex calculations. My goal is to be as helpful, informative, and detailed as possible.\n\nSince I have access to a variety of tools, I can also:\n- Perform complex math and data analysis using Python.\n- Generate detailed images based on your descriptions.\n- Provide in-depth explanations on almost any topic."

  const handleMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return

      addMessage({ role: 'user', content: text })
      addMessage({ role: 'assistant', content: cannedAssistantReply })

      if (!chatId) {
        history.push(`/chat/${defaultChatId}`)
      }
    },
    [chatId, history, addMessage]
  )

  return { handleMessage }
}
