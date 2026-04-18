import Image from "next/image";
import Link from "next/link";
import logo from "@public/dmuchaniec.png";
import { groq } from "next-sanity";

import NumbersCounter from "../../components/NumbersCounter";
import AttractionMediaSlider, {
  type HomepageGalleryItem,
} from "@/components/AttractionMediaSlider";
import { client } from "@/lib/sanity";

const cards = [
  {
    id: 1,
    title: "Urodziny",
    desc: "Zorganizuj niezapomniane urodziny dla swojego dziecka z Mega Fun! Dmuchane zjeżdżalnie, zamki i tory przeszkód to gwarancja mnóstwo śmiechu i radości dla wszystkich uczestników. Dopełnij zabawę watą cukrową, popcornem i bańkami mydlanymi, a stworzysz imprezę marzeń!.",
  },
  {
    id: 2,
    title: "Wesela",
    desc: "Szukasz oryginalnej atrakcji na wesele, która zaskoczy Twoich gości? Dmuchańce Mega Fun to idealny sposób na urozmaicenie przyjęcia i zapewnienie rozrywki zarówno dzieciom, jak i dorosłym. Stwórz niezapomnianą atmosferę i podaruj swoim gościom mnóstwo radości!",
  },
  {
    id: 3,
    title: "Festyny i pikniki",
    desc: "Rozkręć swój festyn lub piknik z dmuchanymi atrakcjami Mega Fun! Nasze zjeżdżalnie, zamki i tory przeszkód przyciągną tłumy i zapewnią mnóstwo frajdy dla uczestników w każdym wieku. Wata cukrowa, popcorn i bańki mydlane dopełnią całości i stworzą niepowtarzalny klimat!",
  },
  {
    id: 4,
    title: "Imprezy firmowe",
    desc: "Zorganizuj integracyjną imprezę firmową, która na długo zapadnie w pamięć Twoim pracownikom! Dmuchańce Mega Fun to doskonały sposób na budowanie zespołu, relaks i oderwanie od codziennych obowiązków. Zapewnij swoim pracownikom lub ich dzieciom mnóstwo śmiechu i pozytywnej energii!",
  },
];

async function fetchHomepageGallery(): Promise<HomepageGalleryItem[]> {
  return client.fetch(
    groq`*[_type == "galleryImage" && showOnHomepage == true] | order(order asc) {
      _id,
      title,
      alt,
      mediaType,
      photo,
      videoPoster,
      "video": video {
        asset-> {
          url
        }
      },
    }`,
  );
}

const AboutSection = async () => {
  const homepageGallery = await fetchHomepageGallery();

  const fallbackImage = (
    <Image
      alt="Dmuchana zdjeżdżalnia"
      src={logo}
      width={600}
      height={600}
      className="object-cover object-center drop-shadow-2xl"
    />
  );

  return (
    <section className="py-16 pt-8 md:py-32 bg-contain bg-no-repeat z-30 bg-[url('/decoration.svg')] md:pt-48">
      <div className="container flex flex-col items-center">
        {/*
          grid-cols: tekst zajmuje 2/5, slider zajmuje 3/5
          gap zmniejszony żeby slider był bliżej tekstu i przez to szerszy
        */}
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">

          {/* Lewa kolumna – tekst (2/5) */}
          <div className="flex flex-col text-xl lg:col-span-2 md:py-16">
            <h2 className="text mb-4 text-left text-4xl leading-[3.5rem]">
              O Nas
            </h2>
            <p className="text-xl" data-aos="fade-up">
              Jesteśmy firmą, która z pasją dostarcza najlepsze dmuchane atrakcje na wszelkiego
              rodzaju eventy – od urodzin i festynów po duże wydarzenia plenerowe. Naszym celem jest
              zapewnienie maksymalnej radości i bezpieczeństwa, dlatego oferujemy wyłącznie wysokiej
              jakości dmuchane place zabaw, zjeżdżalnie i tory przeszkód, które spełniają najwyższe
              standardy. Dzięki wieloletniemu doświadczeniu wiemy, jak stworzyć niezapomniane chwile
              dla dzieci i dorosłych.
            </p>
            <NumbersCounter />

            {/* Przycisk "Zobacz wszystkie" – widoczny tylko na desktop */}
            <div className="mt-6 hidden lg:block" data-aos="fade-up">
              <Link
                href="/galeria"
                className="inline-flex items-center gap-2 rounded-2xl bg-primaryc px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Zobacz wszystkie zdjęcia
              </Link>
            </div>
          </div>

          {/* Prawa kolumna – slider (3/5) */}
          <div className="lg:col-span-3">
            <AttractionMediaSlider
              items={homepageGallery}
              fallback={fallbackImage}
            />
          </div>
        </div>

        {/* Przycisk "Zobacz wszystkie" – widoczny tylko na mobile, wycentrowany pod sliderem */}
        <div className="mt-8 flex justify-center lg:hidden" data-aos="fade-up">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 rounded-2xl bg-primaryc px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Zobacz wszystkie zdjęcia
          </Link>
        </div>
      </div>

      <div className="container">
        <h2 className="text my-12 mb-16 text-center text-4xl text-primaryc mt-16" data-aos="fade-up">
          Z nami twoje wydarzenie zapadnie w pamięci
        </h2>
        <div className="grid grid-cols-1 py-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {cards.map((item, idx) => (
              <div
                className="transition-duration-[2s] group relative bottom-0 left-0 right-0 top-0 flex h-full flex-col justify-start rounded-3xl bg-white p-6 text-primaryc shadow-xl transition-all hover:bg-primaryc hover:text-white"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="mb-4 flex space-x-2 text-lg font-bold xl:text-2xl">{item.title}</h3>
                <p className="text-base text-gray group-hover:text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;