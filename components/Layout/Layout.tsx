import { PropsWithChildren } from 'react';
import { Roboto } from 'next/font/google';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import Footer from '../Footer/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={roboto.className}>
      <Navbar />
      <News />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
