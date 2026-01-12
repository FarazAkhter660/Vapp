import { IonButton, IonIcon, IonTextarea } from "@ionic/react";
import { useState } from "react";
import attachment from "../../app/assets/attachment.svg";
import arrow from "../../app/assets/arrow.svg";
import useDarkMode from "../lib/useDarkMode";

interface ChatInputProps {
  onMessage: (message: string) => void;
}

const ChatInput = ({ onMessage }: ChatInputProps) => {
  const [text, setText] = useState("");
  const dark = useDarkMode();
  const isDark = dark.theme === 'dark';

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
          background: isDark 
            ? "rgba(255, 255, 255, 0.05)" 
            : "rgba(255, 255, 255, 0.8)",
          borderRadius: "26px",
          padding: "16px",
          border: isDark 
            ? "1px solid rgba(255, 255, 255, 0.15)" 
            : "1px solid rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(14px)",
          boxShadow: isDark 
            ? "0 10px 30px rgba(0, 0, 0, 0.35)" 
            : "0 10px 30px rgba(0, 0, 0, 0.1)",
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
            color: isDark ? "#e5e7eb" : "#111827",
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
              "--color": isDark ? "#e5e7eb" : "#111827",
              background: isDark 
                ? "rgba(255, 255, 255, 0.08)" 
                : "rgba(0, 0, 0, 0.05)",
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
              "--background": isDark ? "#1f2937" : "#111827",
              "--color": isDark ? "#e5e7eb" : "#ffffff",
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
