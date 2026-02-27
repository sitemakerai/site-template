'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'C0001',
    title: 'Unbedingt erforderliche Cookies',
    alwaysActive: true,
    description:
      'Diese Cookies sind zur Funktion der Website erforderlich und können in Ihren Systemen nicht deaktiviert werden. In der Regel werden diese Cookies nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, wie etwa dem Festlegen Ihrer Datenschutzeinstellungen, dem Anmelden oder dem Ausfüllen von Formularen. Sie können Ihren Browser so einstellen, dass diese Cookies blockiert oder Sie über diese Cookies benachrichtigt werden. Einige Bereiche der Website funktionieren dann aber nicht. Diese Cookies speichern keine personenbezogenen Daten.',
  },
  {
    id: 'C0003',
    title: 'Funktionelle Cookies',
    alwaysActive: false,
    description:
      'Mit diesen Cookies ist die Website in der Lage, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht einwandfrei.',
  },
  {
    id: 'C0002',
    title: 'Leistungs-Cookies',
    alwaysActive: false,
    description:
      'Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie unterstützen uns bei der Beantwortung der Fragen, welche Seiten am beliebtesten sind, welche am wenigsten genutzt werden und wie sich Besucher auf der Website bewegen. Alle von diesen Cookies erfassten Informationen werden aggregiert und sind deshalb anonym. Wenn Sie diese Cookies nicht zulassen, können wir nicht wissen, wann Sie unsere Website besucht haben.',
  },
  {
    id: 'C0004',
    title: 'Cookies für Marketingzwecke',
    alwaysActive: false,
    description:
      'Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante Anzeigen auf anderen Websites zu zeigen. Sie speichern nicht direkt personenbezogene Daten, basieren jedoch auf einer einzigartigen Identifizierung Ihres Browsers und Internet-Geräts. Wenn Sie diese Cookies nicht zulassen, werden Sie weniger gezielte Werbung erleben.',
  },
  {
    id: 'C0005',
    title: 'Social-Media-Cookies',
    alwaysActive: false,
    description:
      'Diese Cookies werden von einer Reihe von Social Media-Diensten gesetzt, die wir auf der Website verwenden, damit Sie unsere Inhalte mit Ihren Freunden und Netzwerken teilen können. Diese Cookies sind in der Lage, Ihren Browser über andere Websites hinweg zu verfolgen und ein Profil Ihrer Interessen zu erstellen. Dies kann sich auf Inhalte und Nachrichten auswirken, die Sie auf anderen Websites sehen. Wenn Sie diese Cookies nicht zulassen, können Sie diese Freigabetools möglicherweise nicht verwenden oder sehen.',
  },
  {
    id: 'IAB2V2_1',
    title: 'Speichern von oder Zugriff auf Informationen auf einem Endgerät',
    vendorCount: '253 Lieferanten können diesen Zweck nutzen',
    alwaysActive: false,
    description:
      'Cookies, Endgeräte- oder ähnliche Online-Kennungen (z. B. login-basierte Kennungen, zufällig generierte Kennungen, netzwerkbasierte Kennungen) können zusammen mit anderen Informationen (z. B. Browsertyp und Browserinformationen, Sprache, Bildschirmgröße, unterstützte Technologien usw.) auf Ihrem Endgerät gespeichert oder von dort ausgelesen werden, um es jedes Mal wiederzuerkennen, wenn es eine App oder einer Webseite aufruft. Dies geschieht für einen oder mehrere der hier aufgeführten Verarbeitungszwecke.',
    links: [
      { label: 'Liste von IAB-Lieferanten' },
      { label: 'Illustrationen anzeigen' },
    ],
  },
  {
    id: 'IAB2V2_11',
    title: 'Verwendung reduzierter Daten zur Auswahl von Inhalten',
    vendorCount: '40 Lieferanten können diesen Zweck nutzen',
    alwaysActive: false,
    description:
      'Inhalte, die Ihnen auf diesem Dienst präsentiert werden, können auf reduzierten Daten basieren, wie z. B. der Webseite oder App, die Sie verwenden, Ihrem ungefähren Standort, Ihrem Endgerätetyp oder der Information, mit welchen Inhalten Sie interagieren (oder interagiert haben) (z. B. zur Begrenzung wie häufig Ihnen ein Video oder ein Artikel angezeigt wird).',
    hasObjection: true,
    objectionLabel: 'Den Berechtigten Interessen Widersprechen',
    removeObjectionLabel: 'Widerspruch entfernen',
    links: [
      { label: 'Liste von IAB-Lieferanten' },
      { label: 'Illustrationen anzeigen' },
    ],
  },
  {
    id: 'IAB2V2_3',
    title: 'Erstellung von Profilen für personalisierte Werbung',
    vendorCount: '202 Lieferanten können diesen Zweck nutzen',
    alwaysActive: false,
    description:
      'Informationen über Ihre Aktivitäten auf diesem Dienst (wie ausgefüllte Formulare, angesehene Inhalte) können gespeichert und mit anderen Informationen über Sie (z. B. Informationen aus Ihrer vorherigen Aktivität auf diesem Dienst oder anderen Webseiten oder Apps) oder ähnlichen Benutzern kombiniert werden. Diese werden dann verwendet, um ein Profil über Sie zu erstellen oder zu verbessern (dies kann z. B. mögliche Interessen und persönliche Merkmale beinhalten). Ihr Profil kann (auch zu einem späteren Zeitpunkt) verwendet werden, um es zu ermöglichen, Ihnen Werbung zu präsentieren, die aufgrund Ihrer möglichen Interessen für Sie wahrscheinlich relevanter ist.',
    links: [
      { label: 'Liste von IAB-Lieferanten' },
      { label: 'Illustrationen anzeigen' },
    ],
  },
  {
    id: 'IAB2V2_4',
    title: 'Verwendung von Profilen zur Auswahl personalisierter Werbung',
    vendorCount: '198 Lieferanten können diesen Zweck nutzen',
    alwaysActive: false,
    description:
      'Werbung, die Ihnen auf diesem Dienst angezeigt wird, kann auf Ihrem Werbeprofil basieren. Dieses Werbeprofil kann Ihre Aktivitäten (wie ausgefüllte Formulare, angesehene Inhalte) auf diesem Dienst oder anderen Webseiten oder Apps, mögliche Interessen und persönliche Merkmale beinhalten.',
    links: [
      { label: 'Liste von IAB-Lieferanten' },
      { label: 'Illustrationen anzeigen' },
    ],
  },
  {
    id: 'IAB2V2_5',
    title: 'Erstellung von Profilen zur Personalisierung von Inhalten',
    vendorCount: '63 Lieferanten können diesen Zweck nutzen',
    alwaysActive: false,
    description:
      'Informationen über Ihre Aktivitäten auf diesem Dienst (wie zum Beispiel: ausgefüllte Formulare, angesehene nicht werbliche Inhalte) können gespeichert und mit anderen Informationen über Sie (wie Ihrer vorherigen Aktivität auf diesem Dienst oder anderen Webseiten oder Apps) oder ähnlichen Benutzern kombiniert werden. Diese werden dann verwendet, um ein Profil über Sie zu erstellen oder zu ergänzen (dies kann z.B. mögliche Interessen und persönliche Merkmale beinhalten). Ihr Profil kann (auch zu einem späteren Zeitpunkt) verwendet werden, um Ihnen Inhalte anzuzeigen, die aufgrund Ihrer möglichen Interessen für Sie wahrscheinlich relevanter sind, indem z. B. die Reihenfolge, in der Ihnen Inhalte angezeigt werden, geändert wird, um es Ihnen noch leichter zu machen, Inhalte zu finden, die Ihren Interessen entsprechen.',
    links: [
      { label: 'Liste von IAB-Lieferanten' },
      { label: 'Illustrationen anzeigen' },
    ],
  },
  {
    id: 'IAB2V2_6',
    title: 'Verwendung von Profilen zur Auswahl personalisierter Inhalte',
    vendorCount: '54 Lieferanten können diesen Zweck nutzen',
    alwaysActive: false,
    description:
      'Inhalte, die Ihnen auf diesem Dienst präsentiert werden, können auf Ihren Inhaltsprofilen basieren, die Ihre Aktivitäten auf diesem oder anderen Diensten (wie Formulare, die Sie einreichen, Inhalte, die Sie sich ansehen), mögliche Interessen und persönliche Aspekte widerspiegeln können. Dies kann beispielsweise dazu genutzt werden, um die Reihenfolge anzupassen, in der Ihnen Inhalte angezeigt werden, um es Ihnen noch leichter zu machen, (Nicht-Werbe-)Inhalte zu finden, die Ihren Interessen entsprechen.',
    links: [
      { label: 'Liste von IAB-Lieferanten' },
      { label: 'Illustrationen anzeigen' },
    ],
  },
  {
    id: 'IAB2V2_7',
    title: 'Messung der Werbeleistung',
    vendorCount: '262 Lieferanten können diesen Zweck nutzen',
    alwaysActive: false,
    description: '',
    links: [
      { label: 'Liste von IAB-Lieferanten' },
      { label: 'Illustrationen anzeigen' },
    ],
  },
];

function Toggle({ checked, onChange, label }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={(e) => {
        e.stopPropagation();
        onChange(!checked);
      }}
      className={cn(
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        checked ? 'bg-primary-600' : 'bg-neutral-300'
      )}
      aria-label={label}
    >
      <span
        className={cn(
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          checked ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </button>
  );
}

function AccordionItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [objectionActive, setObjectionActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border border-neutral-200 rounded-md overflow-hidden mb-2"
    >
      {/* Header */}
      <div
        className={cn(
          'flex items-center justify-between px-4 py-3 cursor-pointer select-none',
          isOpen ? 'bg-neutral-50' : 'bg-white hover:bg-neutral-50'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1 pr-4">
          <h4 className="text-sm font-semibold text-neutral-800 leading-snug">
            {item.title}
            {item.vendorCount && (
              <span className="ml-2 text-xs font-normal text-neutral-500">
                {item.vendorCount}
              </span>
            )}
          </h4>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {item.alwaysActive ? (
            <span className="text-xs font-semibold text-green-600 whitespace-nowrap">
              Immer aktiv
            </span>
          ) : (
            <Toggle
              checked={toggleChecked}
              onChange={setToggleChecked}
              label={item.title}
            />
          )}
          <ChevronRight
            className={cn(
              'h-4 w-4 text-neutral-500 transition-transform duration-200',
              isOpen && 'rotate-90'
            )}
          />
        </div>
      </div>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 py-4 bg-neutral-50 border-t border-neutral-200">
              {item.description && (
                <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                  {item.description}
                </p>
              )}

              {item.hasObjection && (
                <div className="mb-3">
                  {!objectionActive ? (
                    <button
                      onClick={() => setObjectionActive(true)}
                      className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-800 text-white text-xs font-medium px-3 py-2 rounded transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-3 w-3"
                        fill="currentColor"
                      >
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                      </svg>
                      {item.objectionLabel}
                    </button>
                  ) : (
                    <button
                      onClick={() => setObjectionActive(false)}
                      className="text-xs font-medium underline"
                      style={{ color: '#0D7780' }}
                    >
                      {item.removeObjectionLabel}
                    </button>
                  )}
                </div>
              )}

              {item.links && item.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-1 text-xs">
                  {item.links.map((link, i) => (
                    <span key={i} className="flex items-center gap-1">
                      {i > 0 && (
                        <span className="text-neutral-400 mx-1">|</span>
                      )}
                      <button className="text-primary-600 hover:text-primary-800 underline underline-offset-2 transition-colors">
                        {link.label}
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-10 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-neutral-900 mb-6">
            Einwilligungspräferenzen verwalten
          </h3>

          <div className="space-y-1">
            {categories.map((item, index) => (
              <AccordionItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
