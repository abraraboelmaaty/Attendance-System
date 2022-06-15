let all_empLogins = JSON.parse(localStorage.getItem('emp_tran'))
let current_emp_login = all_empLogins[all_empLogins.length - 1];

let meg = document.getElementById('empmeg').innerText = `welcome ${current_emp_login.userFname}`;
let desc_mes = document.getElementById('desc_mes').innerText = `this is your attendance report for ${new Date().toLocaleDateString()}`


// localStorage.removeItem('attendance')
// localStorage.removeItem('departure')
let all_att = JSON.parse(localStorage.getItem('attendance'))
let all_dep = JSON.parse(localStorage.getItem('departure'))
let table = document.getElementById('mytable');
let tbody = document.getElementById('tbody');
let tr = document.getElementById('tr');
console.log(all_att);
console.log(all_dep)
console.log(current_emp_login.userName)

for (let index = 0; index < all_dep.length; index++) {   
    if(all_dep[index].attstate == new Date().toLocaleDateString())
    if(all_dep[index].userName == current_emp_login.userName){
        for (const data in all_dep[index] ) {
            let td = document.createElement('td');
            td.innerText = all_dep[index][data];
            tr.appendChild(td);
        }
    } 
   
}