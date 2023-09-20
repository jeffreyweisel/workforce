import { ComputerList } from "./ComputerList.js"
import { EmployeeList } from "./EmployeeList.js"

const render = async () => {

    const employeesHTML = await EmployeeList()
    const computerHTML = await ComputerList()

    const composedHTML = `
    
    <h1>Employees In The Workforce</h1>

    <article class = employeeComputer>
    
    <section class ="options">
    ${employeesHTML}
    </section>
    
   
    
    
    </article>
    `

    container.innerHTML = composedHTML
}

render()