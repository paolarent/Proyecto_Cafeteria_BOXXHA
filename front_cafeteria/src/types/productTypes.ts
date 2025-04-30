export interface Categoria {
    nombre: string;
  }
  
  export interface Sabor {
    sabor: string;
  }
  
  export interface Producto {
    id_bebcaliente: number; // o id_bebfria, etc.
    nombre: string;
    sabor: string;
    precio_base: number;
  }