let caclBtn = document.querySelector("button")
let day = document.querySelector("#day")
let month = document.querySelector("#month")
let year = document.querySelector("#year")
let yearsOut = document.querySelector("#years-out")
let monthsOut = document.querySelector("#months-out")
let daysOut = document.querySelector("#days-out")
let valid = null
let currentTime = new Date()


caclBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    validatie()
    checkDay(day.value)
    checkMonth(month.value)
    checkYear(year.value)
    if(checkDay(day.value) && checkMonth(month.value) && checkYear(year.value)){
        let yearsOutput = currentTime.getFullYear() - Number(year.value)
        let monthsOutput = (currentTime.getMonth() + 1) - Number(month.value) 
        let daysOutput= currentTime.getDate() - Number(day.value) 
        if(monthsOutput < 0){
            yearsOut.textContent  =  --yearsOutput
            
        }else{
            yearsOut.textContent  =  yearsOutput
        }
        if(daysOutput < 0){
            monthsOut.textContent =  monthsOutput < 0 ? (12 + monthsOutput) - 1 : monthsOutput 
            
        }else{
            monthsOut.textContent =  monthsOutput < 0 ? 12 + monthsOutput : monthsOutput

        }
        if((currentTime.getMonth()+1) == +month.value){
            yearsOut.textContent = --yearsOutput
            monthsOut.textContent = 11
            if(daysOutput == 0){
                yearsOut.textContent = ++yearsOutput
                monthsOut.textContent = 12
            }
        }
        daysOut.textContent = daysOutput < 0 ? getDaysInMonth(currentTime.getFullYear(),currentTime.getMonth() +1) + daysOutput : daysOutput
    }

})

function validatie(){
    //  check if the values empty
    let inputs = document.querySelectorAll("input")
    inputs.forEach(ele=>{
        if(ele.value == ""){
            ele.parentElement.setAttribute("data-error","This field is requierd")
            valid = false
        }else if(isNaN(+ele.value)){
            ele.parentElement.setAttribute("data-error","enter valid number")
            valid = false
        }else{
            ele.parentElement.removeAttribute("data-error")
        }
    })

}

function checkDay(dayValue){
    if(dayValue > 0 && dayValue <= 31){
        return true
    }else{
        if(day.value != ""){
            day.parentElement.setAttribute("data-error","enter valid day")
        }
        return false
    }
}
function checkMonth(monthValue){
    if(monthValue > 0 && monthValue <= 12){
        return true
    }else{
       if(month.value != ""){
         month.parentElement.setAttribute("data-error","enter valid month")
       }
        return false
    }
}
function checkYear(yearValue){
    if(yearValue > 0 && yearValue <= currentTime.getFullYear()){
        return true
    }else{
        if(year.value != ""){
            year.parentElement.setAttribute("data-error","enter valid year")
        }
        return false
    }
}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }