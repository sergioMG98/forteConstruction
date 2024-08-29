import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "./leafletMap.scss";


export default function LeafletMap(){
    
    const markers = [
        {
            geocode:[48.8566, 2.3522],
            popUp: "hello, I am here"
        }
    ];

/*     const customIcon = L.icon({
        iconUrl: 'http://127.0.0.1:8000/storage/map/mZRIQ0q3vWdKbZ0LYfWxajBRTFk35aONJr8IfVaM.png',
        iconSize: [38, 38] // size of the icon
    }); */
    
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

                {markers.map((marker, index) => (
                    <Marker position={marker.geocode} /* icon={customIcon} */key={index}/>
                ))}
        </MapContainer>
    )
}