import { Tema } from "./Tema"
import { UserModel } from "./UserModel"

export class Postagem{
    public idPost: number
    public titulo: string
    public texto: string
    public data: Date
    public user: UserModel
    public tema : Tema

}


