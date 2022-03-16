import React from 'react';
import './Map.css'

import {YMaps , Map, Placemark, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, RouteButton, TypeSelector} from 'react-yandex-maps';


const Maps = () =>{
    return (

        <YMaps>
            <div className="demo">

                <Map 
                    defaultState={{
                        center: [40.3895161,71.7959968],
                        zoom: 15,
                        
                    }}
                    // style={{color:'green'}}
                >
                <Placemark geometry={[40.3895161,71.7959968]} />
                <FullscreenControl options={{ float: 'left'}} />
                <GeolocationControl options={{ float: 'right'}} />
                <TrafficControl options={{float: 'right'}} />
                <ZoomControl options={{float: 'left'}} />
                <RouteButton options={{ float: 'right'}} />
                <TypeSelector options={{float: 'right'}} />
                </Map>

            </div>
        </YMaps>

    )
}

export default Maps