// =============================================
//  animations.js  — ページ別 GSAP アニメーション
// =============================================

// 現在のページを判定
const page = location.pathname.split('/').pop() || 'index.html';

// =============================================
//  HOME PAGE
// =============================================
if (page === 'index.html' || page === '') {
  // ─── ヒーロー テキスト登場 ─────────────────────
  const heroTl = gsap.timeline({ delay: 0.2 });
  heroTl
    .from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
    .from('.hero-title',    { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
    .from('.hero-desc',     { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .from('.hero-actions',  { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.hero-stat',     { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from('.hero-right',    { x: 80, opacity: 0, duration: 1.0, ease: 'power3.out' }, '<')
    .from('.hero-tag',      { y: 30, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3')
    .from('.scroll-indicator', { opacity: 0, duration: 0.5 }, '-=0.2');

  // ─── 数字カウントアップ ─────────────────────────
  document.querySelectorAll('.hero-stat-item .num').forEach(el => {
    const target = parseInt(el.dataset.target || el.textContent);
    const unit   = el.querySelector('span') ? el.querySelector('span').textContent : '';
    if (!target) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.from({ val: 0 }, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: function() {
            el.innerHTML = Math.round(this.targets()[0].val) + '<span>' + unit + '</span>';
          },
        });
      },
    });
  });

  // ─── コンセプト画像パララックス ────────────────
  gsap.to('.concept-img-main', {
    y: -40,
    ease: 'none',
    scrollTrigger: { trigger: '.concept', start: 'top bottom', end: 'bottom top', scrub: true },
  });
  gsap.to('.concept-img-sub', {
    y: 30,
    ease: 'none',
    scrollTrigger: { trigger: '.concept', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  // ─── メニューカードのスタガー ──────────────────
  gsap.from('.menu-card', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.menu-cards', start: 'top 85%' },
  });

  // ─── スタッフカードのスタガー ──────────────────
  gsap.from('.staff-card', {
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.staff-row', start: 'top 85%' },
  });

  // ─── レビューカードのスタガー ──────────────────
  gsap.from('.review-card', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.reviews-grid', start: 'top 85%' },
  });

  // ─── CTAバナーの文字 ────────────────────────────
  gsap.from('.cta-banner h2', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.cta-banner', start: 'top 80%' },
  });
}

// =============================================
//  MENU PAGE
// =============================================
if (page === 'menu.html') {
  // ─── ページヒーロー ────────────────────────────
  gsap.from('.page-hero-content', {
    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3
  });

  // ─── メニューアイテム順次表示 ──────────────────
  document.querySelectorAll('.menu-section').forEach(sec => {
    gsap.from(sec.querySelectorAll('.menu-item'), {
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power2.out',
      scrollTrigger: { trigger: sec, start: 'top 85%' },
    });
  });

  // ─── オプションカード ─────────────────────────
  gsap.from('.option-card', {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    stagger: 0.07,
    ease: 'back.out(1.5)',
    scrollTrigger: { trigger: '.options-grid', start: 'top 85%' },
  });
}

// =============================================
//  ABOUT PAGE
// =============================================
if (page === 'about.html') {
  gsap.from('.page-hero-content', {
    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3
  });

  // ─── ストーリー画像パララックス ────────────────
  gsap.to('.about-story-img', {
    y: -50,
    ease: 'none',
    scrollTrigger: { trigger: '.about-story', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  // ─── スタッフカードのスタガー ──────────────────
  gsap.from('.staff-detail-card', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.staff-grid', start: 'top 80%' },
  });

  // ─── バリューカード ────────────────────────────
  gsap.from('.value-card', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.values-grid', start: 'top 85%' },
  });

  // ─── ギャラリー ────────────────────────────────
  gsap.from('.gallery-item', {
    scale: 0.95,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%' },
  });
}

// =============================================
//  CONTACT PAGE
// =============================================
if (page === 'contact.html') {
  gsap.from('.page-hero-content', {
    y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.3
  });

  // ─── 連絡先詳細のスタガー ─────────────────────
  gsap.from('.contact-detail-item', {
    x: -30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: '.contact-detail-list', start: 'top 85%' },
  });

  // ─── フォームのスライドイン ───────────────────
  gsap.from('.reservation-form', {
    x: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '.reservation-form', start: 'top 85%' },
  });

  // ─── FAQ アコーディオン ───────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // 開いているものを閉じる
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        gsap.to(openItem.querySelector('.faq-answer'), {
          maxHeight: 0, duration: 0.35, ease: 'power2.inOut'
        });
      });

      if (!isOpen) {
        item.classList.add('open');
        // 実際の高さを計測してアニメーション
        const inner = answer.querySelector('.faq-answer-inner');
        gsap.to(answer, {
          maxHeight: inner.scrollHeight + 28,
          duration: 0.45,
          ease: 'power2.out',
        });
      }
    });
  });

  // ─── フォームバリデーション & 送信アニメーション
  const form = document.querySelector('.reservation-form form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      gsap.to(btn, { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1 });
      btn.textContent = '送信中...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ 送信しました！近日中にご連絡いたします';
        btn.style.background = '#4CAF50';
        gsap.from(btn, { scale: 0.95, duration: 0.3, ease: 'back.out(1.5)' });
      }, 1500);
    });
  }
}
