tarteaucitron.init({
      "privacyUrl": "/privacy_policy.html", /* URL вашої політики конфіденційності */
      "hashtag": "#tarteaucitron", /* Стандартний хештег */
      "cookieName": "tarteaucitron", /* Ім'я файлу cookie */
      "orientation": "bottom", /* Позиція банера (top - зверху, bottom - знизу) */
      "showAlertSmall": false, /* Показувати маленький банер у кутку */
      "cookieslist": true, /* Показувати список файлів cookie */
      "adblocker": false, /* Виявлення блокувальників реклами */
      "AcceptAllCta": true, /* Кнопка для прийняття всіх файлів cookie */
      "highPrivacy": false, /* Вимкнути автоматичне прийняття файлів cookie */
      "handleBrowserDNTRequest": false, /* Відповідати на запити Do Not Track */
      "removeCredit": false, /* Прибрати кредит з банера */
      "moreInfoLink": true, /* Показувати "більше інформації" посилання */
      "useExternalCss": false, /* Використовувати зовнішній CSS */
      "readmoreLink": "/privacy_policy.html" /* URL сторінки з політикою конфіденційності */
    });

    if (googleAdsId) {
      tarteaucitron.user.googleadsId = googleAdsId;
      (tarteaucitron.job = tarteaucitron.job || []).push('googleads');
    }

    // Функція для отримання згоди користувача
    function getConsent() {
      // Перевірка наявності згоди
      if (localStorage.getItem('cookieConsent') === 'accepted') {
        return true;
      }
      return false;
    }

    // Відправка сигналу згоди до Google
    function sendConsentSignal() {
      var consent = getConsent();
      // Відправка сигналу згоди за допомогою gtag.js
      gtag('consent', 'update', {
        'ad_storage': consent ? 'granted' : 'denied',
        'analytics_storage': consent ? 'granted' : 'denied'
      });
    }

    // Виклик функції відправки сигналу згоди після зміни стану згоди
    document.addEventListener("tac.root_available", sendConsentSignal);