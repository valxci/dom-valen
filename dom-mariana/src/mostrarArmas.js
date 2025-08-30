export default function mostrarArmas(data) {
    const armas = data.data
    console.log(armas);
    const app = document.getElementById('app')
    console.log(app)


    let costo = 0
    const totalCompra = document.createElement('h2')
    totalCompra.id = 'costo-compra'
    totalCompra.innerText = "Total de la compra : $" + costo
    app.appendChild(totalCompra)





    //porque es una lista, recorrer todo de la lista
    armas.forEach(unArma => {

        const contenedorArma = document.createElement('div')
        contenedorArma.id = unArma.uuid
        // console.log(unArma) 
        const nombreDeArma = document.createElement('p');
        nombreDeArma.textContent = unArma.displayName //le pongo nombre al p


        const imagenArma = document.createElement('img')
        imagenArma.src = unArma.displayIcon

        const botonComprar = document.createElement('button')
        botonComprar.textContent = ('Comprar')


        contenedorArma.appendChild(imagenArma)
        contenedorArma.appendChild(nombreDeArma) //agrega cada p dentro de div llamado app
        contenedorArma.appendChild(botonComprar)
        app.appendChild(contenedorArma)


        botonComprar.addEventListener('click', () => {
            costo = costo + unArma.shopData.cost

            const totalCompra = document.getElementById('costo-compra')
            totalCompra.innerText = "Total de la compra : $" + costo
            botonComprar.innerText = 'comprado'
            botonComprar.disabled = true

            const armasGuardadas = localStorage.getItem('armasGuardadas') || '[]'//lo estoy obteniedo 
            const armasGuardasList = JSON.parse(armasGuardadas)

            armasGuardasList.push(unArma.uuid)
            localStorage.setItem('armasGuardadas', JSON.stringify(armasGuardasList))
        })




    });


}

