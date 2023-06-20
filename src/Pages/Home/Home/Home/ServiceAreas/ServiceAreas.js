import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ServiceAreasMap = () => {
    const serviceAreas = [
        { name: 'City A', latitude: 40.7128, longitude: -74.006 },
        { name: 'City B', latitude: 34.0522, longitude: -118.2437 },
        { name: 'City C', latitude: 51.5074, longitude: -0.1278 },
        { name: 'Region X', latitude: 42.3601, longitude: -71.0589 },
        { name: 'Region Y', latitude: 37.7749, longitude: -122.4194 },
        { name: 'Region Z', latitude: 48.8566, longitude: 2.3522 },
    ];

    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: 400,
        latitude: 40.7128,
        longitude: -74.006,
        zoom: 5,
    });

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Service Areas Map</h2>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={"tk.eyJ1IjoibWFwYm94IiwiZXhwIjoxNDczOTY3NjczLCJpYXQiOjE0NzM5Njc2NDMsInNjb3BlcyI6WyJzdHlsZXM6cmVhZCIsImZvbnRzOnJlYWQiXSwiY2xpZW50IjoiYXBpIn0.ZepsWvpjTMlpePE4IQBs0g"}
                onViewportChange={(newViewport) => setViewport(newViewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                {serviceAreas.map((area, index) => (
                    <Marker key={index} latitude={area.latitude} longitude={area.longitude}>
                        <FaMapMarkerAlt className="text-red-500" />
                    </Marker>
                ))}
            </ReactMapGL>
        </div>
    );
};

export default ServiceAreasMap;
