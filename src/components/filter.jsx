import React from 'react';
import '../stylesheets/filter/filter.scss';

const Filter = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value); 
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onFilterChange("search", e.target.value);
  };

  return (
    <div className="filter">
      <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleSearch}
          name="search"
      />
      <select name="location" onChange={(e) => onFilterChange(e)}>
        <option value="">Seleccionar Ubicación</option>
        <option value="Región Metropolitana">Región Metropolitana</option>
        <option value="Región de Valparaíso">Región de Valparaíso</option>
      </select>
      <select name="type" onChange={(e) => onFilterChange(e)}>
        <option value="">Seleccionar Tipo</option>
        <option value="Corte de Electricidad">Corte de Electricidad</option>
        <option value="Incendio en Casa">Incendio en Casa</option>
        <option value="Tsunami">Tsunami</option>
      </select>
      <select name="gravity" onChange={(e) => onFilterChange(e)}>
        <option value="">Seleccionar Gravedad</option>
        <option value="media">Media</option>
        <option value="grave">Grave</option>
        <option value="muy grave">Muy Grave</option>
      </select>
    </div>
  );
};

export default Filter;

