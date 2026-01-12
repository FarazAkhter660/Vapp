import { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChatInput from "../components/ChatInput";
import QuickActions from "../components/QuickActions";
import { useChatHandler } from "../hooks/useChatHandler";
import useDarkMode from "../lib/useDarkMode";

import discover from "../../app/assets/discover.svg";
import { Sun, Moon } from "@phosphor-icons/react";

const Home = () => {
  const { handleMessage } = useChatHandler();
  const dark = useDarkMode();
  const [hover, setHover] = useState(false);

  return (
    <IonPage>
      <Header />

      <IonContent
        fullscreen
        style={{
          "--background": dark.theme === "light" ? "#ffffff" : "#0f1115",
          color: dark.theme === "light" ? "#111827" : "#e5e7eb",
        }}
      >
        <Sidebar />
        <div
          style={{
            position: "fixed",
            top: "calc(16px + env(safe-area-inset-top) + 56px)",
            right: "16px",
            zIndex: 999,
          }}
        >
          <button
            onClick={dark.toggleTheme}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              width: "44px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                dark.theme === "light"
                  ? "radial-gradient(120% 120% at 30% 20%, #f2f4f6 0%, #e2e6ea 45%, #cfd5db 100%)"
                  : "radial-gradient(120% 120% at 30% 20%, #2f3438 0%, #23272b 45%, #1b1f23 100%)",

              boxShadow:
                dark.theme === "light"
                  ? "inset 0 1px 1px rgba(255,255,255,0.6), 0 6px 14px rgba(0,0,0,0.15)"
                  : "inset 0 1px 1px rgba(255,255,255,0.08), 0 8px 18px rgba(0,0,0,0.55)",

              transition: "all 0.25s ease",
            }}
          >
            {dark.theme === "light" ? (
              <Sun size={20} color="#7c8694" />
            ) : (
              <Moon size={20} color="#c9ced6" />
            )}
          </button>
        </div>

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
              background: dark.theme === "light" ? "#f3f4f6" : "#14171c",
              color: dark.theme === "light" ? "#111827" : "#e5e7eb",
              padding: "10px 18px",
              borderRadius: "20px",
              fontSize: "14px",
              boxShadow: dark.theme === "light" 
                ? "0 6px 16px rgba(0,0,0,0.1)" 
                : "0 6px 16px rgba(0,0,0,0.4)",
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
