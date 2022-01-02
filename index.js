window.onload = loadpage = () => {
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  document.getElementById("bar1").style.width= 33.33 + "%";
  page2.style.display="none";
  page3.style.display="none";
  myoptions1();
  validationpage1();
}

const mypage2 = () => {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  page1.style.display="none";
  page2.style.display="block";
  document.getElementById("bar2").style.width= 66.66 + "%";
  myoptions2();
  validationpage2();
}

const mypage3 = () => {
  var page2= document.getElementById("page2");
  var page3= document.getElementById("page3");
  document.getElementById("bar3").style.width= 100 + "%";
  page2.style.display="none";
  page3.style.display="block";
  myoptions3();
  validationpage3();
}

const myoptions1 = () => {
  
  const select = document.querySelector('.select1');
  const optionBox = document.querySelector('.options1');
  const options = [...document.querySelectorAll('.options1 .item')];
  let activeOption = 0; // default should be 0

  window.onclick = (e) => {
  if(!e.target.className.includes('select1')){
      select.classList.remove('active');
      optionBox.classList.remove('active');
    } else{
      select.classList.toggle('active');
      optionBox.classList.toggle('active');
    }
  }
  
  options.forEach((item, i) => {
    item.onmousemove = () => {
      hoverOptions(i);
    }
  })
  
  const hoverOptions = (i) => {
    options[activeOption].classList.remove('active');
    options[i].classList.add('active');
    activeOption = i;
    setValue();
  }
  
  
  const setValue = () => {
    select.innerHTML = select.value = options[activeOption].innerHTML;
  }
  
  setValue();
}

const myoptions2 = () => {
  const select2 = document.querySelector('.select2');
  const select3 = document.querySelector('.select3');
  const optionBox1= document.querySelector('.options2');
  const optionBox2 = document.querySelector('.options3');
  const options1 = [...document.querySelectorAll('.options2 .item')];
  const options2 = [...document.querySelectorAll('.options3 .item')];
  let activeOption1 = 0; // default should be 0
  let activeOption2 = 0; // default should be 0

    window.onclick = (e) => {
    if(!e.target.className.includes('select2')){
        select2.classList.remove('active');
        optionBox1.classList.remove('active');
      } else{
        select2.classList.toggle('active');
        optionBox1.classList.toggle('active');
      }

    if(!e.target.className.includes('select3')){
      select3.classList.remove('active');
      optionBox2.classList.remove('active');
    } else{
      select3.classList.toggle('active');
      optionBox2.classList.toggle('active');
    } 
  }
 
    options1.forEach((item, i) => {
      item.onmousemove = () => {
        hoverOptions1(i);
      }
    })
    
    const hoverOptions1 = (i) => {
      options1[activeOption1].classList.remove('active');
      options1[i].classList.add('active');
      activeOption1 = i;
      setValue1();
    }
    
    options2.forEach((item, i) => {
      item.onmousemove = () => {
        hoverOptions2(i);
      }
    })
    
    const hoverOptions2 = (i) => {
      options2[activeOption1].classList.remove('active');
      options2[i].classList.add('active');
      activeOption2 = i;
      setValue2();
    }
    const setValue1 = () => {
      select2.innerHTML = select2.value = options1[activeOption1].innerHTML;
    }
    setValue1();

    const setValue2 = () => {
      select3.innerHTML = select3.value = options2[activeOption2].innerHTML;
    }
    setValue2();
  }

const myoptions3 = () => {
  const select4 = document.querySelector('.select4');
  const select5 = document.querySelector('.select5');
  const optionBox3= document.querySelector('.options4');
  const optionBox4 = document.querySelector('.options5');
  const options3 = [...document.querySelectorAll('.options4 .item')];
  const options4 = [...document.querySelectorAll('.options5 .item')];
  let activeOption3 = 0; // default should be 0
  let activeOption4 = 0; // default should be 0
  
    window.onclick = (e) => {
    if(!e.target.className.includes('select4')){
        select4.classList.remove('active');
        optionBox3.classList.remove('active');
      } else{
        select4.classList.toggle('active');
        optionBox3.classList.toggle('active');
      }
  
    if(!e.target.className.includes('select5')){
      select5.classList.remove('active');
      optionBox4.classList.remove('active');
    } else{
      select5.classList.toggle('active');
      optionBox4.classList.toggle('active');
    } 
  }
   
    options3.forEach((item, i) => {
      item.onmousemove = () => {
        hoverOptions3(i);
      }
    })
      
    const hoverOptions3 = (i) => {
      options3[activeOption3].classList.remove('active');
      options3[i].classList.add('active');
      activeOption3 = i;
      setValue3();
    }
      
    options4.forEach((item, i) => {
      item.onmousemove = () => {
        hoverOptions4(i);
      }
    })
      
    const hoverOptions4 = (i) => {
      options4[activeOption4].classList.remove('active');
      options4[i].classList.add('active');
      activeOption4 = i;
      setValue4();
    }
    const setValue3 = () => {
      select4.innerHTML = select4.value = options3[activeOption3].innerHTML;
    }
    setValue3();
  
    const setValue4 = () => {
      select5.innerHTML = select5.value = options4[activeOption4].innerHTML;
    }
    setValue4();
  }

const validationpage1 = () => {
  $("#nxt1").prop('disabled',true ).css('background-color', 'brown').css('cursor','not-allowed');
  $(document).ready(function () {
    $("#page1 input").mouseleave(function() {
      validateName();
    });
    
    function validateName() {
      let nameValue = $("#name").val();
      let residenceValue = $(".select1").val();
      let radioValue = $("input[name=License]:checked","#page1form").val() ;
      if (nameValue.length == ''  ||  residenceValue == 'Place of Residence:' || radioValue == "") {
        console.log(nameValue);
        console.log(residenceValue);
        console.log(radioValue);
      } 
      else {
        console.log(1);
        $("#nxt1").prop('disabled',false).css('background-color', '#ff0041').css('cursor','pointer');
      }
    };
  })
}

const validationpage2 = () => {
  $("#nxt2").prop('disabled',true ).css('background-color', 'brown').css('cursor','not-allowed');
  $(document).ready(function () {
    $(".option-container").mouseleave(function() {
      validateName2();
    });
    
    function validateName2() {
      let LicenseClass = $(".select2").val();
      let LicenseType = $(".select3").val();
      if (LicenseClass == "Required Class of Driving License" || LicenseType == "Required Type of Driving License") {
        console.log(LicenseClass);
        console.log(LicenseType);
      } 
      else {
        console.log(1);
        $("#nxt2").prop('disabled',false).css('background-color', '#ff0041').css('cursor','pointer');
      }
    };
  })
}

const validationpage3 = () => {
  $("#nxt2").prop('disabled',true ).css('background-color', 'brown').css('cursor','not-allowed');
  $(document).ready(function () {
    $(".option-container").mouseleave(function() {
      validateName3();
    });
    
    function validateName3() {
      let AadharNo = $(".select4").val();
      let PanNo = $(".select5").val();
      if (AadharNo == "Aadhar Card" || PanNo == "Pan Card") {
        console.log(AadharNo);
        console.log(PanNo);
      } 
      else {
        alert("Thank you for your information. We will reach to you soon!");
      }
    };
  })
}