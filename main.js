Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera=document.getElementById('camera');
Webcam.attach('#camera');

function identify() {
    Webcam.snap(function(data_uri){
        document.getElementById('pic').innerHTML="<img id='fr_img' src="+data_uri+">"; 
    })
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ddZ45JcdD/model.json", modelloaded);

function modelloaded()
{
    console.log('Model has been loaded!')
}

function check()
{
    img = document.getElementById('fr_img');
    classifier.classify(img, gotResults);
}

function gotResults(error, results)
{
if(error)
{
    console.log(error);
}
else
{
    console.log(results)
    document.getElementById("who").innerHTML = results[0].label;
    document.getElementById("what").innerHTML = results[0].confidence.toFixed(3);
}
}