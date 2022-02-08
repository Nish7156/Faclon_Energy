var headings = ['ISO 50001','Streamline & Digitize your Energy Management with I/O Sense'];
var smalls=['I/O Sense','A Comprehensuite for all Your Needs']
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById('heading').innerHTML = headings[i];
  document.getElementById('small').innerHTML=smalls[i];
  if (i == (headings.length - 1) && (smalls.length-1)) {
    i = 0;
    //you can even clear interval here to make heading stay as last one in array
    //cleanInterval(intervalId);
    if(i==0){
        document.getElementById('heading').innerHTML = headings[1];
        document.getElementById("heading").style.fontSize = "45px";
        document.getElementById("heading").style.color = "black";
        
        console.log("i==0",i);

        //For Small
        document.getElementById('small').innerHTML = smalls[1];
        document.getElementById("small").style.fontSize = "45px";
        
        console.log("small-i==0",i);
        
    }
    console.log("returm",i);
  } else {
    i++;
  }
  console.log("change"+i);
}, 2000)





















