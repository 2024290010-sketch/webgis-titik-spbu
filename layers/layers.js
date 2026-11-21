var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> ALANG-ALANGLEBAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> BANYUASIN SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> BUKITKECIL<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> GANDUS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> ILIRBARAT DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> ILIRBARAT SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> ILIRTIMUR DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> ILIRTIMUR SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> INDRALAYA UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> KALIDONI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> KEMUNING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> KERTAPATI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> PEMULUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> PLAJU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> RAMBUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> RANTAUBAYUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> SAKO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> SEBERANGULU DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_18.png" /> SEBERANGULU SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_19.png" /> SEMATANGBORANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_20.png" /> SEMBAWA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_21.png" /> SUKARAMI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_22.png" /> TALANGKELAPA<br />' });
var format_SPBU_PT_50K_2 = new ol.format.GeoJSON();
var features_SPBU_PT_50K_2 = format_SPBU_PT_50K_2.readFeatures(json_SPBU_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_PT_50K_2.addFeatures(features_SPBU_PT_50K_2);
var lyr_SPBU_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_PT_50K_2, 
                style: style_SPBU_PT_50K_2,
                popuplayertitle: 'SPBU_PT_50K',
                interactive: true,
    title: 'SPBU_PT_50K<br />\
    <img src="styles/legend/SPBU_PT_50K_2_0.png" /> C:\Users\Lenovo LOQ\OneDrive\Documents\DOKUMEN KULIAH\TUGAS KULIAH SEMESTER 5\WEBGIS\poto spbu\SPBU KARYAJAYA.png<br />\
    <img src="styles/legend/SPBU_PT_50K_2_1.png" /> SPBU Alang-alanglebar<br />\
    <img src="styles/legend/SPBU_PT_50K_2_2.png" /> SPBU Bukitkecil<br />\
    <img src="styles/legend/SPBU_PT_50K_2_3.png" /> SPBU Demanglebardaun<br />\
    <img src="styles/legend/SPBU_PT_50K_2_4.png" /> SPBU Karyajaya<br />\
    <img src="styles/legend/SPBU_PT_50K_2_5.png" /> SPBU Kemasrindo<br />\
    <img src="styles/legend/SPBU_PT_50K_2_6.png" /> SPBU Tujuh Ulu<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_SPBU_PT_50K_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_SPBU_PT_50K_2];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SPBU_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'Gambar': 'Gambar', 'Alamat': 'Alamat', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SPBU_PT_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'Gambar': 'ExternalResource', 'Alamat': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SPBU_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'Gambar': 'no label', 'Alamat': 'no label', });
lyr_SPBU_PT_50K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});