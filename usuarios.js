console.log("hola desde consola");

function guardarNombre(){
    if(nombre.value){
      /*   seleccionar el nodo donde se inserta el nombre del usuario */
      let nombre = document.querySelector('#nombre').value;
      console.log(nombre);

      let item = document.createElement('li'); /* crear elemento html o insertar */
      item.append(nombre) /* insertar al texto al li creado */
      let lista = document.querySelector('#lista'); /* seleccionar el nodo donde se inserta el creado */
      lista.classList.add('listaUser');
      lista.append(item);

      /* crear boton eliminar */
      let btnEliminar = document.createElement('button');
      btnEliminar.classList.add('Eliminarbtn');
      btnEliminar.textContent= "Eliminar";
      item.append(btnEliminar);

      btnEliminar.addEventListener('click', eliminarUser);
    }else{
        alert('El campo de nombre esta vacio');
    }
}

function eliminarUser(e){
    let eliminar = e.target.parentNode;
    eliminar.remove();
}


























