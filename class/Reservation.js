class Reservation {
    constructor(numeros, table, client) {
        this.numeros = numeros;
        this.table = table;
        this.client = client;
    }

    getNumeros() {
        return numeros;
    }

    getTable() {
        return table;
    }

    getClient() {
        return client;
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

module.export = Reservation;