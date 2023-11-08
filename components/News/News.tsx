import Image from "next/image";
import { ArrowButton, NewsContainer, NewsContent, Text } from "./News.styles";

export default function News() {
  return (
    <NewsContainer>
      <ArrowButton>
        <Image
          src="/images/icon_seta_esquerda.svg"
          alt="Left arrow"
          width={16}
          height={16}
          data-testid="news-arrow-left"
          />
      </ArrowButton>

      <NewsContent>
        <Image
          src="/images/logo_nike_snkrs.svg"
          alt="snkrs logo"
          width={32}
          height={32}
          data-testid="news-snkrs-logo"
          />
        <Text>Fique por dentro dos lançamentos SNKRS</Text>
      </NewsContent>

      <ArrowButton>
        <Image
          src="/images/icon_seta_direita.svg"
          alt="Right arrow"
          width={16}
          height={16}
          data-testid="news-arrow-right"
          />
      </ArrowButton>
    </NewsContainer>
  )
}