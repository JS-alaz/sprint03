//recibimos los datos de entrada y los enviamos usando la fn crearProducto de service
import { productoServices } from "../service/producto_service.js";
const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    const url = document.querySelector('[data-url]').value
    const categoria = document.querySelector('[data-categoria]').value
    const nombre = document.querySelector('[data-nombre]').value
    const precio = document.querySelector('[data-precio]').value
    const descripcion = document.querySelector('[data-descripcion]').value

    productoServices
    .crearProducto(url, categoria, nombre, precio, descripcion)
    .then(()=>{
        window.location.href = '/assets/html/registro_completado.html'
    }).catch(err=>console.log(err))
})