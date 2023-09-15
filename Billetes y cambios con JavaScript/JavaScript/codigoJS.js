//Configuración con evento del botón para realizar el retiro

document.getElementById('retirarDinero').addEventListener('click', function () 
{
    //Se declara la constante para el nombre del cliente
    const nombreCliente = document.getElementById('nombreCliente').value;

    //Se declara la constante para la cantidad de dinero
    const cantidadDinero = parseInt(document.getElementById('cantidadDinero').value);

    //Mensaje cuando se realice el retiro
    document.getElementById("mensajeDetalle").textContent = `Bienvenid@ ${nombreCliente}, tu retiro se realizó de la siguiente manera:`

    //Alerta para el caso de que el número ingresado sea decimal
    if (cantidadDinero % 1 == 0) {
        alert('El retiro a realizar no puede efectuarse en cantidades decimales');
        return; 
    }

    //Calculos para contar cada billete 
    const cantidadBilletes100 = Math.floor(cantidadRetiro / 100);
    const cantidadBilletes50 = Math.floor((cantidadRetiro % 100) / 50);
    const cantidadBilletes20 = Math.floor(((cantidadRetiro % 100) % 50) / 20);
    const cantidadBilletes10 = Math.floor((((cantidadRetiro % 100) % 50) % 20) / 10);
    const cantidadBilletes5 = Math.floor(((((cantidadRetiro % 100) % 50) % 20) % 10) / 5);
    const cantidadBilletes1 = (((cantidadRetiro % 100) % 50) % 20) % 10 % 5;

    //Escribir la cantidad de billetes que se mostrarán:
    document.getElementById('cantidadBilletes100').textContent = cantidadBilletes100;
    document.getElementById('cantidadBilletes50').textContent = cantidadBilletes50;
    document.getElementById('cantidadBilletes20').textContent = cantidadBilletes20;
    document.getElementById('cantidadBilletes10').textContent = cantidadBilletes10;
    document.getElementById('cantidadBilletes5').textContent = cantidadBilletes5;
    document.getElementById('cantidadBilletes1').textContent = cantidadBilletes1;



});
