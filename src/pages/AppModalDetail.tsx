import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/react";
import { arrowBack, close } from "ionicons/icons";

interface AppModalDetailProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  website?: string;
}

const AppModalDetail = ({
  open,
  onClose,
  title,
  description,
  website,
}: AppModalDetailProps) => {
  return (
    <IonModal isOpen={open} onDidDismiss={onClose}>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={onClose}>
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon icon={close} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: "16px" }}>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              opacity: 0.85,
              marginBottom: "24px",
            }}
          >
            {description}
          </p>

          <IonButton
            expand="block"
            shape="round"
            onClick={() => website && window.open(website, "_blank")}
          >
            Visit site
          </IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default AppModalDetail;
