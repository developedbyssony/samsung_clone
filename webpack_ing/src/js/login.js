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
