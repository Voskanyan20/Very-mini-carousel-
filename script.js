// var ph1 = document.getElementById("photo1")
// var ph2 = document.createElement("img")
// var ph3 = document.createElement("img")
// var ph4 = document.createElement("img")


var arr = ["banner2.jpg","main.jpg","mainbyke.jpg","bg-2.png"]
var x = 0
y = arr.length-1

function f(){
    photo1.setAttribute("src","image/"+arr[x]+"")
    x++
    if(x == arr.length){
        x = 0
    }
}
function g(){
    y--
    photo1.setAttribute("src","image/"+arr[y]+"")
    if(y == 0){
        y = arr.length
    }   
}

// var arr = [5,6,4,7,9]
// var x = arr.length-1
// function f(){
    
//     console.log(arr[x])
//     x -= 1
//     if(x == -1){
//         x = arr.length-1
//     }
// }



// var arr = [1,5,8,3]
// var x = 0
// function f(){
//     console.log(arr[x])
//     x++ 

//     if(x == arr.length){
//         x = 0   
//     }
    
// }