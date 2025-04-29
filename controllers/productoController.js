const ProductoService = require("../services/productoService");

const servicio = new ProductoService();

const listarProductos = (req, res) => {
  res.json(servicio.listarProductos());
};

const agregarProducto = (req, res) => {
  const { nombre, precio} = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ error: "Faltan datos del producto." });
  }

  const nuevoProducto = servicio.agregarProducto(nombre, parseFloat(precio));
  //res.status(201).json(nuevoProducto);
  return res.status(201).json(nuevoProducto);
};

module.exports = { listarProductos, agregarProducto };