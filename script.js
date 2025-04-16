function showMessage()
{
   let x=5;
   let name="James";
   let age= 21;
   let restaurant= "Eat & Repeat";
   let message="Hey"+name+", your age is "+age+" You are surprised to be at delicious site of "+restaurant;
   alert(message);
  
}
function checkAge()
{
    let age=15;
    if(age>=18)
    {
        alert("Hey you can eat everything");
    }
    else{
        alert("Hey you are too young please order something sweet");
    }
}
function showMany()
{
    for(let i=1; i<=10;i=i+1)
    {
alert("Please order "+i+"time");
    }
}
function changeColor()
{
    document.getElementById("main").style.backgroundColor="brown";
}
function changetoExterior() {
    document.getElementById("Interior").src = "https://images.unsplash.com/photo-1732559797628-241a7d5832a2?q=80&w=2397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}

function changetoInterior() {
    document.getElementById("Interior").src = "https://images.unsplash.com/photo-1626190738154-df7c8698a6d8?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}
window.onload = function () {
    document.getElementById('message').onmouseover = function () {
        document.getElementById('message').style.background = 'blue';
    }

    document.getElementById('message').onmouseleave = function () {
        document.getElementById('message').style.background = 'beige';
    }
}
let count = 0;
function buttonCounter() {
    count++;
    document.getElementById('counter').innerText = 'You clicked ' + count + ' times';
}
