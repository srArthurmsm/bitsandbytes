function bitok(){
    let bit = document.getElementById('bit').value;
    let kbit = document.getElementById('kbit').value;
    let reposta = document.getElementById('resposta1')
    if (bit == ""){
        let res = kbit*1024
        reposta.innerHTML = res + " bytes"

    } else {
        let res = bit/1024
        reposta.innerHTML = res + " kbps"
    }
    
}
function kbitom(){
    let kbit = document.getElementById('2kbit').value;
    let mbit = document.getElementById('mbit').value;
    let reposta = document.getElementById('resposta2')
    if (kbit == ""){
        let res = mbit*1024
        reposta.innerHTML = res + " kbps"

    } else {
        let res = kbit/1024
        reposta.innerHTML = res + " mbps"
    }
    
}
function mbitstog(){
    let mbit = document.getElementById('2mbit').value;
    let gbit = document.getElementById('gbit').value;
    let reposta = document.getElementById('resposta3')
    if (mbit == ""){
        let res = gbit*1024
        reposta.innerHTML = res + " mbps"

    } else {
        let res = mbit/1024
        reposta.innerHTML = res + " gbps"
    }
    
}
function gbitstot(){
    let gbit = document.getElementById('2gbit').value;
    let tbit = document.getElementById('tbit').value;
    let reposta = document.getElementById('resposta4')
    if (gbit == ""){
        let res = tbit*1024
        reposta.innerHTML = res + " gbps"

    } else {
        let res = gbit/1024
        reposta.innerHTML = res + " tbps"
    }
    
}