// localStorage.removeItem('emp');

//select inputs



fname = document.getElementById('fname');
lname = document.getElementById('lname');
email = document.getElementById('email');
age = document.getElementById('age');
address = document.getElementById('address');
submit = document.getElementById('submit');
// select error massege
fnameError = document.getElementById('fnameError');
lnameError = document.getElementById('lnameError');
emailError = document.getElementById('emailError');
ageError = document.getElementById('ageError');
addressError = document.getElementById('addressError');
submitError = document.getElementById('submitError');
//fname validation
fname.addEventListener('blur', function () {
    if (!isFnameValid()) {
        fnameError.style.display = 'block';
        this.style.border = '2px solid red';
        this.focus();
        this.select();
    } else {
        fnameError.style.display = 'none';
        this.style.border = '2px solid #E7FBBE'
    }
})//end bluer event 

function isFnameValid() {
    return fname.value.match(/^[a-zA-Z]{3,10}$/);
}

//end fname validation

//start lname validation
lname.addEventListener('blur', function () {
    if (!isLnameVlide()) {
        lnameError.style.display = 'block';
        this.style.border = '2px solid red';
        this.focus();
        this.select();
    } else {
        lnameError.style.display = 'none';
        this.style.border = '2px solid #E7FBBE'
    }
})//end blur event

function isLnameVlide() {
    return lname.value.match(/^[a-zA-Z]{3,15}$/);
}

//end lname validation

//start email validation
email.addEventListener('blur', function () {
    if (!isEmailVlid()) {
        emailError.style.display = 'block';
        this.style.border = '2px solid red';
        this.focus();
        this.select();
    } else {
        emailError.style.display = 'none';
        this.style.border = '2px solid #E7FBBE';
    }
})//end blur event

function isEmailVlid() {
    return email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
}

//end email validation

//valid age

age.addEventListener('blur', function () {
    if (!isVlidAge()) {
        ageError.style.display = 'block';
        this.style.border = '2px solid red';
        this.focus();
        this.select();
    } else {
        ageError.style.display = 'none';
        this.style.border = '2px solid #E7FBBE';
    }
})//end blur event
function isVlidAge() {
    if (parseInt(age.value) >= 25)
        return true;
    return false;
}
//end valid age
//start address validation
address.addEventListener('blur', function () {
    if (!isValidAddress()) {
        addressError.style.display = 'block';
        this.style.border = '2px solid red';
        this.focus();
        this.select();
    } else {
        addressError.style.display = 'none';
        this.style.border = '2px solid #E7FBBE';
    }
})//end blur event

function isValidAddress() {
    return address.value.match(/^[a-zA-Z-/_]+[a-zA-Z]+[a-zA-Z]{4,15}$/);
}
//end address validition

//start submit validation
document.forms[0].addEventListener('submit', function (e) {
    if (!isFnameValid()) {
        e.preventDefault();
        fnameError.style.display = 'block';
        submitError.style.display = 'block';
    }
    if (!isLnameVlide()) {
        e.preventDefault();
        lnameError.style.display = 'block';
        submitError.style.display = 'block';
    }
    if (!isVlidAge()) {
        e.preventDefault();
        ageError.style.display = 'block';
        submitError.style.display = 'block';
    }
    if (!isValidAddress()) {
        e.preventDefault();
        addressError.style.display = 'block';
        submitError.style.display = 'block';
    }
    if (!isEmailVlid()) {
        e.preventDefault();
        emailError.style.display = 'block';
        submitError.style.display = 'block';
    }
})


//end submit validation
// class employee {
//     userfname = "";
//     userlname = "";
//     useraddress = "";
//     userstatus = "";
//     useremail = "";
//     userage = "";
//     // username="";
//     // userpassword="";

//     constructor(_fname, _lname, _address, _status, _email, _age)//,_name,password)
//     {
//         this.userfname = _fname
//         this.userlname = _lname
//         this.useraddress = _address
//         this.useremail = _email
//         this.userage = _age
//         this.userstatus = _status
//         //this.username=_name
//         //this.userpassword=_password
//     }
//     set Userfname(_fname) {
//         this.userfname = _fname
//     }
//     get Userfname() {
//         return this.userfname;
//     }
//     set Userlname(_lname) {
//         this.userlname = _lname
//     }
//     get Userlname() {
//         return this.userlname;
//     }
//     set Useraddress(_address) {
//         this.useraddress = _address
//     }
//     get Useraddress() {
//         return this.useraddress;
//     }
//     set Useremail(_email) {
//         this.useremail = _email
//     }
//     get Useremail() {
//         return this.useremail;
//     }
//     set Userage(_age) {
//         this.userage = _age
//     }
//     get Userage() {
//         return this.userage;
//     }
//     set Userstatus(_status) {
//         this.userstatus = _status
//     }
//     get Userstatus() {
//         return this.userstatus;
//     }
//     /*
//     set Userpassword(_password)
//     {
//         this.userpassword=_password
//     }
//     get Userpassword()
//     {
//  return this.userpassword;
//     }
//     set Username(_name)
//     {
//         this.username=_name
//     }
//     get Username()
//     {
//  return this.username;
//     }
//     */




// };
// class User{
//     #fname;
//     #lname;
//     #email;
//     #age;
//     #address;
//     #status = false;
//     constructor(_fname,_lname,_email,_age,_address,_status=false){
//         this.#fname = _fname;
//         this.#lname = _lname;
//         this.#email = _email;
//         this.#age   = _age;
//         this.#address = _address;
//         this.#status = _status;
//     }

//     FNAME(_fname){
//         this.#fname = _fname;
//     }

//     FNAME(){
//         return this.#fname;
//     }
//     LNAME(_lname){
//         this.#lname = _lname;
//     }

//     LNAME(){
//         return this.#lname;
//     }
//     EMAIL(_email){
//         this.#email = _email;
//     }

//     EMAIL(){
//         return this.#email;
//     }
//     AGE(_age){
//         this.#age = _age;
//     }

//     EMAIL(){
//         return this.#age;
//     }
//     ADDRESS(_address){
//         this.#address = _address;
//     }

//     ADDRESS(){
//         return this.#address;
//     }
//     STATUS(_status){
//         this.#status = _status;
//     }

//     STATUS(){
//         return this.#status;
//     }
// }

// create random user name
function userNameRondom() {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+*~ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let userCode = '';
    let codelength = 10;
    for (let i = 0; i < codelength; i++) {
        let radomNumber = Math.floor(Math.random() * chars.length);
        userCode = userCode + chars.substring(radomNumber, radomNumber + 1);
    }
    return userCode;
}

//create random password
function passwordRandom() {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+*~ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';
    let passlength = 10;
    for (let i = 0, n = chars.length; i < passlength; i++) {
        pass = pass + chars.charAt(Math.floor(Math.random() * n))
    }
    return pass;
}


//create array for strore all users in localstorage
let employees;
if (!JSON.parse(localStorage.getItem('emp'))) {
    employees = [];
} else {
    employees = JSON.parse(localStorage.getItem('emp'));
}

//create array to store all usernames in localestorage
let usernames_arr;
if (!JSON.parse(localStorage.getItem('userName'))) {
    usernames_arr = [];
} else {
    usernames_arr = JSON.parse(localStorage.getItem('userName'));
}
//create array to store all paddwords in localestorage
let password_arr;
if (!JSON.parse(localStorage.getItem('password'))) {
    password_arr = [];
} else {
    password_arr = JSON.parse(localStorage.getItem('password'));
}

//create admin object  and push it in user arry

let adminuser = {
    "userFname": "admin",
    "userLname": "admin",
    "userEmail": "useremail",
    "userAge": "userag",
    "useraddress": "useraddress",
    "status": true,
    "userName": "admin",
    "userpass": "admin",
    "isadmin":true,
    "issecurity":false
};

// employees.push(adminuser);
// localStorage.setItem('emp',JSON.stringify(employees));

// submit event
document.forms[0].addEventListener('submit', function (e) {

    e.preventDefault();

// validate that email not repete
    let isvalid = true;
    for (let index = 0; index < employees.length; index++) {
        if (employees[index].userEmail == email.value) {
            isvalid = false;
        }
    }

    if (isvalid) {
        userfname = fname.value;
        userlname = lname.value;
        useremail = email.value;
        userage = age.value;
        useraddress = address.value;
        userstatus = false;
        username = userNameRondom();
        userpassword = passwordRandom()

       //create user object 
        let user = {
            "userFname": userfname,
            "userLname": userlname,
            "userEmail": useremail,
            "userAge": userage,
            "useraddress": useraddress,
            "status": false,
            "userName": username,
            "userpass": userpassword,
            "isadmin":false,
            "issecurity":false
        };

        // console.log(employees);
        // console.log(user);

       // push user object in user array and store the array in localstorage

        employees.push(user);
        usernames_arr.push(username)
        password_arr.push(userpassword)
        allemployees = JSON.stringify(employees);

        localStorage.setItem("emp", allemployees);
        localStorage.setItem('userName',JSON.stringify(usernames_arr))
        localStorage.setItem('password',JSON.stringify(password_arr))

        //sending email
        this.message.innerHTML = `your user name ${username} your password ${userpassword}`;
        emailjs.sendForm('service_6palxr8', 'template_bgc6gfo', this)

            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });

    }else{
        alert('email is duplicate')
    }
})



// document.forms[0].addEventListener('submit', function(event) {
//     event.preventDefault();
//     // generate a five digit number for the contact_number variable
//     this.contact_number.value = Math.random() * 100000 | 0;
//     // these IDs from the previous steps
//     emailjs.sendForm('service_6palxr8', 'template_bgc6gfo', this)
//         .then(function() {
//             console.log('SUCCESS!');
//         }, function(error) {
//             console.log('FAILED...', error);
//         });
// });

// message = document.getElementById('message');
// message.innerHTML = `<h1>welcom</h1><h4>your userName is${username}</h4><h4>your password is${password}</h4>`