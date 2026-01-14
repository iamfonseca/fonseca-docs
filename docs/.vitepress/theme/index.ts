import DefaultTheme from 'vitepress/theme'
import type { Theme, EnhanceAppContext } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    if (typeof window !== 'undefined') {
      // Reading Progress Bar
      const updateProgressBar = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        let progressBar = document.querySelector('.reading-progress-bar') as HTMLElement;
        if (!progressBar) {
          progressBar = document.createElement('div');
          progressBar.className = 'reading-progress-bar';
          document.body.appendChild(progressBar);
        }
        progressBar.style.width = scrolled + '%';
      };

      // Back to Top Button
      const createBackToTop = () => {
        let backToTopBtn = document.querySelector('.back-to-top') as HTMLElement;
        if (!backToTopBtn) {
          backToTopBtn = document.createElement('button');
          backToTopBtn.className = 'back-to-top';
          backToTopBtn.innerHTML = '↑';
          backToTopBtn.setAttribute('aria-label', 'Back to top');
          backToTopBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          };
          document.body.appendChild(backToTopBtn);
        }

        const toggleBackToTop = () => {
          if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
          } else {
            backToTopBtn.classList.remove('visible');
          }
        };

        window.addEventListener('scroll', toggleBackToTop);
        toggleBackToTop();
      };

      // Breadcrumbs
      const createBreadcrumbs = () => {
        const content = document.querySelector('.VPDoc .content-container');
        if (!content || document.querySelector('.custom-breadcrumbs')) return;

        const path = window.location.pathname;
        const parts = path.split('/').filter(p => p && p !== 'index.html');
        
        if (parts.length === 0) return;

        const breadcrumbs = document.createElement('div');
        breadcrumbs.className = 'custom-breadcrumbs';

        breadcrumbs.innerHTML = '<a href="/">🏠 Home</a>';

        let currentPath = '';
        parts.forEach((part, index) => {
          currentPath += '/' + part;
          const isLast = index === parts.length - 1;
          const label = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');

          breadcrumbs.innerHTML += '<span class="separator">/</span>';
          
          if (isLast) {
            breadcrumbs.innerHTML += `<span class="current">${label}</span>`;
          } else {
            breadcrumbs.innerHTML += `<a href="${currentPath}">${label}</a>`;
          }
        });

        const firstChild = content.firstChild;
        if (firstChild) {
          content.insertBefore(breadcrumbs, firstChild);
        }
      };

      // Reading Time
      const addReadingTime = () => {
        const h1 = document.querySelector('.VPDoc h1');
        if (!h1 || document.querySelector('.reading-time')) return;

        const content = document.querySelector('.VPDoc .content-container');
        if (!content) return;

        const text = content.textContent || '';
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

        const readingTimeEl = document.createElement('span');
        readingTimeEl.className = 'reading-time';
        readingTimeEl.textContent = `${readingTime} min read`;

        h1.appendChild(readingTimeEl);
      };

      // Initialize on route change
      const init = () => {
        setTimeout(() => {
          createBreadcrumbs();
          addReadingTime();
          updateProgressBar();
          createBackToTop();
        }, 100);
      };

      window.addEventListener('scroll', updateProgressBar);
      
      // VitePress router hook
      router.onAfterRouteChanged = init;
      
      init();
    }
  }
} satisfies Theme
