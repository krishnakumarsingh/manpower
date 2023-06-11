import React, { useState, useEffect } from 'react'
import Service from '../services/Servce';
import { Form, Button } from 'react-bootstrap';

function EmployeeComponent() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees()
    }, [])

    const getEmployees = () => {
        Service.getEmployees();
        Service.getEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        });
    };
    const setEmployee = (formData) => {
        Service.setEmployees(formData);
    }
    const submitData = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let formData = {};
        formData.firstName = e.target.formBasicFirstName.value;
        formData.lastName = e.target.formBasicLastName.value;
        formData.email = e.target.formBasicEmail.value;
        console.log(formData);
        setEmployee(formData);
        alert("Hello", e);
    }
    return (
        <div className="container">
            <Form onSubmit={submitData}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h1 className="text-center"> Employees List</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Employee Id</th>
                        <th> Employee First Name</th>
                        <th> Employee Last</th>
                        <th> Employee Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td> {employee.id}</td>
                                    <td> {employee.firstName}</td>
                                    <td> {employee.lastName}</td>
                                    <td> {employee.email}</td>

                                </tr>

                        )
                    }

                </tbody>


            </table>

        </div>
    )
}

export default EmployeeComponent