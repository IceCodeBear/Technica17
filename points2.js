
    var countEl2 = document.getElementById("count2");
    var count2 = countEl2.value;
    function plus2(){
        count2++;
        countEl2.value = count2;
    }
    function minus2(){
      if (count2 > 0) {
        count2--;
        countEl2.value = count2;
      }  
    }