let late_report = JSON.parse(localStorage.getItem('departure'));
let table = document.getElementById('dataTable');
let tbody = document.getElementById('tbody');
console.log(late_report);
for (let index = 0; index < late_report.length; index++) {
   let tr = document.createElement('tr');
   let td1 = document.createElement('td')
    td1.innerText = late_report[index].userName
    let td2 = document.createElement('td')
    td2.innerText = late_report[index].attstate
    let td3 = document.createElement('td')
    td3.innerText = late_report[index].timein
    let td4 = document.createElement('td')
    td4.innerText = late_report[index].timeout
    let td5 = document.createElement('td')
    td5.innerText = late_report[index].late
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
   tbody.appendChild(tr); 
}