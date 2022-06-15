let all_employee_brief = JSON.parse(localStorage.getItem('brief_tran'));
let employeee = JSON.parse(localStorage.getItem('emp'));
let attendacee = JSON.parse(localStorage.getItem('departure'));
console.log(attendacee)
let current_emp_brief = all_employee_brief[all_employee_brief.length-1]
let table = document.getElementById('dataTable');
let tbody = document.getElementById('tbody');
let briefmeg = document.getElementById('briefmeg')
// let tr = document.getElementById('tr')

for (let index = 0; index < employeee.length; index++) {
    if(employeee[index].userName == current_emp_brief){
        briefmeg.innerText = `this brief for ${employeee[index].userFname } ${employeee[index].userLname }`
    }
    
}

for (let index = 0; index < attendacee.length; index++) {
    if(attendacee[index].userName == current_emp_brief){
        let tr = document.createElement('tr');
        for (const data in attendacee[index]) {
            console.log(data)
            let td = document.createElement('td')
            td.innerText = attendacee[index][data];
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    
}
