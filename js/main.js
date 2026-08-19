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