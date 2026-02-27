'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Share2, ThumbleUp, Bookmark, ThumbsUp, Play } from 'lucide-react';
import Container from '@/components/ui/Container';

const articles = [
  {
    id: '103514714',
    href: '/story/genossenschaft-aare-respektlos-migros-empoert-mit-plakaten-eigene-belegschaft-103514714',
    image: '/images/24be99e7-d489-401a-a749-8d023a9a9964.jpg',
    category: 'Genossenschaft Aare',
    title: '«Respektlos»: Migros empört mit Plakaten eigene Belegschaft',
    comments: 115,
    ratings: 298,
    shares: 10,
    featured: true,
  },
  {
    id: '103514670',
    href: '/story/prachtwetter-die-lebensgeister-kommen-wieder-zurueck-103514670',
    image: '/images/ed4ac94d-5484-4c44-a9c5-c0c9c7e78705.jpg',
    category: 'Prachtwetter',
    title: '«Die Lebensgeister kommen wieder zurück»',
    comments: 14,
    ratings: 60,
    shares: 2,
    featured: false,
  },
  {
    id: '103514831',
    href: '/story/garmisch-kollabierte-lunge-nach-schwerem-sturz-grosse-sorge-um-ski-crack-103514831',
    image: '/images/e8f34ca1-30ea-48c0-9711-868f2e1652ec.jpg',
    category: 'Garmisch',
    title: 'Kollabierte Lunge nach schwerem Sturz: Grosse Sorge um Ski-Crack',
    comments: 0,
    ratings: 39,
    shares: 0,
    featured: false,
  },
  {
    id: '103514685',
    href: '/story/seltene-schlafstoerung-einmaliger-fall-arzt-87-erwuergt-frau-waehrend-er-schlaeft-103514685',
    image: '/images/c8647309-5154-467d-85d2-93aa03630222.jpeg',
    category: 'Seltene Schlafstörung',
    title: 'Einmaliger Fall: Arzt (87) erwürgt Frau, während er schläft',
    comments: null,
    ratings: 285,
    shares: 36,
    featured: false,
  },
  {
    id: '103514566',
    href: '/story/naechstes-kind-reagiert-sohn-von-angelina-und-brad-maddox-streicht-pitt-aus-namen-103514566',
    image: '/images/909df039-79c3-4b23-bbcc-ef9d4c2aedc1.jpg',
    category: 'Nächstes Kind reagiert',
    title: 'Sohn von Angelina und Brad: Maddox streicht Pitt aus Namen',
    comments: null,
    ratings: 116,
    shares: 0,
    featured: false,
  },
];

const articles2 = [
  {
    id: '103514775',
    href: '/story/phantombild-publiziert-deutscher-milliardaer-verliert-nach-schockanruf-millionen-103514775',
    image: '/images/31db7751-8be2-44d2-abbb-97b62e751a52.jpg',
    category: 'Phantombild publiziert',
    title: 'Deutscher Milliardär verliert nach Schockanruf Millionen',
    comments: null,
    ratings: 354,
    shares: 4,
    featured: true,
    badge: null,
  },
  {
    id: '103514745',
    href: '/story/nach-abfahrts-sieg-hatte-zweifel-corinne-suter-gibt-einblicke-in-ihr-seelenleben-103514745',
    image: '/images/3d80afe3-387b-4b89-b89f-fd90df137f32.jpg',
    category: 'Abfahrt Soldeu',
    title: 'Suter war nervöser als sonst – dann schafft sie Historisches',
    comments: 17,
    ratings: 121,
    shares: 3,
    featured: false,
    badge: '+ Video',
  },
  {
    id: '103514819',
    href: '/story/von-der-leyen-pruefung-steht-aus-mercosur-abkommen-wird-trotzdem-angewendet-103514819',
    image: '/images/efa285b4-9955-4499-b852-7df277696db6.jpg',
    category: 'Von der Leyen',
    title: 'Prüfung steht aus: Mercosur-Abkommen wird trotzdem angewendet',
    comments: 0,
    ratings: 1,
    shares: 0,
    featured: false,
    badge: null,
  },
];

const videos = [
  {
    id: '103514277',
    href: '/video/usa-vor-der-roten-ampel-erdloch-verschluckt-zwei-autos-103514277',
    image: '/images/6520833e-6d40-44f5-89b3-09206ec06142.jpg',
    duration: '01:00',
    category: 'USA',
    title: 'Vor der roten Ampel: Erdloch «verschluckt» zwei Autos',
    ratings: 264,
    shares: 3,
  },
  {
    id: '103514527',
    href: '/video/hillary-clinton-bill-clinton-vorladung-epstein-kongress-103514527',
    image: '/images/d1dd05d9-6e4d-4f45-ae97-4c8c594163ed.jpg',
    duration: '00:45',
    category: 'Kongressanhörung',
    title: 'Hillary Clinton: «Ich war nie auf Epsteins Insel»',
    ratings: 566,
    shares: 4,
  },
  {
    id: 'lawinen',
    href: '/video/berner-oberland-lawinen',
    image: '/images/placeholder.jpg',
    duration: '00:54',
    category: 'Berner Oberland',
    title: 'Naturspektakel: Lawinen donnern parallel ins Tal',
    ratings: 455,
    shares: 19,
  },
  {
    id: 'leukerbad',
    href: '/video/leukerbad-lawine',
    image: '/images/placeholder.jpg',
    duration: '00:46',
    category: 'Leukerbad VS',
    title: '«Wir schauten aus dem Fenster und sahen eine riesige Lawine!»',
    ratings: 1400,
    shares: 98,
  },
  {
    id: 'thailand',
    href: '/video/thailand-elefant',
    image: '/images/placeholder.jpg',
    duration: '00:49',
    category: 'Thailand',
    title: 'Beim Sex gestört: Elefant tickt völlig aus',
    ratings: 932,
    shares: 18,
  },
];

const moreArticles = [
  {
    id: 'schwyz-gamse',
    href: '/story/schwyz-gamse-lawine',
    image: '/images/placeholder.jpg',
    duration: '00:57',
    category: 'Schwyz',
    title: '«Wir dachten, es sei ein Skifahrer»: Gämse löst Lawine aus',
    comments: 34,
    ratings: 607,
    shares: 27,
    isVideo: true,
  },
  {
    id: 'philippinen',
    href: '/story/philippinen-teufelskrabbe',
    image: '/images/placeholder.jpg',
    duration: '00:49',
    category: 'Philippinen',
    title: 'Influencerin isst unwissentlich Teufelskrabbe – jetzt ist sie tot',
    ratings: 1600,
    shares: 23,
    isVideo: true,
  },
  {
    id: 'suedafrika',
    href: '/story/suedafrika-flusspferd',
    image: '/images/placeholder.jpg',
    duration: '01:48',
    category: 'Südafrika',
    title: 'Flusspferd greift Boot an – Vater zieht Pistole',
    ratings: 652,
    shares: 13,
    isVideo: true,
  },
  {
    id: 'wien',
    href: '/story/wien-taenzerin',
    image: '/images/placeholder.jpg',
    duration: '00:48',
    category: 'Wien',
    title: 'Tänzerin strippt im Lehrerzimmer – auch Schüler schauen zu',
    ratings: 1300,
    shares: 15,
    isVideo: true,
  },
  {
    id: 'lehre',
    href: '/story/attraktive-lehre-fionn',
    image: '/images/placeholder.jpg',
    duration: '01:39',
    category: 'Comeback der Lehre?',
    title: 'Attraktive Lehre: Für Fionn (19) gehört auch Eiseskälte dazu',
    comments: 198,
    ratings: 1800,
    shares: 59,
    isVideo: true,
  },
  {
    id: 'washington',
    href: '/story/trump-board-of-peace',
    image: '/images/placeholder.jpg',
    duration: '01:25',
    category: 'Washington D.C.',
    title: 'Trump sorgt am Board-of-Peace-Event für Schlagzeilen',
    comments: 124,
    ratings: 1100,
    shares: 9,
    isVideo: true,
  },
  {
    id: 'eth',
    href: '/story/eth-zuerich-kuenstliches-ohr',
    image: '/images/placeholder.jpg',
    duration: '00:48',
    category: 'ETH Zürich',
    title: 'Hoffnung für Brandopfer: Forscher züchten künstliches Ohr',
    comments: 9,
    ratings: 93,
    shares: 1,
    isVideo: true,
  },
];

const newsArticles = [
  {
    id: 'frauenfeld',
    category: 'Frauenfeld',
    title: 'Streit mit Teenagern eskaliert – 48-Jähriger im Spital',
    ratings: 85,
    shares: 2,
  },
  {
    id: 'epstein-gates',
    category: 'Epstein-Files',
    badge: 'Microsoft-Mitgründer',
    title: 'Gates-Geliebte: Von Epstein erpresst und von Russen ausspioniert?',
    ratings: 147,
    shares: 1,
  },
  {
    id: 'promi-ticker',
    badge: 'Promi-Ticker',
    category: 'Prozess in Oslo',
    title: 'Marius konfrontiert Zeugin – da stoppt der Richter die Befragung',
    ratings: 4800,
    shares: 50,
  },
  {
    id: 'wm2026',
    category: 'WM 2026',
    title: 'Schock in Mexiko: Hunderte Leichensäcke nahe WM-Stadion entdeckt',
    comments: 182,
    ratings: 873,
    shares: 27,
  },
  {
    id: 'pakistan',
    badge: 'Tagesschau',
    category: 'Heftige Gefechte',
    title: 'Pakistan erklärt Taliban-Regierung in Afghanistan «offenen Krieg»',
    ratings: 197,
    shares: 6,
  },
  {
    id: 'ki-streit',
    category: 'KI-Streit USA',
    title: 'Pentagon will KI-Zugriff ohne Limit – Anthropic wehrt sich',
    comments: 29,
    ratings: 108,
    shares: 13,
  },
  {
    id: 'wef',
    category: 'Børge Brende',
    title: 'Nach Epstein-Enthüllungen: WEF-Chef tritt zurück',
    ratings: 516,
    shares: 13,
  },
  {
    id: 'iran',
    category: 'Verhandlungszeit läuft ab',
    title: 'Fragen und Antworten zu Iran: Letzte Gelegenheit vor einem Krieg?',
    comments: 41,
    ratings: 329,
    shares: 2,
  },
  {
    id: 'schilling',
    category: 'Schilling Report',
    title: 'Schweizer Chefetagen ergrauen – und der Frauenanteil stagniert',
    comments: 52,
    ratings: 259,
    shares: 5,
  },
  {
    id: 'illnau',
    category: 'Illnau ZH',
    title: 'Über 70 Schadensmeldungen – heute gibt es weitere Sprengungen',
    comments: 164,
    ratings: 614,
    shares: 51,
  },
];

const tickerItems = [
  {
    id: 'bundesbern',
    badge: 'News-Ticker',
    category: 'Bundesbern-Ticker',
    title: 'SP-Urgestein: Eric Nussbaumer tritt Ende April zurück',
    stat1: '5.8k',
    stat2: '44.2k',
    stat3: '16.8k',
  },
  {
    id: 'illnau-explosion',
    badge: 'Explosion in Illnau',
    category: 'Illnau ZH',
    title: 'Zwei Verletzte nach Unfall mit mehreren hundert Kilo Sprengstoff',
    stat1: '3k',
    stat2: '1.1k',
  },
  {
    id: 'crans-montana',
    badge: '«Solidarität»',
    category: 'Crans-Montana',
    title: "Bundesrat zahlt allen Brandopfern 50'000 Franken",
    stat1: '571',
    stat2: '1.4k',
    stat3: '17',
  },
  {
    id: 'srg',
    category: 'Abstimmungsumfrage',
    title: 'Junge machen Kehrtwende: Mehrheit lehnt SRG-Initiative ab',
  },
];

function formatCount(n) {
  if (!n && n !== 0) return null;
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k';
  return String(n);
}

function ArticleStats({ comments, ratings, shares, small = false }) {
  const btnClass = small
    ? 'flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 transition-colors'
    : 'flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 transition-colors';
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center gap-2">
        {comments != null && (
          <button className={btnClass}>
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{formatCount(comments)}</span>
          </button>
        )}
        {ratings != null && (
          <button className={btnClass}>
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{formatCount(ratings)}</span>
          </button>
        )}
        {shares != null && (
          <button className={btnClass}>
            <Share2 className="w-3.5 h-3.5" />
            <span>{formatCount(shares)}</span>
          </button>
        )}
      </div>
      <button className="text-neutral-400 hover:text-neutral-700 transition-colors">
        <Bookmark className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

function FeaturedArticleCard({ article }) {
  return (
    <Link href={article.href} className="block group">
      <div className="flex flex-col h-full">
        <div className="relative w-full aspect-video overflow-hidden bg-neutral-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="pt-2 pb-1 flex-1">
          <h2 className="text-sm font-medium leading-snug">
            <span className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-0.5">
              {article.category}
            </span>
            <span className="text-neutral-900 font-bold text-base leading-tight group-hover:text-primary-700 transition-colors">
              {article.title}
            </span>
          </h2>
          <ArticleStats comments={article.comments} ratings={article.ratings} shares={article.shares} />
        </div>
      </div>
    </Link>
  );
}

function SmallArticleCard({ article }) {
  return (
    <Link href={article.href} className="block group">
      <div className="flex gap-2 h-full">
        <div className="relative flex-shrink-0 w-20 h-16 overflow-hidden bg-neutral-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {article.badge && (
            <span className="absolute top-1 left-1 bg-purple-600 text-white text-xs px-1 py-0.5 font-bold leading-none">
              {article.badge}
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="text-sm font-medium leading-snug">
            <span className="block text-xs text-neutral-500 font-semibold uppercase tracking-wide mb-0.5">
              {article.category}
            </span>
            <span className="text-neutral-900 font-semibold text-sm leading-tight group-hover:text-primary-700 transition-colors line-clamp-2">
              {article.title}
            </span>
          </h2>
          <ArticleStats comments={article.comments} ratings={article.ratings} shares={article.shares} small />
        </div>
      </div>
    </Link>
  );
}

function VideoCard({ video }) {
  return (
    <Link href={video.href} className="block group flex-shrink-0 w-56">
      <div className="relative aspect-video overflow-hidden bg-neutral-200">
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 font-mono">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black bg-opacity-50 rounded-full p-2">
            <Play className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>
      <div className="pt-1.5">
        <h2 className="text-sm">
          <span className="flex items-center gap-1 text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-0.5">
            <Play className="w-3 h-3" />
            {video.category}
          </span>
          <span className="text-neutral-900 font-semibold text-sm leading-tight group-hover:text-primary-700 transition-colors line-clamp-2 block">
            {video.title}
          </span>
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <button className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 transition-colors">
            <ThumbsUp className="w-3 h-3" />
            <span>{formatCount(video.ratings)}</span>
          </button>
          <button className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 transition-colors">
            <Share2 className="w-3 h-3" />
            <span>{formatCount(video.shares)}</span>
          </button>
        </div>
      </div>
    </Link>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  return (
    <section className="bg-white text-neutral-900 py-4">
      <Container className="px-2 sm:px-4">

        {/* First article grid block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6"
        >
          {/* Featured big article */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
            <FeaturedArticleCard article={articles[0]} />
          </motion.div>

          {/* Small articles */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 md:col-span-1 lg:col-span-3">
            {articles.slice(1).map((article) => (
              <div key={article.id} className="border-b border-neutral-100 pb-3 last:border-b-0 last:pb-0">
                <SmallArticleCard article={article} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <hr className="border-neutral-200 mb-6" />

        {/* Second article grid block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6"
        >
          {/* Featured big article */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
            <FeaturedArticleCard article={articles2[0]} />
          </motion.div>

          {/* Smaller articles */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 md:col-span-1 lg:col-span-3">
            {/* Video article */}
            <div className="border-b border-neutral-100 pb-3">
              <SmallArticleCard article={articles2[1]} />
            </div>

            {/* Fooby recipe iframe */}
            <div className="border-b border-neutral-100 pb-3">
              <div className="w-full overflow-hidden">
                <h2 className="text-xs font-semibold text-neutral-400 mb-1">Fooby - Tagesrezept (do not move!)</h2>
                <iframe
                  src="https://fooby.ch/de/20mindaily.w-20min-redesign.html"
                  loading="lazy"
                  className="w-full h-24 border-0"
                  title="Fooby Tagesrezept"
                />
              </div>
            </div>

            {/* Von der Leyen */}
            <div className="border-b border-neutral-100 pb-3 last:border-b-0 last:pb-0">
              <SmallArticleCard article={articles2[2]} />
            </div>
          </motion.div>
        </motion.div>

        <hr className="border-neutral-200 mb-6" />

        {/* Meistgeschaute Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-lg font-bold text-neutral-900 mb-3 border-b-2 border-neutral-900 pb-1 inline-block">
            Meistgeschaute Videos
          </h2>
          <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </motion.div>

        <hr className="border-neutral-200 mb-6" />

        {/* More video articles in grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6"
        >
          {moreArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Link href={article.href} className="block group">
                <div className="relative aspect-video overflow-hidden bg-neutral-100 mb-1.5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 font-mono">
                    {article.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black bg-opacity-40 rounded-full p-2">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-sm">
                  <span className="flex items-center gap-1 text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-0.5">
                    <Play className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="text-
