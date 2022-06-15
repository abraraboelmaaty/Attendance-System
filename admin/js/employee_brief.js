let text = document.getElementById('text');
let btn = document.getElementById('btn');
let all_employee = JSON.parse(localStorage.getItem('userName'));
console.log(all_employee)


// localStorage.removeItem('brief_tran');

let emp_brief_tran;
if(!JSON.parse(localStorage.getItem('brief_tran'))){
    emp_brief_tran = [];
}else{
    emp_brief_tran = JSON.parse(localStorage.getItem('brief_tran'))
}



btn.addEventListener('click',function(){
    if(all_employee.includes(text.value)){
        emp_brief_tran.push(text.value);
        localStorage.setItem('brief_tran',JSON.stringify(emp_brief_tran));
        console.log(emp_brief_tran)
        location.href = 'employee_brief_report.html'
    }else{
        alert('there is no employee with this userName')
    }
    
    
})