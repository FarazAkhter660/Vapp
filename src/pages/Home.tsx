import { IonPage, IonContent } from "@ionic/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChatInput from "../components/ChatInput";
import QuickActions from "../components/QuickActions";
import { useChatHandler } from "../hooks/useChatHandler";
import discover from "../../app/assets/discover.svg";

const Home = () => {
  const { handleMessage } = useChatHandler();

  return (
    <IonPage>
      <Header />
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
              padding: "10px 18px",
              borderRadius: "20px",
              fontSize: "14px",
              color: "#e5e7eb",
              boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src={discover}
              alt="Discover"
              style={{
                height: "18px",
                width: "18px",
              }}
            />

            <span>Discover</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
