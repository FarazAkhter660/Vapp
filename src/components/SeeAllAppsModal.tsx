import {
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import useDarkMode from "../lib/useDarkMode";

import quizLight from "../../app/assets/quiz-light.svg";
import quizDark from "../../app/assets/quiz-dark.svg";
import graphLight from "../../app/assets/graph-light.svg";
import graphDark from "../../app/assets/graph-dark.svg";
import articleLight from "../../app/assets/article-light.svg";
import articleDark from "../../app/assets/article-dark.svg";
import urlLight from "../../app/assets/url-light.svg";
import urlDark from "../../app/assets/url-dark.svg";
import editLight from "../../app/assets/edit-image-light.svg";
import editDark from "../../app/assets/edit-image-dark.svg";
import excelLight from "../../app/assets/excel-light.svg";
import excelDark from "../../app/assets/excel-dark.svg";
import itineraryLight from "../../app/assets/itinerary-light.svg";
import itineraryDark from "../../app/assets/itinerary-dark.svg";
import analyzeLight from "../../app/assets/analyze-light.svg";
import analyzeDark from "../../app/assets/analyze-dark.svg";
import createLight from "../../app/assets/create-light.svg";
import createDark from "../../app/assets/create-dark.svg";
import assetLight from "../../app/assets/asset-light.svg";
import assetDark from "../../app/assets/asset-dark.svg";
import linkedinLight from "../../app/assets/linkedin-light.svg";
import linkedinDark from "../../app/assets/linkedin-dark.svg";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SeeAllAppsModal = ({ open, onClose }: Props) => {
  const dark = useDarkMode();
  const isDark = dark.theme === "dark";

  const apps = [
    { label: "Analyze Document", icon: { light: analyzeLight, dark: analyzeDark } },
    { label: "Create Image", icon: { light: createLight, dark: createDark } },
    { label: "Transform Image", icon: { light: editLight, dark: editDark } },
    { label: "Create Quiz", icon: { light: quizLight, dark: quizDark } },
    { label: "Create Graph", icon: { light: graphLight, dark: graphDark } },
    { label: "Create Marketing Asset", icon: { light: assetLight, dark: assetDark } },
    { label: "Create Linkedin Post", icon: { light: linkedinLight, dark: linkedinDark } },
    { label: "Create Article", icon: { light: articleLight, dark: articleDark } },
    { label: "Analyze URL", icon: { light: urlLight, dark: urlDark } },
    { label: "Excel Analysis", icon: { light: excelLight, dark: excelDark } },
    { label: "Create Itinerary", icon: { light: itineraryLight, dark: itineraryDark } },
  ];

  const resolveIcon = (icon: { light: string; dark: string }) =>
    isDark ? icon.dark : icon.light;

  return (
    <IonModal
      isOpen={open}
      onDidDismiss={onClose}
      initialBreakpoint={0.5}
      breakpoints={[0, 0.5, 1]}
      handleBehavior="cycle"
    >
      <IonHeader translucent>
        <IonToolbar
          style={{
            "--background": isDark ? "#0f1216" : "#ffffff",
            "--color": isDark ? "#e5e7eb" : "#111827",
          }}
        >
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon
                icon={closeOutline}
                style={{ color: isDark ? "#c0c7ce" : "#374151" }}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent
        style={{
          "--background": isDark ? "#0f1216" : "#ffffff",
        }}
      >
        <div
          style={{
            padding: 20,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          {apps.map((app) => (
            <div
              key={app.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 16,
                  background: isDark ? "#1b1f24" : "#f8f9fb",
                  border: isDark ? "1px solid #303438" : "1px solid #e1e4e9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                  transition: "background 0.15s ease",
                }}
              >
                <img
                  src={resolveIcon(app.icon)}
                  alt={app.label}
                  style={{ width: 36, height: 36 }}
                />
              </div>

              <span
                style={{
                  fontSize: 12,
                  lineHeight: 1.2,
                  color: isDark ? "#c0c7ce" : "#7c8694",
                  width: 72,
                }}
              >
                {app.label}
              </span>
            </div>
          ))}
        </div>
      </IonContent>
    </IonModal>
  );
};

export default SeeAllAppsModal;
