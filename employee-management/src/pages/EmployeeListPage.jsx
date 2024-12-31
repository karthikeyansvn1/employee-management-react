import React, { useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import SearchAndFilter from '../components/EmployeeSearch';

const EmployeeListPage = ({ employees, setEmployees }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('');

    const departments = [...new Set(employees.map((emp) => emp.department))];

    const handleDelete = (id) => {
        setEmployees(employees.filter((emp) => emp.id !== id));
    };

    const filteredEmployees = employees.filter((emp) => {
        const matchesSearch = 
            emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            emp.position.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = departmentFilter === '' || emp.department === departmentFilter;
        return matchesSearch && matchesDepartment;
    });

    return (
        <div className="container mt-4">
          
            <SearchAndFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                departmentFilter={departmentFilter}
                setDepartmentFilter={setDepartmentFilter}
                departments={departments}
            />
            <EmployeeList employees={filteredEmployees} onDelete={handleDelete} />
        </div>
    );
};

export default EmployeeListPage;
