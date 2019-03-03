function update(value) {
    //Type the code here.
    document.getElementById("screen").value += value;
}

function result() {
    //Type the code here.
    let expr = document.getElementById("screen").value;
    let res = eval(expr);
    document.getElementById("screen").value = res;
}

function form_reset() {
    //Type the code here.
    document.getElementById("screen").value = "";
}
