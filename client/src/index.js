import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  
import agencyUser from './agency/agencyUser';
import reportWebVitals from "./reportWebVitals";
import agencyApps from './agency/agencyApps';
import agencyAppsSale from './agency/agencyAppsSale';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{
    apps: new agencyApps(),
    appsSale: new agencyAppsSale(),
    user: new agencyUser(),
  }}>
    <App />
    </Context.Provider>,
  );

reportWebVitals();

