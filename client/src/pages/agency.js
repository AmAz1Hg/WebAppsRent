import React, { useContext, useEffect } from "react";
import { Col, Container, Navbar, Row, Image } from "react-bootstrap";
import RoomsBar from "../comps/RoomsBar";
import AppsList from "../comps/AppsList"
import LocationComponent  from "../comps/locations"
import Pages from "../comps/pages";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchApps } from "../http/AppsApi";
import BackgroundImageContainer from "./background";
const logo = require('../comps/3.jpg')

const Agency = observer(() => {
    
    const {apps} = useContext(Context)
    const backgroundImageUrl = 'url(https://vsegda-pomnim.com/uploads/posts/2022-04/1649325056_10-vsegda-pomnim-com-p-plyazhi-ruminii-foto-12.jpg)'; // Замените на URL вашей картинки


    const containerStyle = {
        backgroundImage: backgroundImageUrl,
        paddingLeft: 190,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '95vh', // Высота контейнера, чтобы заполнить весь экран
      };

    useEffect(() => {
        fetchApps(1, 4).then(data => {
            apps.setApps(data)
            apps.setTotalCount(data.count) 
        })
    },   []) 

    useEffect(() => {
        fetchApps(apps.page, 2).then(data => {
            apps.setApps(data)
        })
    }, [apps.page]  )

return (
    <Container fluid style={containerStyle}> 
        <Row className="ml-3" >
            <Col md={3}>
                <RoomsBar/>
            </Col>
            <Col md={9} className="pt-1">
                <AppsList/>
                <Pages/>
            </Col>
        </Row>
    </Container>
);
});

export default Agency;