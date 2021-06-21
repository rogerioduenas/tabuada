function gerartabuada() {
    let n = document.getElementById("numero");
    let seltabuada = document.getElementById("seltabuada");
    if (n.value.length == 0) {
        alert ("por favor digite um número!");
    } else {
        let numero = Number(n.value);
        let c = 1;
        seltabuada.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement("option");
            item.text = `${numero} x ${c} = ${numero*c}`;
            seltabuada.appendChild(item);
            c++
        }
    }
}
