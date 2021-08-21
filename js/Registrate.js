const form = document.getElementById("allForm");//seleccionar el formulario
            form.addEventListener("submit",function(event){
                    event.preventDefault();/*lo que hace es cancelar el el vento, es decir cnacela el comportamineto por defecto del navegador. el comporamineto que tena al enciar el formulario era recargar la pgina con la linea de codigo "event.preventDefault();" lo cancelamos*/
                    let transactionFormData = new FormData(form);
                    let transactionObj = convertFormDataToTransactionObj(transactionFormData)
                    saveTransactionOje(transactionObj)
                    form.reset();
                    alert("Los datos se han guardado exitosamente")
                }
            )
            function convertFormDataToTransactionObj(transactionFormData){
                let nombre = transactionFormData.get("nombre")
                let apellido = transactionFormData.get("apellido")
                let correo = transactionFormData.get("correo")
                let contraseña = transactionFormData.get("contraseña")
                return {
                    "nombre" : nombre, 
                    "apellido" : apellido,
                    "correo" : correo, 
                    "contraseña" : contraseña
                }
            }
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