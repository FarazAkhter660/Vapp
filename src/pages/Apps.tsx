import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { CSSProperties, useState } from "react";
import AppModal from "./AppModal";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useDarkMode from "../lib/useDarkMode";

import qaLight from "../../app/assets/q&atest.svg";
import qaDark from "../../app/assets/dark-q&a.svg";
import imageLight from "../../app/assets/image.svg";
import slidesLight from "../../app/assets/slides.svg";
import resumeLight from "../../app/assets/resume.svg";
import videoLight from "../../app/assets/video.svg";
import appLight from "../../app/assets/app.svg";
import illustrationsLight from "../../app/assets/illustrations.svg";
import productivityLight from "../../app/assets/productivity.svg";

import imageDark from "../../app/assets/dark-image_1.svg";
import slidesDark from "../../app/assets/dark-slides.svg";
import resumeDark from "../../app/assets/dark-resume.svg";
import videoDark from "../../app/assets/dark-video.svg";
import appDark from "../../app/assets/dark-app.svg";
import illustrationsDark from "../../app/assets/dark-illustrations.svg";
import productivityDark from "../../app/assets/dark-productivity.svg";

const cardStyles: { [key: string]: CSSProperties } = {
  qa: {
    border: "1px solid #c1c6e1",
    backgroundColor: "#b0d1fd",
    backgroundImage: `
      radial-gradient(at 8% 10%, #a8d0f8 0px, transparent 50%),
      radial-gradient(at 12% 80%, #b3c8fe 0px, transparent 50%),
      radial-gradient(at 80% 14%, #d4d9ff 0px, transparent 50%),
      radial-gradient(at 92% 87%, #f8d5fc 0px, transparent 50%)
    `,
  },
  generateImage: {
    border: "1px solid #bbdcca",
    backgroundColor: "#a8facf",
    backgroundImage: `
      radial-gradient(at 4% 7%, #b8fad6 0px, transparent 50%),
      radial-gradient(at 5% 92%, #c2fdd3 0px, transparent 50%),
      radial-gradient(at 94% 7%, #e2fed8 0px, transparent 50%),
      radial-gradient(at 94% 92%, #b3f8d9 0px, transparent 50%)
    `,
  },
  resumeBuilder: {
    border: "1px solid #c6d5e5",
    backgroundColor: "#a0ecff",
    backgroundImage: `
      radial-gradient(at 3% 6%, #c7eefc 0px, transparent 50%),
      radial-gradient(at 3% 94%, #b9ebfb 0px, transparent 50%),
      radial-gradient(at 96% 6%, #c9f7fd 0px, transparent 50%),
      radial-gradient(at 93% 89%, #bef4fe 0px, transparent 50%)
    `,
  },
  videoGeneration: {
    border: "1px solid #dfccbd",
    backgroundColor: "#fae0c8",
    backgroundImage: `
      radial-gradient(at 2% 4%, #fbe7d4 0px, transparent 50%),
      radial-gradient(at 12% 79%, #fae5d5 0px, transparent 50%),
      radial-gradient(at 97% 4%, #fcded8 0px, transparent 50%),
      radial-gradient(at 93% 99%, #fef3ea 0px, transparent 50%)
    `,
  },
  createApp: {
    border: "1px solid #d4c6bc",
    backgroundColor: "#fae2d0",
    backgroundImage: `
      radial-gradient(at 4% 7%, #fce9da 0px, transparent 50%),
      radial-gradient(at 5% 93%, #fdf8cb 0px, transparent 50%),
      radial-gradient(at 93% 5%, #fce0c9 0px, transparent 50%),
      radial-gradient(at 90% 99%, #f8fddc 0px, transparent 50%)
    `,
  },
  createIllustrations: {
    border: "1px solid #dfc1da",
    backgroundColor: "#fccff3",
    backgroundImage: `
      radial-gradient(at 6% 7%, #f8cef1 0px, transparent 50%),
      radial-gradient(at 8% 88%, #fbd6f4 0px, transparent 50%),
      radial-gradient(at 69% 5%, #fbd8f3 0px, transparent 50%),
      radial-gradient(at 90% 88%, #fcd8ea 0px, transparent 50%)
    `,
  },
  productivityTools: {
    border: "1px solid #c0b8dc",
    backgroundColor: "#cabcfc",
    backgroundImage: `
      radial-gradient(at 7% 5%, #d1c6fa 0px, transparent 50%),
      radial-gradient(at 7% 89%, #d3cffa 0px, transparent 50%),
      radial-gradient(at 94% 8%, #eecafc 0px, transparent 50%),
      radial-gradient(at 95% 88%, #bfcef8 0px, transparent 50%)
    `,
  },
  createSlides: {
    border: "1px solid #bcc6d9",
    backgroundColor: "#acacf5",
    backgroundImage: `
      radial-gradient(at 7% 5%, #c4c0f9 0px, transparent 50%),
      radial-gradient(at 5% 90%, #adc9fa 0px, transparent 50%),
      radial-gradient(at 90% 6%, #b6c3fd 0px, transparent 50%),
      radial-gradient(at 90% 91%, #c4eefe 0px, transparent 50%)
    `,
  },
};

const darkCardStyles: { [key: string]: CSSProperties } = {
  qa: { backgroundColor: "#1937cc" },
  generateImage: { backgroundColor: "#14c86a" },
  resumeBuilder: { backgroundColor: "#136ac4" },
  videoGeneration: { backgroundColor: "#ed8632" },
  createApp: { backgroundColor: "#fc9945" },
  createIllustrations: { backgroundColor: "#dd39c0" },
  productivityTools: { backgroundColor: "#3e16d1" },
  createSlides: { backgroundColor: "#2323e4" },
};

const getCardStyle = (key: string, isDark: boolean): CSSProperties =>
  isDark ? darkCardStyles[key] || {} : cardStyles[key] || {};

const Apps = () => {
  const dark = useDarkMode();
  const isDark = dark.theme === 'dark';

  const [open, setOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Map cards to backend categories
  const categoryMap: Record<string, string> = {
    qa: "q&a",
    generateImage: "generate-image",
    resumeBuilder: "resume-builder",
    videoGeneration: "video-gen",
    createApp: "create-app",
    createIllustrations: "create-illustrations",
    productivityTools: "productivity-tools",
    createSlides: "slides",
  };

  const cards = [
    { key: "qa", title: "Q&A", light: qaLight, dark: qaDark },
    {
      key: "generateImage",
      title: "Create images",
      light: imageLight,
      dark: imageDark,
    },
    {
      key: "resumeBuilder",
      title: "Resume builder",
      light: resumeLight,
      dark: resumeDark,
    },
    {
      key: "videoGeneration",
      title: "Create videos",
      light: videoLight,
      dark: videoDark,
    },
    {
      key: "createApp",
      title: "Create an app",
      light: appLight,
      dark: appDark,
    },
    {
      key: "createIllustrations",
      title: "Create illustrations",
      light: illustrationsLight,
      dark: illustrationsDark,
    },
    {
      key: "productivityTools",
      title: "Productivity tools",
      light: productivityLight,
      dark: productivityDark,
    },
    {
      key: "createSlides",
      title: "Create slides",
      light: slidesLight,
      dark: slidesDark,
    },
  ];

  const handleCardClick = (key: string) => {
    setActiveCard(key);
    setOpen(true);
  };

  const activeCategory = activeCard ? categoryMap[activeCard] ?? null : null;

  return (
    <IonPage>
      <Header />

      <IonContent 
        fullscreen
        style={{
          "--background": isDark ? "#16181c" : "#edf1f5",
          color: isDark ? "#c0c7ce" : "#111827",
        }}
      >
        <Sidebar />
        <IonGrid>
          <IonRow>
            {cards.map((card) => (
              <IonCol size="6" key={card.key} style={{ padding: "8px" }}>
                <div
                  onClick={() => handleCardClick(card.key)}
                  style={{
                    ...getCardStyle(card.key, isDark),
                    width: "100%",
                    height: "180px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    padding: "12px",
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-start",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "16px",
                      zIndex: 2,
                    }}
                  >
                    {card.title}
                  </span>

                  <img
                    src={isDark ? card.dark : card.light}
                    alt={card.title}
                    style={{
                      position: "absolute",
                      right: "0px",
                      bottom: "12px",
                      height: "60%",
                      maxWidth: "65%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <AppModal
          open={open}
          onClose={() => setOpen(false)}
          title={cards.find((c) => c.key === activeCard)?.title}
          category={activeCategory}
        />
      </IonContent>
    </IonPage>
  );
};

export default Apps;
