import { IonButton, IonIcon, IonTextarea } from "@ionic/react";
import "./ChatInput.css";
import attachment from "../../app/assets/attachment.svg";
import arrow from "../../app/assets/arrow.svg";

interface ChatInputProps {
  onMessage: (message: string) => void;
}

const ChatInput = ({ onMessage }: ChatInputProps) => {
  return (
    <div className="chat-input-wrapper">
      <div className="chat-input-container">
        <IonTextarea
          placeholder="Ask me anything..."
          autoGrow
          rows={1}
          className="chat-textarea"
        />

        <div className="input-actions">
          <IonButton fill="clear" className="attach-btn">
            <IonIcon icon={attachment} />
            <span>Attach</span>
          </IonButton>

          <IonButton className="send-btn">
            <IonIcon icon={arrow} />
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
