function gerartabuada() {
    let n = document.getElementById("numero");
    let seltabuada = document.getElementById("seltabuada");
    //se o numero estiver vazio alert
    if (n.value.length == 0) {
        alert ("por favor digite um número!");
    } else {
        //converte a entrada de cima em numero
        let numero = Number(n.value);
        //inicio do contador
        let c = 1;
        //zera o option, senao vai aparecendo uma tabuada em baixo
        // da outra conforme ir clicando e gerando uma nova
        seltabuada.innerHTML = ""
        while (c <= 10) {
            //cria uma tag option
            let item = document.createElement("option");
            //acrescenta dentro da tag option a operaçao matematica
            item.text = `${numero} x ${c} = ${numero*c}`;
            //faz com que a tabuada aparece/ autoriza
            seltabuada.appendChild(item);
            //incrementa 1 ao c, pois diferente do for,
            // o while nao tem incremento na formula inicial
            c++
        }
    }
}