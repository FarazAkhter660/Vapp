import {
  IonModal,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import useDarkMode from '../lib/useDarkMode'

import taskGroup from '../../app/assets/taskGroup.svg'
import graph from '../../app/assets/graph.svg'
import article from '../../app/assets/article.svg'
import url from '../../app/assets/url.svg'
import edit from '../../app/assets/edit.svg'
import excel from '../../app/assets/excel.svg'
import itinerary from '../../app/assets/maps.svg'

import analyzeLight from '../../app/assets/analyze-light.svg'
import analyzeDark from '../../app/assets/analyze-dark.svg'
import createLight from '../../app/assets/create-light.svg'
import createDark from '../../app/assets/create-dark.svg'
import assetLight from '../../app/assets/asset-light.svg'
import assetDark from '../../app/assets/asset-dark.svg'
import linkedinLight from '../../app/assets/linkedin-light.svg'
import linkedinDark from '../../app/assets/linkedin-dark.svg'

interface Props {
  open: boolean
  onClose: () => void
}

const SeeAllAppsModal = ({ open, onClose }: Props) => {
  const dark = useDarkMode()
  const isDark = dark.theme === 'dark'

  const items = [
    { label: 'Analyze Document', icon: isDark ? analyzeDark : analyzeLight },
    { label: 'Create Image', icon: isDark ? createDark : createLight },
    { label: 'Create Marketing Asset', icon: isDark ? assetDark : assetLight },
    {
      label: 'Create LinkedIn Post',
      icon: isDark ? linkedinDark : linkedinLight,
    },
    { label: 'Create Quiz', icon: taskGroup },
    { label: 'Create Graph', icon: graph },
    { label: 'Write Article', icon: article },
    { label: 'Analyze URL', icon: url },
    { label: 'Edit Content', icon: edit },
    { label: 'Excel Analysis', icon: excel },
    { label: 'Create Itinerary', icon: itinerary },
  ]

  return (
    <IonModal
      isOpen={open}
      onDidDismiss={onClose}
      initialBreakpoint={0.5}
      breakpoints={[0, 0.5, 1]}
      handleBehavior="cycle"
    >
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div
          style={{
            padding: 20,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 18,
          }}
        >
          {items.map((item) => (
            <div
              key={item.label}
              style={{
                background: isDark ? '#1f2328' : '#f2f4f7',
                borderRadius: 16,
                padding: 14,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  margin: '0 auto 10px',
                  background: isDark ? '#2a2f36' : '#e6e9ee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: 28, height: 28 }}
                />
              </div>

              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.2,
                  color: isDark ? '#e5e7eb' : '#111827',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonModal>
  )
}

export default SeeAllAppsModal
