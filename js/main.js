// main.js
window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // 1. 背景のグラデーションをゆっくり動かす
  gsap.to("#loading", {
    backgroundPosition: "200% 0",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "linear"
  });

  // 2. ロゴをフェードイン + 拡大
  tl.fromTo(".loader-logo",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1.5 }
  );

  // 3. ラインを左から右へ伸ばす
  tl.fromTo(".loader-line",
    { scaleX: 0 },
    { scaleX: 1, transformOrigin: "left", duration: 1 },
    "-=0.5"
  );

  // 4. 少し待ってからロゴとラインをフェードアウト
  tl.to([".loader-logo", ".loader-line"], {
    opacity: 0,
    duration: 1,
    delay: 0.5
  });

  // 5. 背景をふわっと消す
  tl.to("#loading", {
    opacity: 0,
    duration: 1.2,
    onComplete: () => {
      document.getElementById("loading").style.display = "none";
    }
  });
}); 



// スライド

$(".gallery-section__wrapper").slick({
  slidesToShow: 3,   /* ★画面に3枚表示する */
  autoplay:true, // 自動再生
  slidesToScroll: 1,  
  autoplaySpeed:4000 ,//再生速度（ミリ秒設定：1000ミリ秒=1秒）
  infinite: true , // 無限スライド  
  dots: true,        /* 下部にドット表示 */
        arrows: true,      /* 左右に矢印表示 */
        speed: 900,           // ★移動にかかる時間（0.8秒かけて移動）
  cssEase: 'ease-in-out', // ★ぬるっと滑らかに動かす
  pauseOnFocus: false, /* フォーカス（クリック後など）されても止めない */
        
});


// トップに戻るボタン

$(function() {
  const $pageTop = $('#page-top');

  // 100px以上スクロールしたらボタンを表示
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 1500) {
      $pageTop.addClass('is-active');
    } else {
      $pageTop.removeClass('is-active');
    }
  });

  // ボタンをクリックしたらページ最上部へスムーズスクロール
  $pageTop.on('click', function(e) {
    e.preventDefault(); // href="#" のデフォルト動作（一瞬でジャンプ）を防止
    $('html, body').animate({ scrollTop: 0 }, 1000); // 1秒かけて戻る
  });
});