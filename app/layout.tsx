import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Workshop: Só Para Empreendedores',
  description:
    'Um encontro exclusivo para quem faz acontecer! Aprenda com especialistas, troque experiências com outros empreendedores e descubra estratégias práticas para crescer seu negócio de forma inteligente e sustentável. Networking, conteúdo de valor e insights que você só encontra entre quem vive o empreendedorismo na prática.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1400486706982246');
            fbq('track', 'PageView');
          `
        }} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1400486706982246&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {children}

        {/* Script de rastreamento Kiwify */}
        <script dangerouslySetInnerHTML={{
          __html: `
            let prefix = ["https://pay.kiwify.com.br"];
            function getParams() {
                let t = "",
                    e = window.top.location.href,
                    r = new URL(e);
                if (null != r) {
                    let a = r.searchParams.get("utm_source"),
                        n = r.searchParams.get("utm_medium"),
                        o = r.searchParams.get("utm_campaign"),
                        m = r.searchParams.get("utm_term"),
                        c = r.searchParams.get("utm_content");
                    if (-1 !== e.indexOf("?")) {
                      t = \`&sck=\${a}|\${n}|\${o}|\${m}|\${c}\`;
                      console.log(t);
                    }
                }
                return t;
            }

            (function() {
                var t = new URLSearchParams(window.location.search);
                if (t.toString()) {
                  document.querySelectorAll("a").forEach(function(e) {
                      for (let r = 0; r < prefix.length; r++)
                          if (-1 !== e.href.indexOf(prefix[r])) {
                              if (-1 === e.href.indexOf("?"))
                                  e.href += "?" + t.toString() + getParams();
                              else
                                  e.href += "&" + t.toString() + getParams();
                          }
                  });
                }
            })();
            console.log('%cScript de rastreamento de vendas desenvolvido pela Comunidade NOD - Dericson Calari e Samuel Choairy', 'font-size:20px;color:yellow;');
          `
        }} />
      </body>
    </html>
  )
}
