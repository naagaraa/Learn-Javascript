let val = prompt("dipilih aja coy : 1/2/3");
val = parseInt(val);
console.log(typeof val );

switch (val) {
    case 1:
        result = "anda sangat berharap banyak";
        break;

    case 2 :
        result = "anda kurang beruntung"
        break;
    case 3 :
        result = "coba lagi";
        break;
}

document.getElementById("result").innerHTML = " jawabnnya adalah " + result;