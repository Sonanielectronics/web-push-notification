    var FCM = require('fcm-node');
    var serverKey = 'AAAA5kpL_to:APA91bHrb9mu3oHO-ogtD7deqnzwj2s8GnEbXfayFdTfxi81CZiWVmeMQ847_Rq-6__Jo86l0NqXhoB3XG3xtWW1MqFTqVXY7kSdycheIWD-ym_uM6f3nRAqBrbm4_tn-4MiuTvTTlmO';
    var fcm = new FCM(serverKey);
    
    var message = {
	to:'cW356_3LusZ4yaOJZm-X4j:APA91bEvLz70tpgyYbZFgvlMEIjXLeH4BnrI1eEKKQAeOJaLkYlFu2ys4cCjpaSZhcw1IKpq9cQLMfnE1zrJvo76PQS-9I0dIYZTCUvq9kNfe7EXOJ9-5vYAXXPVbrXLIG-PqbVIwRyh',
        notification: {
            title: 'NotifcatioTestAPP',
            body: '{"Message from node js app"}',
        },

        data: { //you can send only notification or only data(or include both)
            title: 'ok cdfsdsdfsd',
            body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}'
        }

    };

    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!"+err);
			console.log("Respponse:! "+response);
        } else {
            // showToast("Successfully sent with response");
            console.log("Successfully sent with response: ", response);
        }

    });
