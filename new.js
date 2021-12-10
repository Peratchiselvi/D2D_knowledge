

const socketEndpoint = "wss://stream.coindcx.com";

const socket = io(socketEndpoint, {
    transports: ['websocket']
});

socket.emit('join', {
                'channelName': "I-BTC_INR",
            });
            con

            //Listen update on channelName
            socket.on('depth-update', (response) => {
                console.log(response.data);
            });