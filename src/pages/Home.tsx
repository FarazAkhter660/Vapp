import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import ChatInput from "../components/ChatInput";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="vera-header">
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>

          <div className="vera-logo">vera</div>

          <IonButtons slot="end">
            <IonButton>
              <div className="profile-dot" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="vera-content">
        <div className="center-content">
          <h1>How can I help?</h1>

          <IonGrid className="quick-actions">
            {/* <IonRow>
              <IonCol size="3">
                <div className="action-card">
                  <div className="icon-box gradient-1" />
                  <p>Analyze<br />Document</p>
                </div>
              </IonCol>

              <IonCol size="3">
                <div className="action-card">
                  <div className="icon-box gradient-2" />
                  <p>Create<br />Image</p>
                </div>
              </IonCol>

              <IonCol size="3">
                <div className="action-card">
                  <div className="icon-box gradient-3" />
                  <p>Create<br />Marketing Asset</p>
                </div>
              </IonCol>

              <IonCol size="3">
                <div className="action-card">
                  <div className="icon-box dark" />
                  <p>See<br />all</p>
                </div>
              </IonCol>
            </IonRow> */}
          </IonGrid>
        </div>

        <div className="discover-btn">Discover</div>
        <ChatInput />
      </IonContent>
    </IonPage>
  );
};

export default Home;
