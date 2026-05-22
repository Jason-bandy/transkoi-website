import { NextResponse } from 'next/server';

export function GET() {
  const html = `<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>TransKoi 锦鲤翻译</title>
  <script>
    (function() {
      var locales = ['zh', 'en', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'ar', 'hi', 'th', 'vi', 'id', 'nl', 'sv', 'pl'];
      var browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
      var target = locales.indexOf(browserLang) >= 0 ? browserLang : 'zh';
      window.location.href = '/' + target;
    })();
  </script>
</head>
<body>
  <noscript><a href="/zh">Click here to enter</a></noscript>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'content-type': 'text/html' },
  });
}
