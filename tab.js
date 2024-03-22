// 버튼 0 누르면
// - 모든버튼에 붙은 오렌지 클래스명 제거
// - 모든 디브박스에 붙은 쇼 클래스명 제거
// - 버튼0에 오렌지 클래스명 추가
// - 디브0에 쇼 클래스명 추가

// for 반복문은 코드를 반복실행해주는 역할을 하는군
// 함수로 축약할 때 변수가 있다면 파라미터로 변경해야 함
// data-id로 몰래 숨기고, 이를 불러오는 식으로 함수 작성 가능
// 이벤트버블링을 활용하면 이벤트리스너 1개만 써도 개발가능

// for(let e = 0; e < $('.tab-button').length; e++){
//     $('.tab-button').eq(e).on('click', function(){
//         탭열기(e)
//     })   
// }

// 이벤트 리스너 1개만 써서 탭 기능 작성
$('.list').click(function(e){
        탭열기(e.target.dataset.id)
    }
)

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(숫자).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(숫자).addClass('show');
}

