//simular un elemento html como si fuera un objeto
//crear mis propios componentes con react

import React from "react";

//acá creé un input personalizado mío que yo lo puedo trabajar y agregarle la lógica que quiera
//             recibir por props
const Input = ({
  type,
  className,
  required,
  readonly,
  enabled,
  maxLength,
  //a éste name lo puedo asignar en una variable
  name,
}) => {
//estoy normalizando el nombre
  let nombre_real = name.toLowerCase();
//incluso podría agregar el css específico de cada uno de mis components
  return (
    <input
      type={type}
      className={className}
      required={required}
      readOnly={readonly}
      disabled={enabled}
      maxLength={maxLength}
      name={nombre_real}
    />
  );
};

export default Input;
