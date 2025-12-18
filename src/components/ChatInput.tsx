import { IonButton, IonIcon, IonTextarea } from "@ionic/react";
import { attachOutline, arrowForwardOutline } from "ionicons/icons";
import "./ChatInput.css";

const ChatInput = () => {
  return (
    <div className="chat-input-wrapper">
      <div className="chat-input-container">
        <IonTextarea
          placeholder="Ask me anything..."
          autoGrow
          className="chat-textarea"
        />
        <div className="attachments-row">
        </div>

        <div className="input-actions">
          <IonButton fill="clear" className="attach-btn">
            <IonIcon icon={attachOutline} />
            <span>Attach</span>
          </IonButton>

          <IonButton className="send-btn">
            <IonIcon icon={arrowForwardOutline} />
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
