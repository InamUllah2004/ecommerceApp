export class Employee {
  // Static ID — loaded from localStorage when class is initialized
  static employeeID = Employee.loadID()

  constructor(
    firstName,
    middleName,
    lastName,
    email,
    phone,
    mailingAddress,
    city,
    state,
    zipCode,
    highSchoolName,
    highSchoolGradYear,
    collegeName,
    cnic,
    dob,
    expiry
  ) {
    this.id = Employee.employeeID++ // Assign and increment static ID
    this.firstName = firstName
    this.middleName = middleName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.mailingAddress = mailingAddress
    this.city = city
    this.state = state
    this.zipCode = zipCode
    this.highSchoolName = highSchoolName
    this.highSchoolGradYear = highSchoolGradYear
    this.collegeName = collegeName
    this.cnic = cnic
    this.dob = dob
    this.expiry = expiry

    Employee.setID() // Save updated ID to localStorage
  }

  // Load ID from localStorage or initialize to 1
  static loadID() {
    const id = localStorage.getItem("employeeCount") ?? 1
    return parseInt(id)
  }

  // Save the current static ID back to localStorage
  static setID() {
    localStorage.setItem("employeeCount", Employee.employeeID)
  }
}
