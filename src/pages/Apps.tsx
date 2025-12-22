import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import { CSSProperties, useMemo } from "react";

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
};

const darkCardStyles: { [key: string]: CSSProperties } = {
  qa: {
    border: "1px solid #123ea5",
    backgroundColor: "#1937cc",
    backgroundImage: `
      radial-gradient(at 8% 10%, #0d68c7 0px, transparent 50%),
      radial-gradient(at 12% 80%, #1645bb 0px, transparent 50%),
      radial-gradient(at 80% 14%, #1e1ed2 0px, transparent 50%),
      radial-gradient(at 92% 87%, #154298 0px, transparent 50%)
    `,
  },
  generateImage: {
    border: "1px solid #229557",
    backgroundColor: "#14c86a",
    backgroundImage: `
      radial-gradient(at 4% 7%, #14c564 0px, transparent 50%),
      radial-gradient(at 5% 92%, #14c14a 0px, transparent 50%),
      radial-gradient(at 94% 7%, #31d729 0px, transparent 50%),
      radial-gradient(at 94% 92%, #13c275 0px, transparent 50%)
    `,
  },
  createSlides: {
    border: "1px solid #1950c4",
    backgroundColor: "#2323e4",
    backgroundImage: `
      radial-gradient(at 7% 5%, #2a1ee0 0px, transparent 50%),
      radial-gradient(at 5% 90%, #1163ed 0px, transparent 50%),
      radial-gradient(at 90% 6%, #1941e5 0px, transparent 50%),
      radial-gradient(at 90% 91%, #0e6fbe 0px, transparent 50%)
    `,
  },
  resumeBuilder: {
    border: "1px solid #1368bb",
    backgroundColor: "#136ac4",
    backgroundImage: `
      radial-gradient(at 3% 6%, #136fc4 0px, transparent 50%),
      radial-gradient(at 3% 94%, #2569d4 0px, transparent 50%),
      radial-gradient(at 96% 6%, #1479de 0px, transparent 50%),
      radial-gradient(at 93% 89%, #0a86c4 0px, transparent 50%)
    `,
  },
  videoGeneration: {
    border: "1px solid #c66213",
    backgroundColor: "#ed8632",
    backgroundImage: `
      radial-gradient(at 2% 4%, #eb963a 0px, transparent 50%),
      radial-gradient(at 12% 79%, #e78c43 0px, transparent 50%),
      radial-gradient(at 97% 4%, #f56d57 0px, transparent 50%),
      radial-gradient(at 93% 99%, #f86868 0px, transparent 50%)
    `,
  },
  createApp: {
    border: "1px solid #af5513",
    backgroundColor: "#fc9945",
    backgroundImage: `
      radial-gradient(at 4% 7%, #fa9c52 0px, transparent 50%),
      radial-gradient(at 5% 93%, #ffdf3b 0px, transparent 50%),
      radial-gradient(at 93% 5%, #fca051 0px, transparent 50%),
      radial-gradient(at 90% 99%, #f7b725 0px, transparent 50%)
    `,
  },
  createIllustrations: {
    border: "1px solid #b7109b",
    backgroundColor: "#dd39c0",
    backgroundImage: `
      radial-gradient(at 6% 7%, #d829bb 0px, transparent 50%),
      radial-gradient(at 8% 88%, #d131b3 0px, transparent 50%),
      radial-gradient(at 69% 5%, #d134a9 0px, transparent 50%),
      radial-gradient(at 90% 88%, #da4089 0px, transparent 50%)
    `,
  },
  productivityTools: {
    border: "1px solid #3d16be",
    backgroundColor: "#3e16d1",
    backgroundImage: `
      radial-gradient(at 7% 5%, #3f17cf 0px, transparent 50%),
      radial-gradient(at 7% 89%, #2e19d2 0px, transparent 50%),
      radial-gradient(at 94% 8%, #9c17d2 0px, transparent 50%),
      radial-gradient(at 95% 88%, #1849d0 0px, transparent 50%)
    `,
  },
};

const getCardStyle = (key: string, isDark: boolean): CSSProperties =>
  isDark ? darkCardStyles[key] || {} : cardStyles[key] || {};

const Apps = () => {
  const isDark = useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );

  const cards = [
    { key: "qa", title: "Q&A", light: qaLight, dark: qaDark },
    { key: "generateImage", title: "Create images", light: imageLight, dark: imageDark },
    { key: "resumeBuilder", title: "Resume builder", light: resumeLight, dark: resumeDark },
    { key: "videoGeneration", title: "Create videos", light: videoLight, dark: videoDark },
    { key: "createApp", title: "Create an app", light: appLight, dark: appDark },
    { key: "createIllustrations", title: "Create illustrations", light: illustrationsLight, dark: illustrationsDark },
    { key: "productivityTools", title: "Productivity tools", light: productivityLight, dark: productivityDark },
    { key: "createSlides", title: "Create slides", light: slidesLight, dark: slidesDark },
  ];

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Browse</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="ion-padding">
          <div className="grid grid-cols-2 gap-3">
            {cards.map((card) => (
              <div
                key={card.key}
                style={getCardStyle(card.key, isDark)}
                className="relative rounded-xl overflow-hidden min-h-[120px] flex items-start p-3"
              >
                <span className="text-white font-semibold text-base leading-tight z-10">
                  {card.title}
                </span>
                <img
                  src={isDark ? card.dark : card.light}
                  alt={card.title}
                  className="absolute right-2 bottom-2 h-[45%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Apps;
