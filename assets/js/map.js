var map = L.map('map', {
    center: [-12.229430, -76.858822],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor'
}).addTo(map);

L.control.scale().addTo(map);
var circle = L.circle([-12.229430, -76.858822], {
    color: 'red',
    fillColor: '#33ECFF',
    fillOpacity: 0.5,
    radius: 15 // 
}).addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }); 
googleSat.addTo(map);

var wmsUrl = 'https://sit.icl.gob.pe/arcgis/services/AGOL_Servicios/ORTOFOTO/MapServer/WMSServer';
var ortopch = L.tileLayer.wms(wmsUrl, {
    layers: '0', // Ortomosaico de Ilo
    format: 'image/png',
    transparent: true
});
ortopch.addTo(map);

var streets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }); 

streets.addTo(map);

var hybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }); 

hybrid.addTo(map);


var terrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }); 
 

terrain.addTo(map);



var centros = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:colegios_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});
centros.addTo(map); 

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:mercados_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

mercados.addTo(map); 

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:distrit",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

distritos.addTo(map); 

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:farmacias_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

farmacias.addTo(map); 

var pachacamac = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:gis_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

pachacamac.addTo(map); 

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "	webgis_pachacamac:hospitales_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

hospitales.addTo(map); 

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:hoteles_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

hoteles.addTo(map); 

var policias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:policias_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

policias.addTo(map); 

var restaurant = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:restaurantes_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

restaurant.addTo(map); 

var uni = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_pachacamac/wms", {
    layers: "webgis_pachacamac:universidades_pachacamac",
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
});

uni.addTo(map); 

var baseMaps = {
    "OSM": basemapOSM,
    'Google Satelite':googleSat,
    'Ortomosaico Pachacamac':ortopch,
    'Google Streets':streets,
    'Hybrid':hybrid,
    'Terrain':terrain
};

var overlayMaps = {
    "Colegios Pachacamac": centros,
    "Mercados Pachacamac": mercados,
    "Distritos": distritos,
    'Farmacias Pachacamac' :farmacias,
    'Pachacamac Distrito':pachacamac,
    'Hospitales Pachacamac':hospitales,
    'Hoteles Pachacamac':hoteles,
    'Policias Pachacamac':policias,
    'Restaurantes Pachacamac':restaurant,
    'Universidades Pachacamac':uni
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

