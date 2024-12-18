export const posts = [
    {
      id: 1,
      title: "Corte de Electricidad",
      resumen: "Un corte eléctrico afecta varias cuadras del centro de Santiago.",
      description: "Un corte de electricidad ha afectado varias cuadras del centro de Santiago, dejando a muchas familias sin suministro eléctrico. Se necesita asistencia para proporcionar generadores eléctricos y linternas para las zonas afectadas, especialmente para adultos mayores y personas dependientes de equipos médicos.",
      gravity: "media",
      location: "Región Metropolitana",
      type: "Corte de Electricidad",
      delete: true
    },
    {
      id: 2,
      title: "Incendio en casa",
      resumen: "Incendio en la calle Vicuña Mackenna afecta a una familia, quienes necesitan refugio temporal.",
      description: "Los residentes de la calle Vicuña Mackenna afectados por un incendio necesitan suministros y refugio temporal. Se solicita ayuda en forma de ropa, alimentos no perecibles y utensilios de cocina para las familias que han perdido sus pertenencias.",
      gravity: "grave",
      location: "Región Metropolitana",
      type: "Incendio",
      delete: false
    },
    {
      id: 3,
      title: "Tsunami",
      resumen: "Un tsunami ha devastado la zona costera de Valparaíso, dejando muchos damnificados.",
      description: "Los residentes de la zona costera de Valparaíso necesitan asistencia urgente después de que un tsunami devastara sus hogares. Se requiere ayuda para proveer albergues temporales, alimentos y servicios médicos de emergencia para los afectados.",
      gravity: "muy grave",
      location: "Región de Valparaíso",
      type: "Tsunami",
      delete: false
    },
    {
      id: 4,
      title: "Incendio Forestal en La Araucanía",
      resumen: "Incendio forestal amenaza viviendas en La Araucanía.",
      description: "Un incendio forestal ha destruido más de 500 hectáreas en La Araucanía y amenaza viviendas cercanas. Se necesita ayuda para evacuar a los residentes y suministros como mascarillas, agua potable y equipos de protección para los bomberos que están combatiendo el fuego.",
      gravity: "grave",
      location: "Región de La Araucanía",
      type: "Incendio Forestal",
      delete: false
    },
    {
      id: 5,
      title: "Temblores en Antofagasta",
      resumen: "Serie de temblores afecta a Antofagasta, causando preocupación en la comunidad.",
      description: "La comunidad de Antofagasta ha experimentado múltiples temblores que han afectado estructuras y generado miedo en los habitantes. Se solicita ayuda para reforzar las viviendas afectadas y servicios de salud mental para los residentes impactados.",
      gravity: "media",
      location: "Región de Antofagasta",
      type: "Temblor",
      delete: false
    },
    {
      id: 6,
      title: "Inundación en Concepción",
      resumen: "Inundaciones en Concepción tras lluvias intensas, afectando viviendas y calles.",
      description: "Las lluvias intensas han provocado inundaciones en varias calles y viviendas en Concepción. Las familias necesitan ayuda con suministros de limpieza, ropa seca y albergues temporales para aquellos que han perdido sus hogares.",
      gravity: "grave",
      location: "Región del Biobío",
      type: "Inundación",
      delete: false
    },
    {
      id: 7,
      title: "Evacuación por Actividad Volcánica",
      resumen: "Evacuación preventiva en la zona de influencia del volcán Villarrica.",
      description: "Se ha iniciado la evacuación preventiva debido a la actividad del volcán Villarrica. Se necesita transporte y albergues temporales para evacuar a las personas en riesgo, así como mascarillas y agua potable.",
      gravity: "muy grave",
      location: "Región de La Araucanía",
      type: "Evacuación Volcánica",
      delete: false
    },
    {
      id: 8,
      title: "Derrumbe en Zona Residencial",
      resumen: "Un derrumbe ha dañado varias casas en una zona residencial de Valparaíso.",
      description: "Un derrumbe en una zona residencial de Valparaíso ha dejado a varias personas atrapadas y ha dañado varias casas. Se necesita maquinaria de rescate, alimentos, y suministros de primeros auxilios para atender a los afectados.",
      gravity: "grave",
      location: "Región de Valparaíso",
      type: "Derrumbe",
      delete: false
    },
    {
      id: 9,
      title: "Apoyo para Damnificados por Incendio",
      resumen: "Familias afectadas por incendio en Valparaíso necesitan ayuda urgente.",
      description: "Se necesita ayuda urgente para los damnificados de un incendio en Valparaíso. Las familias requieren refugio temporal, ropa, alimentos y artículos de higiene básica.",
      gravity: "grave",
      location: "Región de Valparaíso",
      type: "Incendio",
      delete: false
    },
    {
      id: 10,
      title: "Falla en el Suministro de Agua",
      resumen: "Falla en el sistema de agua deja a varias comunidades sin suministro en Santiago.",
      description: "Una falla en el sistema de agua ha dejado a varias comunidades sin suministro en Santiago. Se necesita apoyo para la distribución de agua potable y asistencia para la reparación del sistema afectado.",
      gravity: "media",
      location: "Región Metropolitana",
      type: "Falla de Suministro",
      delete: false
    },
    {
      id: 11,
      title: "Tsunami en las Costas de Coquimbo",
      resumen: "Un tsunami ha afectado las costas de Coquimbo, causando grandes daños.",
      description: "Un tsunami ha afectado las costas de Coquimbo, causando daños significativos en infraestructura y viviendas. Se solicita ayuda para proporcionar alimentos, agua, ropa y servicios médicos para los damnificados.",
      gravity: "muy grave",
      location: "Región de Coquimbo",
      type: "Tsunami",
      delete: false
    },
    {
      id: 12,
      title: "Incendio en Complejo Habitacional",
      resumen: "Incendio afecta un complejo habitacional en Santiago.",
      description: "Un incendio ha afectado un complejo habitacional en Santiago, dejando a varias familias sin hogar. Se necesita ayuda con alimentos, ropa, y albergues temporales para los damnificados.",
      gravity: "grave",
      location: "Región Metropolitana",
      type: "Incendio",
      delete: false
    },
    {
      id: 13,
      title: "Deslizamiento de Tierra en Los Lagos",
      resumen: "Deslizamiento de tierra bloquea caminos y amenaza viviendas en Los Lagos.",
      description: "Un deslizamiento de tierra ha bloqueado caminos y amenaza viviendas en la Región de Los Lagos. Se necesita maquinaria para despejar los caminos, albergues para los desplazados y alimentos para las familias afectadas.",
      gravity: "grave",
      location: "Región de Los Lagos",
      type: "Deslizamiento de Tierra",
      delete: false
    },
    {
      id: 14,
      title: "Temblor en la Zona Norte",
      resumen: "Fuerte temblor es percibido en el norte del país, causando pánico.",
      description: "Un fuerte temblor ha sido percibido en el norte del país, causando pánico entre los residentes. Se requiere apoyo para la evaluación estructural de viviendas y servicios de atención psicológica para los afectados.",
      gravity: "media",
      location: "Región de Arica y Parinacota",
      type: "Temblor",
      delete: false
    },
    {
      id: 15,
      title: "Incendio Forestal en Coquimbo",
      resumen: "Incendio forestal afecta áreas rurales en Coquimbo.",
      description: "Un incendio forestal de gran magnitud afecta áreas rurales y amenaza viviendas en Coquimbo. Se necesita apoyo de brigadas para combatir el fuego, y se solicitan donaciones de mascarillas y agua potable para los bomberos y afectados.",
      gravity: "grave",
      location: "Región de Coquimbo",
      type: "Incendio Forestal",
      delete: false
    },
  ];
  