import ICrud from "../interfaces/interfaceCrud"

export class Postgres<T> extends ICrud {

    constructor(private model) {
        super()
    }

    create = async (item:any) => {
        console.log('\n\n\nitem', item)
        try {
            await this.model.create(item)
        } catch (error) {
            console.log(error)
            // apenas cadastra. Não precisa tratar exceção se CEP já existe
        }
    }

    findAll = async () => {
        try {
            return await this.model.findAll({ raw: true })
        } catch (error) {
            return await error
        }
    }

    findById = async (id: number) => {
        return await this.model.findAll({
            where: {
                id: id
            }
        })
    }

    findByCep = async (cep: string) => {
        try {
            return await this.model.findAll({
                where: {
                    cep: `${cep}`
                }
            })
        } catch (error) {
            return await error
        }
    }


}