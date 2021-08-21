const form = document.getElementById("allForm");//seleccionar el formulario
 
            form.addEventListener("submit",function(event){
                    event.preventDefault();/*lo que hace es cancelar el el vento, es decir cnacela el comportamineto por defecto del navegador. el comporamineto que tena al enciar el formulario era recargar la pgina con la linea de codigo "event.preventDefault();" lo cancelamos*/
                    let transactionFormData = new FormData(form);
                    let transactionObj = convertFormDataToTransactionObj(transactionFormData)
                    saveTransactionOje(transactionObj)
                    camposObligatorios()
                    form.reset();
                    /*alert("Se ha enviado tu infomación satisfactoriamente, agradecemos que estes interesado en trabajar con nosotros, estaremos en contacto con usted.")*/
                }
            )
            function  generarNuevoIdentificador(){
                let lastTransactionId = localStorage.getItem("lastTransactionId") || "-1";
                let newTransactionId = JSON.parse(lastTransactionId) + 1;
                localStorage.setItem("lastTransactionId", JSON.stringify(newTransactionId))
            }
            var nombre = document.getElementById('nombre');
            var cedula = document.getElementById('cedula');
            var correo = document.getElementById('correo');
            var fecha_nacimiento = document.getElementById('fecha_nacimiento');
            var seleccion = document.getElementById('seleccion');
            var addhojavida = document.getElementById('addhojavida');
            var error = document.getElementById('error');
            /*
            function camposObligatorios(){
                var MensajeError = [];
                if(nombre.valuee == null || nombre.value == null){
                    MensajeError.push('ingresa tu nombre');
                }
                if(cedula.valuee == null || cedula.value == null){
                    MensajeError.push('ingresa tu cedula');
                }
                error.innerHTML = MensajeError.join(', ');
                return false;
            }
            */
            function convertFormDataToTransactionObj(transactionFormData){
                let nombre = transactionFormData.get("nombre")
                let cedula = transactionFormData.get("cedula")
                let correo = transactionFormData.get("correo")
                let fecha_nacimiento = transactionFormData.get("fecha_nacimiento")
                let seleccion = transactionFormData.get("seleccion")
                let addhojavida = transactionFormData.get("addhojavida")
                let Identificador = generarNuevoIdentificador()
                return {
                    "nombre" : nombre, 
                    "cedula" : cedula,
                    "correo" : correo, 
                    "fecha_nacimiento" : fecha_nacimiento,
                    "seleccion" : seleccion,
                    "addhojavida" : addhojavida,
                    "Identificador" : Identificador
                }
            }
            /*
            function insertRowInTransactionTable(transactionObj){
                let transactionTableRef = document.getElementById("transationTable");//seleccionar nuestra tabla
                let newTransactionRowRef = transactionTableRef.insertRow(-1);//agregar una fila en lo ultimo de nuestra tabla
    
                let newTypeCellRef = newTransactionRowRef.insertCell(0);
                newTypeCellRef.textContent = transactionObj["nombre"];
    
                newTypeCellRef = newTransactionRowRef.insertCell(1);
                newTypeCellRef.textContent = transactionObj["apellido"];
    
                newTypeCellRef = newTransactionRowRef.insertCell(2);
                newTypeCellRef.textContent = transactionObj["edad"];
    
                newTypeCellRef = newTransactionRowRef.insertCell(3);
                newTypeCellRef.textContent = transactionObj["cedula"];

                newTypeCellRef = newTransactionRowRef.insertCell(4);
                newTypeCellRef.textContent = transactionObj["tipoSangre"];

                newTypeCellRef = newTransactionRowRef.insertCell(5);
                newTypeCellRef.textContent = transactionObj["otraEnfermedad"];

                newTypeCellRef = newTransactionRowRef.insertCell(6);
                newTypeCellRef.textContent = transactionObj["direccionResidencia"];

                newTypeCellRef = newTransactionRowRef.insertCell(7);
                newTypeCellRef.textContent = transactionObj["eps"];

                let newDeleteCell = newTransactionRowRef.insertCell(8);
                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Eliminar"
                newDeleteCell.appendChild(deleteButton)

                deleteButton.addEventListener("click", (event) =>{
                    event.target.parentNode.parentNode.remove()
                })
                
                let newEditCell = newTransactionRowRef.insertCell(9);
                let editButton = document.createElement("button");
                editButton.textContent = "Editar"
                newEditCell.appendChild(editButton)
                
                //editButton.addEventListener("click", (event) =>{  
                    //event.target.parentNode.parentNode.edit()
                //})
                
            }
            */
            //guardar datos en el localStorage
            function saveTransactionOje(transactionObj){
                let myTransactionArray = JSON.parse(localStorage.getItem("transactionData"))
                || [];
                myTransactionArray.push(transactionObj)
                //Convierto mi array de transacciones a Json
                let transactionArrayJSON = JSON.stringify(myTransactionArray);//convierto mi objeto en un json
                //Guardo mi array de transaciones en formato JSOn en el localstorage
                localStorage.setItem("transactionData", transactionArrayJSON)
            }
            //limpiar el localstorage
            //localStorage.clear()
