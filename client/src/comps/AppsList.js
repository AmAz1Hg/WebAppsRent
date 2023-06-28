import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import AppsItem from "./AppsItem";


const AppsList = observer(() => {
    const {apps} = useContext(Context)
    
    return (
        <Row style={{cursor: 'pointer'}} className="d-flex">
            {apps.apps.map(apps =>
                <AppsItem key={apps.id} apps={apps} /> 
                )}
        </Row>
    );  
});  
 
export default AppsList;