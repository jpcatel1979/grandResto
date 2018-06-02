module.exports = class Reservation {
    constructor(numeros, table, client) {
        this.numeros = numeros;
        this.table = table;
        this.client = client;
    }

    getNumeros() {
        return this.numeros;
    }

    getTable() {
        return this.table;
    }

    getClient() {
        return this.client;
    }

    setNumeros(numeros) {
        this.numeros = numeros;
    }

    setTable(table) {
        this.nbPlace = table;
    }

    setClient(client) {
        this.client = client;
    }
}
