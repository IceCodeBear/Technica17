    var countEl = document.getElementById("count");
    var count = countEl.value;
    function plus(){
        count++;
        countEl.value = count;
    }
    function minus(){
      if (count > 0) {
        count--;
        countEl.value = count;
      }  
    }


