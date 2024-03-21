// 버튼 0 누르면
// - 모든버튼에 붙은 오렌지 클래스명 제거
// - 모든 디브박스에 붙은 쇼 클래스명 제거
// - 버튼0에 오렌지 클래스명 추가
// - 디브0에 쇼 클래스명 추가

// for 반복문은 코드를 반복실행해주는 역할을 하는군
let 탭버튼 = $('.tab-button');
for(let e = 0; e < 탭버튼.length; e++){
    $('.tab-button').eq(e).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(e).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(e).addClass('show');
    })
    
}

