const express = require('express');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());
const port = 3000;

const productosMaquillaje = [

    {id: 1, nombre: "Rubor Blush", marca: "Trendy", precio: 10.00, calificacion: 4.8, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2023/06/RUBOR-EN-CREMA-BLUSH-STAMP-TRENDY-REF-RBS1312-2.jpg"},
    {id: 2, nombre: "Pestañina Boom", marca: "Trendy", precio: 15.00, calificacion: 4.9, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2021/09/ESTANDAR-PESTNA-BM071.jpg"},
    {id: 3, nombre: "Sombra en Trio", marca: "Trendy", precio: 12.50, calificacion: 4.7, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2022/01/SOMBRA-EN-TRIO-SWEET-TRENDY-REF-SFP09-4-1-1.jpg"},
    {id: 4, nombre: "Brillo Fruticas", marca: "Trendy", precio: 5.00, calificacion: 4.9, urlImg: "https://maquillajetrendyshop.com/wp-content/uploads/2023/05/BRILLO-FRUTICAS-KAWAII-TRENDY-REF-FK16-8.jpg"},
    {id: 5, nombre: "Mantequilla Corporal", marca: "Trendy", precio: 20.00, calificacion: 4.8, urlImg: "https://www.collarela.com/cdn/shop/products/MANTEQUILLACORPORALTRENDY200ML03_1200x1200.jpg?v=1666657208"}
];

const productos = [
  {
    id: 1,
    nombre: "Rubor Blush",
    marca: "Trendy",
    precio: "$10.00",
    descripcion: "¡El rubor estampita que necesitabas en tus mejillas!.",
    imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2023/06/RUBOR-EN-CREMA-BLUSH-STAMP-TRENDY-REF-RBS1312-2.jpg"
  },
  {
    id: 2,
    nombre: "Pestañina Boom",
    marca: "Trendy",
    precio: "$15.00",
    descripcion: "Todas nuestras referencias son lavables pero no se corren fácil durante el día.",
    imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2021/09/ESTANDAR-PESTNA-BM071.jpg"
  },
  {
    id: 3,
    nombre: "Sombra en Trio",
    marca: "Trendy",
    precio: "$12.50",
    descripcion: "3 tonos de glitters prensados, ideales para quienes les gusta maquillarse fácil y rápido.",
    imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2022/01/SOMBRA-EN-TRIO-SWEET-TRENDY-REF-SFP09-4-1-1.jpg"
  },
  {
    id: 4,
    nombre: "Brillo Fruticas",
    marca: "Trendy",
    precio: "$5.00",
    descripcion: "¡El olor y el empaque más cool para tus labios!",
    imgUrl: "https://maquillajetrendyshop.com/wp-content/uploads/2023/05/BRILLO-FRUTICAS-KAWAII-TRENDY-REF-FK16-8.jpg"
  },
  {
    id: 5,
    nombre: "Mantequilla Corporal",
    marca: "Trensy",
    precio: "$20.00",
    descripcion: "Aporta a la piel de tu cuerpo alta hidratación y nutrición.",
    imgUrl: "https://www.collarela.com/cdn/shop/products/MANTEQUILLACORPORALTRENDY200ML03_1200x1200.jpg?v=1666657208"
  }
];

app.get('/productosMaquillaje', (req, res) => {
  res.json({data: productosMaquillaje});
});

app.get('/productos', (req, res) => {
  res.json({data: productos})
})

app.get('/home', (req, res) => {
  res.json({data: home})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
