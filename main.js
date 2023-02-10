const inpName = document.getElementById('inpName');
const inpTel = document.getElementById('inpTel');
const btnAdd = document.getElementById('btnAddCtt');
const form = document.getElementById('formCtt');
let cttNum = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    AddContact();
    CalcContacts();

    ClearFields();
})

function ClearFields(){
    inpName.value = '';
    inpTel.value ='';
}

function AddContact(){
    let line = '<tr>';
    line += `<td>${inpName.value}</td>`;
    line += `<td>${inpTel.value}</td<`;
    line += '</tr>';

    const tbody = document.querySelector('tbody');
    tbody.innerHTML += line;
}

function CalcContacts(){
    cttNum.push(inpName.value);

    const tfoot = document.querySelector('tfoot');
    tfoot.innerHTML = `<tr><td>Você tem ${cttNum.length} contatos</td><td></td></tr>`;
}