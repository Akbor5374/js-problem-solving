//assignment 3, 4 javscript problem solving.

//problem solving-1,convert feet to mile
function feetToMile(feet){
    if(feet == 0){
        return "Zero values ​​are not acceptable,Please enter N number";
    }
    else if(feet <= -1){
        return "Negative values ​​are not acceptable,Please enter positive number";
    }
    else{
        var mile = feet*0.000189394;
        mile = mile.toFixed(3);
        return mile;  
    }
}
var mileResult = feetToMile(5280);
console.log(mileResult);

//problem solving-2,wood calculation
function woodCalculator(chaire,table,bad){
    if(chaire <= -1){
        return "Negative values ​​are not acceptable,Please enter positive value";
    }
    else if(table <= -1){
        return "Negative values ​​are not acceptable,Please enter positive value";
    }
    else if(bad <= -1){
        return "Negative values ​​are not acceptable,Please enter positive value";
    }
    else{
        var needTotalWood = (chaire * 1) + (table * 3) + (bad * 5);
        return needTotalWood;
    }
}
var needTotalWoodResult = woodCalculator(11,13,10);
console.log(needTotalWoodResult);


//problem solving-3,brick Calculator
function brickCalculator(floor){
    if(floor == 0){
       return "Zero values ​​are not acceptable,Please enter N number";
    }
    else if(floor <= -1 ){
       return "Negative values ​​are not acceptable,Please enter positive values";
    }
    else if(floor <= 10){
        var floorFeet = floor*15;
        var needBrick = floorFeet*1000;
        return needBrick;
    }
    else if(floor <=20 ){
        var oneToTenFloorFeet = 10*15;
        var anotherFloor = floor - 10;
        var  elevenToTwentyFeet = anotherFloor * 12;
        var needBrickOneToTenFloor = oneToTenFloorFeet * 1000;
        var  needBrickElevenToTwentyFloor = elevenToTwentyFeet * 1000;
        var needBrick = needBrickOneToTenFloor + needBrickElevenToTwentyFloor;
        return needBrick;
    }
    else{
       var oneToTenFloorFeet = 10 * 15;
       var elevenToTwentyFeet = 10 * 12
       var anotherFloor = floor - 20;
       var TwentyUpFeet = anotherFloor * 10;
       var needBrickOneToTenFloor = oneToTenFloorFeet * 1000;
       var needBrickElevenToTwentyFloor = elevenToTwentyFeet * 1000;
       var needBrickTwentyUpFloor = TwentyUpFeet * 1000;
       var needBrick = needBrickOneToTenFloor + needBrickElevenToTwentyFloor + needBrickTwentyUpFloor;
       return needBrick;
    }
}
var floors = brrickCalculator(25);
console.log(floors);


//problem solving-4,find small name 
function tinyFriend(friends){
    var smallName = friends[0];
    var snallNameLength = smallName.length;
    for(var i = 0; i < friends.length; i++){
        var name = friends[i];
        var cheackLength = name.length;
        if(cheackLength < snallNameLength){
            smallName = name;
        }
    }
    
    return smallName;
}
var friends  = ["ForhadUddin","NahidUddin","Rifat","naim","MuradMahmud","Rock","Mim"];
var tinyFriendResult = tinyFriend(friends);
console.log(tinyFriendResult);