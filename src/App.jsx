import React, { useState, useEffect } from 'react';
import AlumnoForm from './components/AlumnoForm';
import AlumnoList from './components/AlumnoList';
import './App.css';

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoEditando, setAlumnoEditando] = useState(null);

  // Cargar datos de localStorage al iniciar
  useEffect(() => {
    const datosGuardados = localStorage.getItem('evaluaciones-alumnos');
    if (datosGuardados) {
      setAlumnos(JSON.parse(datosGuardados));
    }
  }, []);

  // Guardar datos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('evaluaciones-alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  const agregarAlumno = (alumno) => {
    if (alumnoEditando) {
      setAlumnos(alumnos.map(a => a.id === alumnoEditando.id ? alumno : a));
      setAlumnoEditando(null);
    } else {
      setAlumnos([...alumnos, { ...alumno, id: Date.now() }]);
    }
  };

  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter(alumno => alumno.id !== id));
  };

  const editarAlumno = (alumno) => {
    setAlumnoEditando(alumno);
  };

  return (
    <div className="app-container">
      <h1>Evaluación de Alumnos</h1>
      <div className="main-content">
        <AlumnoForm 
          agregarAlumno={agregarAlumno} 
          alumnoEditando={alumnoEditando}
        />
        <AlumnoList 
          alumnos={alumnos} 
          eliminarAlumno={eliminarAlumno} 
          editarAlumno={editarAlumno}
        />
      </div>
    </div>
  );
}

export default App;
