//va la cnx y las peticiones a la bd
const listaProductos = () => {
    return fetch("http://localhost:3000/producto", {
        method: "GET",
        headers: {
            "Content-type": "application-json"
        }
    } ).then(res=>res.json())
}

const crearProducto = (url, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({url, categoria, nombre, precio, descripcion, id: uuid.v4()})
    })
}

export const productoServices = {
    listaProductos,
    crearProducto,
}

//ahora puedo continuar con listar o mostrar los elementos