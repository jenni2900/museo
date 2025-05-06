import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Equivalente a __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de Pug y archivos estáticos
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Datos de las obras de arte
const obras = [
  {
    id: 1,
    titulo: 'La Mona Lisa',
    autor: 'Leonardo da Vinci',
    anio: '1503-1519',
    descripcion: 'Es un retrato de Lisa Gherardini, esposa del comerciante florentino Francesco del Giocondo.',
    imagen: '/img/obra1.jpg'
  },
  {
    id: 2,
    titulo: 'Árbol de la esperanza, mantente firme',
    autor: 'Frida Kahlo',
    anio: '1946',
    descripcion: 'Frida aparece en dos estados: una Frida en recuperación y otra fuerte, con una bandera. Representa su lucha y esperanza frente al dolor.',
    imagen: '/img/obra2.jpg'
  },
  {
    id: 3,
    titulo: 'El grito',
    autor: 'Munch',
    anio: '1980',
    descripcion: 'esta escena de un hombre gritando, según unos, o tapándose los oídos al oír un grito, según otros',
    imagen: '/img/obra3.jpg'
  },
  {
    id: 4,
    titulo: 'Marilyn',
    autor: 'Andy Warhol',
    anio: '1964',
    descripcion: 'Este cuadro forma parte de una serie de serigrafías de la actriz de Warhol',
    imagen: '/img/obra4.avif'
  },
  {
    id: 5,
    titulo: 'La primavera',
    autor: 'Sandro Boticelli',
    anio: '1480',
    descripcion: 'es una alegoría de la primavera y se cree que fue encargada por la familia Médici, una poderosa familia de mecenas del arte en Florencia',
    imagen: '/img/obra5.avif'
  }
];



app.get('/', (req, res) => {
  res.render('index');
});

app.get('/galeria', (req, res) => {
  res.render('galeria', { obras });
});

app.get('/obra/:id', (req, res) => {
  const obra = obras.find(o => o.id == req.params.id);
  if (obra) {
    res.render('obra', { obra });
  } else {
    res.status(404).send('Obra no encontrada');
  }
});

app.get('/acerca', (req, res) => {
  res.render('acerca');
});


app.listen(port, () => {
  console.log(`MuseArte está corriendo en http://localhost:${port}`);
});
