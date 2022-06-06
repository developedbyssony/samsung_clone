/*
function carousel_nav_clicked() {
  const nav = document.getElementById("tns1-ow")s;
  if (nav.style.background-color == "white") {
    nav.style.background-color == "black";
  } else {
    nav.style.background-color == "white";
  }
}
*/
$(function() {
$('#floatingSticky').children().children().children().draggable();
});

function btnClick() {
  const li1 = document.getElementById("floating");
  if( li1.style.display =="unset") {
  li1.style.display ="none"
  } else {
  li1.style.display ="unset";
  }
}

function tapHover() {
  display:unset;
}

function fadeinoutfloating() {
  var at = 1;
  if(at==1) {
    const list = document.getElementsByClassName("ic-quick-chatbot");
    $(".list").fadeIn(3000);
    at=0;
  }else {
    const list = document.getElementsByClassName("ic-quick-chatbot");
    $(".list").fadeOut(3000);
    at=1;
  }
}

function floating() {
    const con = document.getElementById("floating");
    const list = document.getElementsByClassName("ic-quick-chatbot");
    console.log(list);
    if(con.style.display == "none") {
      con.style.display = "unset";
      setTimeout('fadeinoutfloating()',3000); 
    } else {
      con.style.display = "none";
    }
}


$('.nav-menu').mouseenter(function(){ 
      $('.sub-gnb-detail-bundle').stop().slideDown(500);
})

$('.nav-menu').mouseleave(function(){ 
  $('.sub-gnb-detail-bundle').stop().slideUp(500);
})

$('.sub-gnb.menu1').mouseenter(function(){ 
  $('.sub-gnb.menu1').addClass('select').fadeIn(1000);
})

$('.sub-gnb.menu1').mouseleave(function(){ 
  $('.sub-gnb.menu1').removeClass('select');
})

$('.sub-gnb.menu2').mouseenter(function(){ 
  $('.sub-gnb.menu2').addClass('select').fadeIn(1000);
})

$('.sub-gnb.menu2').mouseleave(function(){ 
  $('.sub-gnb.menu2').removeClass('select');
})

$('.sub-gnb.menu3').mouseenter(function(){ 
  $('.sub-gnb.menu3').addClass('select').fadeIn(1000);
})

$('.sub-gnb.menu3').mouseleave(function(){ 
  $('.sub-gnb.menu3').removeClass('select');
})

$('.sub-gnb.menu4').mouseenter(function(){ 
  $('.sub-gnb.menu4').addClass('select').fadeIn(1000);
})

$('.sub-gnb.menu4').mouseleave(function(){ 
  $('.sub-gnb.menu4').removeClass('select');
})

$('.sub-gnb.menu5').mouseenter(function(){ 
  $('.sub-gnb.menu5').addClass('select').fadeIn(1000);
})

$('.sub-gnb.menu5').mouseleave(function(){ 
  $('.sub-gnb.menu5').removeClass('select');
})

$('.sub-gnb.menu6').mouseenter(function(){ 
  $('.sub-gnb.menu6').addClass('select').fadeIn(1000);
})

$('.sub-gnb.menu6').mouseleave(function(){ 
  $('.sub-gnb.menu6').removeClass('select');
})

function tapMenuToggle() {
  const t = document.getElementsByClassName("sub-gnb-detail-bundle");
  if (t.style.display == "none") {
    t.style.display = "unset";
  } else {
    t.style.display = "none";
  }
}

// search menu 토글 열기
function searchMenuToggle() {
	const t1 = document.getElementById("appSearch");
	const CLICKED_CLASS = 'clicked';
  console.log(t1);
  t1.classList.toggle(CLICKED_CLASS);
  t1.style.display = "unset";
	}
// search menu 토글 닫기
function searchMenuClose() {
  const t1 = document.getElementById("appSearch");
  /* const t2 = document.getElementsByClassName("btn-close"); */
  t1.style.display = "none";
}
//////////////////////////////////////////////////////////////////

// 로그인 회원 LoginTap 탭 메뉴 여닫기
function LoginToggle() {
  const t = document.getElementById("login");
  if(t.style.display == 'none') {
      t.style.display = 'unset';
  } else {
      t.style.display = 'none';
  }
}


// 비로그인 회원 페이지 이동 
function SendRedirect() {
  window.location.href='/main/login';
}

// 세션 확인

function userSessionCheck() {
  const session = 1;
  // console.log(session);
  const user = document.querySelector("#blogin");
  const loginUser = document.querySelector("#login");
  // console.log(user);
  // console.log(loginUser);
  if(session != null) {
      loignUser.style.display = "unset";
  } else {
      user.style.display = "unset";
  };
}


// 퀵 플로팅
  function text1() {
    const txt1 = document.getElementById("txt-chatbot");
    txt1.innerHTML =
      "무엇이든 궁금한 점을 <br /> 챗봇 써비에게 물어보세요.";
  }
  
  function text1_1() {
    const txt1 = document.getElementById("txt-chatbot");
    txt1.innerHTML = "";
  }
  
  function text2() {
    const txt2 = document.getElementById("txt-shop");
    txt2.innerHTML = "소모품샵에서 <br /> 정품을 구매하세요.";
  }
  
  function text2_1() {
    const txt2 = document.getElementById("txt-shop");
    txt2.innerHTML = "";
  }
  
  function text3() {
    const txt3 = document.getElementById("txt-video");
    txt3.innerHTML = "유용한 제품 동영상 <br /> 정보를 이용해 보세요.";
  }
  
  function text3_1() {
    const txt3 = document.getElementById("txt-video");
    txt3.innerHTML = "";
  }
  
  
  function text4() {
    const txt4 = document.getElementById("txt-center");
    txt4.innerHTML = "내 위치와 가장 가까운 <br /> 센터를 찾아보세요.";
  }
  
  function text4_1() {
    const txt4 = document.getElementById("txt-center");
    txt4.innerHTML = "";
  }

  function overflowVisible1 () {
    const t0 = document.getElementsByClassName("c2_s1");
    const t01 = document.getElementById("c2_img1");

    t01.addEventListener('mouseover', function() {
      t0[0].style.overflow = "visible";

   });

   t01.addEventListener('mouseleave', function() {
     t0[0].style.overflow = "hidden";
  });
}

function overflowVisible2 () {
  const t1 = document.getElementById("tns2-item1");
  const t11 = document.getElementById("c2_img2");

  t11.addEventListener('mouseover', function() {
    t1.style.overflow = "visible";
 });

  t11.addEventListener('mouseleave', function() {
  t1.style.overflow = "hidden";
});
}

function overflowVisible3 () {
  const t2 = document.getElementById("tns2-item2");
  const t21 = document.getElementById("c2_img3");
  
  t21.addEventListener('mouseover', function() {
    t2.style.overflow = "visible";
});

t21.addEventListener('mouseleave', function() {
  t2.style.overflow = "hidden";
}); 
}

function overflowVisible4 () {
  const t3 = document.getElementById("carousel2_mob_none");
  const t31 = document.getElementById("c2_img4");
  
  t31.addEventListener('mouseover', function() {
    t3.style.overflow = "visible";
});

t31.addEventListener('mouseleave', function() {
  t3.style.overflow = "hidden";
});
}

function overflowVisible5 () {
  
  const t4 = document.getElementById("tns2-item4");
  const t41 = document.getElementById("c2_img5");


  t41.addEventListener('mouseover', function() {
    t4.style.overflow = "visible";
  });

  t41.addEventListener('mouseleave', function() {
  t4.style.overflow = "hidden";
  });
}


// 캐러셀  
  var slider1 = tns({
    container: ".txt-slide",
    mode: "gallery",
    items: 1,
    autoplay: true,
    autoplayText:['▶','■'],
    slideBy: "page",
    navPosition: "bottom"
  });
  
  var slider2 = tns({
    container: ".txt-slides",
    mode: "gallery",
    axios: "vertical",
    items: 1,
    autoplay: true,
    navPosition: "bottom",
    controlsText: ['<','>'],
    speed: 250,
    autoplayText:['▶','■'],
    autoHeight: true,
    preventActionWhenRunning:true,
    responsive: {
      1024: {
        items: 2
      }
    }
  });

var slider3 = tns({
    container: ".txt-slidess",
    mode: "gallery",
    items: 1,
    autoplay: true,
    autoplayText:['▶','■'],
    slideBy: "page",
    navPosition: "bottom"
  });