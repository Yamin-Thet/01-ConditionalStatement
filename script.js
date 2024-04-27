// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 25;
var expression2 = x > 50;

// TODO: Write Your JavaScript Code Here

console.log (x < 25);
console.log (x > 50);

if (expression1 && expression2){
    console.log("T T");
}

else if (expression1){
    console.log("F T");
}

else if (expression2){
    console.log("T F");
}

else{
    console.log("F F");
}

// Switch
var month = "May";
switch(month){
    case "May":
        console.log("Lucky month is May");
        break;
        case "Aprial":
            console.log("Lucky month is Aprial");
            break;
            case "June":
                console.log("Lucky month is June");
                break;
                default:
                    console.log("Happy New Year");
                    break;
}

console.log("Pick one of the following colors: black, red, or yellow");
var color = console.log();

switch (color){
    case "black":
         console.log("You picked black");
         break;
         case "yellow":
         console.log("You picked yellow");
         break;
         case "red":
         console.log("You picked red");
         break;
         default:
            console.log("You did not pick from the colors provided.");
            break;    
}

//This is regular way

var x = prompt("Choose any number");
switch (true){
    case x == 45:
        console.log("True✅ True✅");
        break;

    case x < 45:
        console.log("True✅ False❎");
        break;

    case x > 45:
        console.log("False❎ True✅");
        break;

    default:
        console.log("False❎ False❎");  
}

// This is the shortest way:

var mark = prompt ("Enter your mark");
switch (true){
    case mark >= 40:
    console.log("You Pass");
    break;
    case mark >= 80:
    console.log("You Got A+");
    break;
    default:
    console.log("You Fill");
    break;        
}

