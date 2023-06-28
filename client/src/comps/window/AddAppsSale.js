import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Context } from "../..";
import { createApps, fetchApps, fetchAppsSale } from "../../http/AppsApi";
import { observer } from "mobx-react-lite";

/* eslint-disable react/prop-types */

const AddAppsSale = observer(({show, onHide}) => {
    
    const {appsSale} = useContext(Context)
    const [city, setCity] = useState('')
    const [location, setLocation] = useState('')
    const [area, setArea] = useState()
    const [rooms, setRooms] = useState('')
    const [cost, setCost] = useState('')
    const [equipments, setEquipments] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [img_1, setImg_1] = useState(null)
    const [img_2, setImg_2] = useState(null)
    const [img_3, setImg_3] = useState(null)
    const [info, setInfo] = useState([])


    useEffect(() => {
        fetchApps().then(data => appsSale.setAppsSale(data))
    }, [])


    const chooseFile_1 = e => {
        setImg_1(e.target.files[0])
    }

    const chooseFile_2 = e => {
        setImg_2(e.target.files[0])
    }

    const chooseFile_3 = e => {
        setImg_3(e.target.files[0])
    }

    const Add_AppsInfo = () => {    
        setInfo([...info, {equipment: '', description: '', number: Date.now()}])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i)) 
     }

    const Delete_AppsInfo = (number) => {
        setInfo(info.filter(i => i.number !== number ))
    }


    const plusApps_2 = () => {
        const FormsData = new FormData()
        FormsData.append('city', city)
        FormsData.append('location', location)
        FormsData.append('area', `${area}`)
        FormsData.append('rooms', `${rooms}`)
        FormsData.append('cost', `${cost}`)
        FormsData.append('equipments', `${equipments}`)
        FormsData.append('descriptions', `${descriptions}`)
        FormsData.append('img_1', img_1)
        FormsData.append('img_2', img_2)
        FormsData.append('img_3', img_3)
        FormsData.append('info', JSON.stringify(info))
        createApps(FormsData).then(data => onHide())
        console.log(info)
    }

    return (

<Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered 
>
    <Card style={{width: 800}} className="card bg-dark">
        <Modal.Header closeButton>
            <Modal.Title style={{ color: 'white'}} id="contained-modal-title-vcenter">
                Добавить варианты аппартаментов для продажи
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    style={{width: 758, margin: 4}}
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Введите город, в котором располагаются апартаменты"
                />
                 <Form.Control
                    style={{width: 758, margin: 4}}
                    className="mt-3"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="Введите местонахождение апартаментов (к примеру, район)"
                />
                <Form style={{display: 'flex'}}>
                 <Form.Control
                    style={{width: 382, margin: 3}}
                    className="mt-3"
                    value={area}
                    onChange={e => setArea(Number(e.target.value))}
                    placeholder={"Площадь квартиры"}
                    type="number"
                />
                 <Form.Control
                    style={{width: 382, margin: 3}}
                    className="mt-3"
                    value={rooms}
                    onChange={e => setRooms(Number(e.target.value))}
                    placeholder="Количество комнат"
                    type="number"
                />
                </Form>

                <Form style={{display: 'flex'}}>
                <Form.Control
                    style={{width:  758, margin: 3}}
                    className="mt-3"
                    value={cost}
                    onChange={e => setCost(Number(e.target.value))}
                    placeholder="Cтоимость, млн.р"
                    type="number"
                />
            
                </Form>

                <Form style={{display: 'flex'}}>
                <Form.Control
                    style={{width: 250, margin: 3}}
                    className="mt-3"
                    type="file"
                    onChange={chooseFile_1}
                />
                <Form.Control
                    style={{width: 250, margin: 3}}
                    className="mt-3"
                    type="file"
                    onChange={chooseFile_2}
                />
                <Form.Control
                    style={{width: 250, margin: 3}}
                    className="mt-3"
                    type="file"
                    onChange={chooseFile_3}
                />
                </Form>
                <Button className="mt-3" 
                    style={{width: 764}}
                    variant={"outline-info"} onClick={Add_AppsInfo}
                >
                    Информация об оснащении апартаментов
                </Button>
 
                    <Row className="mt-1"  >
                    <Form.Control
                        style={{width: 382, margin: 4}}
                        className="mt-3"
                        value={equipments}
                        onChange={e => setEquipments(e.target.value)}
                        placeholder="Оснащение апартаментов"
                    />

                    <Form.Control
                    style={{width: 382, margin: 4}}
                    className="mt-3"
                    value={descriptions}
                    onChange={e => setDescriptions(e.target.value)}
                    placeholder="Описание оснащения"
                    />

                </Row>
             </Form>
        </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={plusApps_2}>Добавить</Button>
                <Button variant="danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
            </Card>
</Modal>
)
})

export default AddAppsSale;
