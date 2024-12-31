import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';

const EmployeeAddPage = ({ employees, setEmployees }) => {
    const navigate = useNavigate();

    const handleAddEmployee = (newEmployee) => {
        const id = employees.length ? employees[employees.length - 1].id + 1 : 1;
        setEmployees([...employees, { ...newEmployee, id }]);
        navigate('/employees');
    };

    return (
        <div class="container mt-4">
            <h2 class="mb-4">Add Employee</h2>
            <EmployeeForm onSubmit={handleAddEmployee} />
        </div>
    );
};

export default EmployeeAddPage;
