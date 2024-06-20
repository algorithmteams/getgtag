function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Отримання значення параметра 'awtag'
    const googleAdsId = getParameterByName('awtag');

    // Динамічне створення і вставка скрипта gtag.js
    if (googleAdsId) {
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`;
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      // Початкове налаштування сигналів згоди
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      });

      gtag('config', googleAdsId);
    }