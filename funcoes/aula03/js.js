let nome = document.getElementById('nome')
let serie = document.getElementById('serie')
let materia = document.getElementById('materia')
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let media = document.getElementById('b4')
let tbody = document.getElementById('relatorio')

function calcularMedia(){
    event.preventDefault()
    media.value = (parseFloat(b1.value) + parseFloat(b2.value) + parseFloat(b3.value) + parseFloat(b4.value) )/4
    tbody.innerHTML = `<tr>
    <td>${nome.value}
    <td>${serie.value}
    <td>${materia.value}
    <td>${b1.value}
    <td>${b2.value}
    <td>${b3.value}
    <td>${b4.value}
    <td>${media.value}`
}