const form = document.getElementById("form1");
form.addEventListener("submit",function(event){
    event.preventDefault();/*Cancela que la pagina se recarge, se recarga por defecto y esto lo evita*/
    let transactionFormData = new FormData(form);/*obtinr los datos del formulario*/
    let transactionObj = covertFormDataToTransactionObj(transactionFormData) 
    saveTransactionObj(transactionObj)/*agrega al local estoral*/
    insertRowInTransactionTable(transactionObj)/*agregar a la tabla*/
    form.reset()
    
})
var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
      , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
      , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(table, name) {
      if (!table.nodeType) table = document.getElementById(table)
      var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
      window.location.href = uri + base64(format(template, ctx))
    }
})()
function covertFormDataToTransactionObj(transactionFormData){
  let nombre = transactionFormData.get("nombre") 
  let Apellido = transactionFormData.get("Apellido")
  let Correo = transactionFormData.get("Correo")
  let Telefono = transactionFormData.get("Telefono")
  let Mensaje = transactionFormData.get("Mensaje") 
  return{
    "nombre":nombre,
    "Apellido":Apellido,
    "Correo":Correo,
    "Telefono":Telefono,
    "Mensaje":Mensaje
  }
}




/* Se pasa el transactionObj para que aceda a los inten y a;ada*/ 
function insertRowInTransactionTable(transactionObj){

  let transactionTableRef = document.getElementById("infcontacto");/*hace una referencia a la tabla obtiene la tabla*/

  let newTransactionRowRef = transactionTableRef.insertRow(-1);/* agrega una nueva fila el (-1) para agregarlo al ultimo*/

  let newTypeCellRef = newTransactionRowRef.insertCell(0);/*la agrega una nueva celda en los parentecis va la posicion de la celda va de (0 a n-1)*/
  newTypeCellRef.textContent = transactionObj["nombre"];/*incerta en cada posicion*/

  newTypeCellRef = newTransactionRowRef.insertCell(1);
  newTypeCellRef.textContent = transactionObj["Apellido"];

  newTypeCellRef = newTransactionRowRef.insertCell(2);
  newTypeCellRef.textContent = transactionObj["Correo"];

  newTypeCellRef = newTransactionRowRef.insertCell(3);
  newTypeCellRef.textContent = transactionObj["Telefono"];

  newTypeCellRef = newTransactionRowRef.insertCell(4);
  newTypeCellRef.textContent = transactionObj["Mensaje"];

}
//guardarlo en el localstoral
function saveTransactionObj(transactionObj){
  //se crea un arreglo vacio
  let miarreglo = JSON.parse(localStorage.getItem("transactionData"))
  || [];
  miarreglo.push(transactionObj)
  //Para convertir el arreglo lo convierto en un JSON
  let transactionArrayJSON = JSON.stringify(miarreglo);
  //guardo el array en formato JSON en el
  localStorage.setItem("transactionData",transactionArrayJSON);
}



 