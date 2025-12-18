import { IonButton, IonIcon, IonTextarea } from "@ionic/react";
import { attachOutline, arrowForwardOutline } from "ionicons/icons";
import "./ChatInput.css";
import darkArrow from "../../app/assets/darkArrow.svg";
import attachment from "../../app/assets/attachment.svg";
import arrow from "../../app/assets/arrow.svg";

const ChatInput = () => {
  return (
    <div className="chat-input-wrapper">
      <div className="chat-input-container">
        <IonTextarea
          placeholder="Ask me anything..."
          autoGrow
          className="chat-textarea"
        />
        <div className="attachments-row"></div>

        <div className="input-actions">
          <IonButton fill="clear" className="attach-btn ">
            <IonIcon icon={attachment} />
            <span>Attach</span>
          </IonButton>

          <IonButton className="send-btn">
            <IonIcon icon={arrow} className="my-custom-icon-size" />
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
