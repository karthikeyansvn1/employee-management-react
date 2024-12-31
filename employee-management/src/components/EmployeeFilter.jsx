const EmployeeFilter = ({ departments, onFilter }) => {
    return (
        <select onChange={(e) => onFilter(e.target.value)}>
            <option value="">All Departments</option>
            {departments.map((dept) => (
                <option key={dept} value={dept}>
                    {dept}
                </option>
            ))}
        </select>
    );
};

export default EmployeeFilter;
