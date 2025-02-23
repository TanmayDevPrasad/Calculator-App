//AUTHOR :: Tanmay Dev Prasad
//Date : 22 Feb 2025

let spanTxt = document.getElementById("spanner") //span area to insert input numbers and operators

// var operators = ["√", "^", "!", "%", "÷", "×", "–", "+"]; //array of operators
var numArr = []; //array to store digits for conversion to number
var operator;
var numbersArray = []; //array to store the inputted numbers

//function to insert user-input in status bar one after another line by line
function insertVal(text) {
    spanTxt.append(text)
}


//configuration of AC button to delete clear the status box
let clearBtn = document.querySelector(".clearBtn")
clearBtn.addEventListener("click", () => {
    spanTxt.innerHTML = ""; //clear the display
    numArr.splice(0, numArr.length)  //clear the digit array
    numbersArray.splice(0, numArr.length) //clear the numbersArray 
}
)


//configuration of backspace button to clear last input
let bckspace = document.querySelector(".backspace")
bckspace.addEventListener("click", () => {
    spanTxt.lastChild.remove();
    numArr.pop(); //remove the last digit from the digits array
}
)


//function to calculate and return result 
function calc(num1, num2, opr) {
    switch (opr) { //opr has the operator in form of string as extracted from textContent of btn upon clicking

        case "+":
            return num1 + num2;
            break;
        case "–":
            return num1 - num2;
            break;
        case "×":
            return num1 * num2;
            break;
        case "÷":
            return num1 / num2;
            break;

        default:
            return ("Invalid input");
            break;
    }
}


let controlCenter = document.querySelector(".controls")
//applying event delgation for the buttons
controlCenter.addEventListener("click", (event) => {

    //if a number is clicked : 
    if (event.target.classList.contains("num")) {

        const inpDigit = event.target.textContent;
        numArr.push(inpDigit) //the input digit will be pushed into the numArr 
        console.log("Array of digits: "+numArr)
        insertVal(inpDigit) //display the inputted digit


        //* configure pi here
    }

    //if an operator is clicked:  
    else if (event.target.classList.contains("opr")) {

        operator = event.target.textContent;

        const ActNum = parseInt(numArr.join("")) //the string content of numArr is joined and then parsed into integer format
        
        numbersArray.push(ActNum)
        console.log("Array of numbers :" + numbersArray);

        numArr.splice(0, numArr.length) //to clear the num array so that it can store the digits for next number
        insertVal(operator) //insert the clicked operator to display
    }
}
)

//configuration of = button to print result
let eqlBtn = document.getElementById("dblBtn");
eqlBtn.addEventListener("click", (num1, num2, opr) => {
    
    numbersArray.push(parseInt(numArr.join(""))) //push the last no. into numbersArray
    
    numArr.splice(0, numArr.length) //clear the numArr

    console.log(numbersArray)
    
    spanTxt.innerHTML = calc(numbersArray[0], numbersArray[1], operator) //display result

    numbersArray.splice(0, numArr.length) //clear the numbersArray 

}
)