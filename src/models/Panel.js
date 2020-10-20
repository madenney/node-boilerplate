import Part from "./Part";

class Panel extends Part {

    constructor(config){
        super(config)
        this.height = null;
        this.width = null;
        this.attributes = []
    }

    selfPrice(){
        return this.height * this.width
    }

    selfOptions(){
        return [ "H", "W" ]
    }

}

export default Panel;