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

import taskGroup from "../../app/assets/taskGroup.svg";
import graph from "../../app/assets/graph.svg";
import article from "../../app/assets/article.svg";
import url from "../../app/assets/url.svg";
import edit from "../../app/assets/edit.svg";
import excel from "../../app/assets/excel.svg";
import itinerary from "../../app/assets/maps.svg";

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
    {
      label: "Analyze Document",
      icon: { light: analyzeLight, dark: analyzeDark },
    },
    { 
      label: "Create Image", 
      icon: { light: createLight, dark: createDark },
    },
    { label: "Transform Image", icon: edit },
    { label: "Create Quiz", icon: taskGroup },
    { label: "Create Graph", icon: graph },
    {
      label: "Create Marketing Asset",
      icon: { light: assetLight, dark: assetDark },
    },
    {
      label: "Create Linkedin Post",
      icon: { light: linkedinLight, dark: linkedinDark },
    },
    { label: "Create Article", icon: article },
    { label: "Analyze URL", icon: url },
    { label: "Excel Analysis", icon: excel },
    { label: "Create Itinerary", icon: itinerary },
  ];

  const renderIcon = (
    icon: string | { light: string; dark: string },
    alt: string
  ) => {
    if (typeof icon === "string") {
      return <img src={icon} alt={alt} style={{ width: 36, height: 36 }} />;
    }

    return (
      <img
        src={isDark ? icon.dark : icon.light}
        alt={alt}
        style={{ width: 36, height: 36 }}
      />
    );
  };

  return (
    <IonModal
      isOpen={open}
      onDidDismiss={onClose}
      initialBreakpoint={0.5}
      breakpoints={[0, 0.5, 1]}
      handleBehavior="cycle"
    >
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          style={{
            padding: 20,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 24,
            rowGap: 24,
            maxHeight: "60vh",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
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
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 16,
                  background: isDark ? "#23272e" : "#f5f7fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                  transition: "background 0.15s ease",
                }}
              >
                {renderIcon(app.icon, app.label)}
              </div>

              <span
                style={{
                  fontSize: 12,
                  lineHeight: 1.2,
                  color: isDark ? "#c0c7ce" : "#82858b",
                  width: 72,
                  wordBreak: "break-word",
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
