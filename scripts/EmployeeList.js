import { CustomerList } from "./customers.js"
import { EmployeeCustomerProvider } from "./EmployeeCustomerProvider.js"

export const EmployeeList = async () => {
  const response = await fetch("http://localhost:8088/employees?_expand=department&_expand=computer&_expand=location")
  const employees = await response.json()
  const customers = await CustomerList()
  const customerRelationships = await EmployeeCustomerProvider()

  let employeeHTML = ""

  const employeeArray = employees.map((employee) => {
    // Find all the customer relationships for the current employee
    const relationships = customerRelationships.filter((relationship) => relationship.employeeId === employee.id)

    // Find the related customer for each relationship
    const assignedCustomers = relationships.map((rel) => customers.find((customer) => customer.id === rel.customerId))

    return `<div class="employees" value=${employee.id}>
      <h3>${employee.firstName} ${employee.lastName} (${employee.age})</h3>
      <li>Works in the ${employee.department.name} department</li>
      <li>Currently uses a ${employee.computer.model}</li>
      <li>Works in the ${employee.location.name} office</li>
      <li>Has worked for the following customers: ${assignedCustomers.map((customer) => customer.name).join(", ")}</li>
    </div>`
  });

  employeeHTML += employeeArray.join("")
  return employeeHTML
}
