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
import { arrowBack } from "ionicons/icons";

interface AppModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

const AppModal = ({ open, onClose, title }: AppModalProps) => {
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
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: "16px" }}>
          {[
            {
              name: "Mylo",
              desc: "Expert advice, learn from each other, connect",
              icon: "/assets/mylo.png",
            },
            {
              name: "Vera",
              desc: "Bold. Intelligent. Pro-Active. Suggestive.",
              icon: "/assets/vera.png",
            },
          ].map((app) => (
            <div
              key={app.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "#2a2d31",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={app.icon} alt={app.name} style={{ width: 28 }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{app.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.7 }}>{app.desc}</div>
                </div>
              </div>

              <IonButton size="small" shape="round">
                Visit
              </IonButton>
            </div>
          ))}
        </div>
      </IonContent>
    </IonModal>
  );
};

export default AppModal;
