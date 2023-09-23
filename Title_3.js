function delete_head__index()
{
  while (document.head.firstChild) 
  {
    document.head.removeChild(document.head.firstChild);
  }
}

function SW_Title()
{
    delete_head__index();

    const title_1__Funciones = document.createElement('title');  document.head.appendChild(title_1__Funciones);  title_1__Funciones.id = "title_1__Funciones";  title_1__Funciones.textContent = "Funciones JavaScript";
}