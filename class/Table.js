module.exports = class Table {
  


    constructor(numeros, nbPlace, x,y) {
        this.numeros = numeros;
        this.nbPlace = nbPlace;
        this.placeOccupe = 0;
        this.x = x;
        this.y = y;
    }

    isDisponible(){
        if(this.placeOccupe === 0){
            return true;
        }
        return false;
    }

    isReserve(nbClient){
        if(nbClient > this.nbPlace ){
            return false;
        }    
        else{
            this.placeOccupe = nbClient;
            return true; 
        }

    }

    viderTable(){
        this.placeOccupe = 0;
    }


    getNumeros(){
        return this.numeros; 
    }

    getNbPlace(){
        return this.nbPlace;
    }

    
    getX(){
        return this.x; 
    }

    getY(){
        return this.y;
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

    toString(){
        return "table numero : "+this.numeros;
    }

}

