import { IonIcon, useIonRouter } from "@ionic/react";
import {
  closeOutline,
  addOutline,
  searchOutline,
  appsOutline,
} from "ionicons/icons";
import { useSidebar } from "../stores/sidebar";

const Sidebar = () => {
  const { open, setOpen } = useSidebar();
  const router = useIonRouter();

  const todayChats = ["Increase Ionic Icon Size"];

  const previousChats = [
    "Thailand Cambodia Refugee...",
    "Thailand Cambodia Border...",
    "Requesting Marketing Asset...",
    "US China Trade Tensions",
    "China accuses US tariffs",
    "India Cyber Safety App",
    "Sanchar Saathi App Image",
    "India Smartphone Cyber Saf...",
    "Aditya-L1 Solar Maximum",
    "Photo-realistic Fish Gills",
    "Focus Image Generation",
  ];

  const goToApps = () => {
    setOpen(false);
    router.push("/apps", "forward");
  };

  const goToHome = () => {
    setOpen(false);
    router.push("/home", "forward");
  };

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 1000,
          }}
        />
      )}

      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "230px",
          background: "linear-gradient(180deg, #0f1215, #14181d)",
          color: "#e6e6e6",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
          padding: "16px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "12px",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#9aa0a6",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            <IonIcon icon={closeOutline} />
          </button>
        </div>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={goToHome}
            style={sidebarItemStyle}
          >
            <IonIcon icon={addOutline} style={sidebarIconStyle} />
            <span>New chat</span>
          </button>

          <button style={sidebarItemStyle}>
            <IonIcon icon={searchOutline} style={sidebarIconStyle} />
            <span>Search chats</span>
          </button>

          <button
            onClick={goToApps}
            style={sidebarItemStyle}
          >
            <IonIcon icon={appsOutline} style={sidebarIconStyle} />
            <span>Apps</span>
          </button>
        </div>

        {/* Chat list */}
        <div
          style={{
            overflowY: "auto",
            paddingRight: "4px",
          }}
        >
          <p style={sectionStyle}>Today</p>
          {todayChats.map((chat, i) => (
            <div key={i} style={chatItemStyle}>
              {chat}
            </div>
          ))}

          <p style={sectionStyle}>Previous 30 days</p>
          {previousChats.map((chat, i) => (
            <div key={i} style={chatItemStyle}>
              {chat}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

/* 🔹 Reusable inline styles */
const sidebarItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "14px 16px",
  borderRadius: "16px",
  background: "#1b2026",
  color: "#e6e6e6",
  border: "1px solid #242a31",
  fontSize: "15px",
  cursor: "pointer",
};

const sidebarIconStyle: React.CSSProperties = {
  fontSize: "18px",
  color: "#cbd5e1",
};

const sectionStyle: React.CSSProperties = {
  margin: "14px 0 8px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#9aa0a6",
};

const chatItemStyle: React.CSSProperties = {
  background: "#1b2026",
  border: "1px solid #242a31",
  borderRadius: "14px",
  padding: "12px 14px",
  fontSize: "14px",
  color: "#e6e6e6",
  marginBottom: "8px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export default Sidebar;
