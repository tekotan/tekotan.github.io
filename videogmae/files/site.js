
    document.querySelectorAll('[data-copy]').forEach((button) => {
      const selector = button.getAttribute('data-copy');
      const target = selector ? document.querySelector(selector) : null;
      if (!target) return;
      button.addEventListener('click', async () => {
        const text = target.textContent || '';
        const icon = button.querySelector('.ms');
        const prev = icon ? icon.textContent : button.textContent;
        const prevLabel = button.getAttribute('aria-label') || 'Copy';
        let copied = false;

        if (navigator.clipboard && document.hasFocus()) {
          try {
            await navigator.clipboard.writeText(text);
            copied = true;
          } catch (err) {
            copied = false;
          }
        }

        if (!copied) {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.setAttribute('readonly', '');
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          textarea.style.top = '0';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          try {
            copied = document.execCommand('copy');
          } catch (err) {
            copied = false;
          } finally {
            textarea.remove();
          }
        }

        if (icon) {
          icon.textContent = copied ? 'done' : 'error';
          button.setAttribute('aria-label', copied ? 'Copied' : 'Copy failed');
          button.setAttribute('title', copied ? 'Copied' : 'Copy failed');
          setTimeout(() => {
            icon.textContent = prev;
            button.setAttribute('aria-label', prevLabel);
            button.setAttribute('title', prevLabel);
          }, 1200);
        } else {
          button.textContent = copied ? 'Copied' : 'Select text';
          setTimeout(() => { button.textContent = prev; }, 1200);
        }
      });
    });

    // Method tabs
    (() => {
      const tabButtons = document.querySelectorAll('#method-tabs .tab');
      const tabPanels = document.querySelectorAll('#method-panels .tab-panel');
      if (!tabButtons.length || !tabPanels.length) return;
      tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.panel;
          tabButtons.forEach((b) => b.classList.toggle('active', b === btn));
          tabPanels.forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === target));
        });
      });
    })();

    const backToTop = document.getElementById('back-to-top');
    const sideNav = document.querySelector('.side-nav');
    const navItems = document.querySelectorAll('.side-nav li');
    const progressBar = document.querySelector('.side-nav .progress');
    const progressTrack = document.querySelector('.side-nav .progress-bar');
    const navList = document.querySelector('.side-nav ul');
    const sections = Array.from(navItems).map((item) => document.getElementById(item.dataset.section)).filter(Boolean);

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const target = document.getElementById(item.dataset.section);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const navItem = document.querySelector(`.side-nav li[data-section=\"${id}\"]`);
        if (entry.isIntersecting && navItem) {
          navItems.forEach((item) => item.classList.toggle('active', item === navItem));
        }
      });
    }, { threshold: 0.35 });

    sections.forEach((section) => { if (section) observer.observe(section); });
    if (navItems.length) navItems[0].classList.add('active');

    const setTrackHeight = () => {
      if (!progressTrack) return;
      if (sideNav && sideNav.classList.contains('bottom')) {
        progressTrack.style.height = '6px';
      } else if (navList) {
        progressTrack.style.height = `${navList.offsetHeight}px`;
      }
    };

    const positionSideNav = () => {
      if (!sideNav) return;
      const content = document.querySelector('.content');
      if (!content) return;
      const rect = content.getBoundingClientRect();
      const navWidth = sideNav.offsetWidth || 140;
      const gutter = 16;
      const availableRight = window.innerWidth - rect.right;
      const shouldBottom = (window.innerWidth < 900) || (availableRight < navWidth + gutter + 8);

      sideNav.classList.toggle('bottom', shouldBottom);
      sideNav.classList.toggle('vertical', !shouldBottom);

      if (shouldBottom) {
        sideNav.style.left = '50%';
        sideNav.style.top = '';
        sideNav.style.bottom = '14px';
        sideNav.style.transform = 'translateX(-50%)';
      } else {
        const idealLeft = rect.right + gutter + window.scrollX;
        const maxLeft = window.innerWidth - navWidth - 8 + window.scrollX;
        const left = Math.min(idealLeft, maxLeft);
        sideNav.style.left = `${left}px`;
        sideNav.style.top = '50%';
        sideNav.style.bottom = 'auto';
        sideNav.style.transform = 'translateY(-50%)';
      }
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      if (progressBar && progressTrack) {
        const trackRect = progressTrack.getBoundingClientRect();
        if (sideNav && sideNav.classList.contains('bottom')) {
          const width = Math.min(trackRect.width, (percent / 100) * trackRect.width);
          progressBar.style.width = `${width}px`;
          progressBar.style.height = '100%';
        } else {
          const height = Math.min(trackRect.height, (percent / 100) * trackRect.height);
          progressBar.style.height = `${height}px`;
          progressBar.style.width = '100%';
        }
      }
      if (backToTop) {
        if (scrollTop > 320) backToTop.classList.add('visible');
        else backToTop.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => { setTrackHeight(); positionSideNav(); onScroll(); });
    setTrackHeight();
    positionSideNav();
    onScroll();
    setTimeout(() => { setTrackHeight(); positionSideNav(); onScroll(); }, 50);
    if (backToTop) backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Swap video posters for light/dark mode.
    const posterElements = document.querySelectorAll('video[data-poster-light]');
    const colorScheme = window.matchMedia('(prefers-color-scheme: light)');
    const applyPosters = () => {
      posterElements.forEach((video) => {
        const poster = colorScheme.matches ? video.dataset.posterLight : (video.dataset.posterDark || video.poster);
        if (poster) video.poster = poster;
      });
    };
    colorScheme.addEventListener('change', applyPosters);
    applyPosters();

    const loadVideoSources = (video) => {
      if (!video || video.dataset.loaded === 'true') return;
      const sources = video.querySelectorAll('source[data-src]');
      sources.forEach((source) => {
        source.src = source.dataset.src;
        delete source.dataset.src;
      });
      video.dataset.loaded = 'true';
      video.preload = 'metadata';
      if (sources.length) video.load();
    };

    // Defer loading non-hero videos until they near the viewport or receive intent.
    const deferredVideos = document.querySelectorAll('video source[data-src]');
    const deferredParents = Array.from(deferredVideos).map((source) => source.closest('video')).filter(Boolean);
    if (deferredParents.length) {
      const loadOnIntent = (event) => loadVideoSources(event.currentTarget);

      deferredParents.forEach((video) => {
        video.preload = 'none';
        video.setAttribute('loading', 'lazy');
        video.addEventListener('pointerdown', loadOnIntent, { once: true });
        video.addEventListener('touchstart', loadOnIntent, { once: true, passive: true });
        video.addEventListener('focusin', loadOnIntent, { once: true });
      });

      if ('IntersectionObserver' in window) {
        const lazyObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            loadVideoSources(entry.target);
            observer.unobserve(entry.target);
          });
        }, { rootMargin: '360px 0px' });

        deferredParents.forEach((video) => lazyObserver.observe(video));
      } else {
        deferredParents.forEach(loadVideoSources);
      }
    }

    // Keep the autoplay hero available, but stop decoding it when it is off-screen.
    const heroVideo = document.querySelector('.hero-video video');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (heroVideo && 'IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !reduceMotion.matches) {
            heroVideo.play().catch(() => {});
          } else {
            heroVideo.pause();
          }
        });
      }, { threshold: 0.15 });
      heroObserver.observe(heroVideo);
    } else if (heroVideo && reduceMotion.matches) {
      heroVideo.pause();
    }
