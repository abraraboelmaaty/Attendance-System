
let admin_login = JSON.parse(localStorage.getItem('emp'))
let useName_arr = JSON.parse(localStorage.getItem('userName'));
let pass_arr = JSON.parse(localStorage.getItem('password'))
let data = localStorage.getItem('emp')
let userName = document.getElementById('name');
let password = document.getElementById('pass');
let btn = document.getElementById('btn1');
let form = document.forms[0];



document.forms[0].addEventListener('submit', function (e){
    e.preventDefault();
    if(userName.value == 'admin' && password.value== 'admin'){
        console.log('jjj')
        location.href = 'admin/superAdmin.html';
    }else if(useName_arr.includes(userName.value)&&pass_arr.includes(password.value)){
        for (let index = 0; index < admin_login.length; index++) {
            if(admin_login[index].userName == userName.value){
               if(admin_login[index].isadmin){
                   location.href = 'admin/admin.html'
               }
            }
        }
    }else{
        alert(`cheack your username or password`)
    }
})

