function delete_body__index()
{
  while (document.body.firstChild) 
  {
    document.body.removeChild(document.body.firstChild);
  }
}

function SW_H1()
{
    delete_body__index();
    
    const H1_1__Funciones = document.createElement('title');  document.head.appendChild(H1_1__Funciones);  H1_1__Funciones.id = "title_1__Funciones";  H1_1__Funciones.textContent = "Funciones JavaScript";
}