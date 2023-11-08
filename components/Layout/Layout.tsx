import { PropsWithChildren } from 'react';
import { Roboto } from 'next/font/google'
import Navbar from '../Navbar/Navbar';
import News from '../News/News';

const roboto = Roboto({ subsets: ['latin'], weight: '300' });


export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={roboto.className}>
      <Navbar />
      <News />
      <main>{children}</main>
    </div>
  )
}