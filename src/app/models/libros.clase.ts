export class libro{
    // Creación de Variables y Tipos
    public nombre:string;
    public estado:string;
    public editorial:string;
    public vendedor:string;
    public isbn:string;
    public descripcion:string;
    public asignatura:string;
    public idLibro:string;
    public precio:string;


    constructor(nombre: string, estado: string, editorial: string, vendedor: string, isbn: string, descripcion: string, asignatura: string, idLibro: string, precio: string) {
        this.nombre = nombre;
        this.estado = estado;
        this.editorial = editorial;
        this.vendedor = vendedor;
        this.isbn = isbn;
        this.descripcion = descripcion;
        this.asignatura = asignatura;
        this.idLibro = idLibro;
        this.precio = precio;
    }
}