// here we will add the event listener to the HTML objects where eventlistener specifies what function should be called when a particular event happens so to add eventListener we use a method called addEventListner which takes two parameters one is the event and the other is the function to be called when that event happens
/*document.querySelector("button").addEventListener("click",handleClick);//here the function is not beig called it is being passed as an argument
function handleClick(){
    alert("i got clicked")
}*/
// now there is another way of doing this which is passing an anonymanous function anonymaous function are those function that doesn't have any name 
/*var i=0;
while(i<7){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    alert("i got clicked")
});
i++;
}*/
// Higher order functions are those functions that can take the functions as inputs and we can use higher order functions to do more advance things in javascript
// example of using higher order functions
function calculator(num1, num2, operator){
    return operator(num1,num2);
}
function add(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
calculator(5,6,multiply);
// we can use the debugger; in console and then give the function name that we want to debug and the developer tools will show the step nu step working of the code that is how the browser is executing the code
// now rather than giving an alert whenever the click event happens we will give a sound whenever the click event happens
/*var i=0;
while(i<7){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){// this line applies the eventListener to all the objects with class drum
    // this.style.color="white";// we can use this keyword to access and modify the properities of that object that is currently referred
    var audio=new Audio("sounds/tom-1.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
    audio.play();//calling the play function with the audio object
});
i++;
}*/
// we can create the new java script classes and objects in javascript a class is created with the help of a constructir function where the constructor function directly creates the class and then a new object is created by using the keyword new and then nameodfClass and then parameters to constructor function
// we can also create a seperate javascript object by just creating a variable and then describing the properities that is has
// example of javascript object, class and constructor function
// in javascript the naming convention for class and thus the constructor function is bit different here the first letter of every word is capitaklized and rest all words are kept small
function HouseKeeper(name,age,preferredWork,experience){
    this.name=name;
    this.age=age;
    this.preferredWork=preferredWork;
    this.experience=experience;
    this.clean=function(){// this is how we can incorporate the cleaning function inside the class and the constructor function
        alert("cleaning in progress");
    }
} 
var houseKepper1=new HouseKeeper("meena",19,["bathroom","bedroom","loby"],2);
// we can access the individual property of javascript objects by using the dot notation
/*console.log(houseKepper1.name); 
houseKepper1.clean();*/
// javascript switch statement we will use javascript switch statemnt to execute different sund depending on which key was pressed
var i=0;
while(i<7){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){// this line applies the eventListener to all the objects with class drum
        // this.style.color="white";// we can use this keyword to access and modify the properities of that object that is currently referred    
    switch (this.innerHTML) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
    }
    buttonAnimation(this.innerHTML);
});
i++;
}
// now we will be using keyboard event listeners and detecting keypresses and will be initiating some function when the event of keypressing is done
document.addEventListener("keydown",function(event){// we are adding the keydown(event of pressing keyboard keys) event to the entire document
    // we can also pass the patrameter event which allows us to know the daetils of the event that triggers the event Listener **////////////////////////////////////////////////////////////////////////////////////////
    switch (event.key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");//create an object of the Audio Class and pass the source of the audio file to the constructor
            audio.play();//calling the play function with the audio object            
            break;
    }
    buttonAnimation(event.key);
});
//now as we have studied about the javascript higher order function which can take the other functions as inputs and the input function are called as callback function because they wait for some event to happen and then correspons to the event they are called 
//callback function is not called by us it is called by the object when it experiences the event
// in short the object detect the event and as soon as the event happens it stires many information about the event and then calls the callback function based on the event that happened
function buttonAnimation(currentKey){
    var activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){activeKey.classList.remove("pressed")},100);
}