import React from "react";

class Part {

    constructor(config){
        
        if(config) {
            this.processConfig(config);
        } else {
            this.material = null;
            this.thickness = null;
            this.subParts = null;
        }
    }

    // ----- public methods. used externally ---------
    // -----------------------------------------------
    getPrice(){
        var price = this.selfPrice();
        this.subParts.forEach( subPart => {
            price += subPart.getPrice();
        })
        return price
    }

    getUIOptions(){
        var options = this.selfOptions();
        this.subParts.forEach( subPart => {
            options.push( subPart.getUIOptions() );
        })
        return options
    }

    generateDXF(){
        // magic occurs here
        return ""
    }


    // ----- private methods. used internally --------
    // -----------------------------------------------

    processConfig(config){
        // turn config into private variables
    }

    selfPrice(){
        throw "Error: calculatePrice not defined"
    }
    
    selfOptions(){
        throw "Error: selfOptions not defined"
    }

}

export default Part