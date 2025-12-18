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
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import { useSidebar } from "../stores/sidebar";
import "./Home.css";

const Home = () => {
  const { open, toggle } = useSidebar();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="vera-header">
          <IonButtons slot="start">
            <IonButton onClick={toggle}>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>

          <div className="vera-logo">vera</div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="vera-content">
        <Sidebar />
        <div className={`home-wrapper ${open ? "sidebar-open" : ""}`}>
          <div className="center-content">
            <h1>How can I help?</h1>
          </div>

          <div className="discover-btn">Discover</div>
          <ChatInput />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
