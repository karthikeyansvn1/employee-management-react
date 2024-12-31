import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';

const EmployeeEditPage = ({ employees, setEmployees }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const employee = employees.find((emp) => emp.id === parseInt(id));

    const handleEditEmployee = (updatedEmployee) => {
        setEmployees(
            employees.map((emp) => (emp.id === parseInt(id) ? { ...emp, ...updatedEmployee } : emp))
        );
        navigate('/employees');
    };

    return (
        <div class="container mt-4">
            <h2 class="mb-4">Edit Employee</h2>
            {employee ? (
                <EmployeeForm initialData={employee} onSubmit={handleEditEmployee} />
            ) : (
                <p>Employee not found!</p>
            )}
        </div>
    );
};

export default EmployeeEditPage;
