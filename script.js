'use strict';

function add_to_table()
{
    let name = document.getElementById('name').value;
    let family = document.getElementById('family').value;
    let age = document.getElementById('agex').value;
    const TABLE = document.getElementById('table');
    const new_name = document.createElement('td');
    const new_family = document.createElement('td');
    const new_age = document.createElement('td');
    new_age.classList.add('age');
    const new_row = document.createElement('tr');
    new_name.innerHTML = name;
    new_family.innerHTML = family;
    new_age.innerHTML = age;
    new_row.appendChild(new_name);
    new_row.appendChild(new_family);
    new_row.appendChild(new_age);
    TABLE.appendChild(new_row);
}

const BTN = document.getElementById('button')
BTN.addEventListener('click', add_to_table);

