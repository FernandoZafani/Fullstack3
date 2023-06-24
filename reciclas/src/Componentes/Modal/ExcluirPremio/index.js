import React, { useState } from 'react';

const ExcluirPremio = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleAction = async () => {

    console.log('ID do objeto selecionado:', selectedItemId);
  };

  const handleItemClick = (id) => {
    setSelectedItemId(id);
    handleAction();
  };

  return (
    <div>
      <button onClick={() => handleItemClick(1)}>Item 1</button>
      <button onClick={() => handleItemClick(2)}>Item 2</button>
      <button onClick={() => handleItemClick(3)}>Item 3</button>
    </div>
  );
};

export default ExcluirPremio;
