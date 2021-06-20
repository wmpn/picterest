import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/upload';
import ImageGrid from './comps/imageGrid';
import Model from './comps/model';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
