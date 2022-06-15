
let sec_login = JSON.parse(localStorage.getItem('emp'))
let useName_arr = JSON.parse(localStorage.getItem('userName'));
let pass_arr = JSON.parse(localStorage.getItem('password'))
let data = localStorage.getItem('emp')
let userName = document.getElementById('name');
let password = document.getElementById('pass');
let btn = document.getElementById('btn1');
let form = document.forms[0];


let sec_trans;
if (!JSON.parse(localStorage.getItem('sec_tran'))) {
    sec_trans = [];
} else {
    sec_trans = JSON.parse(localStorage.getItem('sec_tran'));
}

document.forms[0].addEventListener('submit', function (e){
    e.preventDefault();
    if(useName_arr.includes(userName.value)&&pass_arr.includes(password.value)){
        for (let index = 0; index < sec_login.length; index++) {
            if(sec_login[index].userName == userName.value){
                if(sec_login[index].status){
                    if(!(sec_login[index].isadmin)&&sec_login[index].issecurity){
                        location.href = 'secprofile.html'
                        console.log(sec_login[index])
                        let current_sec = sec_login[index]
                        sec_trans.push(current_sec)
                        localStorage.setItem('sec_tran',JSON.stringify(sec_trans));
                    }
                }else{
                    alert(`cheack your username or password`)
                }

            }
        }
    
    }else{
        alert(`cheack your username or password`)
    }
})

