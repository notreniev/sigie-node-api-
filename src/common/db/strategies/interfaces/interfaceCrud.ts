export class NotImplementedException extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

export default class ICrud {

    findAll(item){
        throw new NotImplementedException()
    }

    create(item) {
        throw new NotImplementedException()
    }

    read(query) {
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(id) {
        throw new NotImplementedException()
    }
    
    findByCep(cep){
        throw new NotImplementedException()
    }
}
