import React, { useContext, useState } from "react";
import { NavLink, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Card, Container, Form} from "react-bootstrap";
import { AgencyRoutes, AppsRoutes, LogRoutes, PasswordErrorRoutes, RegRoutes } from "../utility/constants";
import { log, reg } from "../http/UsersApi";
import { observer } from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
const Location = useLocation()
const IsLogin = Location.pathname === LogRoutes
const navigated = useNavigate()
const {user} = useContext(Context)
const [mail, setMail] = useState('')
const [password, setPassword] = useState('')


const Sign = async () => {
    try {
        let data
        if (IsLogin) {
            data = await log(mail, password)
        }  else  {
            data = await reg(mail, password)
        }
        user.setUser(data)
        user.setIsAuth(true)
        navigated(AgencyRoutes)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }  
  
    
return (
    <Container 
        className = "d-flex justify-content-center align-items-center "
        style={{height: window.innerHeight - 54}}
    >
        <Card style={{width: 600}} className="p-4 card bg-info shadow-lg p-2 mb-4 bg rounded">
            <h3 className="m-auto">{IsLogin ? 'Авторизация' : 'Регистрация'}</h3>
                <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-4"
                    placeholder="Введите логин"
                    value={mail}
                    onChange={e => setMail(e.target.value)}
                />
                </Form> 
                <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-2"    
                    placeholder="Введите пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                /> 
                </Form> 
                <Form className="d-flex justify-content-between mt-2">
                <button type="button" className="btn btn-outline-dark align-self-start mt-2"
                        onClick={Sign}
                >
                {IsLogin ? 'Войти' :  'Зарегистрироваться'}
                </button> 

                {IsLogin ?  
                <div className="pt-3"> 
                    <NavLink to={PasswordErrorRoutes} style={{ textDecoration: 'none', color: 'red', fontWeight: '700', marginRight: 24 }} className="pt-2"> Забыли пароль? </NavLink>
                    Если нет аккаунта, <NavLink to={RegRoutes} style={{ textDecoration: 'none', color: 'yellow', fontWeight: '700'}} className="mt-0"> Зарегистрируйтесь </NavLink>
                </div>
                :
                <div className="pt-3">
                      Если есть аккаунт, <NavLink to={LogRoutes} style={{ textDecoration: 'none', color: 'yellow', fontWeight: '700' }} className="mt-0"> Войдите </NavLink>
                      
                </div>
                }
                </Form>         
        </Card>
    </Container>
);
});

export default Auth;