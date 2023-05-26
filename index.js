

// Next step functionality and Performing Validation 
function nextStepFunction(id) {
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

        document.getElementById("name").style.borderColor = "red";
        document.getElementById("requireField").classList.remove("d-none");
    }
    if (((!emailRegex.test(email)) && (id == "moveUp"))) {

        document.getElementById("email").style.borderColor = "red";
        document.getElementById("requireField2").classList.remove("d-none");
    }
    if (((!phoneNumberRegex.test(phoneNumber)) && (id == "moveUp"))) {
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

//Correct Validation Function
function validationGreenFunction(id) {
    if (document.getElementById(id) !== 0 && document.getElementById(id) !== undefined && document.getElementById(id) !== null) {
        document.getElementById("name").style.borderColor = "green";
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("phoneNumber").style.borderColor = "green";
        document.getElementById("requireField").classList.add("d-none");
        document.getElementById("requireField2").classList.add("d-none");
        document.getElementById("requireField3").classList.add("d-none");
    }

}





function changeFunction() {
    document.getElementById("stepOne").classList.add("d-none");
    document.getElementById("stepTwo").classList.remove("d-none");
    document.getElementById("stepThree").classList.add("d-none");
    document.getElementById("stepFour").classList.add("d-none");
    document.getElementById("stepFive").classList.add("d-none");
}









// Yearly / Monthly package function

// Blue Border Function of selection packages monthly and also getting values of different packages and store in finishng round
function main(id) {
    if (document.getElementById("flexSwitchCheckChecked").checked) {

        let paragraph = document.getElementById("paraSpan1");
        let span = paragraph.getElementsByTagName('span')[0];
        let span1 = paragraph.getElementsByTagName('span')[2];

        span.innerHTML = "";
        span1.innerHTML = "";

        let paragraph1 = document.getElementById("paraSpan2");
        let span3 = paragraph1.getElementsByTagName('span')[0];
        let span4 = paragraph1.getElementsByTagName('span')[2];

        span3.innerHTML = "";
        span4.innerHTML = "";

        let paragraph3 = document.getElementById("paraSpan3");
        let span5 = paragraph3.getElementsByTagName('span')[0];
        let span6 = paragraph3.getElementsByTagName('span')[2];

        span5.innerHTML = "";
        span6.innerHTML = "";

        document.getElementById("value").innerText = "$ " + 90 + " /yr";
        document.getElementById("value2").innerText = "$ " + 120 + " /yr";
        document.getElementById("value3").innerText = "$ " + 150 + " /yr";

        if (id == "arcade") {
            console.log("arcade mode")
            document.getElementById("arcade").style.borderColor = "blue";
            document.getElementById("advanced").style.borderColor = "white";
            document.getElementById("pro").style.borderColor = "white";
        let storeValues = [];
            let text = document.getElementById("text").innerText;
             document.getElementById("onlineValue").innerText = "$" + 10 + " /yr";
            document.getElementById("customizableProfileValue").innerText = "$" + 20 + " /yr";
            document.getElementById("largerStorageValue1").innerText = "$" + 20 + " /yr";
           let cardValue = 90;
            storeValues.push(text)
            storeValues.push(cardValue);
            for (i = 0; i < storeValues.length; i++) {
                let leftText = storeValues[0];
                let rightValue = storeValues[1];
                document.getElementById("billPlan").innerHTML = leftText;
                document.getElementById("arcadePayment").value = "$" + rightValue + "/yr";
            }
        }
        else if (id !== "arcade") {
            document.getElementById("arcade").style.borderColor = "white";
            // cardValue = 0;
        }
        if (id == "advanced") {
        let storeValues = [];

          let  cardValue = 120;
            document.getElementById("advanced").style.borderColor = "blue";
            document.getElementById("arcade").style.borderColor = "white";
            document.getElementById("pro").style.borderColor = "white";
            let text = document.getElementById("text").innerText;
            document.getElementById("onlineValue").innerText = "$" + 10 + " /yr";
            document.getElementById("customizableProfileValue").innerText = "$" + 20 + " /yr";
            document.getElementById("largerStorageValue1").innerText = "$" + 20 + " /yr";
            storeValues.push(text)
            storeValues.push(cardValue);
            for (i = 0; i < storeValues.length; i++) {
                let leftText = storeValues[0];
                let rightValue = storeValues[1];
                document.getElementById("billPlan").innerHTML = leftText;
                document.getElementById("arcadePayment").value = "$" + rightValue + "/yr";
                // boxesCheckedFunction();

            }
        }
        else if (id !== "advanced") {
            document.getElementById("advanced").style.borderColor = "white";
            // cardValue = 0;
        }
        if (id == "pro") {
        let storeValues = [];
          let  cardValue = 150;
            document.getElementById("pro").style.borderColor = "blue";
            document.getElementById("arcade").style.borderColor = "white";
            document.getElementById("advanced").style.borderColor = "white";
            let text = document.getElementById("text").innerText;
            document.getElementById("onlineValue").innerText = "$" + 10 + " /yr";
            document.getElementById("customizableProfileValue").innerText = "$" + 20 + " /yr";
            document.getElementById("largerStorageValue1").innerText = "$" + 20 + " /yr";
            storeValues.push(text)
            storeValues.push(cardValue);
            for (i = 0; i < storeValues.length; i++) {
                let leftText = storeValues[0];
                let rightValue = storeValues[1];
                document.getElementById("billPlan").innerHTML = leftText;
                document.getElementById("arcadePayment").value = "$" + rightValue + "/yr";
                // boxesCheckedFunction();
            }
        }
        else if (id !== "pro") {
            document.getElementById("pro").style.borderColor = "white";
            // cardValue = 0;
        }
        // function boxesCheckedFunction() {
            document.getElementById("onlineServiceText").innerHTML = "";
            let storeValues1 = [];
            onlineServiceValue = 10;
            let onlineText = document.getElementById("onlineText").innerText;
            largerStorageValue = 20;
            let largerStorageText = document.getElementById("largerStorageText").innerText;
            customizableProfileValue = 20;
            let customizableProfileText = document.getElementById("customizableProfileText").innerText;
            storeValues1.push(onlineServiceValue, onlineText, largerStorageValue, largerStorageText, customizableProfileValue, customizableProfileText);
        
            // First selection package
            if (document.getElementById("onlineService").checked) {
                let onlineServiceValue = 10;
                let createElement = document.createElement("input");
                createElement.classList.add("form-control", "bg-transparent", "text-end", "border-0");
                let createElement1 = document.createElement("p");
                let createElement2 = document.createElement("div");
                createElement2.classList.add("row");
        
                let createElement3 = document.createElement("div");
                createElement3.classList.add("col-md-6");
                createElement2.appendChild(createElement3);
        
        
                let createElement4 = document.createElement("div");
                createElement4.classList.add("col-md-6");
                createElement2.appendChild(createElement4);
        
        
                createElement1.innerText = onlineText;
                createElement.value = "$" + onlineServiceValue + "/yr";
        
                createElement3.appendChild(createElement1);
                createElement4.appendChild(createElement);
                document.getElementById("onlineServiceText").appendChild(createElement2);
            } else {
                onlineServiceValue = 0;
            }
        
        
            // Second selection package
            if (document.getElementById("largerStorage").checked) {
                let largerStorageValue = 20;
                let createElement = document.createElement("input");
                createElement.classList.add("form-control", "bg-transparent", "text-end", "border-0");
                let createElement1 = document.createElement("p");
                let createElement2 = document.createElement("div");
                createElement2.classList.add("row");
        
                let createElement3 = document.createElement("div");
                createElement3.classList.add("col-md-6");
                createElement2.appendChild(createElement3);
        
        
                let createElement4 = document.createElement("div");
                createElement4.classList.add("col-md-6");
                createElement2.appendChild(createElement4);
        
        
                createElement1.innerText = largerStorageText;
                createElement.value = "$" + largerStorageValue + "/yr";
        
                createElement3.appendChild(createElement1);
                createElement4.appendChild(createElement);
                document.getElementById("onlineServiceText").appendChild(createElement2);
            } else {
                largerStorageValue = 0;
            }
        
        
            // Third selection package
            if (document.getElementById("customizableProfile").checked) {
                let customizableProfileValue = 20;
                let createElement = document.createElement("input");
                createElement.classList.add("form-control", "bg-transparent", "text-end", "border-0")
                let createElement1 = document.createElement("p");
                let createElement2 = document.createElement("div");
                createElement2.classList.add("row");
        
                let createElement3 = document.createElement("div");
                createElement3.classList.add("col-md-6");
                createElement2.appendChild(createElement3);
        
        
                let createElement4 = document.createElement("div");
                createElement4.classList.add("col-md-6");
                createElement2.appendChild(createElement4);
        
        
                createElement1.innerText = customizableProfileText;
                createElement.value = "$" + customizableProfileValue + "/yr";
        
                createElement3.appendChild(createElement1);
                createElement4.appendChild(createElement);
                document.getElementById("onlineServiceText").appendChild(createElement2);
            }
            else {
                customizableProfileValue = 0;
            }
        
        
            // all three packages checked
        
            let x = document.getElementById("arcadePayment").value;
            let extract = x.match(/\d+/g);
            let cardValue = (parseInt(extract));
            finalValue = cardValue + onlineServiceValue + largerStorageValue + customizableProfileValue;
        
        
            document.getElementById("totalAmount").innerHTML = "$ " + finalValue + "/yr";
            console.log(finalValue, "finalValue");
        
        // }
    }


    else {
        // Monthly packages
        let paragraph = document.getElementById("paraSpan1");
        let span = paragraph.getElementsByTagName('span')[0];
        let span1 = paragraph.getElementsByTagName('span')[2];

        span.innerHTML = "";
        span1.innerHTML = "";

        let paragraph1 = document.getElementById("paraSpan2");
        let span3 = paragraph1.getElementsByTagName('span')[0];
        let span4 = paragraph1.getElementsByTagName('span')[2];

        span3.innerHTML = "";
        span4.innerHTML = "";

        let paragraph3 = document.getElementById("paraSpan3");
        let span5 = paragraph3.getElementsByTagName('span')[0];
        let span6 = paragraph3.getElementsByTagName('span')[2];

        span5.innerHTML = "";
        span6.innerHTML = "";


        document.getElementById("value").innerText = "$ " +9+ " /mon";
        document.getElementById("value2").innerText = "$ " +12+ " /mon";
        document.getElementById("value3").innerText = "$ " +15+ " /mon";
        let storeValues = [];
        if (id == "arcade") {
            document.getElementById("arcade").style.borderColor = "blue";
            document.getElementById("advanced").style.borderColor = "white";
            document.getElementById("pro").style.borderColor = "white";
            document.getElementById("onlineValue").innerText = "$" + 1 + " /mon";
            document.getElementById("customizableProfileValue").innerText = "$" + 2 + " /mon";
            document.getElementById("largerStorageValue1").innerText = "$" + 2 + " /mon";
            let text = document.getElementById("text").innerText;
           let  cardValue = 9;
            storeValues.push(text)
            storeValues.push(cardValue);
            for (i = 0; i < storeValues.length; i++) {
                let leftText = storeValues[0];
                let rightValue = storeValues[1];
                document.getElementById("billPlan").innerHTML = leftText;
                document.getElementById("arcadePayment").value = "$ " + rightValue + " /mon";
            }
        }
        else if (id !== "arcade") {
            document.getElementById("arcade").style.borderColor = "white";
            // cardValue = 0;
        }
        if (id == "advanced") {
           let cardValue = 12;
            document.getElementById("advanced").style.borderColor = "blue";
            document.getElementById("arcade").style.borderColor = "white";
            document.getElementById("pro").style.borderColor = "white";
            document.getElementById("onlineValue").innerText = "$" + 1 + " /mon";
            document.getElementById("customizableProfileValue").innerText = "$" + 2 + " /mon";
            document.getElementById("largerStorageValue1").innerText = "$" + 2 + " /mon";
            let text = document.getElementById("text2").innerText;

            storeValues.push(text)
            storeValues.push(cardValue);
            for (i = 0; i < storeValues.length; i++) {
                let leftText = storeValues[0];
                let rightValue = storeValues[1];
                document.getElementById("billPlan").innerHTML = leftText;
                document.getElementById("arcadePayment").value = "$" + rightValue + "/mon";
            }

        }
        else if (id !== "advanced") {
            document.getElementById("advanced").style.borderColor = "white";
            // cardValue = 0;
        }
        if (id == "pro") {
            let cardValue = 15;
            document.getElementById("pro").style.borderColor = "blue";
            document.getElementById("arcade").style.borderColor = "white";
            document.getElementById("advanced").style.borderColor = "white";
            let text = document.getElementById("text3").innerText;
            document.getElementById("onlineValue").innerText = "$" + 1 + " /mon";
            document.getElementById("customizableProfileValue").innerText = "$" + 2 + " /mon";
            document.getElementById("largerStorageValue1").innerText = "$" + 2 + " /mon";
            storeValues.push(text)
            storeValues.push(cardValue);
            for (i = 0; i < storeValues.length; i++) {
                let leftText = storeValues[0];
                let rightValue = storeValues[1];
                document.getElementById("billPlan").innerHTML = leftText;
                document.getElementById("arcadePayment").value = "$" + rightValue + "/mon";
            }
        }
        else if (id !== "pro") {
            document.getElementById("pro").style.borderColor = "white";
            // cardValue = 0;
        }
        // function boxesCheckedFunction() {
               document.getElementById("onlineServiceText").innerHTML = "";
            let storeValues1 = [];
            onlineServiceValue = 1;
            let onlineText = document.getElementById("onlineText").innerText;
            largerStorageValue = 2;
            let largerStorageText = document.getElementById("largerStorageText").innerText;
            customizableProfileValue = 2;
            let customizableProfileText = document.getElementById("customizableProfileText").innerText;
            storeValues1.push(onlineServiceValue, onlineText, largerStorageValue, largerStorageText, customizableProfileValue, customizableProfileText);
        
            // First selection package
            if (document.getElementById("onlineService").checked) {
                let onlineServiceValue = 1;
                let createElement = document.createElement("input");
                createElement.classList.add("form-control", "bg-transparent", "text-end", "border-0");
                let createElement1 = document.createElement("p");
                let createElement2 = document.createElement("div");
                createElement2.classList.add("row");
        
                let createElement3 = document.createElement("div");
                createElement3.classList.add("col-md-6");
                createElement2.appendChild(createElement3);
        
        
                let createElement4 = document.createElement("div");
                createElement4.classList.add("col-md-6");
                createElement2.appendChild(createElement4);
        
        
                createElement1.innerText = onlineText;
                createElement.value = "$" + onlineServiceValue + "/mon";
        
                createElement3.appendChild(createElement1);
                createElement4.appendChild(createElement);
                document.getElementById("onlineServiceText").appendChild(createElement2);
            } else {
                onlineServiceValue = 0;
            }
        
        
            // Second selection package
            if (document.getElementById("largerStorage").checked) {
                let largerStorageValue = 2;
                let createElement = document.createElement("input");
                createElement.classList.add("form-control", "bg-transparent", "text-end", "border-0");
                let createElement1 = document.createElement("p");
                let createElement2 = document.createElement("div");
                createElement2.classList.add("row");
        
                let createElement3 = document.createElement("div");
                createElement3.classList.add("col-md-6");
                createElement2.appendChild(createElement3);
        
        
                let createElement4 = document.createElement("div");
                createElement4.classList.add("col-md-6");
                createElement2.appendChild(createElement4);
        
        
                createElement1.innerText = largerStorageText;
                createElement.value = "$" + largerStorageValue + "/mon";
        
                createElement3.appendChild(createElement1);
                createElement4.appendChild(createElement);
                document.getElementById("onlineServiceText").appendChild(createElement2);
            } else {
                largerStorageValue = 0;
            }
        
        
            // Third selection package
            if (document.getElementById("customizableProfile").checked) {
                let customizableProfileValue = 2;
                let createElement = document.createElement("input");
                createElement.classList.add("form-control", "bg-transparent", "text-end", "border-0")
                let createElement1 = document.createElement("p");
                let createElement2 = document.createElement("div");
                createElement2.classList.add("row");
        
                let createElement3 = document.createElement("div");
                createElement3.classList.add("col-md-6");
                createElement2.appendChild(createElement3);
        
        
                let createElement4 = document.createElement("div");
                createElement4.classList.add("col-md-6");
                createElement2.appendChild(createElement4);
        
        
                createElement1.innerText = customizableProfileText;
                createElement.value = "$" + customizableProfileValue + "/mon";
        
                createElement3.appendChild(createElement1);
                createElement4.appendChild(createElement);
                document.getElementById("onlineServiceText").appendChild(createElement2);
            }
            else {
                customizableProfileValue = 0;
            }
        
        
            // all three packages checked
        
            let x = document.getElementById("arcadePayment").value;
            let extract = x.match(/\d+/g);
            let cardValue = (parseInt(extract));
            finalValue = cardValue + onlineServiceValue + largerStorageValue + customizableProfileValue;
        
        
            document.getElementById("totalAmount").innerHTML = "$ " + finalValue + " /mon";
            console.log(finalValue, "finalValue");
        
        // }
    }
}




