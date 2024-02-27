const buttons = document.querySelectorAll("button")
//console.log(buttons)

const myH1 = document.getElementById("h1")

const clearBtn = document .getElementById("allclear")

const equalBtn = document.getElementById("equal")


equalBtn.addEventListener("click",function()
{
    // we need to write the logic to basicaaly calculate the result
    myH1.innerText = eval(myH1.innerText)

})

function getData(data) 
{
    //console.log(data)
    if(myH1.innerText === '0')
    {
        myH1.innerText = data
    }
    else{
        myH1.innerText = myH1.innerText + data
    }
}


function addDecimal()
{
    //console.log("Decimal Button Clicked")
    //logic decimal should be added for the first time only,if there is no decimal 
    //present in the display

    if(!myH1.innerText.includes("."))
    {
      myH1.innerText = `${myH1.innerText}.`
    }
}
buttons.forEach(function (btn) {
    //console.log(btn)
    if (btn.classList.length == 0) {

        btn.addEventListener("click", function () {
            //console.log(btn.innerText)

            getData(btn.innerText)

        })
        //console.log(btn)

    }
    else if (btn.classList.contains("operator")) {
        btn.addEventListener("click", function () {
            getData(btn.innerText)
        })

    }

    else if (btn.classList.contains("decimal")) {

        btn.addEventListener("click", function () {
            //getData(btn.innerText)
            addDecimal()
        })

    }
})

clearBtn.addEventListener("click", function () {
    //logic to clear the complete data
    myH1.innerText = "0"
})