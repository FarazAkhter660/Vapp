import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { useMemo } from "react";

import ChatInput from "../components/ChatInput";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useChatHandler } from "../hooks/useChatHandler";
import { useChatStore } from "../stores/chats";
import useDarkMode from "../lib/useDarkMode";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const starterMessages: Message[] = [];

const Chat = () => {
  const { handleMessage } = useChatHandler();
  const messages = useChatStore((state) => state.messages);
  const dark = useDarkMode();
  const isDark = dark.theme === 'dark';

  const conversation = useMemo<Message[]>(() => {
    const mapped = messages.map<Message>((msg, idx) => ({
      id: `${msg.role}-${idx}`,
      role: msg.role,
      content: msg.content,
    }));

    return [...starterMessages, ...mapped];
  }, [messages]);

  return (
    <IonPage>
      <Header />

      <IonContent
        fullscreen
        scrollEvents={false}
        style={{
          "--background": isDark ? "#05070d" : "#ffffff",
          color: isDark ? "#e5e7eb" : "#111827",
        }}
      >
        <Sidebar />

        <div
          style={{
            minHeight: "100%",
            background: isDark
              ? "radial-gradient(circle at 20% 20%, rgba(95,140,255,0.07), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.04), transparent 28%), #05070d"
              : "radial-gradient(circle at 20% 20%, rgba(95,140,255,0.03), transparent 35%), radial-gradient(circle at 80% 0%, rgba(0,0,0,0.02), transparent 28%), #ffffff",
            padding: "20px 16px 160px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "640px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {conversation.map((message) =>
              message.role === "user" ? (
                <div
                  key={message.id}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "75%",
                      background: isDark
                        ? "linear-gradient(135deg, #2f3748 0%, #1f2737 100%)"
                        : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                      color: isDark ? "#f3f4f6" : "#ffffff",
                      padding: "10px 14px",
                      borderRadius: "16px",
                      borderTopRightRadius: "4px",
                      fontSize: "15px",
                      lineHeight: 1.4,
                      boxShadow: isDark 
                        ? "0 10px 24px rgba(0,0,0,0.35)" 
                        : "0 10px 24px rgba(0,0,0,0.15)",
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ) : (
                <div
                  key={message.id}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      background: isDark 
                        ? "rgba(255,255,255,0.04)" 
                        : "rgba(0,0,0,0.02)",
                      border: isDark 
                        ? "1px solid rgba(255,255,255,0.06)" 
                        : "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "18px",
                      padding: "12px 14px 14px",
                      boxShadow: isDark 
                        ? "0 12px 32px rgba(0,0,0,0.45)" 
                        : "0 12px 32px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: isDark ? "#94a3b8" : "#6b7280",
                        fontSize: "13px",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      <IonIcon
                        icon={chevronDownOutline}
                        style={{
                          transform: "rotate(-90deg)",
                          fontSize: "18px",
                        }}
                      />
                      <span>Show Thoughts</span>
                    </div>

                    <div
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.5,
                        color: isDark ? "#e5e7eb" : "#111827",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            background: isDark
              ? "radial-gradient(60% 40% at 50% 110%, rgba(255,255,255,0.03), transparent)"
              : "radial-gradient(60% 40% at 50% 110%, rgba(0,0,0,0.02), transparent)",
          }}
        />

        <div
          style={{
            position: "sticky",
            bottom: 0,
            padding: "0 12px 10px",
          }}
        >
          <ChatInput onMessage={(text) => handleMessage(text)} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
