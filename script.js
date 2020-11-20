/*Environments*/

function st(){
        var i = document.createElement("img");
        i.src = "http://localhost:8888/variants?value=selectVariantSet('Env_Studio')";
};

function co(){
        var i = document.createElement("img");
        i.src = "http://localhost:8888/variants?value=selectVariantSet('Env_Coast')";
};

function rt(){
        var i = document.createElement("img");
        i.src = "http://localhost:8888/variants?value=selectVariantSet('Env_Racetrack')";
};

/*Env Exposure*/
function showVal0(newVal){
  var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=studio=findMaterial('Studio'); studio.fields().setReal32('exposure', " + newVal + "); coast=findMaterial('Coast'); coast.fields().setReal32('exposure', " + newVal + "); racetrack=findMaterial('Racetrack'); racetrack.fields().setReal32('exposure', " + newVal + ")";
};

/*On/Off*/

function ch1() {
    var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=node=selectNode('AmbientLight_Front'); getSelectedNode().toggleLight()";
};

function ch2() {
    var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=node=selectNode('AmbientLight_Rear'); getSelectedNode().toggleLight()";
};

/*Ambient Color*/

function whi(){
    var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=node=selectNode('AmbientLight_Front'); getSelectedNode().setDiffuseLightColor(1, 1, 1); selectNode('AmbientLight_Rear'); getSelectedNode().setDiffuseLightColor(1, 1, 1)";
};

function cld(){
    var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=node=selectNode('AmbientLight_Front'); getSelectedNode().setDiffuseLightColor(0.0 ,0.7, 1); selectNode('AmbientLight_Rear'); getSelectedNode().setDiffuseLightColor(0.0 ,0.7, 1)";
};

function wrm(){
    var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=node=selectNode('AmbientLight_Front'); getSelectedNode().setDiffuseLightColor(1.0 ,0.7, 0); selectNode('AmbientLight_Rear'); getSelectedNode().setDiffuseLightColor(1.0 ,0.7, 0)";
};

/*Ambient Intensity*/
function showVal1(newVal){
  var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=node=selectNode('AmbientLight_Front'); getSelectedNode().setLightIntensity(" + newVal + ")";
};

function showVal2(newVal){
  var i = document.createElement("img");
    i.src = "http://localhost:8888/python?value=node=selectNode('AmbientLight_Rear'); getSelectedNode().setLightIntensity(" + newVal + ")";
};