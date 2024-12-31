import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeAddPage from './pages/EmployeeAdd';
import EmployeeEditPage from './pages/EmployeeEdit';

const App = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', age: 30, department: 'HR', position: 'Manager' },
        { id: 2, name: 'Jane Smith', age: 25, department: 'Finance', position: 'Analyst' },
    ]);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/employees" element={<EmployeeListPage employees={employees} setEmployees={setEmployees} />} />
                <Route path="/employees/add" element={<EmployeeAddPage employees={employees} setEmployees={setEmployees} />} />
                <Route path="/employees/edit/:id" element={<EmployeeEditPage employees={employees} setEmployees={setEmployees} />} />
            </Routes>
        </Router>
    );
};

export default App;
