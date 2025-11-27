import { Usuario } from "../models/usuario";
import DatabaseService from "../database/DatabaseService";

export default class UsuarioController {

    constructor(){
        this.listeners = [];
    }

    // USADO POR LA VISTA
    async init(){
        await DatabaseService.initialize();
    }

    // USADO POR LA VISTA: listar()
    async listar(){
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(
                u.id,
                u.nombre,
                u.fecha_creacion
            ));
        } catch(error){
            console.error("Error al obtener usuarios:", error);
            throw new Error("No se pudieron cargar los usuarios");
        }
    }

    // USADO POR LA VISTA
    async crearUsuario(nombre){
        try {
            Usuario.validar(nombre);

            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            this.notifyListeners();

            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch(error){
            console.error("Error al crear usuario:", error);
            throw error;
        }
    }

    // SUSCRIPCIONES
    subscribe(callback){
        this.listeners.push(callback);
    }

    unsubscribe(callback){
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners(){
        this.listeners.forEach(cb => cb());
    }
}
