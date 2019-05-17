import React, { useState} from 'react';
import ReactMapGL, { marker } from 'react-map-gl';

const MapGL = props => {
  const [viewport, setViewport] = useState({
    latitude: 37.804363,
    longitude: -122.271111, 
    zoom: 10,
    width: '70vw',
    height: '80vh',      
  })

  const divStyle = {
    marginTop: '2%',
    marginLeft: '15%',
  }

  return (
    <div style={divStyle}>
      <ReactMapGL {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {setViewport(viewport)
        }}
        mapStyle="mapbox://styles/sduarte22/cjvrjssl50j7b1ct4v09dgvyn"
      >
      </ReactMapGL>
    </div>
  )
}
export default MapGL;

// gonna import via database 
// this code will be moved inside react mapGL
// {streetArts.features.map((park) => {
//     <Marker 
//         key={street artID} 
//         latitude={} 
//         longitude={}
//         >
//         <Button img="insert image" >{name of street art insert dynamically} enter anything we want</Button>
//     </Marker>
// })}

// add a click event for button to render pop up 