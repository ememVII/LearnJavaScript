// 01
function result1() {
    var one = document.getElementById("num1").value;

    document.getElementById("resultOne").innerHTML = one;
}

// 02
function result2() {
    var two = document.getElementById("num2").value;

    two = Number(two)

    if (two % 3 == 0 && two % 4 == 0) {
        document.getElementById("resultTwo").innerHTML = "Yes";
    } else {
        document.getElementById("resultTwo").innerHTML = "No";
    }
}

// 03
function result3() {
    var three = document.getElementById("num3").value;
    var four = document.getElementById("num4").value;

    if(three > four) {
        document.getElementById("result3").innerHTML = three;
    } else if(four > three) {
        document.getElementById("result3").innerHTML = four;
    }
}

// 04
function result4() {
    var assign4 = document.getElementById("num5").value;

    assign4 = Number(assign4)

    if(assign4 >= 0) {
        document.getElementById("result4").innerHTML = "Positive";
    } else {
        document.getElementById("result4").innerHTML = "Negative";
    }
}

// 05
function result5() {
    var assign5One = document.getElementById("assign5Num1").value;
    var assign5Two = document.getElementById("assign5Num2").value;
    var assign5Three = document.getElementById("assign5Num3").value;

    assign5One = Number(assign5One);
    assign5Two = Number(assign5Two);
    assign5Three = Number(assign5Three);

    if(assign5One > assign5Two && assign5One > assign5Three) {
        document.getElementById("assign05result1").innerHTML = `max element = ${assign5One}`
    } else if (assign5Two > assign5One && assign5Two > assign5Three) {
        document.getElementById("assign05result1").innerHTML = `max element = ${assign5Two}`
    } else if(assign5Three > assign5One && assign5Three > assign5Two) {
        document.getElementById("assign05result1").innerHTML = `max element = ${assign5Three}`
    }

    if(assign5One < assign5Two && assign5One < assign5Three) {
        document.getElementById("assign05result2").innerHTML = `min element = ${assign5One}`
    } else if (assign5Two < assign5One && assign5Two < assign5Three) {
        document.getElementById("assign05result2").innerHTML = `min element = ${assign5Two}`
    } else {
        document.getElementById("assign05result2").innerHTML = `min element = ${assign5Three}`
    }
}

//06
function result6() {
    var assign6Num1 = document.getElementById("assign6Num1").value;

    if(assign6Num1 % 2 == 0) {
        document.getElementById("assign06result1").innerHTML = "Even"
    } else {
        document.getElementById("assign06result1").innerHTML = "Odd"
    }
}

//07
function result7() {
    var assign7chr = document.getElementById("assign7ch1").value;

    if(assign7chr == "a" || assign7chr == "e" || assign7chr == "i" || assign7chr == "o" || assign7chr == "u") {
        document.getElementById("assign07result1").innerHTML = "Vowel"
    } else {
        document.getElementById("assign07result1").innerHTML = "Consonant"
    }
}

//08
function result8() {
    var betNum = document.getElementById("assign8Num").value;
    var hasa = ""

    for (var i = 1; i <= betNum; i++) {
        hasa = hasa + `<span>${i},</span>`
    }

    document.getElementById("assign08result").innerHTML = `${hasa}`
}

//09
function result9() {
    var assign09Num = document.getElementById("assign9Num").value;
    var hasa09 = ""

    assign09Num = Number(assign09Num)

    for (var i = assign09Num; i <= assign09Num * 12; i += assign09Num) {
        hasa09 = hasa09 + `<span>${i}  </span>`
    }

    document.getElementById("assign09result").innerHTML = `${hasa09}`
}

//10
function result10() {
    var num10 = document.getElementById("assign10Num").value;
    var hasa10 = ""

    num10 = Number(num10)

    for (var i = 1; i <= num10; i++) {
        if(i % 2 == 0) {
            hasa10 = hasa10 + `<span>${i}  </span>`
        }
        document.getElementById("assign10result").innerHTML = `${hasa10}`
    }
}

//11
function result11() {
    var num11 = document.getElementById("assign11Num1").value;
    var num12 = document.getElementById("assign11Num2").value;

    num11 = Number(num11);
    num12 = Number(num12);

    document.getElementById("assign11result").innerHTML = num11 ** num12
}

//12
function result12(buttonOperation) {
    var sub01 = document.getElementById("sub01").value;
    var sub02 = document.getElementById("sub02").value;
    var sub03 = document.getElementById("sub03").value;
    var sub04 = document.getElementById("sub04").value;
    var sub05 = document.getElementById("sub05").value;

    sub01 = Number(sub01);
    sub02 = Number(sub02);
    sub03 = Number(sub03);
    sub04 = Number(sub04);
    sub05 = Number(sub05);

    if(buttonOperation == 'total') {
        document.getElementById("assign12result").innerHTML = sub01 + sub02 + sub03 + sub04 + sub05
    } else if (buttonOperation == 'avg') {
        document.getElementById("assign12result").innerHTML = (sub01 + sub02 + sub03 + sub04 + sub05) / 5
    } else {
        document.getElementById("assign12result").innerHTML = `${((sub01 + sub02 + sub03 + sub04 + sub05) / 500) * 100}%`
    }
}

//13
function result12() {
    var month = document.getElementById("assign13Num1").value;

    month = Number(month);

    if(month == '1' || month == '3' || month == '5' || month == '7' || month == '8' || month == '10' || month == '12') {
        document.getElementById("assign13result").innerHTML = `Days in Month: ${31}`
    } else if (month == '2') {
        document.getElementById("assign13result").innerHTML = `Days in Month: ${28}`
    } else {
        document.getElementById("assign13result").innerHTML = `Days in Month: ${30}`
    }
}

//14
function result14() {
    var aSub01 = document.getElementById("assign14sub01").value;
    var aSub02 = document.getElementById("assign14sub02").value;
    var aSub03 = document.getElementById("assign14sub03").value;
    var aSub04 = document.getElementById("assign14sub04").value;
    var aSub05 = document.getElementById("assign14sub05").value;

    aSub01 = Number(aSub01);
    aSub02 = Number(aSub02);
    aSub03 = Number(aSub03);
    aSub04 = Number(aSub04);
    aSub05 = Number(aSub05);

    if((((aSub01 + aSub02 + aSub03 + aSub04 + aSub05) / 500) * 100) >= 90) {
        document.getElementById("assign14result").innerHTML = "Grade A"
} else if((((aSub01 + aSub02 + aSub03 + aSub04 + aSub05) / 500) * 100) >= 80) {
    document.getElementById("assign14result").innerHTML = "Grade B"
} else if((((aSub01 + aSub02 + aSub03 + aSub04 + aSub05) / 500) * 100) >= 70) {
    document.getElementById("assign14result").innerHTML = "Grade C"
} else if((((aSub01 + aSub02 + aSub03 + aSub04 + aSub05) / 500) * 100) >= 60) {
    document.getElementById("assign14result").innerHTML = "Grade D"
} else if((((aSub01 + aSub02 + aSub03 + aSub04 + aSub05) / 500) * 100) >= 40) {
    document.getElementById("assign14result").innerHTML = "Grade E"
} else {
    document.getElementById("assign14result").innerHTML = "Grade F"
} }

//15
function result15() {
    var monthSwitch = document.getElementById("assign15month").value;

    monthSwitch = Number(monthSwitch);

    switch(monthSwitch) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("assign15result").innerHTML = `Days in Month: ${31}`;
            break;
        
        case 2:
            document.getElementById("assign15result").innerHTML = `Days in Month: ${28}`;
            break;
        
        default:
            document.getElementById("assign15result").innerHTML = `Days in Month: ${30}`;
        
    }
}

//16
function result16() {
    var char = document.getElementById("assign16ch1").value;

    switch(char) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            document.getElementById("assign16result1").innerHTML = "Vowel";
            break;
        default:
            document.getElementById("assign16result1").innerHTML = "Consonant";
    }
}

//17
function result17() {
    var numMax = document.getElementById("assign17Num1").value;
    var numMin = document.getElementById("assign17Num2").value;

    switch(numMax > numMin) {
        case true:
            document.getElementById("assign17result").innerHTML = numMax;
            break;
        case false:
            document.getElementById("assign17result").innerHTML = numMin;
    }
}

//18
function result18() {
    var evenOr = document.getElementById("assign18Num1").value;

    switch(evenOr % 2 == 0) {
        case true:
            document.getElementById("assign18result").innerHTML = "Even"
            break;
        case false:
            document.getElementById("assign18result").innerHTML = "Odd"
    }
}

//19
function result19() {
    var assign19 = document.getElementById("assign19Num").value;

    assign19 = Number(assign19)

    switch(assign19 > 0) {
        case true:
            document.getElementById("result19").innerHTML = "Positive";
            break;
        case false:
            document.getElementById("result19").innerHTML = "Negative";
            break;
    }
}

//20
function result20(simpleCalc){
    var numOneCalc = document.getElementById("assign20Num1").value;
    var numTwoCalc = document.getElementById("assign20Num2").value;

    numOneCalc = Number(numOneCalc);
    numTwoCalc = Number(numTwoCalc);

    if(simpleCalc == 'sum') {
        document.getElementById("result20").innerHTML = numOneCalc + numTwoCalc
    } else if (simpleCalc == 'multi') {
        document.getElementById("result20").innerHTML = numOneCalc * numTwoCalc
    } else if (simpleCalc == 'divide') {
        document.getElementById("result20").innerHTML = numOneCalc / numTwoCalc
    }
    else if (simpleCalc == 'minus') {
        document.getElementById("result20").innerHTML = numOneCalc - numTwoCalc
    }
}