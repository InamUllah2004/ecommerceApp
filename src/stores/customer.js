export class Customer {
    //Static varible for ID
    static customerID=Customer.loadID();
  
  //Constructor//
    constructor(name, email,password,role) {
    this.id = this.customerID++;
    this.name = name;
    this.email = email;
    this.password=password;
    this.role=role;
    Customer.setID();
  }
  //Getter Function
  static loadID(){
  const id=localStorage.getItem("customerCount") ?? 1;
  return parseInt(id);  
  } 
  //Setter Function
  static setID(){
    localStorage.setItem("customerCount",Customer.customerID);
  }
}

