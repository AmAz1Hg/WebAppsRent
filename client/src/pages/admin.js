import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import AddApps from "../comps/window/AddApps";
import { observer } from "mobx-react-lite";
import {Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AgencyRoutes } from "../utility/constants";
import AddAppsSale from "../comps/window/AddAppsSale";

const Admin = observer(() => {

const backgroundImage = 'url(https://vsegda-pomnim.com/uploads/posts/2022-04/1649325071_42-vsegda-pomnim-com-p-plyazhi-ruminii-foto-49.jpg)'; // Замените на URL вашей картинки 
const [appsVisible, setAppsVisible] = useState(false)
const [appsVisible2, setAppsVisible2] = useState(false)
const navigate = useNavigate() 


const containerStyle = {
  backgroundImage: backgroundImage,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '95vh', // Высота контейнера, чтобы заполнить весь экран
};

return (
  <Container fluid style={containerStyle}> 
        <Form>
        <Button variant={"danger"} className="mt-4 pt-2 shadow p-2 mb-4 bg rounded"
        style={{marginLeft: 540}}
        onClick={() => setAppsVisible(true)}
        >  
            <h4>
              Добавить апартаменты для аренды
            </h4>
        </Button>
         <AddApps show={appsVisible} onHide={() => setAppsVisible(false)}/>  
        <br/>

        <Button variant={"primary"} className="mt-1 pt-2 shadow p-2 mb-4 bg rounded"
        style={{marginLeft: 532}}
        onClick={() => setAppsVisible2(true)}
        >  
            <h4>
              Добавить апартаменты для продажи
            </h4>
        </Button>
         <AddAppsSale show={appsVisible2} onHide={() => setAppsVisible2(false)}/>  

         <br/>
         <Button
            style={{marginLeft: 600}}
            variant={"success"}    
            className='mr-2'  
            onClick={() => navigate(AgencyRoutes)}> 
            <h6>
            На главную страницу приложения
            </h6>
            </Button>

         </Form>
    </Container>
);
});

export default Admin;
