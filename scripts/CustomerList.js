import { EmployeeCustomerProvider } from "./EmployeeCustomerProvider.js"
import { Employees } from "./employees.js"

export const CustomerListList = async () => {
  const response = await fetch("http://localhost:8088/customers")
  const customers = await response.json()
  const employees = await Employees()
  const customerRelationships = await EmployeeCustomerProvider()

  let customerHTML = ""

  const customerArray = customers.map((customer) => {
    // Find all the employee relationships for the current customer
    const relationships = customerRelationships.filter((relationship) => relationship.customerId === customer.id)

    // Find the related employee for each relationship
    const assignedEmployees = relationships.map((rel) => employees.find((employee) => employee.id === rel.employeeId))

    return `<div class="customers" value=${customer.id}>
      <h3>${customer.name}</h3>
     
    <div>Has the following employees working for them: <li>${assignedEmployees.map((employee) => employee.firstName).join(" & ")}</li></div>
    </div>`
  });

  customerHTML += customerArray.join("")
  return customerHTML
}
