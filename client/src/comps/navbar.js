import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from "react";
import { Context } from "../index";
import { NavLink } from 'react-router-dom';
import { AdminRoutes, AgencyRoutes, LogRoutes, RegRoutes } from '../utility/constants';
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';


const NavBar  = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const LogOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    
    return (
    <Navbar bg="secondary" variant="dark">
        <Container>
        <b>
        <NavLink style={{textDecoration: 'none', color: 'yellow' }} to={AgencyRoutes}> Аренда Жилья </NavLink>
        </b>
        {user.IsAuth ?    
            <Nav className="ml-auto" style={{color: 'white'}} >
                <Button variant={"outline-info"} className='me-3' 
                    onClick={() => navigate(AdminRoutes)}> Вход в панель администратора 
                </Button>
                <Button variant={"outline-info"} 
                    onClick={() => LogOut()} > Выход 
                    </Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color: 'white'}} > 
                    <Button variant={"outline-info"} onClick={() => navigate(LogRoutes)}> Авторизация </Button>
            </Nav>
        }
        </Container>
    </Navbar> 
    );  
});

export default NavBar;