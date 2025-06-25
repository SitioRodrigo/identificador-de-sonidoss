function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/who7zb7FI/model.json', modelReady);

}

function modelReady()
{
    classifier.classify( gotResults);

}

function gotResults(error, results) {

    if (error){
        console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255 + 1)
      random_number_g = Math.floor(Math.random() * 255 + 1)
      random_number_b = Math.floor(Math.random() * 255 + 1)
    
      document.getElementById("result_label").innerHTML = 'escucho - ' + results[0].Label
      document.getElementById("result_confidence").innerHTML = 'precision - ' + (results[0].confidence*100).toFixed(2)+"%";
      document.getElementById("result_label").style.color ="rgb("+random_number_r+", "+random_number_g+", "+random_number_r+")";
      document.getElementById("result_confidence").style.color ="rgb("+random_number_r+", "+random_number_g+", "+random_number_r+")";

      img = document.getElementById('alien1')
      img1 = document.getElementById('alien2')
      img2 = document.getElementById('alien3')
      img3 = document.getElementById('alien4')

      if (results[0].label == "aplausos") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if(results[0].label == "golpes") {
        img.src = 'aliens-01.png'
        img1.src = 'aliens-02.gif'
        img2.src = 'aliens-03.png'
        img3.src = 'aliens-04.png'
      } else if(results[0].label == "chasquido") {
        img.src = 'aliens-01.png'
        img1.src = 'aliens-02.png'
        img2.src = 'aliens-03.gif'
        img3.src = 'aliens-04.png'
      } else {
        img.src = 'aliens-01.png'
        img.src1 = 'aliens-02.png'
        img.src2 = 'aliens-03.png'
        img.src3= 'aliens-04.gif'
      }
    }
}
