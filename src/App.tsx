import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Chat from "./pages/Chat";
import { useThemeStore } from "./stores/theme";

import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <IonApp>
      <div
        style={{
          minHeight: '100vh',
          background: isDark ? '#16181c' : '#edf1f5',
          transition: 'background-color 0.2s ease',
        }}
      >
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home" component={Home} />
            <Route exact path="/chat/:id" component={Chat} />
            <Route exact path="/apps" component={Apps} />

            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>
        </IonReactRouter>
      </div>
    </IonApp>
  );
};

export default App;
