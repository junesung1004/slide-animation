window.onload = () => {
  const Slider = new Swiper('.swiper-container', {
    allowTouchMove : false, // 스와이프 기능 막기
    loop : true, // 무한재생
    autoplay : {
      delay : 0, // 현재 슬라이드에서 다음 슬라이드가 시작되기 전 지연시간
    },
    speed : 4000, // 슬라이드 넘어가는 속도
    effect : 'creative', // 사용자 정의 이펙트 효과
    creativeEffect : {
      /*
      effect의 속성이 creative 일때 사용하는 css 속성
      */
      prev : {
        opacity : 0,
      },
      next : {
        opacity : 1,
      }
    },
    navigation : {
      prevEl : 'swiper-button-prev',
      nextEl : 'swiper-button-next',
    },
    pagination: {
      el : '.swiper-pagination'
    }
  })
}