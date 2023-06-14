import React, { useState, useEffect } from 'react'
import Service from '../services/Servce';
import { Form, Button, Modal } from 'react-bootstrap';


function FireExtinguisherTracker() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [resMsg, setResMsg] = useState("");

    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        Service.getFireExtinguisherTracker().then((response) => {
            setData(response.data);
        });
    };
    const setFireExtinguisherTracker = (formData) => {
        Service.setFireExtinguisherTracker(formData);
    }
    const submitData = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let formData = {};
        formData.serialNo = e.target.serialNo.value;
        formData.assetNo = e.target.assetNo.value;
        formData.calibrationDate = e.target.calibrationDate.value;
        formData.calibartionDueDate = e.target.calibartionDueDate.value;
        formData.status = e.target.status.value;
        formData.issuedTo = e.target.issuedTo.value;
        formData.remarks = e.target.remarks.value;
        formData.asOnDated = e.target.asOnDated.value;
        setFireExtinguisherTracker(formData);
    }
    const editData = (e) => {
        console.log(e);
    }
    const deleteData = (e) => {
        console.log(e);
        Service.deleteFireExtinguisherTracker().then((res) => {
            if(res.status === 200) {
                setResMsg(res.data);
                getData();
            }
        });
    }
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-md-10'>
                    <h3>Fire Extinguisher Tracker</h3>
                </div>
                <Button variant="success" onClick={modalShow} className='col-md-2'>
                    Add Data
                </Button>
            </div>
            <hr />
            <>
            {resMsg}
            </>
            {data.length === 0 ? <h3 className='text-center'>No Data</h3> :
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Asset No</th>
                            <th>Calibration Date</th>
                            <th>Calibartion Due Date</th>
                            <th>Status</th>
                            <th>Issued To</th>
                            <th>Remarks</th>
                            <th>As On Dated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{console.log(data)}
                        {
                            data.map(
                                item =>
                                    <tr key={item.id + ""} data-id={item.slNo}>
                                        <td>{item.serialNo}</td>
                                        <td>{item.assetNo}</td>
                                        <td>{item.calibrationDate}</td>
                                        <td>{item.calibartionDueDate}</td>
                                        <td>{item.status}</td>
                                        <td>{item.issuedTo}</td>
                                        <td>{item.remarks}</td>
                                        <td>{item.asOnDated}</td>
                                        <td><button onClick={() => editData(item.slNo)}>Edit</button> / <button onClick={() => deleteData(item.slNo)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>}

            <Modal show={show} onHide={modalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Fire Extinguisher Tracker</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={submitData}>
                        <div className='form-wrapper'>
                            <Form.Group className="col-md-5 mb-3" controlId="serialNo">
                                <Form.Control type="text" placeholder="Serial No" />
                            </Form.Group>

                            <Form.Group className="col-md-5 mb-3" controlId="assetNo">
                                <Form.Control type="text" placeholder="Asset No" />
                            </Form.Group>

                            <Form.Group className="col-md-5 mb-3" controlId="calibrationDate">
                                <Form.Control type="date" placeholder="Calibration Date" />
                            </Form.Group>

                            <Form.Group className="col-md-5 mb-3" controlId="calibartionDueDate">
                                <Form.Control type="date" placeholder="Calibartion Due Date" />
                            </Form.Group>

                            <Form.Group className="col-md-5 mb-3" controlId="status">
                                <Form.Control type="text" placeholder="Status" />
                            </Form.Group>

                            <Form.Group className="col-md-5 mb-3" controlId="issuedTo">
                                <Form.Control type="text" placeholder="Issued To" />
                            </Form.Group>

                            <Form.Group className="col-md-5 mb-3" controlId="remarks">
                                <Form.Control type="text" placeholder="Remarks" />
                            </Form.Group>

                            <Form.Group className="col-md-5 mb-3" controlId="asOnDated">
                                <Form.Control type="text" placeholder="As On Dated" />
                            </Form.Group>
                        </div>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={modalClose}>Close Modal</Button>
                            <Button variant="primary" type="submit">Save changes</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default FireExtinguisherTracker