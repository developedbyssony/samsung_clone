// GNB 토글 탭메뉴
export function tapMenuToggle() {
  const t = document.getElementsByClassName('sub-gnb-detail-bundle')
  if (t.style.display == 'none') {
    t.style.display = 'unset'
  } else {
    t.style.display = 'none'
  }
}

// search 모달 열기
export function searchMenuToggle() {
  const t1 = document.getElementById('appSearch')
  const CLICKED_CLASS = 'clicked'
  console.log(t1)
  t1.classList.toggle(CLICKED_CLASS)
  t1.style.display = 'unset'
}

// search 모달 닫기
export function searchMenuClose() {
  const t1 = document.getElementById('appSearch')
  /* const t2 = document.getElementsByClassName("btn-close"); */
  t1.style.display = 'none'
}

// 로그인 회원 LoginTap 탭 메뉴 여닫기
export function LoginToggle() {
  const t = document.getElementById('login')
  if (t.style.display == 'none') {
    t.style.display = 'unset'
  } else {
    t.style.display = 'none'
  }
}

// 비로그인 회원 페이지 이동
export function SendRedirect() {
  window.location.href = '/login0'
}

// 세션 확인
export function userSessionCheck() {
  const session = 1
  // console.log(session);
  const user = document.querySelector('#blogin')
  const loginUser = document.querySelector('#login')
  // console.log(user);
  // console.log(loginUser);
  if (session != null) {
    loignUser.style.display = 'unset'
  } else {
    user.style.display = 'unset'
  }
}

// 퀵 플로팅
export function text1() {
  const txt1 = document.getElementById('txt-chatbot')
  txt1.innerHTML = '무엇이든 궁금한 점을 <br /> 챗봇 써비에게 물어보세요.'
}

export function text1_1() {
  const txt1 = document.getElementById('txt-chatbot')
  txt1.innerHTML = ''
}

export function text2() {
  const txt2 = document.getElementById('txt-shop')
  txt2.innerHTML = '소모품샵에서 <br /> 정품을 구매하세요.'
}

export function text2_1() {
  const txt2 = document.getElementById('txt-shop')
  txt2.innerHTML = ''
}

export function text3() {
  const txt3 = document.getElementById('txt-video')
  txt3.innerHTML = '유용한 제품 동영상 <br /> 정보를 이용해 보세요.'
}

export function text3_1() {
  const txt3 = document.getElementById('txt-video')
  txt3.innerHTML = ''
}

export function text4() {
  const txt4 = document.getElementById('txt-center')
  txt4.innerHTML = '내 위치와 가장 가까운 <br /> 센터를 찾아보세요.'
}

export function text4_1() {
  const txt4 = document.getElementById('txt-center')
  txt4.innerHTML = ''
}

export const slider1 = tns({
  container: '.txt-slide',
  mode: 'gallery',
  items: 1,
  slideBy: 'page',
  autoplayText: ['start', 'pause'],
  navPosition: 'bottom',
})

export const slider2 = tns({
  container: '.txt-slides',
  mode: 'gallery',
  slideBy: 2,
  axios: 'vertical',
  items: 2,
  autoplay: false,
  navPosition: 'bottom',
  controlsText: ['<', '>'],
  speed: 350,
  autoplayText: ['start', 'pause'],
  autoHeight: true,
  preventActionWhenRunning: true,
  responsive: {
    1023: {
      items: 1,
    },
    1024: {
      items: 2,
    },
  },
})
