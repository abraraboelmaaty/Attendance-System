
let emp_login = JSON.parse(localStorage.getItem('emp'))
let useName_arr = JSON.parse(localStorage.getItem('userName'));
let pass_arr = JSON.parse(localStorage.getItem('password'))
let data = localStorage.getItem('emp')
let userName = document.getElementById('name');
let password = document.getElementById('pass');
let btn = document.getElementById('btn1');
let form = document.forms[0];

let emp_trans;
if (!JSON.parse(localStorage.getItem('emp_tran'))) {
    emp_trans = [];
} else {
    emp_trans = JSON.parse(localStorage.getItem('emp_tran'));
}

document.forms[0].addEventListener('submit', function (e){
    e.preventDefault();
    if(useName_arr.includes(userName.value)&&pass_arr.includes(password.value)){
        for (let index = 0; index < emp_login.length; index++) {
            if(emp_login[index].userName == userName.value){
                if(emp_login[index].status){
                    // if(!(emp_login[index].isadmin)&&!(emp_login[index].issecurity)){
                        location.href = 'empprofile.html'
                        console.log(emp_login[index])
                        let current_emp = emp_login[index]
                        console.log(current_emp)
                        emp_trans.push(current_emp)
                        localStorage.setItem('emp_tran',JSON.stringify(emp_trans));
                    // }
                }

            }//else{
            //     alert(`cheack your username or password`)
            // }
        }
    }//else{
    //     alert(`cheack your username or password`)
    // }
})

