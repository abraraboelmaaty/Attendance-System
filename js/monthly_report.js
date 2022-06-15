let all_emp_Logins = JSON.parse(localStorage.getItem('emp_tran'))
let current_emp_login = all_emp_Logins[all_emp_Logins.length - 1];
console.log(current_emp_login.userName)
let mege = document.getElementById('empmeg').innerText = `welcome ${current_emp_login.userFname}`;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let desc_mes = document.getElementById('desc_mes').innerText = `this is your attendance report for ${monthNames [new Date().getMonth()]}`

let mon_att = JSON.parse(localStorage.getItem('attendance'))
let mon_dep = JSON.parse(localStorage.getItem('departure'))
let table1 = document.getElementById('mytable');
let tbody1 = document.getElementById('tbody');

console.log(mon_att);
console.log(mon_dep )


    for (let index = 0; index < mon_dep .length; index++) {
        let tr = document.createElement('tr');
        if(parseInt(mon_dep[index].attstate.charAt(0))-1 == new Date().getMonth()){
            
            if(mon_dep[index].userName == current_emp_login.userName){
                for (const data in mon_dep[index]) {
                   let td = document.createElement('td');
                   td.innerText = mon_dep[index][data];
                   tr.appendChild(td);
                }
            }

        }
        tbody1.appendChild(tr);
        
    }
