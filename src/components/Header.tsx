import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import { useSidebar } from "../stores/sidebar";
import useDarkMode from "../lib/useDarkMode";

import veraLogoDark from "../../app/assets/darkVeraLogo.svg";
import veraLogoLight from "../../app/assets/vera-logo.svg";

const Header = () => {
  const { toggle } = useSidebar();
  const router = useIonRouter();
  const dark = useDarkMode();
  const isDark = dark.theme === "dark";

  return (
    <>
      <meta name="theme-color" content={isDark ? "#16181c" : "#edf1f5"} />

      <IonHeader>
        <IonToolbar
          style={{
            "--background": isDark ? "#16181c" : "#edf1f5",
            "--color": isDark ? "#c0c7ce" : "#374151",
            display: "flex",
            alignItems: "center",
            minHeight: "56px",
          }}
        >
          <IonButtons slot="start">
            <IonButton onClick={toggle}>
              <IonIcon
                icon={menuOutline}
                style={{
                  fontSize: "28px",
                  color: isDark ? "#bfd2d9" : "#325f75",
                }}
              />
            </IonButton>
          </IonButtons>

          <img
            src={isDark ? veraLogoDark : veraLogoLight}
            alt="Vera Logo"
            onClick={() => router.push("/home", "forward")}
            style={{
              height: "17px",
              marginLeft: "4px",
              cursor: "pointer",
            }}
          />

          <IonButtons slot="end">
            <IonButton>
              <div
                style={{
                  width: "25px",
                  height: "25px",
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
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
