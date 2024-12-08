
// import "bootstrap/dist/css/bootstrap.min.css";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '../../i18n/routing';

import "@/public/assets/sass/styles.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-calendar/dist/Calendar.css";
config.autoAddCss = false;

import Context from "@/context/Context";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({ children, params: {locale} }) {


  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == 'ar' ? "rtl" : "ltr"}>
      <head></head>
      <body>
        <Context>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Context>
      </body>
    </html>
  );
}
