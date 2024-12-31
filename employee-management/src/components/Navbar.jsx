import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/employees">
                    Employee Management
                </Link>
                <div>
                    <Link className="btn btn-primary me-2" to="/employees">
                        Employee List
                    </Link>
                    <Link className="btn btn-success" to="/employees/add">
                        Add Employee
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
