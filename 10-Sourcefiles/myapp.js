function findNumber(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (k == arr[i]) {
            return "YES";
        }
    }
    return "NO";
}

function oddNumbers(l, r) {
    let arr = [];
    while (r >= l) {
        if (l % 2) {
            arr.push(l);
        }
        l++;
    }
    return arr;
}

function fibonacciSequence(input) {
    //Type your code here.
    var a = 1, b = 0, temp;
    var string = [0];
    while (input > 0) {
        temp = a;
        a = a + b;
        b = temp;
        string.push(b);
        input--;
    }
    return string;
}

function myFunction() {
    // Type your code here.
    let nameM = document.getElementById("myname").value;
    let phone = document.getElementById("myphone").value;
    let country = document.getElementById("mycontry").value;
    let email = document.getElementById("mymail").value;
    alert(nameM+","+phone+","+country+","+email);
  }

function runList(){
    //Type your code here.
    var length = document.getElementById("list").options.length;
    var lista = document.getElementById("list");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("txtbox").value;
    option.value = parseInt(length)+1;
    lista.options.add(option);
}
  
function main(){
    //var arr = [1,2,3,4,5];
    //var k = 1;
    var l = 2;
    var r = 5;
    const res = fibonacciSequence(5);
    console.log(res);
}