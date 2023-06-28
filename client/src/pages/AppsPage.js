import React, { useEffect, useState } from "react";
import { Col, Image, Container, Row, Card } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import { fetchOneApps } from "../http/AppsApi";
import LocationComponent  from "../comps/locations"
import { AgencyRoutes } from "../utility/constants";
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const AppsPage = () => {
    const navigate = useNavigate()
    const [apps, setApps] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneApps(id).then(data => setApps(data))
    }, [])

    return (     
    <Container className="pt-4" >
        <Row>
            <Col md={6} style={{paddingLeft: 100}}>
                <Image width={525} height={460} src={process.env.REACT_APP_API_URL + apps.img_1} />
                <Image width={525} height={460} className="pt-4 mb-4" src={process.env.REACT_APP_API_URL + apps.img_2} />
            </Col>
            
            <Col md={5}>
                <Card style={{height: 924}} border={"danger"}>
                <Row className="pt-0">
                    <div className="pt-0" style={{paddingLeft: 17, marginTop: 1}}>
                    <h4>
                    Город - {apps.city}  <br/>
                    Расположение (район)  - {apps.location}  
                    </h4>
                    <h5>
                    Площадь квартиры {apps.area} кв.метров, {apps.rooms} комнаты <br/> 
                    Стоимость аренды {apps.rent} р., гарантии {apps.guarantee} р., Комиссия {apps.commision} р. <br/>
                    </h5> 
                    </div>
                    <Image width={500} height={450} className="pt-1" src={process.env.REACT_APP_API_URL + apps.img_3} />
                        <Row className="d-flex flex-column pt-3">
                        <div className="pt-0" style={{paddingLeft: 17}}>
                            <h4>
                            Дата заезда {apps.arrival} и выезда {apps.departure}  <br/>
                            Оснащение квартиры:
                            </h4>
                            <h5>
                            {apps.equipments} <br/> <br/> 
                            {apps.descriptions}
                            </h5>
                            </div>
                         <Button
                            style={{marginLeft: 12}}
                            variant={"outline-primary"}    
                            className='mt-2 mb-3 mr-3'  
                            onClick={() => navigate(AgencyRoutes)}> Вернуться на главную страницу
                        </Button>
                 </Row>
                </Row>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default AppsPage;