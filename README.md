# Samsung_clone
삼성전자 홈페이지 클론 프로젝트

![ppt표지](https://user-images.githubusercontent.com/98148572/187187093-292628f7-1cb4-4cd6-b730-03a02f8b4ae1.png)
##### - 배포 링크 : https://firstproject-79ba9.firebaseapp.com/  (반응형, 전체 페이지 중 메인)


### 개발 목적
***
1. 순수 HTML, CS, JS를 이용한 클론 코딩으로 UI와 인터랙션 구현
2. 쿠키와 세션 기술을 이용한 로그인 기능 구현
3. 웹팩 모듈 번들링을 통한 정적 파일 의존성 관리



### Deployment Architecture
***
| 개발 환경  | 이용 프로그램 |
| ------------ | ------------- |
| 개발도구 | VS Code  |
| DBMS | MySQL  |
| Server | Express |
| Language | HTML5, CSS3, JavaScript(ES6), node.js, SCSS  |
| 프레임 워크 | Mybatis  |
| 의존성 관리 | Webpack  |
| 디자인 툴 | Adobe Illustrator  |
| 문서 툴 | MS PowerPoint, MS Excel  |


### DB Schema
***
<img width="634" alt="DB shema_제작" src="https://user-images.githubusercontent.com/98148572/187187579-0b0e9ac8-566e-4e34-a0bf-4446b7ef2b12.png">


### 구현 기능
***
총 7 페이지의 화면을 구현하였으며 메인의 경우 모바일에 대응한 반응형으로 제작되었습니다. 웹 표준을 준수하고 크로스 브라우징이 가능합니다. (Chrome, Edge)

##### - 메인 페이지
![메인](https://user-images.githubusercontent.com/98148572/187372479-f81935a0-8875-4e1a-99f4-3408e90ad8aa.png)

##### - 로그인 페이지
<img width="1294" alt="Screen Shot 2022-08-02 at 8 32 57 AM" src="https://user-images.githubusercontent.com/98148572/188304701-84335d15-0d84-445a-9b83-e9a1f0dbe3af.png">

``` JavaScript
export const $id = document.getElementById('id')
export const $password = document.getElementById('password')
export const $submit = document.getElementById('submit')

export function autofocus() {
  window.addEventListener('load', function () {
    $id.focus()
  })
}

export const $idmsg = document.getElementById('id-msg')
export const $pwmsg = document.getElementById('pw-msg')

export const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
export const PW_REGEX = new RegExp('^[A-Za-z0-9]{8,16}$')

export const ID_ERROR_MSG = {
  required: '필수 정보입니다.',
  invalid: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
}

export const PW_ERROR_MSG = {
  required: '필수 정보입니다.',
  invalid: '8~16자의 영문 대소문자, 숫자만 사용 가능합니다.',
}

export const checkIdValidation = function (value) {
  let isValidId
  if (value.length === 0) {
    isValidId = 'required'
    $id.style.border = '1px solid red'
    $idmsg.innerText = ID_ERROR_MSG[isValidId]
  } else {
    isValidId = ID_REGEX.test(value) ? true : 'invalid' // test 결과가 true면 true를 주고, false면 invalid
    console.log(isValidId)
    if (isValidId !== true) {
      $id.style.border = '1px solid red'
      $idmsg.innerText = ID_ERROR_MSG[isValidId] // ID_ERROR_MSG[invalid] or ID_ERROR_MSG[required]
    } else if (isValidId === true) {
      $id.style.border = '1px solid white'
      $idmsg.remove()
    }
  }
}

export function Idfocusout() {
  if ($id.value == null) {
    $id.addEventListener('focusout', () => checkIdValidation($id.value))
  } else {
    $id.addEventListener('focusout', () => checkIdCheck($id.value))
  }
}

export function Pwfocusout() {
  if ($password.value == null) {
    $password.addEventListener('focusout', () =>
      checkPasswordValidation($password.value)
    )
  } else {
    $password.addEventListener('focusout', () =>
      checkPasswordCheck($password.value)
    )
  }
}

export const checkPasswordValidation = function (value) {
  let isValidPw
  if (value.length === 0) {
    isValidPw = 'required'
  } else {
    isValidPw = PW_REGEX.test(value) ? true : 'invalid' // test 결과가 true면 true를 주고, false면 invalid
    console.log(isValidPw)
    // 커스텀 에러 메시지
    // (1) 비어있을 때 (2) 유효하지 않은 값일때
    // input 태그에 border-red-600 class 추가 & **-msg div에 에러 메시지 추가
    if (isValidPw !== true) {
      // isValidId -> invalid, required
      $password.style.border = '1px solid red'
      $pwmsg.innerText = PW_ERROR_MSG[isValidPw] // ID_ERROR_MSG[invalid] or ID_ERROR_MSG[required]
    } else if (isValidPw === true) {
      $password.style.border = '1px solid white'
      $pwmsg.remove()
    }
  }
}

export const checkIdCheck = function (value) {
  const isValidIdCheck = 'n_uck' === $id.value
  console.log(isValidIdCheck)
}

export const checkPasswordCheck = function (value) {
  const isValidPwCheck = 'Z13508975z' === $password.value
  console.log(isValidPwCheck)
}

export function LoginSubmit() {
  $submit.addEventListener('click', (e) => {
    e.preventDefault() // submit이 가진 고유의 기능 막아줌 (form의 값을 서버에 전송하는 것을 막아줌)
    console.log('로그인 완료')
    checkIdValidation($id.value)
    checkIdCheck($id.value)
    checkPasswordValidation($password.value)
    checkPasswordCheck($password.value)

    if ($id.value == 'n_uck') {
      if ($password.value == 'Z13508975z') {
        window.open('http://192.168.0.119:5500/front-end/index_login.html')
      } else {
        alert('비밀번호가 틀렸습니다.')
      }
    } else {
      alert('아이디가 틀렸습니다.')
    }
  })
}
```
