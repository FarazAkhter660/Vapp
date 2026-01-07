import { IonButton, IonIcon, IonTextarea } from "@ionic/react";
import { useState } from "react";
import attachment from "../../app/assets/attachment.svg";
import arrow from "../../app/assets/arrow.svg";

interface ChatInputProps {
  onMessage: (message: string) => void;
}

const ChatInput = ({ onMessage }: ChatInputProps) => {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;
    onMessage(text);
    setText("");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "26px",
          padding: "16px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        }}
      >
        <IonTextarea
          value={text}
          placeholder="Ask me anything..."
          autoGrow
          rows={1}
          onIonInput={(e) => setText(e.detail.value!)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          style={{
            "--background": "transparent",
            "--padding-start": "0",
            "--padding-end": "0",
            "--padding-top": "4px",
            "--padding-bottom": "4px",
            color: "#e5e7eb",
            fontSize: "15px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "14px",
          }}
        >
          <IonButton
            fill="clear"
            style={{
              "--color": "#e5e7eb",
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: "999px",
              height: "38px",
              padding: "0 16px",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            <IonIcon
              icon={attachment}
              style={{ fontSize: "18px", marginRight: "6px" }}
            />
            <span>Attach</span>
          </IonButton>

          <IonButton
            onClick={sendMessage}
            disabled={!text.trim()}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              "--background": "#1f2937",
              "--color": "#e5e7eb",
            }}
          >
            <IonIcon icon={arrow} style={{ fontSize: "20px" }} />
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
