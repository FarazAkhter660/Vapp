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
  const isDark = dark.theme === "dark";

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
      {/* CONTAINER */}
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          background: isDark ? "#1b1f24" : "#ffffff",
          borderRadius: "26px",
          padding: "16px",
          border: isDark ? "1px solid #303438" : "1px solid #e1e4e9",
          boxShadow: isDark
            ? "0 12px 30px rgba(0,0,0,0.45)"
            : "0 10px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* TEXTAREA */}
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
            color: isDark ? "#c0c7ce" : "#111827",
            fontSize: "15px",
          }}
        />

        {/* ACTIONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "14px",
          }}
        >
          {/* ATTACH (SECONDARY) */}
          <IonButton
            fill="clear"
            style={{
              "--color": isDark ? "#c0c7ce" : "#374151",
              background: isDark ? "#2a2e30" : "#f8f9fb",
              borderRadius: "999px",
              height: "38px",
              padding: "0 16px",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            <IonIcon
              icon={attachment}
              style={{
                fontSize: "18px",
                marginRight: "6px",
                opacity: isDark ? 1 : 0.8,
              }}
            />
            <span>Attach</span>
          </IonButton>

          {/* SEND (PRIMARY) */}
          <IonButton
            onClick={sendMessage}
            disabled={!text.trim()}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              "--background": isDark ? "#1f2937" : "#111827",
              "--color": "#ffffff",
              boxShadow: isDark
                ? "0 6px 14px rgba(0,0,0,0.4)"
                : "0 4px 10px rgba(0,0,0,0.2)",
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
