import React from 'react';
import NotaScale from './NotaScale';

const AlumnoItem = ({ alumno, eliminarAlumno, editarAlumno }) => {
  return (
    <tr>
      <td>{alumno.nombre}</td>
      <td>{alumno.asignatura}</td>
      <td>{alumno.seccion}</td>
      <td>{alumno.promedio}</td>
      <td>
        <NotaScale nota={alumno.promedio} />
      </td>
      <td>
        <button onClick={() => editarAlumno(alumno)} className="edit-btn">
          Editar
        </button>
        <button onClick={() => eliminarAlumno(alumno.id)} className="delete-btn">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default AlumnoItem;