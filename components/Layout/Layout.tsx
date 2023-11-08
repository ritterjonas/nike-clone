import { PropsWithChildren } from 'react';
import { Roboto } from 'next/font/google'
import Navbar from '../Navbar/Navbar';

const roboto = Roboto({ subsets: ['latin'], weight: '300' });


export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={roboto.className}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}