const inpName = document.getElementById('inpName');
const inpTel = document.getElementById('inpTel');
const btnAdd = document.getElementById('btnAddCtt');
const form = document.getElementById('formCtt');
const errorMessage = document.querySelector('#errorMessage');
let cttNum = [];
let cttTel = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    AddContact();
    CalcContacts();

    ClearFields();
})

inpTel.addEventListener('change', function(e){
    CheckDuplicates();
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
    cttTel.push(inpTel.value);

    const tfoot = document.querySelector('tfoot');
    tfoot.innerHTML = `<tr><td>Você tem ${cttNum.length} contatos</td><td></td></tr>`;
}

function CheckDuplicates(){
    if(cttTel.includes(inpTel.value)){
        btnAdd.disabled = true;
        errorMessage.style.display = 'block';
    }else {
        btnAdd.disabled = false;
        errorMessage.style.display = 'none';
    }
}