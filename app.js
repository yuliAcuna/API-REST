const express = require("express");
const cors = require("cors"); 
const productoController = require("./controllers/productoController");

const app = express();
app.use(cors()); 
app.use(express.json()); 

// endpoints
app.get("/productos", productoController.listarProductos);
app.post("/productos", productoController.agregarProducto);

// servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `Servidor corriendo:
Listar productos: GET http://localhost:${PORT}/productos
Agregar producto: POST http://localhost:${PORT}/productos`);
});
