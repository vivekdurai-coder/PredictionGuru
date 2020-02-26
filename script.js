function calculation(){
let acd = parseInt( document.getElementById('acd_calls').value);
let abandon = parseInt(document.getElementById('abandon_calls').value);
let result = 0;
let totalCalls = acd + abandon;
result = abandon / totalCalls;
result = result * 100;
result = result.toFixed(2);
return result==='NaN' ? "No Input" : result+"%";
}

function predict_calculation(abandon_addition)
{
    let acd_predicted = parseInt( document.getElementById('acd_calls').value);
    let abandon = parseInt(document.getElementById('abandon_calls').value);
    let abandon_predicted = abandon + parseInt(abandon_addition);
    let totalCalls = acd_predicted + abandon_predicted;
    let thresold = 5;
    let predicted_abandon_rate = abandon_predicted / totalCalls;
    predicted_abandon_rate = predicted_abandon_rate * 100;
    predicted_abandon_rate = predicted_abandon_rate.toFixed(2);

    if(predicted_abandon_rate > thresold)
    {
            do{
                 acd_predicted++;
                 totalCalls = acd_predicted + abandon_predicted;
                 predicted_abandon_rate = abandon_predicted / totalCalls;
                 predicted_abandon_rate = predicted_abandon_rate * 100;
                 predicted_abandon_rate = predicted_abandon_rate.toFixed(2);
             }while(predicted_abandon_rate>thresold)

             return acd_predicted;
    }
   
    else
    {
        return "none";
    }
    



}

function Current_Abandon(){ 

    document.getElementById('result').innerHTML = "<center>Abandon rate<br>" + calculation()+"</center>"; 

}

function PredictMe(){
    document.getElementById('predict_zero').innerHTML ="<tr><th>ACD Calls Required</th><th>Extra Abandon Calls</th></tr>";
    for(i=0; i<=10;i++)
    {
         document.getElementById('predict_zero').innerHTML += "<tr><td>" +predict_calculation(i)+"</td><td>"+i+"</td></tr>";

    }
}
function PredictNow(){
    document.getElementById('now').innerHTML = "ACD CALLS NEEDED:<br>"+predict_calculation(0);
}
    


