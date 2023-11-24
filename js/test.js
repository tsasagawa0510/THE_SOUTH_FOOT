console.log(document.getElementsByClassName('hamburger-menu-wrap'));

// <button class="header-center-link btn-humburger locator-link">
// const btnHumburger = document.getElementsByClassName('');

// ハンバーガーメニューのボタン要素を取得
const btnHumburger = document.querySelector('.btn-humburger');
console.log(btnHumburger);

// ハンバーガーメニューをクリック時のイベントを追加
// .humburger-menu-wrapの要素を取得
const humburgerMenuWrap = document.querySelector('.hamburger-menu-wrap');
console.log(humburgerMenuWrap);


btnHumburger.addEventListener('click', () => {
  // ハンバーガーメニューをクリック時に.humburger-menu-wrapクラスに.activeクラスを追加
  humburgerMenuWrap.classList.toggle('active');
  

  // CSSで表示する方法
  // humburgerMenuWrap.style.display = 'block';
  // humburgerMenuWrap.style.opacity = '1';
  // humburgerMenuWrap.style.visibility = 'visible';
});

// ハンバーガーメニューの閉じるボタンをクリック時のイベントを追加
const btnClose = document.querySelector('.btn-close');
console.log(btnClose);

btnClose.addEventListener('click', () => {
  if(humburgerMenuWrap.classList.contains('active')) {
    humburgerMenuWrap.classList.remove('active');
  }

  // CSSで非表示する方法
  // humburgerMenuWrap.style.display = 'none';
})

const categoryNav = document.querySelector('#category-nav');
console.log(categoryNav);


// 1280px以上でハンバーガーメニューが表示されていたら非表示
window.addEventListener('resize', () => {
  console.log(window.innerWidth);
  if ((window.innerWidth >= 1280) && humburgerMenuWrap.classList.contains('active')) {
    humburgerMenuWrap.classList.remove('active');
  }
});

// カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
});

$('.category-slick').slick({
  // dots: true,
  // infinite: false,
  // slidesToShow: 4,
  // slidesToScroll: 4,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 780,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       infinite: false,
  //       dots: false,
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: "unslick",
  //   }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  // ]
});

// $(window).on("resize orientationchange", function() {
//   $('.category-slick').slick("resize");
//   console.log('DAAAAAAAAA');
// });
				
// window.addEventListener('resize', () => {
//   console.log(window.innerWidth);
//   if ((window.innerWidth <= 768) && humburgerMenuWrap.classList.contains('active')) {
//     humburgerMenuWrap.classList.remove('active');
//   }
// });

// 768px以下になったらカテゴリーのslickを解除する。
// slickクラスがあるか判定、真ならslickクラス解除して2×4の表示(flex)










