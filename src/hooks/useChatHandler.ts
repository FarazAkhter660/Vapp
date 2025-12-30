import { useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import EdenClient from '../lib/eden.client'
import { useChatStore } from '../stores/chats'

export const useChatHandler = () => {
  const history = useHistory()
  const { id: chatId } = useParams<{ id?: string }>()
  const { addMessage } = useChatStore()

  const handleMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return

      const chatApi = (EdenClient as any).chat

      const response = chatId
        ? await chatApi['conversation'].post({
            chat: chatId,
            message: text,
          })
        : await chatApi['new-conversation'].post({
            message: text,
          })

      if (response.status !== 200 || !response.data) return

      addMessage(text)

      const newChatId = response.data.id ?? response.data.chat?.id

      if (!chatId && newChatId) {
        history.push(`/chat/${newChatId}`)
      }
    },
    [chatId, history, addMessage]
  )

  return { handleMessage }
}
