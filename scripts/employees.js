export const Employees = async () => {
    const response = await fetch("http://localhost:8088/employees")
    const employees = await response.json()
    return employees
}