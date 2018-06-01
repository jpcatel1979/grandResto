class Table {
    constructor(numeros, nbPlace, x,y) {
        this.numeros = numeros;
        this.nbPlace = nbPlace;
        this.x = x;
        this.y = y;
    }

    isDisponible(){
        if(nbplace === 0){
            return true;
        }
        return false;
    }

    getNumeros(){
        return numeros; 
    }

    getNbPlace(){
        return nbPlace;
    }

    
    getX(){
        return x; 
    }

    getY(){
        return y;
    }

    setNumeros(numeros){
        this.numeros = numeros;
    }

    setNbPlace(nbPlace){
        this.nbPlace = nbPlace;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }


}

module.export = Table;