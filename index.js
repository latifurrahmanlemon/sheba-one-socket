const express = require('express');

const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {origin: "*"}
});

io.on('connection', (socket) => {
    console.log("Connection test");

    socket.on('sendChatToServer', (message)=>{
        console.log(message, 'sendChatToServer');

        io.sockets.emit('sendChatToPharmacy', message);
        //socket.broadcast.emit('sendChatToClient', message);
    });

    socket.on('sendChatToServer2', (message)=>{
        console.log(message, 'sendChatToServer2');

        io.sockets.emit('sendChatToClient', message);
        //socket.broadcast.emit('sendChatToClient', message);
    });

    socket.on('sendChatToServer3', (message)=>{
        console.log(message, 'sendChatToServer3');
        io.sockets.emit('sendConfirmationToPharmacy', message);
    });

    socket.on('sendAlertToDeliveryMan', (message)=>{
        console.log(message, 'sendAlertToDeliveryMan');
        io.sockets.emit('getAlertToDeliveryMan', message);
    });

    // Send order details to delivery man
    socket.on('sendDeliveryManAlert', (message)=>{
        console.log(message, 'sendDeliveryManAlert');
        io.sockets.emit('getDeliveryManAlert', message);
    });

    socket.on('sendChatToServer4', (message)=>{
        console.log(message, 'sendChatToServer4');
        io.sockets.emit('seeMorePharmacy', message);
    });

    // Start single healthcare product
    socket.on('sendChatToServerHealthcare', (message)=>{
        console.log(message, 'sendChatToServerHealthcare');
        io.sockets.emit('sendChatToPharmacyHealthcare', message);
    });

    socket.on('sendChatToServer2Healthcare', (message)=>{
        console.log(message, 'sendChatToServer2Healthcare');
        io.sockets.emit('sendChatToClientHealthcare', message);
    });

    socket.on('sendChatToServerMedicine', (message)=>{
        console.log(message, 'sendChatToServerMedicine');
        io.sockets.emit('sendChatToPharmacyMedicine', message);
    });

    socket.on('sendChatToServer2Medicine', (message)=>{
        console.log(message, 'sendChatToServer2Medicine');
        io.sockets.emit('sendChatToClientMedicine', message);
    });

    socket.on('partialResponseToServer', (message)=>{
        console.log(message, 'partialResponseToServer');
        io.sockets.emit('partialResponseToPharmacy', message);
    });

    socket.on('disconnect', (socket)=> {
        console.log("Disconnect");
    });

    socket.on('deliveryManLocationSend', (message)=>{
        console.log(message, 'deliveryManLocationSend');
        io.sockets.emit('userGetDeliveryManLocation', message);
    });

    // Patient Rider Events

    socket.on('patientRiderRideAccept', (message)=>{
        console.log(message, 'patientRiderRideAccept');
        io.sockets.emit('patientUserGetRideNotification', message);
    });

    socket.on('patientRiderRideDecline', (message)=>{
        console.log(message, 'patientRiderRideDecline');
        io.sockets.emit('patientUserRideDeclineGet', message);
    });

    socket.on('patientRiderRideStart', (message)=>{
        console.log(message, 'patientRiderRideStart');
        io.sockets.emit('patientUserRideStartGet', message);
    });

    socket.on('patientRiderRideEnd', (message)=>{
        console.log(message, 'patientRiderRideEnd');
        io.sockets.emit('patientUserRideEndGet', message);
    });

    // Patient User Events

    socket.on('patientUserRideRequestSend', (message)=>{
        console.log(message, 'patientUserRideRequestSend');
        io.sockets.emit('patientRiderRideRequestGet', message);
    });

    socket.on('patientUserRideCancel', (message)=>{
        console.log(message, 'patientUserRideCancel');
        io.sockets.emit('patientRiderRideCancelGet', message);
    });

    socket.on('patientUserRideDestinationChange', (message)=>{
        console.log(message, 'patientUserRideDestinationChange');
        io.sockets.emit('patientRiderRideDestinationChangeGet', message);
    });

    socket.on('patientUserRideOnlinePayment', (message)=>{
        console.log(message, 'patientUserRideOnlinePayment');
        io.sockets.emit('patientRiderRideOnlinePaymentGet', message);
    });

});

server.listen(5000, ()=> {
    console.log(`Server is running on 5000 port. URL: http://localhost:5000`);
});