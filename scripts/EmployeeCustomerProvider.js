export const EmployeeCustomerProvider = async () => {
    const response = await fetch("http://localhost:8088/employeeCustomers?_expand=customer&_expand=employee")
    const employeeCustomerRelationship = await response.json()

    return employeeCustomerRelationship

}