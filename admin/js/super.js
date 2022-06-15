

// let = employees = [];
let employees = JSON.parse(localStorage.getItem('emp'));

let table = document.getElementById('dataTable');
let tbody = document.getElementById('tbody');

// $.ajax({
//     url:'http://127.0.0.1:5500/',
//     method:'get',
//     dataType:'json',
//      data: {recent: localStorage.getItem('emp')},
//     dataType: 'json',
//     success: function(data)
//     {
//         // $('.container').append(get_table(data));
//         console.log(data)

//     },
// });

function appendTableDate(){
   
        for(let i = 0;i<employees.length;i++){
            let input=document.createElement('input');
            input.setAttribute("type","checkbox");
            input.setAttribute("class","checkbox");
            let input2=document.createElement('input');
            input2.setAttribute("type","checkbox");
            input2.setAttribute("class","checkbox");
            let input3=document.createElement('input');
            input3.setAttribute("type","checkbox");
            input3.setAttribute("class","checkbox");
            let checktd = document.createElement('td');
            checktd.appendChild(input);
            let checktd2 = document.createElement('td');
            checktd2.appendChild(input2);
            let checktd3 = document.createElement('td');
            checktd3.appendChild(input3);
            let createdTr = document.createElement('tr');
            createdTr.setAttribute('class','tr')
            for(let data in employees[i]){
                let createdTd = document.createElement('td');
               
                createdTd.innerText = employees[i][data]
                // console.log( employees[i][data])
                
                createdTr.appendChild(createdTd);
                
                
            }
            createdTr.appendChild(checktd);
            createdTr.appendChild(checktd2);
            createdTr.appendChild(checktd3);
            tbody.appendChild(createdTr);
            input.addEventListener('click',changeStatus)
            input2.addEventListener('click',changeuser)
            input3.addEventListener('click',addadmin)

        }

    }




appendTableDate();


allTr = document.getElementsByTagName('tr');
function changeStatus(e){
    let tr = e.target.parentNode.parentNode;
    let username = tr.children[6].innerText;
    // console.log(username)
    for (let index = 0; index < employees.length; index++) {
        console.log(employees[index].userName)
    if(employees[index].userName == username){
        //    console.log('jjjj');
        //   if(e.target.checked == true) {
        //     employees[index].status = true;
        //   }
        employees[index].status = e.target.checked;
    }
    
}



localStorage.setItem('emp',JSON.stringify(employees))

}
function changeuser(e){
    let tr = e.target.parentNode.parentNode;
    let username = tr.children[6].innerText;
    // console.log(username)
    for (let index = 0; index < employees.length; index++) {
        console.log(employees[index].userName)
       if(employees[index].userName == username){
        //    console.log('jjjj');
        //   if(e.target.checked == true) {
        //     employees[index].status = true;
        //   }
          employees[index].issecurity = e.target.checked;
       }
        
    }
    
    
    
    localStorage.setItem('emp',JSON.stringify(employees))
        
    }


function addadmin(e){

    let tr = e.target.parentNode.parentNode;
    let username = tr.children[6].innerText;
    // console.log(username)
    for (let index = 0; index < employees.length; index++) {
        console.log(employees[index].userName)
       if(employees[index].userName == username){
        //    console.log('jjjj');
        //   if(e.target.checked == true) {
        //     employees[index].status = true;
        //   }
          employees[index].isadmin = e.target.checked;
       }
        
    }
    
    
    
    localStorage.setItem('emp',JSON.stringify(employees))
    
}





