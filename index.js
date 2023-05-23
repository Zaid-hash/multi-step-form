let CardValue = 0;
let OnlineServiceValue = 0;
let LargerStorageValue = 0;
let CustomizableProfileValue = 0;
let FinalValue = 0;

// next step functionality
function func1(id) {



    //Passing Regex 
    let nameRegex = /^[A-Za-z\s'-]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneNumberRegex = /^(?:(?:\+1|1)[-. ]?)?(?:\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{3}$/
    let phoneNumber = document.getElementById("phoneNumber").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if ((nameRegex.test(name)) && (emailRegex.test(email)) && (phoneNumberRegex.test(phoneNumber)) && (id == "moveUp")) {
        document.getElementById("stepOne").classList.add("d-none");
        document.getElementById("stepTwo").classList.remove("d-none");
        document.getElementById("sideCircle1").style.backgroundColor = "transparent";
        document.getElementById("sideCircle2").style.backgroundColor = "#c0e0ff";
    }
    
    if (((!nameRegex.test(name)) && (id == "moveUp"))) {
    console.log("first field")

        document.getElementById("name").style.borderColor = "red";
        document.getElementById("requireField").classList.remove("d-none");
    }
   if (((!emailRegex.test(email)) && (id == "moveUp"))) {
    console.log("second field")

        document.getElementById("email").style.borderColor = "red";
        document.getElementById("requireField2").classList.remove("d-none");
    }
    if (((!phoneNumberRegex.test(phoneNumber)) && (id == "moveUp"))) {
    console.log("third field")
        document.getElementById("phoneNumber").style.borderColor = "red";
        document.getElementById("requireField3").classList.remove("d-none");
    }
   
    if (id == "moveUp2") {
        document.getElementById("stepTwo").classList.add("d-none");
        document.getElementById("stepThree").classList.remove("d-none");
        document.getElementById("sideCircle2").style.backgroundColor = "transparent";
        document.getElementById("sideCircle3").style.backgroundColor = "#c0e0ff";
    }
    if (id == "moveUp3") {
        document.getElementById("stepThree").classList.add("d-none");
        document.getElementById("stepFour").classList.remove("d-none");
        document.getElementById("sideCircle3").style.backgroundColor = "transparent";
        document.getElementById("sideCircle4").style.backgroundColor = "#c0e0ff";
    }
    if (id == "moveUp4") {
        document.getElementById("stepFour").classList.add("d-none");
        document.getElementById("stepFive").classList.remove("d-none");
        document.getElementById("sideCircle3").style.backgroundColor = "transparent";
        document.getElementById("sideCircle4").style.backgroundColor = "#c0e0ff";
        document.getElementById("sideCircle5").style.backgroundColor = "#c0e0ff";
    }
    if (id == "moveDown") {
        document.getElementById("stepTwo").classList.add("d-none");
        document.getElementById("stepOne").classList.remove("d-none");
        document.getElementById("sideCircle1").style.backgroundColor = "#c0e0ff";
        document.getElementById("sideCircle2").style.backgroundColor = "transparent";
    }
    if (id == "moveDown2") {
        document.getElementById("stepThree").classList.add("d-none");
        document.getElementById("stepTwo").classList.remove("d-none");
        document.getElementById("sideCircle2").style.backgroundColor = "#c0e0ff";
        document.getElementById("sideCircle3").style.backgroundColor = "transparent";
    }
    if (id == "moveDown3") {
        document.getElementById("stepFour").classList.add("d-none");
        document.getElementById("stepThree").classList.remove("d-none");
        document.getElementById("sideCircle3").style.backgroundColor = "#c0e0ff";
        document.getElementById("sideCircle4").style.backgroundColor = "transparent";
    }


  
}



    function value1(id) {
        if (document.getElementById(id) !== 0 && document.getElementById(id) !== undefined && document.getElementById(id) !== null) {
            document.getElementById("name").style.borderColor = "green";
            document.getElementById("email").style.borderColor = "green";
            document.getElementById("phoneNumber").style.borderColor = "green";
            document.getElementById("requireField").classList.add("d-none");
            document.getElementById("requireField2").classList.add("d-none");
            document.getElementById("requireField3").classList.add("d-none");
        }
    }

// blue border of selection packages monthly
function func2(id) {
    if (id == "arcade") {
        CardValue = 9;
        document.getElementById("arcade").style.borderColor = "blue";
        document.getElementById("advanced").style.borderColor = "white";
        document.getElementById("pro").style.borderColor = "white";
        // let text = document.getElementById("text").innerText;
        // document.getElementById("value").innerHTML = CardValue;
        // document.getElementById("billPlan").innerHTML = text + " (Monthly)";
        // arcadeResult = document.getElementById("arcadePayment").innerHTML = "$ " + CardValue;
//  let billPlan = document.getElementById("billPlan");
// let text2 = document.getElementById("text").innerText;
// console.log(text2)
// let createText2 = document.createElement("p");
// createText2.innerText = text2;
// billPlan.appendChild(createText2);


    }
    else if (id !== "arcade") {
        document.getElementById("arcade").style.borderColor = "white";
        // document.getElementById("billPlan").innerHTML = "";
        // document.getElementById("arcadePayment").innerHTML = "";
        CardValue = 0;
    }
     if (id == "advanced") {
        CardValue = 12;
        document.getElementById("advanced").style.borderColor = "blue";
        document.getElementById("arcade").style.borderColor = "white";
        document.getElementById("pro").style.borderColor = "white";
        // let text = document.getElementById("text2").innerText;
        // document.getElementById("value2").innerHTML = CardValue;
        // document.getElementById("billPlan2").innerHTML = text + " (Monthly)";
        // document.getElementById("advancedPayment").innerHTML = "$ " + CardValue;
       
let billPlan2 = document.getElementById("billPlan2");
let text2 = document.getElementById("text2").innerText;
console.log(text2)
let createText2 = document.createElement("p");
createText2.innerText = text2;
billPlan2.appendChild(createText2);

    }
    else if (id !== "advanced") {
        document.getElementById("advanced").style.borderColor = "white";
        // document.getElementById("billPlan2").innerHTML = "";
        // document.getElementById("advancedPayment").innerHTML = "";
        CardValue = 0;
    }
     if (id == "pro") {
        CardValue = 15;
        document.getElementById("pro").style.borderColor = "blue";
        document.getElementById("arcade").style.borderColor = "white";
        document.getElementById("advanced").style.borderColor = "white";
        // let text = document.getElementById("text3").innerText;
        // let value = document.getElementById("value3").innerHTML;
        // document.getElementById("billPlan3").innerHTML = text + " (Monthly)";
        // document.getElementById("proPayment").innerHTML = "$ " + CardValue;
    }
    
   
    else if (id !== "pro") {
        document.getElementById("pro").style.borderColor = "white";
        document.getElementById("billPlan3").innerHTML = "";
        document.getElementById("proPayment").innerHTML = "";
        CardValue = 0;
    }
}

function func3() {
    if (document.getElementById("onlineService").checked) {
        let onlineText = document.getElementById("onlineText").innerHTML;
        let onlineValue = document.getElementById("onlineValue").innerHTML;
        document.getElementById("onlineServiceText").innerHTML = onlineText;
        document.getElementById("onlineServicePrice").innerHTML = "$ " + parseInt(onlineValue) + " /mon";
        OnlineServiceValue = 1;

    } else if (!document.getElementById("onlineService").unchecked) {
        document.getElementById("onlineServiceText").innerHTML = "";
        document.getElementById("onlineServicePrice").innerHTML = "";
        OnlineServiceValue = 0;
    }
    if (document.getElementById("largerStorage").checked) {
        let largerStorageText = document.getElementById("largerStorageText").innerHTML;
        let largerStorageValue = document.getElementById("largerStorageValue").innerHTML;
        document.getElementById("largerStorageTextBill").innerHTML = largerStorageText;
        document.getElementById("largerStoragePrice").innerHTML = "$ " + parseInt(largerStorageValue) + " /mon";
        LargerStorageValue = 2;
    }
    else if (!document.getElementById("largerStorage").unchecked) {
        document.getElementById("largerStorageTextBill").innerHTML = "";
        document.getElementById("largerStoragePrice").innerHTML = "";
        LargerStorageValue = 0;
    }
    if (document.getElementById("customizableProfile").checked) {
        let customizableProfileText = document.getElementById("customizableProfileText").innerHTML;
        let customizableProfileValue = document.getElementById("customizableProfileValue").innerHTML;
        document.getElementById("customTextBill").innerHTML = customizableProfileText;
        document.getElementById("customPrice").innerHTML = "$ " + parseInt(customizableProfileValue) + " /mon";
        CustomizableProfileValue = 2;
    }
    else if (!document.getElementById("customizableProfile").unchecked) {
        document.getElementById("customTextBill").innerHTML = "";
        document.getElementById("customPrice").innerHTML = "";
        CustomizableProfileValue = 0;
    }
    FinalValue = CardValue + OnlineServiceValue + LargerStorageValue + CustomizableProfileValue;
    console.log(CardValue)

    document.getElementById("totalAmount").innerHTML = "$ " + FinalValue + " /mon";
    console.log(FinalValue)
}





