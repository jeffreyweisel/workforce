//Export function that displays computers and what employees use them

export const ComputerList = async () => {
    const response = await fetch("http://localhost:8088/computers")
    const computers = await response.json()

    let computerHTML =""
    const arrayOfComputers = computers.map((computer) => {
        return `<div value="${computer.id}">${computer.model}</div>
        <div>${computer.year}</div>`
    })

    computerHTML += arrayOfComputers.join("")
    return computerHTML
}