var express = require('express');
var lesTables = new Array();
var lesReservations = new Array();
var Table = require('./class/Table.js')
var Reservation = require('./class/Reservation.js')
lesTables.push(new Table(101, 2, 1, 1))
lesTables.push(new Table(66, 4, 2, 1))
lesTables.push(new Table(15, 8, 1, 2))


var app = express();
app.set('view engine', 'ejs');
app.get('/table', function (req, res) {
 
    res.render('table.ejs', {
        tables: lesTables
    });
});


app.set('view engine', 'ejs');
app.get('/reservation', function (req, res) {
 
    res.render('reservation.ejs', {
        lstresa: lesReservations
    });
});


app.get('/table/:id', function (req, res) {
    var id = req.params.id; // params pour chemin dans URL
    for (var i in lesTables) {
        if(lesTables[i].getNumeros() == id){
            lesTables[i].isReserve(lesTables[i].getNbPlace());
            break;
        }
    }
    res.redirect("/table")
});

app.put('/table/:id', function (req, res) {
    var id = req.params.id; // params pour chemin dans URL
    for (var i in lesTables) {
        if(lesTables[i].getNumeros() == id){
                lesTables[i].viderTable(); 
            break;
        }
    }
    res.redirect("/table")
});




var server = app.listen(8085, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Serveur écoute sur http://%s:%s", host, port)
})


