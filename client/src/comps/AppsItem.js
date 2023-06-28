import React from "react";
import { Col, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AppsRoutes } from "../utility/constants";

import Image from "react-bootstrap/Image";

/* eslint-disable react/prop-types */

const AppsItem = ({apps}) => {
const navigated = useNavigate()

    return (
        
        <Col className="mt-2" md={3} onClick={() => navigated(AppsRoutes + '/' + apps.id)}>
            <Card style={{width: 208, cursor: 'poinet', paddingBottom: 5}} border={"light"}>
                <Image width={208} height={167} src={process.env.REACT_APP_API_URL + apps.img_3}/>
                <div>
                    <div className="mt-1" style={{marginLeft: 5}} > Апартаменты {apps.rooms}-комнатные 
                    <div>  в г. {apps.city}, площадью {apps.area} квадратных метров (а) </div>
                    </div>
                </div>
            </Card>
        </Col>




    /*
    <Col md={3} className={"pt-2"} onClick={() => navigated(AppsRoutes + '/' + apps.location)}>
        <Card style={{width: 202, cursor: 'pointer'}} border={"primary"}>
            <img src={logo} width={201} height={160} alt=""/>
            <div>
                <div>
                    1 комнатные
                </div>
            </div>
        </Card>
        
        <Col className="pt-4">
            <Card  style={{width: 160, cursor: 'pointer'}} border={"white"}>
                <img src={logo_2} width={200} height={160} alt=""/>
                <div>
                    <div>
                    2 комнатные 
                    </div>
                </div>
              </Card>
         </Col>

         <Col className="pt-4">
            <Card  style={{width: 160, cursor: 'pointer'}} border={"white"}>
                <img src={logo_3} width={200} height={160} alt=""/>
                <div>
                    <div>
                    3 комнатные 
                    </div>
                </div>
              </Card>
         </Col>
    </Col>
*/
    );  
};  
 
export default AppsItem;