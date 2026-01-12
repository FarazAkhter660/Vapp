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
            ? "#16181c"
            : "#eff3f7",
          color: isDark ? "#c0c7ce" : "#111827",
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
              color: isDark ? "#c0c7ce" : "#7c8694",
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
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? "#3a3e42" : "#dfe0e1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isDark ? "#1b1f24" : "#f8f9fb";
            }}
          >
            <IonIcon icon={addOutline} style={getSidebarIconStyle(isDark)} />
            <span>New chat</span>
          </button>

          <button 
            style={getSidebarItemStyle(isDark)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? "#3a3e42" : "#dfe0e1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isDark ? "#1b1f24" : "#f8f9fb";
            }}
          >
            <IonIcon icon={searchOutline} style={getSidebarIconStyle(isDark)} />
            <span>Search chats</span>
          </button>

          <button
            onClick={goToApps}
            style={getSidebarItemStyle(isDark)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? "#3a3e42" : "#dfe0e1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isDark ? "#1b1f24" : "#f8f9fb";
            }}
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
            <div 
              key={i} 
              style={getChatItemStyle(isDark)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark ? "#3a3e42" : "#dfe0e1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark ? "#1b1f24" : "#f8f9fb";
              }}
            >
              {chat}
            </div>
          ))}

          <p style={getSectionStyle(isDark)}>Previous 30 days</p>
          {previousChats.map((chat, i) => (
            <div 
              key={i} 
              style={getChatItemStyle(isDark)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark ? "#3a3e42" : "#dfe0e1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark ? "#1b1f24" : "#f8f9fb";
              }}
            >
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
  background: isDark ? "#1b1f24" : "#f8f9fb",
  color: isDark ? "#c0c7ce" : "#111827",
  border: isDark ? "1px solid #303438" : "1px solid #e1e4e9",
  fontSize: "15px",
  cursor: "pointer",
  transition: "all 0.15s ease",
});

const getSidebarIconStyle = (isDark: boolean): React.CSSProperties => ({
  fontSize: "18px",
  color: isDark ? "#c0c7ce" : "#7c8694",
});

const getSectionStyle = (isDark: boolean): React.CSSProperties => ({
  margin: "14px 0 8px",
  fontSize: "13px",
  fontWeight: 600,
  color: isDark ? "#c0c7ce" : "#7c8694",
});

const getChatItemStyle = (isDark: boolean): React.CSSProperties => ({
  background: isDark ? "#1b1f24" : "#f8f9fb",
  border: isDark ? "1px solid #303438" : "1px solid #e1e4e9",
  borderRadius: "14px",
  padding: "12px 14px",
  fontSize: "14px",
  color: isDark ? "#c0c7ce" : "#111827",
  marginBottom: "8px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  transition: "all 0.15s ease",
  cursor: "pointer",
});

export default Sidebar;
