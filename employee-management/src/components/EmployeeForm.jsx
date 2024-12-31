import React, { useState } from 'react';

const EmployeeForm = ({ initialData = {}, onSubmit }) => {
    const [employee, setEmployee] = useState({
        name: initialData.name || '',
        age: initialData.age || '',
        department: initialData.department || '',
        position: initialData.position || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!employee.name || !employee.age || !employee.department || !employee.position) {
            alert('All fields are required.');
            return;
        }
        if (isNaN(employee.age)) {
            alert('Age must be a number.');
            return;
        }
        onSubmit(employee);
    };

    return (
        <div class="container mt-4">
        
            <div class="card shadow-sm" >
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text"  id="name" class="form-control" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
                        </div>
                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" id="age" class="form-control" name="age" value={employee.age} onChange={handleChange} placeholder="Age" required />
                        </div>
                        <div class="mb-3">
                            <label for="department" class="form-label">Department</label>
                            <input type="text" id="department" class="form-control" name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />
                        </div>
                        <div class="mb-3">
                            <label for="position" class="form-label">Position</label>

                            <input type="text" id="position"  class="form-control" name="position" value={employee.position} onChange={handleChange} placeholder="Position" required />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;
