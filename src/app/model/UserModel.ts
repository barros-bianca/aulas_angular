import { Postagem } from "./Postagem"

export class UserModel{
    public idUser: number
    public name: string
    public email: string
    public password: string
    public photo: string
    public type: string
    public token: string
    public postagem: Postagem []
}