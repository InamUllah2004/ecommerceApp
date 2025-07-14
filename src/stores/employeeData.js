import { defineStore } from 'pinia'
import { Employee } from './employee'  // Ensure path is correct

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    employees: JSON.parse(localStorage.getItem('employees')) || [],
    currentEmail: '',
    currentRole: '',
    employeeIDClicked: parseInt(localStorage.getItem('employeeIDClicked')) || -1,
  }),

  actions: {
    addEmployee(
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
      const newEmployee = new Employee(
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
      )
      this.employees.push(newEmployee)
      this.saveToLocalStorage()
    },

    removeEmployee(email) {
      this.employees = this.employees.filter(emp => emp.email !== email)
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem('employees', JSON.stringify(this.employees))
    },

    seedAdmin() {
      const hasAdmin = this.employees.some(e => e.email === 'admin@gmail.com')
      if (!hasAdmin) {
        const adminEmployee = new Employee(
          'Admin',
          '',
          'User',
          'admin@gmail.com',
          '0000000000',
          'Admin Street',
          'Admin City',
          'Admin State',
          '00000',
          'Admin High School',
          '2000',
          'Admin College',
          '0000000000000',
          '1980-01-01',
          '2099-01-01'
        )
        this.employees.push(adminEmployee)
        this.saveToLocalStorage()
      }
    },
    setEmployeeIDClicked(id) {
  this.employeeIDClicked = id
  localStorage.setItem('employeeIDClicked', id)
   }
   }
})
