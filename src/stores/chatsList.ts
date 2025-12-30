import { create } from 'zustand'
import EdenClient from '../lib/eden.client'

export interface ChatItem {
  id: string
  name: string | null
  created: string
}

interface ChatsListState {
  chats: ChatItem[]
  fetchChats: () => Promise<void>
}

export const useChatsList = create<ChatsListState>((set) => ({
  chats: [],

  fetchChats: async () => {
    const res = await (EdenClient as any).chat.get()

    if (res?.status === 200 && res.data?.data?.chats) {
      set({ chats: res.data.data.chats })
    }
  },
}))
