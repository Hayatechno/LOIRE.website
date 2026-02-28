// =============================================
//  main.js  — 全ページ共通スクリプト
// =============================================

// ─── カスタムカーソル ───────────────────────────────
const cursor       = document.querySelector('.cursor');
const cursorFollow = document.querySelector('.cursor-follower');

if (cursor && cursorFollow) {
  let mouseX = 0, mouseY = 0;
  let followX = 0, followY = 0;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
  });

  // follower は少し遅れて追従
  gsap.ticker.add(() => {
    followX += (mouseX - followX) * 0.12;
    followY += (mouseY - followY) * 0.12;
    gsap.set(cursorFollow, { x: followX, y: followY });
  });

  // ホバー時に拡大
  document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3 });
      gsap.to(cursorFollow, { scale: 1.5, opacity: 0.3, duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorFollow, { scale: 1, opacity: 0.6, duration: 0.3 });
    });
  });
}

// ─── ナビゲーション スクロール効果 ──────────────────
const nav = document.querySelector('nav');
if (nav) {
  ScrollTrigger.create({
    start: 80,
    onEnter:    () => nav.classList.add('scrolled'),
    onLeaveBack: () => nav.classList.remove('scrolled'),
  });
}

// ─── アクティブリンク ────────────────────────────────
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ─── モバイルメニュー ────────────────────────────────
const toggle     = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    // ハンバーガー → ✕ アニメーション
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      gsap.to(spans[0], { y: 8, rotation: 45, duration: 0.3 });
      gsap.to(spans[1], { opacity: 0, duration: 0.2 });
      gsap.to(spans[2], { y: -8, rotation: -45, duration: 0.3 });
      gsap.from('.mobile-menu a', { y: 30, opacity: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out' });
    } else {
      gsap.to(spans[0], { y: 0, rotation: 0, duration: 0.3 });
      gsap.to(spans[1], { opacity: 1, duration: 0.2 });
      gsap.to(spans[2], { y: 0, rotation: 0, duration: 0.3 });
    }
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      gsap.to(toggle.querySelectorAll('span')[0], { y: 0, rotation: 0, duration: 0.3 });
      gsap.to(toggle.querySelectorAll('span')[1], { opacity: 1, duration: 0.2 });
      gsap.to(toggle.querySelectorAll('span')[2], { y: 0, rotation: 0, duration: 0.3 });
    });
  });
}

// ─── スクロール汎用フェードイン ───────────────────────
document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
  });
});
