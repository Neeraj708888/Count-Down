

const endDate = "09 July 2023 10:00:00 PM"
document.getElementById("end-date").innerText=endDate;
const inputs =document.querySelectorAll("input")
function clock()
{
    const end =new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    //convert into days


    if(diff<0) return;
    {
        inputs[0].value=Math.floor(diff/3600/24);
        inputs[1].value=Math.floor(diff/3600)%24;
        inputs[2].value=Math.floor(diff/60)%60;
        inputs[3].value=Math.floor(diff)%60;
    }
    
}
//Initial
clock()
setInterval(
    () =>{
        clock()
    },
    1000
)


// 1 day -24 hr
// 1hr - 60 mint
// 60 mint - 3600 sec
// 1 second - 1000 mili second