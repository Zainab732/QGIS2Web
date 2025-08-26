var wms_layers = [];

var format_Pakistan_Province_0 = new ol.format.GeoJSON();
var features_Pakistan_Province_0 = format_Pakistan_Province_0.readFeatures(json_Pakistan_Province_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pakistan_Province_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pakistan_Province_0.addFeatures(features_Pakistan_Province_0);
var lyr_Pakistan_Province_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pakistan_Province_0, 
                style: style_Pakistan_Province_0,
                popuplayertitle: 'Pakistan_Province',
                interactive: false,
                title: '<img src="styles/legend/Pakistan_Province_0.png" /> Pakistan_Province'
            });
var format_Combine_Narowal_MCs_1 = new ol.format.GeoJSON();
var features_Combine_Narowal_MCs_1 = format_Combine_Narowal_MCs_1.readFeatures(json_Combine_Narowal_MCs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Combine_Narowal_MCs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combine_Narowal_MCs_1.addFeatures(features_Combine_Narowal_MCs_1);
var lyr_Combine_Narowal_MCs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combine_Narowal_MCs_1, 
                style: style_Combine_Narowal_MCs_1,
                popuplayertitle: 'Combine_Narowal_MCs',
                interactive: false,
                title: '<img src="styles/legend/Combine_Narowal_MCs_1.png" /> Combine_Narowal_MCs'
            });
var format_Tehsil_Boundary_2 = new ol.format.GeoJSON();
var features_Tehsil_Boundary_2 = format_Tehsil_Boundary_2.readFeatures(json_Tehsil_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tehsil_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tehsil_Boundary_2.addFeatures(features_Tehsil_Boundary_2);
var lyr_Tehsil_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tehsil_Boundary_2, 
                style: style_Tehsil_Boundary_2,
                popuplayertitle: 'Tehsil_Boundary',
                interactive: false,
                title: '<img src="styles/legend/Tehsil_Boundary_2.png" /> Tehsil_Boundary'
            });

lyr_Pakistan_Province_0.setVisible(true);lyr_Combine_Narowal_MCs_1.setVisible(true);lyr_Tehsil_Boundary_2.setVisible(true);
var layersList = [lyr_Pakistan_Province_0,lyr_Combine_Narowal_MCs_1,lyr_Tehsil_Boundary_2];
lyr_Pakistan_Province_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Combine_Narowal_MCs_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'District': 'District', 'Area': 'Area', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Population': 'Population', 'density': 'density', });
lyr_Tehsil_Boundary_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Pop': 'Pop', 'Area': 'Area', 'Popu': 'Popu', 'Field': 'Field', });
lyr_Pakistan_Province_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Combine_Narowal_MCs_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Name': 'TextEdit', 'District': 'TextEdit', 'Area': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Population': 'TextEdit', 'density': 'TextEdit', });
lyr_Tehsil_Boundary_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Pop': 'TextEdit', 'Area': 'TextEdit', 'Popu': 'TextEdit', 'Field': 'TextEdit', });
lyr_Pakistan_Province_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Combine_Narowal_MCs_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Name': 'no label', 'District': 'no label', 'Area': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Population': 'no label', 'density': 'no label', });
lyr_Tehsil_Boundary_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT2EN': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Pop': 'no label', 'Area': 'no label', 'Popu': 'no label', 'Field': 'no label', });
lyr_Tehsil_Boundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});