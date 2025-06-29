import React from 'react';
import AlumnoItem from './AlumnoItem';

const AlumnoList = ({ alumnos, eliminarAlumno, editarAlumno }) => {
  return (
    <div className="alumno-list">
      <h2>Lista de Evaluaciones</h2>
      {alumnos.length === 0 ? (
        <p>No hay evaluaciones registradas</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Asignatura</th>
              <th>Sección</th>
              <th>Promedio</th>
              <th>Evaluación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map(alumno => (
              <AlumnoItem
                key={alumno.id}
                alumno={alumno}
                eliminarAlumno={eliminarAlumno}
                editarAlumno={editarAlumno}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AlumnoList;