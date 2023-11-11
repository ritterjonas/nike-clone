import Image from 'next/image';
import {
  ArrowButtonLeft,
  ArrowButtonRight,
  Link,
  NewsContainer,
  NewsContent,
  NewsItem,
  NewsItemContent,
  Text,
} from './News.styles';
import { useEffect, useState } from 'react';

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ref = setTimeout(goToNext, 3000);
    return () => clearTimeout(ref);
  }, [currentIndex]);

  const items = [
    {
      icon: '/images/logo_nike_snkrs.svg',
      text: (
        <Text>
          Fique por dentro dos lançamentos <Link href='#'>SNKRS</Link>
        </Text>
      ),
    },
    {
      icon: '/images/logo_jordan.svg',
      text: (
        <Text>
          Encontre seu <Link href='#'>Jordan</Link> ideal
        </Text>
      ),
    },
    {
      icon: '/images/logo_nike.svg',
      text: (
        <Text>
          Os melhores preços e promoções <Link href='#'>Nike</Link>
        </Text>
      ),
    },
  ];

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <NewsContainer>
      <ArrowButtonLeft onClick={goToPrev} data-testid='prev-button'>
        <Image
          src='/images/icon_seta_esquerda.svg'
          alt='Left arrow'
          width={12}
          height={12}
          data-testid='news-arrow-left'
        />
      </ArrowButtonLeft>

      <NewsContent style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {items.map(item => (
          <NewsItem key={item.icon}>
            <NewsItemContent>
              <Image
                src={item.icon}
                alt='snkrs logo'
                width={30}
                height={24}
                data-testid='news-logo'
              />
              {item.text}
            </NewsItemContent>
          </NewsItem>
        ))}
      </NewsContent>

      <ArrowButtonRight onClick={goToNext} data-testid='next-button'>
        <Image
          src='/images/icon_seta_direita.svg'
          alt='Right arrow'
          width={12}
          height={12}
          data-testid='news-arrow-right'
        />
      </ArrowButtonRight>
    </NewsContainer>
  );
}
