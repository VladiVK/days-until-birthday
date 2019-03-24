

const calcTime = () => {

    let ourDate = new Date();
    let ourYear = ourDate.getFullYear();
    const input = document.getElementById('input').value;
    
    /* check input for correct data*/
    if(checkInput(input)) {
    let inputDate = new Date(input);
    
    /* set current year for input */
    inputDate.setFullYear(ourYear); 

    /* if birthday has already passed: calculate until next year */
    if(inputDate < ourDate) {  
        inputDate.setFullYear(ourYear + 1); 
    }
    
    let difInDays = Math.floor( ( inputDate - ourDate) / (1000*60*60*24));
    let difInOurs = Math.floor( ( inputDate - ourDate) / (1000*60*60));
    let difInMinuts = Math.floor( ( inputDate - ourDate) / (1000*60));
    let difInSeconds = Math.floor( ( inputDate - ourDate) / 1000);

    document.getElementById('birthday') .style.display ='block';
    document.getElementById('days').innerHTML = difInDays + ' ' + 'days '; 
    document.getElementById('hours').innerHTML = difInOurs + ' ' + 'hours';
    document.getElementById('minutes').innerHTML = difInMinuts + ' ' + 'minutes';
    document.getElementById('seconds').innerHTML = difInSeconds + ' ' + 'seconds'; 
    }
}
  

const checkInput = (inp) => {
    inp = inp.split('-');
    if( (inp !== '') &&
     (inp[0].length === 4 && inp[0] > 0) &&
     (inp[1] > 0 && inp[1] <=12) && 
     (inp[2] > 0 && inp[2] <=31) ) {
        return true;
     } else {
         alert ('Sorry, input Your date in the correct format!');
     }
}

const cleanInput = () => {
    document.getElementById('input').value = '';
    document.getElementById('input').placeholder="YYYY-MM-DD";
    document.getElementById('birthday') .style.display ='none';
}
    


    
    
    
