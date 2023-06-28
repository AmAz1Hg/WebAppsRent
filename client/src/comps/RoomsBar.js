import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Button, ListGroup } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { AdminRoutes, AgencyRoutes, LogRoutes, RegRoutes } from '../utility/constants';


const RoomsBar = observer(() => {
    const {apps} = useContext(Context)
    const navigate = useNavigate()

    return (

        <Col className="pt-2" sm={10}>
        <ListGroup className="pt-2">        
          <ListGroup.Item action href="#link1"
            onClick={() => navigate(AdminRoutes)}> Внести апартаменты в базу
          </ListGroup.Item>
          <ListGroup.Item action href="#link3"
          onClick={() => navigate(LogRoutes)}>
            К странице авторизации
          </ListGroup.Item>
        </ListGroup> 

      </Col>
    );
});

export default RoomsBar;    