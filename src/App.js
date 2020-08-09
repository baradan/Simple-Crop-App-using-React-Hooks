import React from 'react';
import Navbar from './Component/Navbar';
import ImageCropper from './Component/ImageCropper';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return(
     <div>
    <Navbar />
    <ImageCropper />
    </div>
    );
}

export default App;