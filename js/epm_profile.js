let all_empLogins = JSON.parse(localStorage.getItem('emp_tran'))
let current_emp_login = all_empLogins[all_empLogins.length - 1];
let meg = document.getElementById('empmeg').innerText = `welcome ${current_emp_login.userFname}`;