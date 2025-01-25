
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
import { SessionProviders } from '@/context/Context';


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
} 

export default async function RootLayout({ children, params }) {


  // translation messages
  const messages = await getMessages();
  const { locale } = await params; 
  
  return (
    <html lang={locale} dir={locale == 'ar' ? "rtl" : "ltr"}>
      <head></head>
      <body>
        <Context>
          <NextIntlClientProvider messages={messages}>
            <SessionProviders>
              {children}
            </SessionProviders>
          </NextIntlClientProvider>
        </Context>
      </body>
    </html>
  );
}
