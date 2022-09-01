import React from 'react';

function header() {
    return(
    <>
    <div>
    <div class="container-fluid" id="content"> 
        <div class="container-fluid">
        <div class="row">
            <div class="app-header">
                <header class="header">
                    <div class="ci">
                        <h1 class="logo"></h1> 
                    </div>
                <ul class="nav-menu">
                    <li class="nav-menu-item" id="menu1">
                        <a href="/">스스로해결</a>
                    </li>
                    <li class="nav-menu-item" id="menu2">
                        <a href="/">전문상담</a>
                    </li>
                    <li class="nav-menu-item" id="menu3">
                        <a href="/">서비스 안내</a>
                    </li>
                    <li class="nav-menu-item" id="menu4">
                        <a href="/">서비스 예약</a>
                    </li>
                    <li class="nav-menu-item" id="menu5">
                        <a href="/">소모품샵</a>
                    </li>
                    <li class="nav-menu-item" id="menu6">
                        <a href="/">고객의 소리</a> 
                    </li>
                    </ul>
                    <ul>
                    <li>
                    <div class="sub-gnb-detail-bundle" style="display:none;" onmouseover="tapMenuToggle()"> 
                    <div class="sub-gnb-content">
                        <div class="sub-gnb">
                            <strong class="tit">스스로 해결</strong> <br /> 
                            <ul class="sub-gnb-detail">
                                <li><a href="#">모바일</a></li>
                                <li><a href="#">PC/모니터</a></li>
                                <li><a href="#">냉장고/김치냉장고</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">세탁기/건조기/에어드레서</a></li>
                                <li><a href="#">에어컨</a></li>
                                <li><a href="#">프린터/복합기</a></li>
                                <li><a href="#">청소기</a></li>
                                <li><a href="#">공기청정기/제습기</a></li>
                                <li><a href="#">주방가전</a></li>
                                <li><a href="#">오디오</a></li>
                                <li><a href="#">스마트싱스</a></li>
                                <li><a href="#">기타 제품</a></li>
                            </ul>
                        </div>
                        <div class="sub-gnb">
                            <strong class="tit">전문상담</strong> <br />
                            <ul class="sub-gnb-detail">
                                <li><a href="#">챗봇상담</a></li>
                                <li><a href="#">이메일 상담</a></li>
                                <li><a href="#">원격상담</a></li>
                                <li><a href="#">전화상담 예약</a></li>
                                <li><a href="#">수어상담</a></li>
                            </ul>
                        </div>
                        <div class="sub-gnb">
                            <strong class="tit">서비스 안내</strong> <br />
                            <ul class="sub-gnb-detail">
                                <li><a href="#">요금안내</a></li>
                                <li><a href="#">유지보수/세척</a></li>
                                <li><a href="#">Samsung Care+</a></li>
                                <li><a href="#">영수증/명세서 발급</a></li>
                                <li><a href="#">다운로드 자료실</a></li>
                            </ul>
                        </div>
                        <div class="sub-gnb">
                            <strong class="tit">서비스 예약</strong> <br />
                            <ul class="sub-gnb-detail">
                                <li><a href="#">출장서비스 예약</a></li>
                                <li><a href="#">예약 조회/변경/취소</a></li>
                                <li><a href="#">센터찾기</a></li>
                            </ul>
                        </div>
                        <div class="sub-gnb">
                            <strong class="tit">소모품샵</strong> <br />
                            <ul class="sub-gnb-detail">
                                <li><a href="#">모바일</a></li>
                                <li><a href="#">PC</a></li>
                                <li><a href="#">프린터/복합기</a></li>
                                <li><a href="#">TV/모니터</a></li>
                                <li><a href="#">에어컨/공기청정기</a></li>
                                <li><a href="#">세탁기/건조기</a></li>
                                <li><a href="#">청소기</a></li>
                                <li><a href="#">냉장고/김치냉장고</a></li>
                                <li><a href="#">주방가전</a></li>
                                <li><a href="#">기타 제품</a></li>
                                <li><a href="#">할인판매</a></li>
                            </ul>
                        </div>
                        <div class="sub-gnb">
                            <strong class="tit">고객의 소리</strong> <br />
                            <ul class="sub-gnb-detail">
                                <li><a href="#">칭찬합니다</a></li>
                                <li><a href="#">불편합니다</a></li>
                            </ul>
                        </div>
                    </div> 
                    </div> 
                    </li> 
                    </ul>
                    <div class="util">
                        <h1 class="icon-member-session" onclick="LoginToggle()"></h1>
                                <div class="gnb-session sm-hidden" style="display:none;" id="login">
                                    <a href="http://192.168.10.43:5501/page/my_page/index.html">
                                        <span class="tooltip-txt">
                                        마이페이지
                                        </span>
                                    </a>
                                    <a href="/">
                                        <span class="tooltip-txt"> 
                                        로그아웃
                                        </span>
                                    </a>
                                </div>
                        <h1 class="icon-cart"></h1>
                        <h1 class="icon-search" id="mob-ic" onclick="searchMenuToggle()"></h1>
                    </div>
                    </header>
                </div>
            </div>
        </div>
        </div>
        </div>
            <div class="container-fluid"> 
            <div class="row">
            <div id="appSearch">
                <div>
                    <div class="app-search-inner">
                        <div class="sec-box">
                            <p class="app-search-tit">
                                <strong>무엇을 도와드릴까요?</strong> <br />
                                궁금하신 내용을 검색해주세요.
                            </p>
                        </div>
                        <div class="sec-box app-search-form-wrap">
                            <main class="app-search-form-area">
                                <span class="app-search-form"> 
                                    <span class="form_text">
                                        <span class="input">
                                            <input type="text" placeholder="검색어를 입력해주세요." />
                                        </span>
                                        <button class="btn_img">
                                            <i class="icon-search-24">검색</i>
                                        </button> 
                                    </span> 
                                </span> 
                            </main>
                        </div>
                        <div class="sec-box app-search-form-favo">
                        <div class="app-search-form-favorite tit">
                            <strong class="key-tit1">인기 검색어</strong>
                        </div>
                            <div class="sec-box app-search-keyword">
                                <p class="keyword">#갤럭시 S22</p>
                                <p class="keyword">#윈도우10 업그레이드</p>
                                <p class="keyword">#온도 조절 방법</p>
                                <p class="keyword">#통세척</p>
                                <p class="keyword">#프린트 공유</p>
                                <p class="keyword">#BESPOKE제트</p>
                            </div>
                        </div>
                        <br />
                        <hr style="width:872px; margin:0 auto;" />
                        <br />
                        <div class="sec-boc">
                            <div class="recent-search-keywords">
                                <strong class="key-tit2">최근 검색어</strong>
                                <button class="btn-recent-delete-all">
                                    <span class="delete">전체삭제</span>
                                </button>
                            </div>
                        </div>
                        <img src="assets/close.png" class="btn-close" onclick="searchMenuClose()"></img>
                    </div>
                </div>
            </div>
            </div>
            </div>
    </>
    );
}

export default header;