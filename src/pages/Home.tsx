import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/react";
import { menuOutline } from "ionicons/icons";

import Sidebar from "../components/Sidebar";
import ChatInput from "../components/ChatInput";
import QuickActions from "../components/QuickActions";
import { useSidebar } from "../stores/sidebar";
import { useChatHandler } from "../hooks/useChatHandler";

const Home = () => {
  const { open, toggle } = useSidebar();
  const { handleMessage } = useChatHandler();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar
          style={{
            "--background": "#0f1115",
            "--color": "#e5e7eb",
          }}
        >
          <IonButtons slot="start">
            <IonButton onClick={toggle}>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              margin: "0 auto",
            }}
          >
            vera
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        style={{
          "--background": "#0f1115",
          color: "#e5e7eb",
        }}
      >
        <Sidebar />

        <div
          style={{
            minHeight: "calc(100vh - 56px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: "16px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <h1
              style={{
                fontSize: "32px",
                fontWeight: 500,
                margin: 0,
                color: "#e5e7eb",
              }}
            >
              How can I help?
            </h1>

            <ChatInput onMessage={(text) => handleMessage(text)} />
          </div>

          <QuickActions />

          <div
            style={{
              position: "fixed",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#14171c",
              padding: "10px 22px",
              borderRadius: "20px",
              fontSize: "14px",
              color: "#e5e7eb",
            }}
          >
            Discover
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
