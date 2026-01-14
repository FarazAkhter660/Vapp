import { IonPage, IonContent } from "@ionic/react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChatInput from "../components/ChatInput";
import QuickActions from "../components/QuickActions";
import { useChatHandler } from "../hooks/useChatHandler";
import useDarkMode from "../lib/useDarkMode";

import discoverDark from "../../app/assets/discover.svg";
import discoverLight from "../../app/assets/discoverlight.svg";
import { Sun, Moon } from "@phosphor-icons/react";

const Home = () => {
  const { handleMessage } = useChatHandler();
  const dark = useDarkMode();
  const isDark = dark.theme === "dark";

  return (
    <IonPage>
      <Header />

      <IonContent
        fullscreen
        style={{
          "--background": isDark ? "#16181c" : "#edf1f5",
          color: isDark ? "#c0c7ce" : "#374151",
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
            aria-label="Toggle theme"
            style={{
              width: "40px",
              height: "32px",
              borderRadius: "999px",
              border: isDark ? "1px solid #36393d" : "1px solid #cccfd3",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: isDark ? "#232629" : "#eceff1",
              boxShadow: isDark
                ? "0 1.5px 11px 1.5px rgba(112,116,120,0.1)"
                : "0 1.5px 11px 1.5px rgba(78,84,93,0.05)",
              transition: "all 0.2s ease",
            }}
          >
            {isDark ? (
              <Moon size={17} color="#c0c7ce" />
            ) : (
              <Sun size={17} color="#7c8694" />
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
                fontSize: "38px",
                fontWeight: 500,
                margin: 0,
                color: isDark ? "#c0c7ce" : "#7c8694",
              }}
            >
              How can I help?
            </h1>

            <div
              style={{
                width: "100%",
                background: isDark ? "#1b1f24" : "#f8f9fb",
                border: isDark ? "1px solid #303438" : "1px solid #e1e4e9",
                borderRadius: "24px",
                boxShadow: isDark
                  ? "0 12px 30px rgba(0,0,0,0.5)"
                  : "0 10px 24px rgba(0,0,0,0.08)",
              }}
            >
              <ChatInput onMessage={(text) => handleMessage(text)} />
            </div>
          </div>

          <QuickActions />

          <div
            style={{
              position: "fixed",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              background: isDark ? "#1b1f24" : "#f8f9fb",
              color: isDark ? "#c0c7ce" : "#374151",
              padding: "10px 18px",
              borderRadius: "20px",
              fontSize: "14px",
              border: isDark ? "1px solid #303438" : "1px solid #e1e4e9",
              boxShadow: isDark
                ? "0 6px 16px rgba(0,0,0,0.4)"
                : "0 6px 16px rgba(0,0,0,0.12)",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src={isDark ? discoverDark : discoverLight}
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
