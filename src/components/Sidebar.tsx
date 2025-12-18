import { IonIcon } from '@ionic/react'
import { closeOutline, addOutline, searchOutline, appsOutline } from 'ionicons/icons'
import { useSidebar } from '../stores/sidebar'
import './Sidebar.css'

const Sidebar = () => {
  const { open, setOpen } = useSidebar()

  return (
    <>
      {/* Mobile backdrop */}
      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? 'open' : ''}`}>
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

          <button className="sidebar-item">
            <IonIcon icon={appsOutline} />
            <span>Apps</span>
          </button>
        </div>

        <div className="sidebar-list">
          {/* Placeholder for chat list */}
          <p className="sidebar-section">Recent</p>
          <div className="sidebar-chat">Chat 1</div>
          <div className="sidebar-chat">Chat 2</div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
