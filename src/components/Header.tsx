import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { useSidebar } from "../stores/sidebar";
import veraLogo from "../../app/assets/darkVeraLogo.svg";

const Header = () => {
  const { toggle } = useSidebar();

  return (
    <IonHeader>
      <IonToolbar
        style={{
          "--background": "#0f1115",
          "--color": "#e5e7eb",
          borderBottom: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IonButtons slot="start">
          <IonButton onClick={toggle}>
            <IonIcon
              icon={menuOutline}
              style={{
                fontSize: "24px",
                color: "#d1d5db",
              }}
            />
          </IonButton>
        </IonButtons>

        <img
          src={veraLogo}
          alt="Vera Logo"
          style={{
            height: "17px",
            marginLeft: "4px",
          }}
        />

        <IonButtons slot="end">
          <IonButton>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #a8b5ff 0%, #8ba3ff 50%, #6b8aff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0b1021",
                fontWeight: 600,
                fontSize: "16px",
                boxShadow: "0 4px 12px rgba(139, 163, 255, 0.3)",
              }}
            >
              V
            </div>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
