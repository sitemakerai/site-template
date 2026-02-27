import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const inhalteLinks = [
  {
    text: 'News',
    href: '/',
    img: '/images/8d503e6f-6c62-47a0-a4ba-089dc1bf4b77.png',
  },
  {
    text: 'Video',
    href: '/video',
    img: '/images/d0b52dce-ffea-41e6-8606-7253dc1d16d3.png',
  },
  {
    text: 'Lifestyle',
    href: '/lifestyle',
    img: '/images/23ac0492-5708-4698-91db-5963eda5387b.png',
  },
];

const aktivitaetenLinks = [
  {
    text: 'Spiele',
    href: 'https://spiele.20min.ch/?utm_campaign=startpage&utm_medium=navigation_link&utm_source=20min_ch',
    img: '/images/918ba89e-0484-4136-bfff-0ba3e0c43ff3.png',
    external: true,
  },
  {
    text: 'Fantasy League',
    href: 'https://fantasy.20min.ch/',
    img: '/images/02f87417-9bb4-4af5-894e-44ee44da0cdc.png',
    external: false,
  },
  {
    text: 'Horoscope',
    href: 'https://horoscope.20min.ch/',
    img: '/images/f97ae9b1-3c30-49f9-abb8-7c1822290ea4.png',
    external: true,
  },
  {
    text: 'GOAT',
    href: 'https://audio.20min.ch/?language=de&platform=20min-de/',
    img: '/images/c12837f4-1d16-4791-9011-0cea4f4deaa4.png',
    external: false,
  },
];

const servicesLinks = [
  {
    text: 'Wetter',
    href: '/wetter-uebersicht',
    img: '/images/184f0c01-7ac1-464d-9e42-d360cd9466f3.png',
    external: false,
  },
  {
    text: 'Live TV',
    href: 'https://www.20min.ch/video/live-tv',
    img: '/images/efd5608f-2d4b-4858-bd66-3aae578a44df.png',
    external: true,
  },
  {
    text: 'Gutscheine',
    href: 'https://www.deals20min.ch/',
    img: '/images/38b0480d-e156-4232-9a16-9dced48ae7f5.png',
    external: false,
  },
  {
    text: 'E-paper Archiv',
    href: 'https://epaper.20min.ch',
    img: '/images/b0e59a91-d331-402e-92d6-b9a445bd5c4f.png',
    external: true,
  },
  {
    text: 'RSS Feed',
    href: 'https://www.20min.ch/story/rssfeed-749569359678',
    img: '/images/4cdcc07e-d7b4-4583-bd44-155026b2fc93.png',
    external: true,
  },
  {
    text: 'Werbeformate',
    href: 'https://advertising.20min.ch/',
    img: '/images/1b7456a3-0aea-427f-9285-edff757f74b1.png',
    external: true,
  },
];

const socialLinks = [
  {
    text: 'Google News',
    href: 'https://news.google.com/publications/CAAqIQgKIhtDQklTRGdnTWFnb0tDREl3YldsdUxtTm9LQUFQAQ?hl=de&gl=CH&ceid=CH%3Ade',
    img: '/images/e16db6f1-388d-4797-b854-2cd88ec349f2.png',
  },
  {
    text: 'TikTok',
    href: 'https://www.tiktok.com/@20minuten',
    img: '/images/7fcf23d8-938e-4f7f-9ac4-57577595e2c5.png',
  },
  {
    text: 'Whats App',
    href: 'https://www.whatsapp.com/channel/0029Va43T73BPzjaAmcDZf3x',
    img: '/images/dd7e1a93-8bb0-498b-aa3e-fdae83f9d2d3.png',
  },
  {
    text: 'Instagram',
    href: 'https://www.instagram.com/20min.ch',
    img: '/images/11203353-4afa-4f66-986d-a048cc482a3f.png',
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/company/20minuten/posts/?feedView=all',
    img: '/images/538daf7e-26fe-45fc-80c1-754b6d5186c0.png',
  },
  {
    text: 'Facebook',
    href: 'https://www.facebook.com/20min',
    img: '/images/35d3ef4d-0f62-47ca-acd7-20e6cb044b6a.png',
  },
  {
    text: 'Twitch',
    href: 'https://www.twitch.tv/20min_ch',
    img: '/images/09bcc2c6-a283-4af7-84df-f3a13792f0af.png',
  },
  {
    text: 'Snapchat',
    href: 'https://www.snapchat.com/p/6100652f-14d5-44d1-a1f1-4e373a1e2404/2599453165191168',
    img: '/images/49043372-f639-4a39-b5eb-07197dd6fd45.png',
  },
];

const legalLinks = [
  { text: 'Karriere', href: 'https://jobs.20minuten.ch/?utm_source=20min-homepage&utm_medium=referral', external: true },
  { text: 'Impressum & Team', href: '/impressum', external: false },
  { text: 'Archiv', href: '/sitemap', external: false },
  { text: 'Datenschutzerklärung', href: '/datenschutzerklaerung', external: false },
  { text: 'AGB', href: '/agb', external: false },
  { text: 'Werbeformate & Tarife', href: 'https://advertising.20min.ch', external: true },
];

function FooterLinkItem({ text, href, img, external }) {
  const content = (
    <span className="flex items-center gap-1 text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
      <Image
        src={img}
        alt={text}
        width={28}
        height={28}
        className="rounded-md flex-shrink-0"
        unoptimized
      />
      {text}
    </span>
  );

  if (external) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href}>{content}</Link>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 pt-10 pb-6">
      <Container>
        {/* Main nav sections */}
        <nav aria-label="Hauptnavigation im Fußbereich">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Inhalte */}
            <section>
              <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Inhalte
              </span>
              <ul className="flex flex-col gap-3">
                {inhalteLinks.map((item) => (
                  <FooterLinkItem key={item.text} {...item} />
                ))}
              </ul>
            </section>

            {/* Aktivitäten */}
            <section>
              <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Aktivitäten
              </span>
              <ul className="flex flex-col gap-3">
                {aktivitaetenLinks.map((item) => (
                  <FooterLinkItem key={item.text} {...item} />
                ))}
              </ul>
            </section>

            {/* Services */}
            <section>
              <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Services
              </span>
              <ul className="flex flex-col gap-3">
                {servicesLinks.map((item) => (
                  <FooterLinkItem key={item.text} {...item} />
                ))}
              </ul>
            </section>

            {/* App download */}
            <section>
              <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Hol dir die 20 Minuten App!
              </span>
              <p className="text-sm text-neutral-600 mb-4">Bleib auf dem Laufenden.</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://apps.apple.com/us/app/20-minuten-nachrichten/id285688859"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download 20 Minuten from Apple App Store"
                  className="inline-block"
                >
                  <img
                    src="/icons/footer/apps/de/ios.svg"
                    alt="20 Minuten Apple App Store"
                    width={120}
                    height={40}
                    loading="lazy"
                    className="h-10 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ch.iAgentur.i20Min"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download 20 Minuten from Google Play Store"
                  className="inline-block"
                >
                  <img
                    src="/icons/footer/apps/de/android.svg"
                    alt="20 Minuten Google Play Store"
                    width={120}
                    height={40}
                    loading="lazy"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </section>
          </div>
        </nav>

        {/* Social links */}
        <nav aria-label="Folgen Sie uns in sozialen Netzwerken">
          <ul className="flex flex-wrap gap-4 mb-8">
            {socialLinks.map((item) => (
              <li key={item.text}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={28}
                    height={28}
                    className="rounded-md flex-shrink-0"
                    unoptimized
                  />
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logos */}
        <div className="flex items-center gap-6 mb-6">
          <a href="https://20min.ch" className="inline-block">
            <img
              src="/logos/20min-logo-light-mode.svg"
              alt="Logo"
              className="h-7 w-auto"
            />
          </a>
          <a href="https://20min.ch/fr" className="inline-block">
            <img
              src="/logos/20min-logo-light-mode-FR.svg"
              alt="Logo"
              className="h-7 w-auto"
            />
          </a>
        </div>

        {/* Legal links */}
        <div className="border-t border-neutral-200 pt-5">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((item) =>
              item.external ? (
                <li key={item.text}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ) : (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              )
            )}
            <li>
              <button className="text-xs text-neutral-500 hover:text-neutral-800 transition-colors">
                Privatsphäre
              </button>
            </li>
          </ul>
          <p className="mt-4 text-xs text-neutral-400">
            © {currentYear} 20 Minuten: Aktuelle Nachrichten, Schlagzeilen
          </p>
        </div>
      </Container>
    </footer>
  );
}
