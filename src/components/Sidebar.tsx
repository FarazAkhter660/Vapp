import { IonIcon, useIonRouter } from "@ionic/react";
import {
  closeOutline,
  addOutline,
  searchOutline,
  appsOutline,
} from "ionicons/icons";
import { useSidebar } from "../stores/sidebar";
import "./Sidebar.css";

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

  return (
    <>
      {open && (
        <div className="sidebar-backdrop" onClick={() => setOpen(false)} />
      )}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <button onClick={() => setOpen(false)}>
            <IonIcon icon={closeOutline} />
          </button>
        </div>

        <div className="sidebar-actions">
          <button className="sidebar-item">
            <IonIcon icon={addOutline} />
            <span>New chat</span>
          </button>

          <button className="sidebar-item">
            <IonIcon icon={searchOutline} />
            <span>Search chats</span>
          </button>

          <button className="sidebar-item" onClick={goToApps}>
            <IonIcon icon={appsOutline} />
            <span>Apps</span>
          </button>
        </div>

        <div className="sidebar-list">
          <p className="sidebar-section">Today</p>
          {todayChats.map((chat, i) => (
            <div key={i} className="sidebar-chat">
              {chat}
            </div>
          ))}

          <p className="sidebar-section">Previous 30 days</p>
          {previousChats.map((chat, i) => (
            <div key={i} className="sidebar-chat">
              {chat}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
