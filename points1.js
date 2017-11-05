
    var countEl1 = document.getElementById("count1");
    var count1 = countEl1.value;
    function plus1(){
        count1++;
        countEl1.value = count1;
    }
    function minus1(){
      if (count1 > 0) {
        count1--;
        countEl1.value = count1;
      }  
    }