export const paraId = () => {
  const paraId =
    Date.now().toString() + Math.random(36).toString().substring(2);
  return paraId;
};

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return fechaNueva.toLocaleString("es-Es", opciones);
};

export const formatearNumero = (cantidad, currency = "USD") => {
  let text = cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
  return text;
};

export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

export const convertirEnteroToFloat2Decimales = (numero) => {
  return parseFloat(numero).toFixed(2);
};

