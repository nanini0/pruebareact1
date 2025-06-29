import React from 'react';

const NotaScale = ({ nota }) => {
  const getEvaluacion = (nota) => {
    const num = parseFloat(nota);
    if (isNaN(num)) return '';
    
    if (num >= 1 && num <= 3.9) return 'Deficiente';
    if (num >= 4 && num <= 5.5) return 'Con mejora';
    if (num >= 5.6 && num <= 6.4) return 'Buen trabajo';
    if (num >= 6.5 && num <= 7) return 'Destacado';
    return '';
  };

  const evaluacion = getEvaluacion(nota);

  return (
    <div className={`nota-scale ${evaluacion.toLowerCase().replace(' ', '-')}`}>
      {evaluacion}
    </div>
  );
};

export default NotaScale;