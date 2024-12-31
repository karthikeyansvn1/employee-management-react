import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = ({ employees, onDelete }) => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Employee List</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Department</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? (
                            employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.age}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.position}</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <Link
                                                to={`/employees/edit/${employee.id}`}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => onDelete(employee.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No employees found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
