import { CustomerListList } from "./CustomerList.js"
import { EmployeeList } from "./EmployeeList.js"

const render = async () => {

    const employeesHTML = await EmployeeList()
    const customersHTML = await CustomerListList()

    const composedHTML = `
    
    <h1>Employees In The Workforce</h1>

    <article class = employeeComputer>
    
    <section class ="options">
    <h2>Employees</h2>
    ${employeesHTML}
    </section>
    <section class ="options">
    <h2>Customers</h2>
    ${customersHTML}
    </section>

    

    
   
    
    
    </article>
    `

    container.innerHTML = composedHTML
}

render()