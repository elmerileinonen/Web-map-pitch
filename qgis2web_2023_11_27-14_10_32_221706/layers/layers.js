var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bufferaroundshippingroute_1 = new ol.format.GeoJSON();
var features_bufferaroundshippingroute_1 = format_bufferaroundshippingroute_1.readFeatures(json_bufferaroundshippingroute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bufferaroundshippingroute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bufferaroundshippingroute_1.addFeatures(features_bufferaroundshippingroute_1);
var lyr_bufferaroundshippingroute_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bufferaroundshippingroute_1, 
                style: style_bufferaroundshippingroute_1,
                interactive: false,
    title: 'buffer around shipping route<br />\
    <img src="styles/legend/bufferaroundshippingroute_1_0.png" /> 410929,26464800001<br />\
    <img src="styles/legend/bufferaroundshippingroute_1_1.png" /> 480486,22072500002<br />\
    <img src="styles/legend/bufferaroundshippingroute_1_2.png" /> 549937,90506400005<br />\
    <img src="styles/legend/bufferaroundshippingroute_1_3.png" /> 8833585,36937000044<br />\
    <img src="styles/legend/bufferaroundshippingroute_1_4.png" /> <br />'
        });
var format_notaffectedlagoon_2 = new ol.format.GeoJSON();
var features_notaffectedlagoon_2 = format_notaffectedlagoon_2.readFeatures(json_notaffectedlagoon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_notaffectedlagoon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_notaffectedlagoon_2.addFeatures(features_notaffectedlagoon_2);
var lyr_notaffectedlagoon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_notaffectedlagoon_2, 
                style: style_notaffectedlagoon_2,
                interactive: false,
                title: '<img src="styles/legend/notaffectedlagoon_2.png" /> not affected lagoon'
            });
var format_directlyaffectedlagoon_3 = new ol.format.GeoJSON();
var features_directlyaffectedlagoon_3 = format_directlyaffectedlagoon_3.readFeatures(json_directlyaffectedlagoon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_directlyaffectedlagoon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_directlyaffectedlagoon_3.addFeatures(features_directlyaffectedlagoon_3);
var lyr_directlyaffectedlagoon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_directlyaffectedlagoon_3, 
                style: style_directlyaffectedlagoon_3,
                interactive: false,
                title: '<img src="styles/legend/directlyaffectedlagoon_3.png" /> directly affected lagoon'
            });
var format_indirectlyaffectedlagoon_4 = new ol.format.GeoJSON();
var features_indirectlyaffectedlagoon_4 = format_indirectlyaffectedlagoon_4.readFeatures(json_indirectlyaffectedlagoon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indirectlyaffectedlagoon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indirectlyaffectedlagoon_4.addFeatures(features_indirectlyaffectedlagoon_4);
var lyr_indirectlyaffectedlagoon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indirectlyaffectedlagoon_4, 
                style: style_indirectlyaffectedlagoon_4,
                interactive: false,
                title: '<img src="styles/legend/indirectlyaffectedlagoon_4.png" /> indirectly affected lagoon'
            });
var format_lagoonaffectedbyoilspill_5 = new ol.format.GeoJSON();
var features_lagoonaffectedbyoilspill_5 = format_lagoonaffectedbyoilspill_5.readFeatures(json_lagoonaffectedbyoilspill_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lagoonaffectedbyoilspill_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lagoonaffectedbyoilspill_5.addFeatures(features_lagoonaffectedbyoilspill_5);
var lyr_lagoonaffectedbyoilspill_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lagoonaffectedbyoilspill_5, 
                style: style_lagoonaffectedbyoilspill_5,
                interactive: false,
                title: '<img src="styles/legend/lagoonaffectedbyoilspill_5.png" /> lagoon affected by oil spill'
            });
var format_oilspill_6 = new ol.format.GeoJSON();
var features_oilspill_6 = format_oilspill_6.readFeatures(json_oilspill_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oilspill_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oilspill_6.addFeatures(features_oilspill_6);
var lyr_oilspill_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oilspill_6, 
                style: style_oilspill_6,
                interactive: false,
                title: '<img src="styles/legend/oilspill_6.png" /> oil spill'
            });
var format_shippingroute_7 = new ol.format.GeoJSON();
var features_shippingroute_7 = format_shippingroute_7.readFeatures(json_shippingroute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shippingroute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shippingroute_7.addFeatures(features_shippingroute_7);
var lyr_shippingroute_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shippingroute_7, 
                style: style_shippingroute_7,
                interactive: false,
    title: 'shipping route<br />\
    <img src="styles/legend/shippingroute_7_0.png" /> 0 - 258<br />\
    <img src="styles/legend/shippingroute_7_1.png" /> 258 - 834<br />\
    <img src="styles/legend/shippingroute_7_2.png" /> 834 - 2055<br />\
    <img src="styles/legend/shippingroute_7_3.png" /> 2055 - 3664<br />\
    <img src="styles/legend/shippingroute_7_4.png" /> 3664 - 5465<br />\
    <img src="styles/legend/shippingroute_7_5.png" /> 5465 - 8185<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_bufferaroundshippingroute_1.setVisible(true);lyr_notaffectedlagoon_2.setVisible(true);lyr_directlyaffectedlagoon_3.setVisible(true);lyr_indirectlyaffectedlagoon_4.setVisible(true);lyr_lagoonaffectedbyoilspill_5.setVisible(true);lyr_oilspill_6.setVisible(true);lyr_shippingroute_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bufferaroundshippingroute_1,lyr_notaffectedlagoon_2,lyr_directlyaffectedlagoon_3,lyr_indirectlyaffectedlagoon_4,lyr_lagoonaffectedbyoilspill_5,lyr_oilspill_6,lyr_shippingroute_7];
lyr_bufferaroundshippingroute_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_notaffectedlagoon_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Laguuni_m2': 'Laguuni_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_directlyaffectedlagoon_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Laguuni_m2': 'Laguuni_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_indirectlyaffectedlagoon_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Laguuni_m2': 'Laguuni_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_lagoonaffectedbyoilspill_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Laguuni_m2': 'Laguuni_m2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_oilspill_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_shippingroute_7.set('fieldAliases', {'jnro': 'jnro', 'vay_nimisu': 'vay_nimisu', 'vay_nimiru': 'vay_nimiru', 'tila': 'tila', 'vaylalaji': 'vaylalaji', 'valaistus': 'valaistus', 'merial_nr': 'merial_nr', 'seloste_al': 'seloste_al', 'seloste_pa': 'seloste_pa', 'syvyydet': 'syvyydet', 'diaarinro': 'diaarinro', 'vahv_pvm': 'vahv_pvm', 'vayla_lk': 'vayla_lk', 'irrotus_pv': 'irrotus_pv', 'ORIG_FID': 'ORIG_FID', 'ORIG_SEQ': 'ORIG_SEQ', 'Shape_Leng': 'Shape_Leng', 'Z_Mean': 'Z_Mean', });
lyr_bufferaroundshippingroute_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_notaffectedlagoon_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Laguuni_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_directlyaffectedlagoon_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Laguuni_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_indirectlyaffectedlagoon_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Laguuni_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_lagoonaffectedbyoilspill_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Laguuni_m2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_oilspill_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_shippingroute_7.set('fieldImages', {'jnro': 'TextEdit', 'vay_nimisu': 'TextEdit', 'vay_nimiru': 'TextEdit', 'tila': 'TextEdit', 'vaylalaji': 'TextEdit', 'valaistus': 'TextEdit', 'merial_nr': 'TextEdit', 'seloste_al': 'TextEdit', 'seloste_pa': 'TextEdit', 'syvyydet': 'TextEdit', 'diaarinro': 'TextEdit', 'vahv_pvm': 'DateTime', 'vayla_lk': 'TextEdit', 'irrotus_pv': 'TextEdit', 'ORIG_FID': 'TextEdit', 'ORIG_SEQ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Z_Mean': 'TextEdit', });
lyr_bufferaroundshippingroute_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_notaffectedlagoon_2.set('fieldLabels', {'OBJECTID': 'no label', 'Laguuni_m2': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_directlyaffectedlagoon_3.set('fieldLabels', {'OBJECTID': 'no label', 'Laguuni_m2': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_indirectlyaffectedlagoon_4.set('fieldLabels', {'OBJECTID': 'no label', 'Laguuni_m2': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_lagoonaffectedbyoilspill_5.set('fieldLabels', {'OBJECTID': 'no label', 'Laguuni_m2': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_oilspill_6.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_shippingroute_7.set('fieldLabels', {'jnro': 'no label', 'vay_nimisu': 'no label', 'vay_nimiru': 'no label', 'tila': 'no label', 'vaylalaji': 'no label', 'valaistus': 'no label', 'merial_nr': 'no label', 'seloste_al': 'no label', 'seloste_pa': 'no label', 'syvyydet': 'no label', 'diaarinro': 'no label', 'vahv_pvm': 'no label', 'vayla_lk': 'no label', 'irrotus_pv': 'no label', 'ORIG_FID': 'no label', 'ORIG_SEQ': 'no label', 'Shape_Leng': 'no label', 'Z_Mean': 'no label', });
lyr_shippingroute_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});