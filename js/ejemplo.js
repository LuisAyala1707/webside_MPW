const form = document.forms['users'];


form.onsubmit = (event) =>{
    event.prevenDefaul();
    console.log(formDataJSON())
}

function formDataJSON(){
    const user = {};
    Array.form(form.element).forEach(element =>{
        if(element.name) user[element.name] = element.value
    
    })
    return user;
}

