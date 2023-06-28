import { AdminRoutes, AgencyRoutes, AppsRoutes, RegRoutes, LogRoutes, AppsSaleRoutes} from "./utility/constants"
import Admin from './pages/admin'
import Agency from './pages/agency'
import Auth from './pages/auth'
import AppsPage from "./pages/AppsPage"

export const AuthorizationRoutes = [
  
    {
        path: AdminRoutes,
        Component: Admin
    }   
]

export const NoneAuthorizationRoutes = [
 

    
    {
        path: RegRoutes,                   // Регистрация
        Component: Auth
    }, 

    {
        path: LogRoutes,                   // Вход
        Component: Auth
    },   

    
    {
        path: AgencyRoutes,                // Агентство
        Component: Agency
    },

    {
        path: AppsRoutes + '/:id',         // Апартаменты
        Component: AppsPage
    },

  
]