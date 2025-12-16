import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react'
import {
  menuOutline,
  moonOutline,
  arrowForwardOutline,
  attachOutline,
} from 'ionicons/icons'
import './Home.css'

const Home = () => {
  return (
    <IonPage>
      {/* Header */}
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

      {/* Content */}
      <IonContent fullscreen className="vera-content">
        <IonButton className="theme-toggle" fill="clear">
          <IonIcon icon={moonOutline} />
        </IonButton>

        <div className="center-content">
          <h1>How can I help?</h1>

          <div className="input-card">
            <IonInput
              placeholder="Ask me anything..."
              className="vera-input"
            />

            <div className="input-actions">
              <IonButton fill="clear" className="attach-btn">
                <IonIcon icon={attachOutline} />
                Attach
              </IonButton>

              <IonButton className="send-btn">
                <IonIcon icon={arrowForwardOutline} />
              </IonButton>
            </div>
          </div>

          <IonGrid className="quick-actions">
            <IonRow>
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
            </IonRow>
          </IonGrid>
        </div>

        <div className="discover-btn">
          Discover
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
