import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { chevronDownOutline, menuOutline } from "ionicons/icons";
import { useMemo } from "react";

import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import { useChatHandler } from "../hooks/useChatHandler";
import { useChatStore } from "../stores/chats";
import { useSidebar } from "../stores/sidebar";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const starterMessages: Message[] = [];

const Chat = () => {
  const { toggle } = useSidebar();
  const { handleMessage } = useChatHandler();
  const messages = useChatStore((state) => state.messages);

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
      <IonHeader>
        <IonToolbar
          style={{
            "--background": "#060910",
            "--color": "#e5e7eb",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <IonButtons slot="start" style={{ display: "flex", gap: "6px" }}>
            <IonBackButton defaultHref="/" />
            <IonButton onClick={toggle}>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              margin: "0 auto",
              letterSpacing: "-0.3px",
            }}
          >
            vera
          </div>

          <div
            slot="end"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, #5f8cff 0%, rgba(95,140,255,0.65) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0b1021",
              fontWeight: 700,
              fontSize: "14px",
              boxShadow: "0 10px 30px rgba(95,140,255,0.35)",
            }}
          >
            V
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        scrollEvents={false}
        style={{
          "--background": "#05070d",
          color: "#e5e7eb",
        }}
      >
        <Sidebar />

        <div
          style={{
            minHeight: "100%",
            background:
              "radial-gradient(circle at 20% 20%, rgba(95,140,255,0.07), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.04), transparent 28%), #05070d",
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
                      background:
                        "linear-gradient(135deg, #2f3748 0%, #1f2737 100%)",
                      color: "#f3f4f6",
                      padding: "10px 14px",
                      borderRadius: "16px",
                      borderTopRightRadius: "4px",
                      fontSize: "15px",
                      lineHeight: 1.4,
                      boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
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
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "18px",
                      padding: "12px 14px 14px",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#94a3b8",
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
                        color: "#e5e7eb",
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
            background:
              "radial-gradient(60% 40% at 50% 110%, rgba(255,255,255,0.03), transparent)",
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
