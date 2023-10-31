function myFunction() {
    
    var x = document.getElementsByClassName("name");
    var txt;
    var name = prompt("Please enter a name:", "");{
      txt =  name;
      console.log(name);
      var i;
  for (i = 0; i < x.length; i++) {
      x[i].innerHTML= name;
    } 
  }  }
  
  
    function change()
  {
      document.getElementById("aa").value="BEGIN"; 
  } 
  
  /*
  
  
  
  var y = document.getElementById("aa");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
      
  
  
  */
  
  
  
  // DONT TOUCH
  var example2Event = function(event) {
    var element = event.target;
    console.log(element.id);
    
    
    // hide everything
   
    // show the next step
    var nextStep;
    
    if (element.id == "l1") {
      nextStep = "b";
   
    } else if (element.id == "r1"){
      nextStep = "b";
    }
    else if (element.id == "aa"){
      nextStep = "a";
    }
    else if (element.id == "home"){
      nextStep = "a";
    }
    else if (element.id == "lefthome"){
      nextStep = "a";
    }
    else if (element.id == "r2"){
      nextStep = "c";
    }
    else if (element.id == "l2"){
      nextStep = "c";
    }
    else if (element.id == "r3"){
      nextStep = "d";
    }
     else if (element.id == "l3"){
      nextStep = "d";
    }
    else if (element.id == "l4"){
      nextStep = "e";
    }
    else if (element.id == "r4"){
      nextStep = "e";
    }
     else if (element.id == "l5"){
      nextStep = "f";
    }
    else if (element.id == "r5"){
      nextStep = "f";
    }
   
    
    if (nextStep) { 
       
    var everyStep = document.querySelectorAll('.con');
    everyStep.forEach(function(element){
    element.classList.add('hidden');   //hides everything
    })
      
    var nextSelector = "#"+ nextStep;
    var nextElement = document.querySelector(nextSelector);
    nextElement.classList.toggle('hidden'); 
    nextElement.classList.toggle('anim'); 
    
    }
   
  // nextElement.scrollIntoView({behavior: 'smooth', block: 'center'})
   
  };
  // 3. Connect function and click event to interface element
  document.body.addEventListener('click', example2Event);
  //document.body.addEventListener('click', example2Event);
  // document.body.addEventListener('click', scrollIntoView)