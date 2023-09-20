//Export function that displays employee name and what computer they use

export const EmployeeList = async () => {
    const response = await fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
    const employees = await response.json()

    let employeeHTML = ""

    const employeeArray = employees.map((employee) => {
        return `<div class ="employees" value=${employee.id}> <h2>${employee.firstName} ${employee.lastName} (${employee.age})</h2></div>
        <div>Works in the ${employee.department.name} department</div>
        <div>Currently uses a ${employee.computer.model}</div>`
    }
    )

    employeeHTML += employeeArray.join("")
    return employeeHTML
}