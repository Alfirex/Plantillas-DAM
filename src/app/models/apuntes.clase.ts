export class apuntes {
    public nombre: string;
    public autor: string;
    public temas: string;
    public verificado: string;
    public asignatura: string;
    public descripcion: string;
    public idapuntes: string;
    public precio: string;

    constructor(nombre: string, autor: string, temas: string, verificado: string, asignatura: string,
                descripcion: string, idapuntes: string, precio: string) {
        this.nombre = nombre;
        this.autor = autor;
        this.temas = temas;
        this.verificado = verificado;
        this.asignatura = asignatura;
        this.descripcion = descripcion;
        this.idapuntes = idapuntes;
        this.precio = precio;
    }
}