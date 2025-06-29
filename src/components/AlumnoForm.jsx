import React, { useState, useEffect } from 'react';
import NotaScale from './NotaScale';

const AlumnoForm = ({ agregarAlumno, alumnoEditando }) => {
  const [alumno, setAlumno] = useState({
    nombre: '',
    asignatura: '',
    promedio: '',
    seccion: ''
  });

  useEffect(() => {
    if (alumnoEditando) {
      setAlumno(alumnoEditando);
    }
  }, [alumnoEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno({
      ...alumno,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!alumno.nombre || !alumno.asignatura || !alumno.promedio) return;
    
    agregarAlumno(alumno);
    setAlumno({
      nombre: '',
      asignatura: '',
      promedio: '',
      seccion: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="alumno-form">
      <h2>{alumnoEditando ? 'Editar Alumno' : 'Agregar Nuevo Alumno'}</h2>
      
      <div className="form-group">
        <label>Nombre del Alumno:</label>
        <input
          type="text"
          name="nombre"
          value={alumno.nombre}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Asignatura:</label>
        <input
          type="text"
          name="asignatura"
          value={alumno.asignatura}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Sección:</label>
        <select
          name="seccion"
          value={alumno.seccion}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione sección</option>
          <option value="PROGRAMACION">Programacion</option>
          <option value="BASE DE DATOS">Base de datos</option>
          <option value="SISTEMA OPERATIVO">Sistema Operativo</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Promedio (1.0 - 7.0):</label>
        <input
          type="number"
          name="promedio"
          value={alumno.promedio}
          onChange={handleChange}
          min="1.0"
          max="7.0"
          step="0.1"
          required
        />
      </div>
      
      <NotaScale nota={alumno.promedio} />
      
      <button type="submit" className="submit-btn">
        {alumnoEditando ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
};

export default AlumnoForm;