import { productoServices } from "../service/producto_service.js";

const crearNuevaCard = (url, categoria, nombre, precio, descripcion, id) => {
    const catego = document.querySelector('.catergoria')
    const card = document.querySelector('.container')
    catego.textContent = categoria
    const contenido = `<div class="card">
                            <div class="card_head">
                                <span>@</span>
                                <span>#</span>
                            </div>
                            <div class="image">
                                <img src="${url}" alt="Imágen del producto" />
                            </div>
                            <div class="content">
                                <h3>${nombre}</h3>
                                <p>$${precio}</p>
                                <p>#${id}</p>
                                <p>#${descripcion}</p>

                                <a href="/assets/html/producto.html">Ver producto</a>
                            </div>
                        </div>`

    card.innerHTML = contenido
}

const container = document.querySelector('.container')

productoServices
.listaProductos()
.then(data=>{
    data.forEach(({url, categoria , nombre, precio, descripcion, id }) => {
        const nuevaCard = crearNuevaCard(url, categoria, nombre, precio, descripcion, id)
        container.appendChild(nuevaCard)
    });
}).catch(error=>alert('Ocurrio un erorr', error))