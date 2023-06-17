class Contact {
        firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        addressRegex = RegExp('^[A-za-z]{4,}$');
        cityRegex = RegExp('^[A-za-z]{4,}$');
        stateRegex = RegExp('^[A-za-z]{4,}$');
        zipRegex = RegExp('^[0-9]{6,}$');
        phoneNumberRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        emailRegex = RegExp('^[a-z0-9]+@[a-z]{5}[.][a-z]{3}$');

    constructor (firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        if(this.firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "Enter Valid First Name"
        }
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        if(this.lastNameRegex.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw "Enter Valid Last Name"
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
        if(this.addressRegex.test(address)) {
            this._address = address;
        } else {
            throw "Enter Valid Address"
        }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        if(this.cityRegex.test(city)) {
            this._city = city;
        } else {
            throw "Enter Valid City"
        }
    }
    
    get state() {
        return this._state;
    }
    set state(state) {
        if(this.stateRegex.test(state)) {
            this._state = state;
        } else {
            throw "Enter Valid State"
        }
    }
    
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        if(this.zipRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw "Enter Valid Zip"
        }
    }
       
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        if(this.phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "Enter Valid Phone Number"
        }
    }
         
    get email() {
        return this._email;
    }
    set email(email) {
        if(this.emailRegex.test(email)) {
            this._email = email;
        } else {
            throw "Enter Valid Email"
        }
    }

    toString(){
        return (`First Name: ${this.firstName} \nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity : ${this.city}\nState : ${this.state}\nZip code : ${this.zip}\nPhone Number : ${this.phoneNumber}\nEmail ID: ${this.email}`)
      }
}
//UC3:
let addressBookArray = new Array();
let myContact = new Contact('Drisya', 'Athul', 'Bukit', 'KualaLumpur', 'Malaysia', '123456', '9999999999', 'drisya@gmail.com');
addressBookArray.push(myContact);
let contact1 = new Contact('Varsha', 'Stanil', 'Tirur', 'Calicut', 'Kerala', '789456', '9888888888', 'varsha@gmail.com');
addressBookArray.push(contact1);
let contact2 = new Contact('Kavya', 'Vasu', 'Narayanapura', 'Bangalore', 'karnataka', '147852', '8888899999', 'kavya@gmail.com');
addressBookArray.push(contact2);
console.log(myContact.toString());
console.log(contact1.toString());
console.log(contact2.toString());

//UC4:Edit
let firstname = prompt("Enter name to find person");

for (let person of addressBookArray) {
    if (person._firstName === firstname) {
        console.log("Person found");
        let fname = prompt("Enter new first name");
        person._firstName=fname;
        let lname = prompt("Enter new last name");
        person._lastName = lname;
        let address1 = prompt("Enter new address");
        person._address= address1;
        let city1 = prompt("Enter new city");
        person._city = city1;
        let state1 = prompt("Enter new state");
        person._state = state1;
        let zip1 = prompt("Enter new zip");
        person._zip = zip1;
        let phoneNumber1 = prompt("Enter new Phone Number");
        person._phoneNumber = phoneNumber1;
        let email1 = prompt("Enter new Email");
        person._email = email1;
        console.log("Contact Updated Successfully");
    }
}
console.log(addressBookArray.toString());

//UC5:Delete
addressBookArray.delete=function(name){
    for(let i =0;i<addressBookArray.length;i++){
      if(addressBookArray[i]._firstName==name){
        console.log("Contact Found!!!")
        addressBookArray.splice(i,1); 
        /// 1 is use to specify how much element you want to remove if 1 then 1 element will remove 
        console.log("Contact Deleted !!!")
      }
    }
    console.log(addressBookArray.toString());
}
addressBookArray.delete("Varsha")

//UC6:Reduce Function to get Count
const count = addressBookArray.reduce((count, contacts) => {
    return count += 1;
},0);
console.log("Number of Contacts :" +count);

//UC7:
let fname = prompt("Enter new first name");
let stats = addressBookArray.reduce((status1,person) =>{
    if(person._firstName===fname) status1="true"
    return status1;
});

if(stats==="true"){
    fname = prompt("Duplicate Entry not allowed try another name");
}


let lname = prompt("Enter new last name");
let address1 = prompt("Enter new address name");
let city1 = prompt("Enter new city name");
let state1 = prompt("Enter new state name");
let zip1 = prompt("Enter new zip name");
let phoneNumber1 = prompt("Enter new Phone Number");
let email1 = prompt("Enter new emil");

//To make person class object
const contact3 = new Contact(fname,lname,address1,city1,state1,zip1,phoneNumber1,email1);

addressBookArray.push(contact3);
console.log(contact3.toString());
