import { IonIcon, useIonRouter } from "@ionic/react";
import {
  closeOutline,
  addOutline,
  searchOutline,
  appsOutline,
} from "ionicons/icons";
import { useSidebar } from "../stores/sidebar";
import useDarkMode from "../lib/useDarkMode";

const Sidebar = () => {
  const { open, setOpen } = useSidebar();
  const router = useIonRouter();
  const dark = useDarkMode();
  const isDark = dark.theme === 'dark';

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
            background: isDark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.2)",
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
          background: isDark 
            ? "linear-gradient(180deg, #0f1215, #14181d)"
            : "linear-gradient(180deg, #ffffff, #f9fafb)",
          color: isDark ? "#e6e6e6" : "#111827",
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
              color: isDark ? "#9aa0a6" : "#6b7280",
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
            style={getSidebarItemStyle(isDark)}
          >
            <IonIcon icon={addOutline} style={getSidebarIconStyle(isDark)} />
            <span>New chat</span>
          </button>

          <button style={getSidebarItemStyle(isDark)}>
            <IonIcon icon={searchOutline} style={getSidebarIconStyle(isDark)} />
            <span>Search chats</span>
          </button>

          <button
            onClick={goToApps}
            style={getSidebarItemStyle(isDark)}
          >
            <IonIcon icon={appsOutline} style={getSidebarIconStyle(isDark)} />
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
          <p style={getSectionStyle(isDark)}>Today</p>
          {todayChats.map((chat, i) => (
            <div key={i} style={getChatItemStyle(isDark)}>
              {chat}
            </div>
          ))}

          <p style={getSectionStyle(isDark)}>Previous 30 days</p>
          {previousChats.map((chat, i) => (
            <div key={i} style={getChatItemStyle(isDark)}>
              {chat}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

/* 🔹 Reusable inline styles - will be made dynamic */
const getSidebarItemStyle = (isDark: boolean): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "14px 16px",
  borderRadius: "16px",
  background: isDark ? "#1b2026" : "#f3f4f6",
  color: isDark ? "#e6e6e6" : "#111827",
  border: isDark ? "1px solid #242a31" : "1px solid #e5e7eb",
  fontSize: "15px",
  cursor: "pointer",
});

const getSidebarIconStyle = (isDark: boolean): React.CSSProperties => ({
  fontSize: "18px",
  color: isDark ? "#cbd5e1" : "#6b7280",
});

const getSectionStyle = (isDark: boolean): React.CSSProperties => ({
  margin: "14px 0 8px",
  fontSize: "13px",
  fontWeight: 600,
  color: isDark ? "#9aa0a6" : "#6b7280",
});

const getChatItemStyle = (isDark: boolean): React.CSSProperties => ({
  background: isDark ? "#1b2026" : "#f3f4f6",
  border: isDark ? "1px solid #242a31" : "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "12px 14px",
  fontSize: "14px",
  color: isDark ? "#e6e6e6" : "#111827",
  marginBottom: "8px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default Sidebar;
