import * as L from 'leaflet';

const IconUbication = L.icon({
  iconUrl: '../../../assets/icon/ubicacion.png',

});

export interface Provincias {
  name: string;
  comunidad: string;
  coordinates: [number, number];
  opacity: number;
  iconUrl?: ReturnType<typeof L.icon>;
  //iconSize?: [number, number];
}

const provincias: Provincias[] = [
  {
    comunidad: 'Andalucía',
    name: 'Sevilla',
    coordinates: [37.3825, -5.97316],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Andalucía',
    name: 'Córdoba',
    coordinates: [37.8847, -4.77639],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Andalucía',
    name: 'Granada',
    coordinates: [37.1773, -3.5986],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Andalucía',
    name: 'Málaga',
    coordinates: [36.7213, -4.4215],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Andalucía',
    name: 'Almería',
    coordinates: [36.834, -2.4637],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Andalucía',
    name: 'Jaén',
    coordinates: [37.7799, -3.784],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Andalucía',
    name: 'Huelva',
    coordinates: [37.2614, -6.9447],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Andalucía',
    name: 'Cádiz',
    coordinates: [36.5297, -6.2924],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Provincias de Extremadura
  {
    comunidad: 'Extremadura',
    name: 'Badajoz',
    coordinates: [38.8786, -6.9702],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Extremadura',
    name: 'Cáceres',
    coordinates: [39.4741, -6.3715],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Provincias de Murcia
  {
    comunidad: 'Murcia',
    name: 'Murcia',
    coordinates: [37.9924, -1.1307],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Provincias de Valencia
  {
    comunidad: 'Valencia',
    name: 'Valencia',
    coordinates: [39.4696, -0.37739],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Valencia',
    name: 'Alicante',
    coordinates: [38.3452, -0.48195],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Provincias de Castilla-La Mancha
  {
    comunidad: 'Castilla-La Mancha',
    name: 'Toledo',
    coordinates: [39.8628, -4.0273],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla-La Mancha',
    name: 'Cuenca',
    coordinates: [40.0704, -2.1374],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla-La Mancha',
    name: 'Guadalajara',
    coordinates: [40.6321, -3.1666],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla-La Mancha',
    name: 'Ciudad Real',
    coordinates: [38.9861, -3.927],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla-La Mancha',
    name: 'Albacete',
    coordinates: [38.9944, -1.8584],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Provincias de Castilla y León
  {
    comunidad: 'Castilla y León',
    name: 'Ávila',
    coordinates: [40.656, -4.7],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'Burgos',
    coordinates: [42.343, -3.6969],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'León',
    coordinates: [42.5987, -5.5671],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'Palencia',
    coordinates: [42.0095, -4.5288],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'Salamanca',
    coordinates: [40.9701, -5.6635],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'Segovia',
    coordinates: [40.9429, -4.1088],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'Soria',
    coordinates: [41.7636, -2.4646],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'Valladolid',
    coordinates: [41.652, -4.728],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Castilla y León',
    name: 'Zamora',
    coordinates: [41.5034, -5.7469],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Provincia de Madrid
  {
    comunidad: 'Madrid',
    name: 'Madrid',
    coordinates: [40.4167, -3.70325],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Provincia de Cantabria
  {
    comunidad: 'Cantabria',
    name: 'Santander',
    coordinates: [43.4623, -3.80998],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Comunidad de Cataluña
  {
    comunidad: 'Cataluña',
    name: 'Barcelona',
    coordinates: [41.3851, 2.1734],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Cataluña',
    name: 'Girona',
    coordinates: [41.9794, 2.8214],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Cataluña',
    name: 'Lleida',
    coordinates: [41.6176, 0.62],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Cataluña',
    name: 'Tarragona',
    coordinates: [41.1189, 1.2445],
    opacity: 0.7,
    iconUrl: IconUbication,
  },

  // Comunidad de Galicia
  {
    comunidad: 'Galicia',
    name: 'A Coruña',
    coordinates: [43.3623, -8.4115],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Galicia',
    name: 'Lugo',
    coordinates: [43.0095, -7.5648],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Galicia',
    name: 'Ourense',
    coordinates: [42.3358, -7.864],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Galicia',
    name: 'Pontevedra',
    coordinates: [42.4347, -8.6481],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Islas Baleares',
    name: 'Palma',
    coordinates: [39.5712, 2.6466],
    opacity: 0.7,
    iconUrl: IconUbication,
  },

  // La Rioja
  {
    comunidad: 'La Rioja',
    name: 'Logroño',
    coordinates: [42.4662, -2.4497],
    opacity: 0.7,
    iconUrl: IconUbication,
  },

  // Comunidad Foral de Navarra
  {
    comunidad: 'Navarra',
    name: 'Pamplona',
    coordinates: [42.817, -1.6445],
    opacity: 0.7,
    iconUrl: IconUbication,
  },

  // País Vasco
  {
    comunidad: 'País Vasco',
    name: 'Bilbao',
    coordinates: [43.263, -2.934],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'País Vasco',
    name: 'San Sebastián',
    coordinates: [43.3183, -1.9812],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'País Vasco',
    name: 'Vitoria-Gasteiz',
    coordinates: [42.8467, -2.6716],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Ceuta
  {
    comunidad: 'Ceuta',
    name: 'Ceuta',
    coordinates: [35.889, -5.318],
    opacity: 0.7,
    iconUrl: IconUbication,
  },

  // Melilla
  {
    comunidad: 'Melilla',
    name: 'Melilla',
    coordinates: [35.2923, -2.9381],
    opacity: 0.7,
    iconUrl: IconUbication,
  },

  // Principado de Asturias
  {
    comunidad: 'Asturias',
    name: 'Oviedo',
    coordinates: [43.3614, -5.8593],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Asturias',
    name: 'Gijón',
    coordinates: [43.5322, -5.6615],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Asturias',
    name: 'Avilés',
    coordinates: [43.5562, -5.9246],
    opacity: 0.7,
    iconUrl: IconUbication,
  },

  // Comunidad Autónoma de Aragón
  {
    comunidad: 'Aragón',
    name: 'Zaragoza',
    coordinates: [41.6488, -0.8891],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Aragón',
    name: 'Huesca',
    coordinates: [42.1415, -0.408],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Aragón',
    name: 'Teruel',
    coordinates: [40.3456, -1.1065],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  // Islas Canarias
  {
    comunidad: 'Canarias',
    name: 'Las Palmas',
    coordinates: [28.1236, -15.4363],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
  {
    comunidad: 'Canarias',
    name: 'Santa Cruz de Tenerife',
    coordinates: [28.4698, -16.2549],
    opacity: 0.7,
    iconUrl: IconUbication,
  },
];

export { provincias };
