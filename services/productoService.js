const Producto = require("../models/producto");

class ProductoService {
    constructor() {
      this.productos = [];
      this.idCounter =1;
    }

    listarProductos(){
     return this.productos;

    }
  
    agregarProducto(nombre, precio) {
      const nuevoProducto= new Producto(this.idCounter++, nombre, precio)
      this.productos.push(nuevoProducto);
      return nuevoProducto;

    }  
    
  }
  module.exports = ProductoService;