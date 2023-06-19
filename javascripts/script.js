(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()
$(function () {
  $('.owl-app').owlCarousel({
    // center: true,
    loop: false,
    margin: -16,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3,
        nav: true,
        margin: 0
      }
    }
  });
  $('.owl-book').owlCarousel({
    // center: true,
    loop: false,
    margin: -16,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5,
        nav: true,
        margin: 0
      },
      1200: {
        items: 6,
        nav: true,
        margin: 0
      }
    }
  });
  let massage = document.getElementById('massage');
  massage.addEventListener('click',function(event) {
    event.preventDefault()
    event.stopPropagation()
    this.classList.add('disabled')
    // console.log(this)
    document.getElementById('timer').innerHTML = 00 + ":" + 59;
    startTimer();
  })

  function startTimer() {
    let timer = document.getElementById('timer')
    var presentTime = timer.innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
      return
    }
    if (m + s == 0) {
      massage.classList.remove('disabled')
      timer.innerHTML = '';
      return
    }
    timer.innerHTML = m + ":" + s + ' ';
    // console.log(m + s)
    setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
  }

  // var ifm = document.querySelector('.iframe');
  // function changeFrameHeight() {
  //   ifm.height = document.documentElement.clientHeight;
  //   console.log(ifm.height)
  // }
  // changeFrameHeight();
  // window.onresize = function () { changeFrameHeight(); }

});

//# sourceMappingURL=script.js.map
