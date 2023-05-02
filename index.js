function addOrder() {
    var dish = document.getElementById("dish").value;
    var price = document.getElementById("price").value;
    var table = document.getElementById("table").value;

    var order = {
        dish: dish,
        price: price,
        table: table
    };

    axios.post("https://crudcrud.com/api/44914cacb4434a49814d52f6a9cae94b/orders", order)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    var table = document.getElementById("ordersTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = dish;
    cell2.innerHTML = price;
    cell3.innerHTML = table;
    cell4.innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)'>";

    document.getElementById("dish").value = "";
    document.getElementById("price").value = "";
    document.getElementById("table").value = "";
}
function deleteRow(button) {
        var row = button.parentNode.parentNode;
            
        row.parentNode.removeChild(row);
    }