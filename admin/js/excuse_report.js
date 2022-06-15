let excuse_report = JSON.parse(localStorage.getItem('departure'));
let table = document.getElementById('dataTable');
let tbody = document.getElementById('tbody');
console.log(excuse_report);
for (let index = 0; index < excuse_report.length; index++) {
   let tr = document.createElement('tr');
   let td1 = document.createElement('td')
    td1.innerText = excuse_report[index].userName
    let td2 = document.createElement('td')
    td2.innerText = excuse_report[index].attstate
    let td3 = document.createElement('td')
    td3.innerText = excuse_report[index].timein
    let td4 = document.createElement('td')
    td4.innerText = excuse_report[index].timeout
    let td5 = document.createElement('td')
    td5.innerText = excuse_report[index].early_exit
    let td6 = document.createElement('td')
    td6.innerText = excuse_report[index].exit_permission
    let td7 = document.createElement('td')
    td7.innerText = excuse_report[index].apologize_reson
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
   tbody.appendChild(tr); 
}