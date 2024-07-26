var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Provinciasprovinciasgpkg__provinciacopiar_1 = new ol.format.GeoJSON();
var features_Provinciasprovinciasgpkg__provinciacopiar_1 = format_Provinciasprovinciasgpkg__provinciacopiar_1.readFeatures(json_Provinciasprovinciasgpkg__provinciacopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provinciasprovinciasgpkg__provinciacopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provinciasprovinciasgpkg__provinciacopiar_1.addFeatures(features_Provinciasprovinciasgpkg__provinciacopiar_1);
var lyr_Provinciasprovinciasgpkg__provinciacopiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provinciasprovinciasgpkg__provinciacopiar_1, 
                style: style_Provinciasprovinciasgpkg__provinciacopiar_1,
                popuplayertitle: "Provincias — provinciasgpkg__provincia copiar",
                interactive: false,
    title: 'Provincias — provinciasgpkg__provincia copiar<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_0.png" /> BUENOS AIRES<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_1.png" /> CABA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_2.png" /> CATAMARCA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_3.png" /> CHACO<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_4.png" /> CHUBUT<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_5.png" /> CORDOBA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_6.png" /> CORRIENTES<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_7.png" /> ENTRE RIOS<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_8.png" /> FORMOSA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_9.png" /> JUJUY<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_10.png" /> LA PAMPA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_11.png" /> LA RIOJA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_12.png" /> MENDOZA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_13.png" /> MISIONES<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_14.png" /> NEUQUEN<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_15.png" /> RIO NEGRO<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_16.png" /> SALTA<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_17.png" /> SAN JUAN<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_18.png" /> SAN LUIS<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_19.png" /> SANTA CRUZ<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_20.png" /> SANTA FE<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_21.png" /> SANTIAGO DEL ESTERO<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_22.png" /> TIERRA DEL FUEGO<br />\
    <img src="styles/legend/Provinciasprovinciasgpkg__provinciacopiar_1_23.png" /> TUCUMAN<br />'
        });
var format_Provinciasprovinciasgpkg__provincia_2 = new ol.format.GeoJSON();
var features_Provinciasprovinciasgpkg__provincia_2 = format_Provinciasprovinciasgpkg__provincia_2.readFeatures(json_Provinciasprovinciasgpkg__provincia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provinciasprovinciasgpkg__provincia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provinciasprovinciasgpkg__provincia_2.addFeatures(features_Provinciasprovinciasgpkg__provincia_2);
var lyr_Provinciasprovinciasgpkg__provincia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provinciasprovinciasgpkg__provincia_2, 
                style: style_Provinciasprovinciasgpkg__provincia_2,
                popuplayertitle: "Provincias — provinciasgpkg__provincia",
                interactive: false,
                title: '<img src="styles/legend/Provinciasprovinciasgpkg__provincia_2.png" /> Provincias — provinciasgpkg__provincia'
            });
var format_2021_3 = new ol.format.GeoJSON();
var features_2021_3 = format_2021_3.readFeatures(json_2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_3.addFeatures(features_2021_3);
var lyr_2021_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_2021_3, 
                radius: 5 * 2,
                gradient: ['#30123b', '#321543', '#33184a', '#341b51', '#351e58', '#36215f', '#372466', '#38276d', '#392a73', '#3a2d79', '#3b2f80', '#3c3286', '#3d358b', '#3e3891', '#3f3b97', '#3f3e9c', '#4040a2', '#4143a7', '#4146ac', '#4249b1', '#424bb5', '#434eba', '#4451bf', '#4454c3', '#4456c7', '#4559cb', '#455ccf', '#455ed3', '#4661d6', '#4664da', '#4666dd', '#4669e0', '#466be3', '#476ee6', '#4771e9', '#4773eb', '#4776ee', '#4778f0', '#477bf2', '#467df4', '#4680f6', '#4682f8', '#4685fa', '#4687fb', '#458afc', '#458cfd', '#448ffe', '#4391fe', '#4294ff', '#4196ff', '#4099ff', '#3e9bfe', '#3d9efe', '#3ba0fd', '#3aa3fc', '#38a5fb', '#37a8fa', '#35abf8', '#33adf7', '#31aff5', '#2fb2f4', '#2eb4f2', '#2cb7f0', '#2ab9ee', '#28bceb', '#27bee9', '#25c0e7', '#23c3e4', '#22c5e2', '#20c7df', '#1fc9dd', '#1ecbda', '#1ccdd8', '#1bd0d5', '#1ad2d2', '#1ad4d0', '#19d5cd', '#18d7ca', '#18d9c8', '#18dbc5', '#18ddc2', '#18dec0', '#18e0bd', '#19e2bb', '#19e3b9', '#1ae4b6', '#1ce6b4', '#1de7b2', '#1fe9af', '#20eaac', '#22ebaa', '#25eca7', '#27eea4', '#2aefa1', '#2cf09e', '#2ff19b', '#32f298', '#35f394', '#38f491', '#3cf58e', '#3ff68a', '#43f787', '#46f884', '#4af880', '#4ef97d', '#52fa7a', '#55fa76', '#59fb73', '#5dfc6f', '#61fc6c', '#65fd69', '#69fd66', '#6dfe62', '#71fe5f', '#75fe5c', '#79fe59', '#7dff56', '#80ff53', '#84ff51', '#88ff4e', '#8bff4b', '#8fff49', '#92ff47', '#96fe44', '#99fe42', '#9cfe40', '#9ffd3f', '#a1fd3d', '#a4fc3c', '#a7fc3a', '#a9fb39', '#acfb38', '#affa37', '#b1f936', '#b4f836', '#b7f735', '#b9f635', '#bcf534', '#bef434', '#c1f334', '#c3f134', '#c6f034', '#c8ef34', '#cbed34', '#cdec34', '#d0ea34', '#d2e935', '#d4e735', '#d7e535', '#d9e436', '#dbe236', '#dde037', '#dfdf37', '#e1dd37', '#e3db38', '#e5d938', '#e7d739', '#e9d539', '#ebd339', '#ecd13a', '#eecf3a', '#efcd3a', '#f1cb3a', '#f2c93a', '#f4c73a', '#f5c53a', '#f6c33a', '#f7c13a', '#f8be39', '#f9bc39', '#faba39', '#fbb838', '#fbb637', '#fcb336', '#fcb136', '#fdae35', '#fdac34', '#fea933', '#fea732', '#fea431', '#fea130', '#fe9e2f', '#fe9b2d', '#fe992c', '#fe962b', '#fe932a', '#fe9029', '#fd8d27', '#fd8a26', '#fc8725', '#fc8423', '#fb8122', '#fb7e21', '#fa7b1f', '#f9781e', '#f9751d', '#f8721c', '#f76f1a', '#f66c19', '#f56918', '#f46617', '#f36315', '#f26014', '#f15d13', '#f05b12', '#ef5811', '#ed5510', '#ec530f', '#eb500e', '#ea4e0d', '#e84b0c', '#e7490c', '#e5470b', '#e4450a', '#e2430a', '#e14109', '#df3f08', '#dd3d08', '#dc3b07', '#da3907', '#d83706', '#d63506', '#d43305', '#d23105', '#d02f05', '#ce2d04', '#cc2b04', '#ca2a04', '#c82803', '#c52603', '#c32503', '#c12302', '#be2102', '#bc2002', '#b91e02', '#b71d02', '#b41b01', '#b21a01', '#af1801', '#ac1701', '#a91601', '#a71401', '#a41301', '#a11201', '#9e1001', '#9b0f01', '#980e01', '#950d01', '#920b01', '#8e0a01', '#8b0902', '#880802', '#850702', '#810602', '#7a0403'],
                blur: 15,
                shadow: 250,
                title: '2021'
            });
var format_2022_4 = new ol.format.GeoJSON();
var features_2022_4 = format_2022_4.readFeatures(json_2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_4.addFeatures(features_2022_4);
var lyr_2022_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_2022_4, 
                radius: 5 * 2,
                gradient: ['#30123b', '#321543', '#33184a', '#341b51', '#351e58', '#36215f', '#372466', '#38276d', '#392a73', '#3a2d79', '#3b2f80', '#3c3286', '#3d358b', '#3e3891', '#3f3b97', '#3f3e9c', '#4040a2', '#4143a7', '#4146ac', '#4249b1', '#424bb5', '#434eba', '#4451bf', '#4454c3', '#4456c7', '#4559cb', '#455ccf', '#455ed3', '#4661d6', '#4664da', '#4666dd', '#4669e0', '#466be3', '#476ee6', '#4771e9', '#4773eb', '#4776ee', '#4778f0', '#477bf2', '#467df4', '#4680f6', '#4682f8', '#4685fa', '#4687fb', '#458afc', '#458cfd', '#448ffe', '#4391fe', '#4294ff', '#4196ff', '#4099ff', '#3e9bfe', '#3d9efe', '#3ba0fd', '#3aa3fc', '#38a5fb', '#37a8fa', '#35abf8', '#33adf7', '#31aff5', '#2fb2f4', '#2eb4f2', '#2cb7f0', '#2ab9ee', '#28bceb', '#27bee9', '#25c0e7', '#23c3e4', '#22c5e2', '#20c7df', '#1fc9dd', '#1ecbda', '#1ccdd8', '#1bd0d5', '#1ad2d2', '#1ad4d0', '#19d5cd', '#18d7ca', '#18d9c8', '#18dbc5', '#18ddc2', '#18dec0', '#18e0bd', '#19e2bb', '#19e3b9', '#1ae4b6', '#1ce6b4', '#1de7b2', '#1fe9af', '#20eaac', '#22ebaa', '#25eca7', '#27eea4', '#2aefa1', '#2cf09e', '#2ff19b', '#32f298', '#35f394', '#38f491', '#3cf58e', '#3ff68a', '#43f787', '#46f884', '#4af880', '#4ef97d', '#52fa7a', '#55fa76', '#59fb73', '#5dfc6f', '#61fc6c', '#65fd69', '#69fd66', '#6dfe62', '#71fe5f', '#75fe5c', '#79fe59', '#7dff56', '#80ff53', '#84ff51', '#88ff4e', '#8bff4b', '#8fff49', '#92ff47', '#96fe44', '#99fe42', '#9cfe40', '#9ffd3f', '#a1fd3d', '#a4fc3c', '#a7fc3a', '#a9fb39', '#acfb38', '#affa37', '#b1f936', '#b4f836', '#b7f735', '#b9f635', '#bcf534', '#bef434', '#c1f334', '#c3f134', '#c6f034', '#c8ef34', '#cbed34', '#cdec34', '#d0ea34', '#d2e935', '#d4e735', '#d7e535', '#d9e436', '#dbe236', '#dde037', '#dfdf37', '#e1dd37', '#e3db38', '#e5d938', '#e7d739', '#e9d539', '#ebd339', '#ecd13a', '#eecf3a', '#efcd3a', '#f1cb3a', '#f2c93a', '#f4c73a', '#f5c53a', '#f6c33a', '#f7c13a', '#f8be39', '#f9bc39', '#faba39', '#fbb838', '#fbb637', '#fcb336', '#fcb136', '#fdae35', '#fdac34', '#fea933', '#fea732', '#fea431', '#fea130', '#fe9e2f', '#fe9b2d', '#fe992c', '#fe962b', '#fe932a', '#fe9029', '#fd8d27', '#fd8a26', '#fc8725', '#fc8423', '#fb8122', '#fb7e21', '#fa7b1f', '#f9781e', '#f9751d', '#f8721c', '#f76f1a', '#f66c19', '#f56918', '#f46617', '#f36315', '#f26014', '#f15d13', '#f05b12', '#ef5811', '#ed5510', '#ec530f', '#eb500e', '#ea4e0d', '#e84b0c', '#e7490c', '#e5470b', '#e4450a', '#e2430a', '#e14109', '#df3f08', '#dd3d08', '#dc3b07', '#da3907', '#d83706', '#d63506', '#d43305', '#d23105', '#d02f05', '#ce2d04', '#cc2b04', '#ca2a04', '#c82803', '#c52603', '#c32503', '#c12302', '#be2102', '#bc2002', '#b91e02', '#b71d02', '#b41b01', '#b21a01', '#af1801', '#ac1701', '#a91601', '#a71401', '#a41301', '#a11201', '#9e1001', '#9b0f01', '#980e01', '#950d01', '#920b01', '#8e0a01', '#8b0902', '#880802', '#850702', '#810602', '#7a0403'],
                blur: 15,
                shadow: 250,
                title: '2022'
            });
var format_2023_5 = new ol.format.GeoJSON();
var features_2023_5 = format_2023_5.readFeatures(json_2023_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_5.addFeatures(features_2023_5);
var lyr_2023_5 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_2023_5, 
                radius: 5 * 2,
                gradient: ['#30123b', '#321543', '#33184a', '#341b51', '#351e58', '#36215f', '#372466', '#38276d', '#392a73', '#3a2d79', '#3b2f80', '#3c3286', '#3d358b', '#3e3891', '#3f3b97', '#3f3e9c', '#4040a2', '#4143a7', '#4146ac', '#4249b1', '#424bb5', '#434eba', '#4451bf', '#4454c3', '#4456c7', '#4559cb', '#455ccf', '#455ed3', '#4661d6', '#4664da', '#4666dd', '#4669e0', '#466be3', '#476ee6', '#4771e9', '#4773eb', '#4776ee', '#4778f0', '#477bf2', '#467df4', '#4680f6', '#4682f8', '#4685fa', '#4687fb', '#458afc', '#458cfd', '#448ffe', '#4391fe', '#4294ff', '#4196ff', '#4099ff', '#3e9bfe', '#3d9efe', '#3ba0fd', '#3aa3fc', '#38a5fb', '#37a8fa', '#35abf8', '#33adf7', '#31aff5', '#2fb2f4', '#2eb4f2', '#2cb7f0', '#2ab9ee', '#28bceb', '#27bee9', '#25c0e7', '#23c3e4', '#22c5e2', '#20c7df', '#1fc9dd', '#1ecbda', '#1ccdd8', '#1bd0d5', '#1ad2d2', '#1ad4d0', '#19d5cd', '#18d7ca', '#18d9c8', '#18dbc5', '#18ddc2', '#18dec0', '#18e0bd', '#19e2bb', '#19e3b9', '#1ae4b6', '#1ce6b4', '#1de7b2', '#1fe9af', '#20eaac', '#22ebaa', '#25eca7', '#27eea4', '#2aefa1', '#2cf09e', '#2ff19b', '#32f298', '#35f394', '#38f491', '#3cf58e', '#3ff68a', '#43f787', '#46f884', '#4af880', '#4ef97d', '#52fa7a', '#55fa76', '#59fb73', '#5dfc6f', '#61fc6c', '#65fd69', '#69fd66', '#6dfe62', '#71fe5f', '#75fe5c', '#79fe59', '#7dff56', '#80ff53', '#84ff51', '#88ff4e', '#8bff4b', '#8fff49', '#92ff47', '#96fe44', '#99fe42', '#9cfe40', '#9ffd3f', '#a1fd3d', '#a4fc3c', '#a7fc3a', '#a9fb39', '#acfb38', '#affa37', '#b1f936', '#b4f836', '#b7f735', '#b9f635', '#bcf534', '#bef434', '#c1f334', '#c3f134', '#c6f034', '#c8ef34', '#cbed34', '#cdec34', '#d0ea34', '#d2e935', '#d4e735', '#d7e535', '#d9e436', '#dbe236', '#dde037', '#dfdf37', '#e1dd37', '#e3db38', '#e5d938', '#e7d739', '#e9d539', '#ebd339', '#ecd13a', '#eecf3a', '#efcd3a', '#f1cb3a', '#f2c93a', '#f4c73a', '#f5c53a', '#f6c33a', '#f7c13a', '#f8be39', '#f9bc39', '#faba39', '#fbb838', '#fbb637', '#fcb336', '#fcb136', '#fdae35', '#fdac34', '#fea933', '#fea732', '#fea431', '#fea130', '#fe9e2f', '#fe9b2d', '#fe992c', '#fe962b', '#fe932a', '#fe9029', '#fd8d27', '#fd8a26', '#fc8725', '#fc8423', '#fb8122', '#fb7e21', '#fa7b1f', '#f9781e', '#f9751d', '#f8721c', '#f76f1a', '#f66c19', '#f56918', '#f46617', '#f36315', '#f26014', '#f15d13', '#f05b12', '#ef5811', '#ed5510', '#ec530f', '#eb500e', '#ea4e0d', '#e84b0c', '#e7490c', '#e5470b', '#e4450a', '#e2430a', '#e14109', '#df3f08', '#dd3d08', '#dc3b07', '#da3907', '#d83706', '#d63506', '#d43305', '#d23105', '#d02f05', '#ce2d04', '#cc2b04', '#ca2a04', '#c82803', '#c52603', '#c32503', '#c12302', '#be2102', '#bc2002', '#b91e02', '#b71d02', '#b41b01', '#b21a01', '#af1801', '#ac1701', '#a91601', '#a71401', '#a41301', '#a11201', '#9e1001', '#9b0f01', '#980e01', '#950d01', '#920b01', '#8e0a01', '#8b0902', '#880802', '#850702', '#810602', '#7a0403'],
                blur: 15,
                shadow: 250,
                title: '2023'
            });
var format_2024_6 = new ol.format.GeoJSON();
var features_2024_6 = format_2024_6.readFeatures(json_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_6.addFeatures(features_2024_6);
var lyr_2024_6 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_2024_6, 
                radius: 5 * 2,
                gradient: ['#30123b', '#321543', '#33184a', '#341b51', '#351e58', '#36215f', '#372466', '#38276d', '#392a73', '#3a2d79', '#3b2f80', '#3c3286', '#3d358b', '#3e3891', '#3f3b97', '#3f3e9c', '#4040a2', '#4143a7', '#4146ac', '#4249b1', '#424bb5', '#434eba', '#4451bf', '#4454c3', '#4456c7', '#4559cb', '#455ccf', '#455ed3', '#4661d6', '#4664da', '#4666dd', '#4669e0', '#466be3', '#476ee6', '#4771e9', '#4773eb', '#4776ee', '#4778f0', '#477bf2', '#467df4', '#4680f6', '#4682f8', '#4685fa', '#4687fb', '#458afc', '#458cfd', '#448ffe', '#4391fe', '#4294ff', '#4196ff', '#4099ff', '#3e9bfe', '#3d9efe', '#3ba0fd', '#3aa3fc', '#38a5fb', '#37a8fa', '#35abf8', '#33adf7', '#31aff5', '#2fb2f4', '#2eb4f2', '#2cb7f0', '#2ab9ee', '#28bceb', '#27bee9', '#25c0e7', '#23c3e4', '#22c5e2', '#20c7df', '#1fc9dd', '#1ecbda', '#1ccdd8', '#1bd0d5', '#1ad2d2', '#1ad4d0', '#19d5cd', '#18d7ca', '#18d9c8', '#18dbc5', '#18ddc2', '#18dec0', '#18e0bd', '#19e2bb', '#19e3b9', '#1ae4b6', '#1ce6b4', '#1de7b2', '#1fe9af', '#20eaac', '#22ebaa', '#25eca7', '#27eea4', '#2aefa1', '#2cf09e', '#2ff19b', '#32f298', '#35f394', '#38f491', '#3cf58e', '#3ff68a', '#43f787', '#46f884', '#4af880', '#4ef97d', '#52fa7a', '#55fa76', '#59fb73', '#5dfc6f', '#61fc6c', '#65fd69', '#69fd66', '#6dfe62', '#71fe5f', '#75fe5c', '#79fe59', '#7dff56', '#80ff53', '#84ff51', '#88ff4e', '#8bff4b', '#8fff49', '#92ff47', '#96fe44', '#99fe42', '#9cfe40', '#9ffd3f', '#a1fd3d', '#a4fc3c', '#a7fc3a', '#a9fb39', '#acfb38', '#affa37', '#b1f936', '#b4f836', '#b7f735', '#b9f635', '#bcf534', '#bef434', '#c1f334', '#c3f134', '#c6f034', '#c8ef34', '#cbed34', '#cdec34', '#d0ea34', '#d2e935', '#d4e735', '#d7e535', '#d9e436', '#dbe236', '#dde037', '#dfdf37', '#e1dd37', '#e3db38', '#e5d938', '#e7d739', '#e9d539', '#ebd339', '#ecd13a', '#eecf3a', '#efcd3a', '#f1cb3a', '#f2c93a', '#f4c73a', '#f5c53a', '#f6c33a', '#f7c13a', '#f8be39', '#f9bc39', '#faba39', '#fbb838', '#fbb637', '#fcb336', '#fcb136', '#fdae35', '#fdac34', '#fea933', '#fea732', '#fea431', '#fea130', '#fe9e2f', '#fe9b2d', '#fe992c', '#fe962b', '#fe932a', '#fe9029', '#fd8d27', '#fd8a26', '#fc8725', '#fc8423', '#fb8122', '#fb7e21', '#fa7b1f', '#f9781e', '#f9751d', '#f8721c', '#f76f1a', '#f66c19', '#f56918', '#f46617', '#f36315', '#f26014', '#f15d13', '#f05b12', '#ef5811', '#ed5510', '#ec530f', '#eb500e', '#ea4e0d', '#e84b0c', '#e7490c', '#e5470b', '#e4450a', '#e2430a', '#e14109', '#df3f08', '#dd3d08', '#dc3b07', '#da3907', '#d83706', '#d63506', '#d43305', '#d23105', '#d02f05', '#ce2d04', '#cc2b04', '#ca2a04', '#c82803', '#c52603', '#c32503', '#c12302', '#be2102', '#bc2002', '#b91e02', '#b71d02', '#b41b01', '#b21a01', '#af1801', '#ac1701', '#a91601', '#a71401', '#a41301', '#a11201', '#9e1001', '#9b0f01', '#980e01', '#950d01', '#920b01', '#8e0a01', '#8b0902', '#880802', '#850702', '#810602', '#7a0403'],
                blur: 15,
                shadow: 250,
                title: '2024'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Provinciasprovinciasgpkg__provinciacopiar_1.setVisible(true);lyr_Provinciasprovinciasgpkg__provincia_2.setVisible(true);lyr_2021_3.setVisible(true);lyr_2022_4.setVisible(true);lyr_2023_5.setVisible(true);lyr_2024_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Provinciasprovinciasgpkg__provinciacopiar_1,lyr_Provinciasprovinciasgpkg__provincia_2,lyr_2021_3,lyr_2022_4,lyr_2023_5,lyr_2024_6];
lyr_Provinciasprovinciasgpkg__provinciacopiar_1.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Provinciasprovinciasgpkg__provincia_2.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Provinciasprovinciasgpkg__provinciacopiar_1.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Provinciasprovinciasgpkg__provincia_2.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'entidad': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Provinciasprovinciasgpkg__provinciacopiar_1.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'entidad': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Provinciasprovinciasgpkg__provincia_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'gid': 'no label', 'entidad': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'in1': 'no label', 'fdc': 'no label', 'sag': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_Provinciasprovinciasgpkg__provincia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});