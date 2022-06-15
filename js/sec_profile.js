let allLogins = JSON.parse(localStorage.getItem('sec_tran'))
let current_login = allLogins[allLogins.length - 1];
let meg = document.getElementById('headmeg').innerText = `welcom ${current_login.userFname} start tacke the attendance please`;
let inputText = document.getElementById('box2');
let allusers = JSON.parse(localStorage.getItem('userName'));

let btn = document.getElementById('box3');

let btn2 = document.getElementById('box4');


// localStorage.removeItem('attendance')
// localStorage.removeItem('departure')

let attendacce_arr;
let departure_arr;

if(!JSON.parse(localStorage.getItem('attendance'))){
    attendacce_arr = [];
  
}else{
    attendacce_arr = JSON.parse(localStorage.getItem('attendance'));
}

if(!JSON.parse(localStorage.getItem('departure'))){
    departure_arr = [];
    // attendacce_arr .push(rondomObj)
}else{
    departure_arr = JSON.parse(localStorage.getItem('departure'));
}

let now = new Date();
let takeatt = {
    'userName': '',
    'attstate': '',
    // 'depState':false,
    'timein': '',
    'timeout': 0,
    "late":'',

}
btn.addEventListener('click', function () {
    
    if (allusers.includes(inputText.value)) {
     
      
        if((now.getHours()*60 + now.getMinutes())<510||(now.getHours()*60 + now.getMinutes())>930){
            alert (`you are out of work day hours`)
        }else{
                let user = inputText.value;
                let isLate;
                if((now.getHours()*60 + now.getMinutes())>510&&(now.getHours()*60 + now.getMinutes())<930){
                    isLate = true;
                }else{
                    isLate = false;
                }
                let takeatt = {
                    'userName': user,
                    'attstate': new Date().toLocaleDateString(),
                    // 'depState':false,
                    'timein': `${new Date().getHours()} :${new Date().getMinutes()}`,
                    'timeout': 0,
                    "late":isLate
                }
                attendacce_arr.push(takeatt);
                console.log(attendacce_arr)
                localStorage.setItem('attendance', JSON.stringify(attendacce_arr))
            }



        // let earlyM = Math.floor((new Date(time.getFullYear(), time.getMonth(), time.getDate(), outH, outM) - time) / 60000);‏
        
//var today = new Date();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();‏

        //let timeToAutoOut=new Date(now.getFullYear(),now.getMonth(),now.getDate(),15,30)-now;‏

    } else {
        alert('there is no employee with this user name please cheack the user name again')
    }
   
})
btn2.addEventListener('click', function () {
  
    if (allusers.includes(inputText.value)) {
        if((now.getHours()*60 + now.getMinutes())<510||(now.getHours()*60 + now.getMinutes())>930){
            alert (`you are out of work day hours`)
        }else{
        let user = inputText.value;
                console.log(attendacce_arr)
                let apologize = false;
                let meg = '';
                let early_exit = false;
                if((now.getHours()*60 + now.getMinutes())<930){
                    early_exit = true
                    apologize = confirm ('are you have apologize?')
                    if(apologize == true){
                       meg =  prompt('enter your pologize') 
                    }else{
                        meg = 'hav not pologize';
                    }
                }
                for (let index = 0; index < attendacce_arr.length; index++) {
                    if (user == attendacce_arr[index].userName  && attendacce_arr[index].attstate == new Date().toLocaleDateString()&&attendacce_arr[index].timeout==0) {
                        takedep = {
                            'userName': user,
                            'attstate': new Date().toLocaleDateString(),
                            // 'depState':false,
                            'timein':attendacce_arr[index].timein,
                            'timeout': `${new Date().getHours()} :${new Date().getMinutes()}`,
                            'late':attendacce_arr[index].late,
                            'early_exit': early_exit,
                            'exit_permission':apologize,
                            'apologize_reson':meg
                        }
                        // attendacce_arr[index].timeout = `${new Date().getHours()} :${new Date().getMinutes()}`
                        departure_arr.push(takedep)    
                    }   
       }
       console.log(departure_arr)
       localStorage.setItem('departure', JSON.stringify(departure_arr))

    }



        // let earlyM = Math.floor((new Date(time.getFullYear(), time.getMonth(), time.getDate(), outH, outM) - time) / 60000);‏
        
//var today = new Date();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();‏

        //let timeToAutoOut=new Date(now.getFullYear(),now.getMonth(),now.getDate(),15,30)-now;‏

    } else {
        alert('there is no employee with this user name please cheack the user name again')
    }

})
// console.log(`${new Date().getHours()} :${new Date().getMinutes()}`)