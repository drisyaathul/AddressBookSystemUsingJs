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
addressBookArray.push(contact1);
console.log(myContact.toString());
console.log(contact1.toString());
console.log(contact2.toString());