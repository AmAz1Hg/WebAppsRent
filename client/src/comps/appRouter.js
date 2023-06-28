import React, { useContext } from "react";
import { Routes, Route} from "react-router-dom";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { AuthorizationRoutes, NoneAuthorizationRoutes } from "../Routes";
import { AppsRoutes } from "../utility/constants";

const AppRouter = observer(() => {

const {user} = useContext(Context)
console.log(user)
  return (  
   

    <Routes>
      {user.IsAuth && AuthorizationRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>   
)}
      {NoneAuthorizationRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>} exact/>
)}
      <Route path='*' element={<AppsRoutes/>}   />
      </Routes >
      );
});

export default AppRouter;
