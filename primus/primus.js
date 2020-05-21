const Primus = require('primus');

let go = (server) => {
    let primus = new Primus(server, {});
    primus.on('connection', (spark) => {
        console.log('🔥 received spark 🔥');

        spark.on('data', (data) => {
            console.log(data);
            console.log("you're doing great");
        })
    });

}

module.exports.go = go; 