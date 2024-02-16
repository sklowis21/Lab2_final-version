//Link my MapBox to js script, use my own unique style with style token

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tsb3dpcyIsImEiOiJjbHI4NHB0NDgwNjhvMmlxeW5zbG5yamx2In0.4hjvu4k-dsvYVBtCAgn-GA';
const map = new mapboxgl.Map({
    container: 'my-map-lab2',  //same container id used in html index
    style: 'mapbox://styles/sklowis/clsjxf9v403r401p2em0qbxdz',  //my mapbox style
    center: [-84, 40], 
    zoom: 5,
});



map.on('load', () => {

    //Add my data source with GeoJSON points data

    map.addSource('lab2-data',{
        type: 'geojson',
        data: {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "My home": ""
                },
                "geometry": {
                    "coordinates": [
                        -90.54762666615332,
                        38.64592391259515
                    ],
                    "type": "Point"
                },
                "id": 0
            },
            {
                "type": "Feature",
                "properties": {
                    "Elementary school": ""
                },
                "geometry": {
                    "coordinates": [
                        -90.54969774453649,
                        38.64502717717127
                    ],
                    "type": "Point"
                },
                "id": 2
            },
            {
                "type": "Feature",
                "properties": {
                    "Middle school": ""
                },
                "geometry": {
                    "coordinates": [
                        -90.50370662476094,
                        38.66825613088449
                    ],
                    "type": "Point"
                },
                "id": 3
            },
            {
                "type": "Feature",
                "properties": {
                    "High school": ""
                },
                "geometry": {
                    "coordinates": [
                        -90.50461630523553,
                        38.66471447394679
                    ],
                    "type": "Point"
                },
                "id": 4
            },
            {
                "type": "Feature",
                "properties": {
                    "U of T": ""
                },
                "geometry": {
                    "coordinates": [
                        -79.39550494156227,
                        43.66259401092313
                    ],
                    "type": "Point"
                },
                "id": 4
            },
            {
                "type": "Feature",
                "properties": {
                    "Home now": ""
                },
                "geometry": {
                    "coordinates": [
                        -79.40301183029337,
                        43.663951018525324
                    ],
                    "type": "Point"
                },
                "id": 5
            },
            {
                "type": "Feature",
                "properties": {
                    "NGA": ""
                },
                "geometry": {
                    "coordinates": [
                        -90.20967242846727,
                        38.64767143270967
                    ],
                    "type": "Point"
                },
                "id": 6
            }
        ]
    }
    });

    //Visualize data points as a layer on web map

    map.addLayer({
        'id': 'map-points',
        'type': 'circle',
        'source':'lab2-data',  //Link to my 'map.addsource
        'paint':{
            'circle-radius': 5,       //Pick size of points
            'circle-color':'green',   //Pick color for points
        }
    })
})

map.on('load', () => {

//Add my data source with GeoJSON points data

    map.addSource('lab2-line-data',{
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {"type": "Feature",
                    "properties": {"Airplane trip": ""},
                    "geometry": {"coordinates": [[-90.36966444444235,38.75020347255469],[-79.62997968787802,43.67819325481025]],
                        "type": "LineString"},
                    "id": 0}]
        }
    });

    //Visualize line as a layer on web map

    map.addLayer({
        'id': 'map-line',
        'type': 'line',
        'source':'lab2-line-data',  //link to my 'map.addsource'
        'paint':{
            'line-color': '#888',  //Pick color of line
            'line-width': 5,       //Pick width of line
        }
    })
})