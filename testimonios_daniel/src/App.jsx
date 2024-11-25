import React from 'react';
import Testimonio from './components/Testimonio';
import { Typography, Grid2 } from '@mui/material';
import { DanielGC } from 'milibreria';

const App = () => {
  const testimoniosData = [
    {
      id: 1,
      imageUrl: 'mujer1.jpg',
      altText: 'Lucía',
      title: 'Lucía',
      body: 'Lucía es una joven apasionada por la tecnología. Desde pequeña mostró un gran interés por las computadoras y, tras terminar el colegio, decidió estudiar Informática en la universidad. A lo largo de su carrera, se especializó en desarrollo de software y seguridad cibernética. Con su gran capacidad para resolver problemas, destacó en varios proyectos, creando aplicaciones innovadoras y liderando equipos de trabajo. Su habilidad para programar y su creatividad la llevaron a fundar su propia startup, enfocada en mejorar la seguridad de datos para empresas. Lucía es ejemplo de perseverancia y pasión por la tecnología.',
    },
    {
      id: 2,
      imageUrl: 'man1.jpg',
      altText: 'Carlos',
      title: 'Carlos',
      body: 'Carlos es un ingeniero en informática con una mente analítica y curiosa. Desde que construyó su primera computadora a los 12 años, supo que su futuro estaba en la tecnología. En la universidad, se especializó en inteligencia artificial y automatización, áreas que lo apasionaban por su impacto en el futuro. Tras graduarse, trabajó en varias empresas tecnológicas, donde desarrolló algoritmos avanzados para mejorar la eficiencia de sistemas automatizados. Su talento lo llevó a convertirse en un referente dentro del sector, colaborando con grandes compañías y liderando proyectos innovadores que buscan transformar la forma en que interactuamos con la tecnología.',
    },
    {
      id: 3,
      imageUrl: 'man2.jpg',
      altText: 'Julián',
      title: 'Julián',
      body: 'Julián es un veterano de la informática, con más de 40 años de experiencia en el sector. Comenzó su carrera en los años 80, cuando las computadoras personales apenas empezaban a surgir. A lo largo de su vida, fue testigo y protagonista de grandes avances tecnológicos, desde la creación de los primeros lenguajes de programación hasta la era de la inteligencia artificial. Aunque ya se ha jubilado, sigue participando como mentor para jóvenes programadores y consultor en proyectos importantes. Julián es una fuente invaluable de conocimiento, con una pasión intacta por la tecnología y una visión que abarca décadas de innovación.',
    },
    {
      id: 4,
      imageUrl: 'woman2.webp',
      altText: 'Marta',
      title: 'Marta',
      body: 'Marta es una ingeniera informática de mediana edad que ha sabido adaptarse a la evolución constante del mundo tecnológico. Con más de 20 años de experiencia, comenzó su carrera en una época en la que la programación se hacía de manera muy diferente, pero siempre se mantuvo al día con las nuevas herramientas y lenguajes. Hoy en día, se especializa en gestión de proyectos de software y transformación digital para grandes empresas. Su capacidad para liderar equipos y su enfoque práctico le han ganado el respeto de sus colegas. Aunque su rol ha cambiado con el tiempo, Marta sigue disfrutando del reto de crear soluciones innovadoras que impulsen el progreso tecnológico.',
    }
  ];

  return (
    <div>
      <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Daniel González Calcines
      </Typography>

      <Grid2 container spacing={2} justifyContent="center" alignItems="center" style={{ width: '100vw', margin: '0 auto' }}>
        {testimoniosData.map((testimonio) => (
          <Grid2 item xs={12} sm={6} md={4} key={testimonio.id}>
            <Testimonio
              imageUrl={testimonio.imageUrl}
              altText={testimonio.altText}
              title={testimonio.title}
              body={testimonio.body}
            />
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center" style={{ width: '100vw', margin: '0 auto' }}>
        <Grid2>
          <Typography>
            Puntue su experiencia
          </Typography>
        </Grid2>
        <Grid2>
        <DanielGC
        defval={3}
        precision={0.1}
        color="error"
        maxrating={10}
      />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default App;