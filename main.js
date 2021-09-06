
    
    console.log("ml5 Version Check : ", ml5.version);
    
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
    
    function modelLoaded(){
       console.log("Model has loaded");
       check();
    }
    
    
    function check(){
      img="Cake.jpeg";
    classifier.classify(img, gotResult);
    }
    
    function gotResult(error,results){
       if (error){
          console.error(error);
       }
       else {
          console.log(results);
          document.getElementById("mobile_net_output").innerHTML = results[0].label;
       }
    }