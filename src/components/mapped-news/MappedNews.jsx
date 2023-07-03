import React from "react";

import { Noticia } from "../Noticia";

export const MappedNews = ({ pokemon: { imagen, nombre, texto }, bg }) => (
  <Noticia imagen={imagen} nombre={nombre} texto={texto} bg={bg} />
);
