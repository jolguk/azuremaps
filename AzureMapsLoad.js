import React from 'react';

const AzureMapsLoad = () => {
  return (
    <div>
      <fieldset>
        <legend>Static Content</legend>
        <div>&emsp;&lt;remove fileExtension=".json"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".json" mimeType="application/json"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".geojson" mimeType="application/json"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".gpx" mimeType="application/xml"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".georss" mimeType="application/xml"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".kml" mimeType="application/vnd.google-earth.kml+xml"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".kmz" mimeType="application/vnd.google-earth.kmz"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".tab" mimeType="text/plain"/&gt;</div>
        <div>&emsp;&lt;mimeMap fileExtension=".pipe" mimeType="text/plain"/&gt;</div>
        <div>&lt;/staticContent&gt;</div>
      </fieldset>
    </div>
  );
};

export default AzureMapsLoad;
