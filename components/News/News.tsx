import Image from "next/image";
import { ArrowButton, Link, NewsContainer, NewsContent, Text } from "./News.styles";

export default function News() {
  return (
    <NewsContainer>
      <ArrowButton>
        <Image
          src="/images/icon_seta_esquerda.svg"
          alt="Left arrow"
          width={12}
          height={12}
          data-testid="news-arrow-left"
          />
      </ArrowButton>

      <NewsContent>
        <Image
          src="/images/logo_nike_snkrs.svg"
          alt="snkrs logo"
          width={23}
          height={16}
          data-testid="news-snkrs-logo"
          />
        <Text>Fique por dentro dos lançamentos <Link href="#">SNKRS</Link></Text>
      </NewsContent>

      <ArrowButton>
        <Image
          src="/images/icon_seta_direita.svg"
          alt="Right arrow"
          width={12}
          height={12}
          data-testid="news-arrow-right"
          />
      </ArrowButton>
    </NewsContainer>
  )
}