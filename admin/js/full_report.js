let full_report = JSON.parse(localStorage.getItem('departure'));
let table = document.getElementById('dataTable');
let tbody = document.getElementById('tbody');

for (let index = 0; index < full_report.length; index++) {
   let tr = document.createElement('tr');
   for (const data in full_report[index]) {
      let td = document.createElement('td');
      td.innerText = full_report[index][data]
      tr.appendChild(td)
   }
   tbody.appendChild(tr);
    
}