// Write your solution in this file!
const employee = {
    streetAddress: "",
    name: ""
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee }
   newObject[key] = value
   return newObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
