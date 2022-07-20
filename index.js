
// getting the users name and email form json API
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.onload = function () {
    var _data = JSON.parse(xhr.responseText)
    
    var userData = '';
    for (users of _data) {
        userData += `<tr>
        <td> ${users.name} </td>
        <td> ${users.email} </td>
        <td> <button class="btn1" onclick="onDeleterow(event)"> Delete User </button> </td>
        </tr>`;
    }
    document.getElementById('tableData').innerHTML = userData;
}
xhr.send();
   
// for delting the row element
function onDeleterow(ev) {
    const btn2 = ev.target;
    btn2.closest('tr').remove();             // closest() method searches up the DOM tree for elements
};