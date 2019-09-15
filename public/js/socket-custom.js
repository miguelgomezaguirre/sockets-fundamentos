var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor')
})

socket.on('disconnect', function() {
    console.log('perdimos la conexión con el servidor')
})

socket.emit('enviarMensaje', {
    usuario: 'Miguel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
})

socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
})