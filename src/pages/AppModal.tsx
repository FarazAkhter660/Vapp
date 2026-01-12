import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonSpinner,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EdenClient from "../lib/eden.client";
import AppModalDetail from "./AppModalDetail";
import useDarkMode from "../lib/useDarkMode";

interface AppModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  category: string | null;
}

const AppModal = ({ open, onClose, title, category }: AppModalProps) => {
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeApp, setActiveApp] = useState<any>(null);
  const dark = useDarkMode();
  const isDark = dark.theme === 'dark';

  const { data: apps = [], isLoading } = useQuery({
    queryKey: ["apps", category],
    queryFn: async () => {
      if (!category) return [];
      const res = await EdenClient.apps.list.get({
        query: { category, limit: 1000, page: 1 },
      });
      return res.data?.data?.apps || [];
    },
    enabled: open && !!category,
  });

  const openDetail = (app: any) => {
    setActiveApp(app);
    setDetailOpen(true);
  };
  return (
    <>
      <IonModal isOpen={open} onDidDismiss={onClose}>
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={onClose}>
                <IonIcon icon={arrowBack} />
              </IonButton>
            </IonButtons>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <div style={{ padding: "16px" }}>
            {isLoading ? (
              <div
                style={{
                  height: "60vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IonSpinner />
              </div>
            ) : apps.length === 0 ? (
              <p style={{ 
                textAlign: "center", 
                opacity: 0.6,
                color: isDark ? "#e5e7eb" : "#111827",
              }}>
                No apps found.
              </p>
            ) : (
              apps.map((app: any) => (
                <div
                  key={app.id}
                  onClick={() => openDetail(app)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px",
                    marginBottom: "12px",
                    borderRadius: "14px",
                    background: isDark ? "#1f2326" : "#f3f4f6",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: isDark ? "#2a2e30" : "#e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        style={{
                          width: 26,
                          height: 26,
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          lineHeight: 1.2,
                          color: isDark ? "#e5e7eb" : "#111827",
                        }}
                      >
                        {app.name}
                      </div>

                      <div
                        style={{
                          fontSize: 13,
                          opacity: 0.65,
                          marginTop: 4,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          color: isDark ? "#e5e7eb" : "#111827",
                        }}
                      >
                        {app.description}
                      </div>
                    </div>
                  </div>

                  <IonButton
                    fill="clear"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDetail(app);
                    }}
                    style={{
                      color: "#60a5fa",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    Visit
                  </IonButton>
                </div>
              ))
            )}
          </div>
        </IonContent>
      </IonModal>

      {activeApp && (
        <AppModalDetail
          open={detailOpen}
          onClose={() => setDetailOpen(false)}
          title={activeApp.name}
          description={activeApp.description}
          website={activeApp.website}
        />
      )}
    </>
  );
};

export default AppModal;
