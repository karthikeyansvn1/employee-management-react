import React from 'react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, departmentFilter, setDepartmentFilter, departments }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <input
                type="text"
                className="form-control me-2"
                style={{ maxWidth: '300px' }}
                placeholder="Search by name or position"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                className="form-select"
                style={{ maxWidth: '200px' }}
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
            >
                <option value="">All Departments</option>
                {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                        {dept}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchAndFilter;
