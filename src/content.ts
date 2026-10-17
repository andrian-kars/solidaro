export const locales = ["en", "uk", "de", "ja"] as const;
export type Locale = (typeof locales)[number];
export const languageNames: Record<Locale, string> = {
  en: "English", uk: "Українська", de: "Deutsch", ja: "日本語",
};
export const site = {
  url: "https://andrian-kars.com/solidaro",
  email: "andrian.karsanashvili@gmail.com",
  booking: "https://calendly.com/solidaro/discovery",
  founder: "Andrian Karsanashvili",
  portfolio: "https://andrian-kars.com",
};
export function getLocale(value?: string): Locale {
  return locales.find((locale) => locale === value) || "en";
}
export function isLocale(value: unknown): value is Locale {
  return locales.some((locale) => locale === value);
}
export function localizedPath(locale: Locale, path = "/") {
  return `${locale === "en" ? "" : `/${locale}`}${path === "/" ? "" : path}` || "/";
}
// Absolute URL without a trailing slash: andrian-kars.com redirects /solidaro/ to /solidaro.
export function pageUrl(locale: Locale, path = "/") {
  const localized = localizedPath(locale, path);
  return `${site.url}${localized === "/" ? "" : localized}`;
}
// Plain src and href values for public files do not get the base path automatically.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
// The remembered language choice, kept in local storage.
export const localeStorageKey = "solidaro-locale";

const en = {
  title: "Solidaro | Independent Web Development Studio",
  description: "A small, founder-led web development studio. Websites, web applications, and thoughtful rebuilds. Built in Ukraine, working worldwide.",
  nav: { services: "Services", work: "Work", about: "Studio", faq: "FAQ", contact: "Let's talk", language: "Language", open: "Open menu", close: "Close menu", skip: "Skip to content", home: "Solidaro home", main: "Main" },
  hero: { eyebrow: "Independent web development studio", lead: "Small team. Serious about the web.", text: "We turn good ideas into websites that feel right, work hard, and last. From the first conversation to the next chapter.", cta: "Tell us your idea", work: "Explore our work", caption: "Built with care. Made to be used.", location: "Rooted in Ukraine. Connected everywhere." },
  services: { label: "01 / What we do", title: "Web, just web.", intro: "One focus. All the attention your project deserves. We design and build for the browser, from a first website to an established product.", items: [
    { title: "Build something new", text: "A website that feels like you. A web application that solves a real problem. Thoughtful interfaces backed by dependable engineering.", tags: ["Websites", "Web applications", "Responsive design"] },
    { title: "Make good things better", text: "An existing site deserves a fresh start, too. We untangle legacy code, improve performance, and make the next update easier.", tags: ["Rebuilds", "Performance", "Accessibility"] },
    { title: "Extend your team", text: "An experienced web engineer, working alongside your people. Clear communication, shared ownership, and care for the details.", tags: ["React & Next.js", "TypeScript", "Ongoing support"] },
  ] },
  work: { label: "02 / Selected work", title: "From idea to a real thing.", intro: "A selection of independent projects by our founder, Andrian. Different challenges. The same attention to detail.", visit: "Visit project", items: [
    { kind: "Local business / Multilingual website", text: "A playful rental catalogue for a family business in Spain. Easy to browse, easy to enquire, in the language of its visitors.", alt: "Antelu website showing a rental catalogue with vehicles and prices" },
    { kind: "Independent project / Web application", text: "A film discovery app with live search, watchlists, and a very particular taste in cinema. A complete product, down to the small interactions.", alt: "Sharkies film discovery website with movie artwork and category filters" },
    { kind: "Personal brand / Portfolio and CV", text: "Andrian's own portfolio and CV, in English and Spanish. A fast, accessible page that takes recruiters and hiring teams straight to the evidence.", alt: "Andrian Karsanashvili's portfolio website with his portrait, role, and key skills" },
  ] },
  about: { label: "03 / The studio", title: "Good work starts with good people.", text: "Solidaro was founded in 2023 by Andrian Karsanashvili, a web engineer from Ukraine. It is a small, independent studio with a simple idea: working directly with the person building your website should be the norm.", second: "No layers of handoffs. No one-size-fits-all templates. Just considered decisions, honest conversations, and a shared interest in getting it right.", founder: "Founder & web engineer", portfolio: "Meet Andrian", note: "Independent by choice. Collaborative by nature.", image: "Portrait of Andrian Karsanashvili, founder of Solidaro" },
  process: { label: "04 / How we work", title: "A clear path. Together.", steps: [
    { title: "A conversation", text: "We listen, ask questions, and understand what you need. No pitch deck required." },
    { title: "A shared plan", text: "We agree on scope, priorities, budget, and a realistic timeline before we build." },
    { title: "Build, test, refine", text: "You see the work as it takes shape. We test on real screens and make room for feedback." },
    { title: "Launch. Keep growing.", text: "We help you go live and hand things over properly, with ongoing support when you need it." },
  ] },
  faq: { label: "05 / Good questions", title: "Before we get started.", contact: "Something else on your mind?", items: [
    { question: "What kinds of projects do you take on?", answer: "We focus on websites and web applications: new builds, redesigns, improving existing products, and supporting in-house engineering teams. We do not offer native mobile development or marketing services." },
    { question: "How much does a website cost?", answer: "It depends on the scope, complexity, and content. After an initial conversation, we put together a clear proposal with deliverables and pricing. You can decide before committing to any work." },
    { question: "How long will the project take?", answer: "A focused website and a custom web application have very different timelines. We agree on milestones after understanding your requirements, and keep you informed as the project progresses." },
    { question: "Can you work on an existing website?", answer: "Yes. We can review your current site, identify what is worth keeping, and plan improvements or a rebuild. We also offer maintenance and ongoing development." },
    { question: "Do you work with clients outside Ukraine?", answer: "Yes. We work remotely with clients in different countries. We agree on communication channels and meeting times that work for both sides, and share regular progress updates." },
    { question: "What happens after launch?", answer: "We make sure you have access to your code and the information needed to run your website. Continued maintenance, updates, and feature development can be arranged to suit your needs." },
  ] },
  contact: { eyebrow: "Something in mind?", title: "Let's make it happen.", text: "A new idea, a fresh start, or a website that could do more. It begins with a conversation.", cta: "Start a conversation", email: "Or drop us a line" },
  schedule: { title: "Start a Conversation | Solidaro", description: "Talk to Solidaro about your website or web application. Meet the founder, discuss your idea, and work out the next steps.", back: "Back to the studio", label: "Your next chapter", heading: "Good things start with a hello.", text: "Tell us what you have in mind. We will talk through your goals, what you already have, and what a useful next step could look like.", details: "An initial conversation with Andrian", points: ["Your idea and the people it is for", "Scope, priorities, and timing", "Questions, possibilities, and next steps"], book: "Choose a time on Calendly", external: "Opens Calendly in a new tab", alternative: "Prefer to write?", email: "Email us", note: "No obligation. No preparation needed.", provider: "Scheduling is handled by Calendly. Their privacy policy applies when you open the calendar." },
  footer: { text: "Thoughtful websites. Made together.", rights: "All rights reserved.", top: "Back to top", privacy: "Privacy" },
  privacy: { title: "Privacy | Solidaro", heading: "A little clarity about your data.", intro: "This website has no advertising trackers or embedded booking widgets. We only ask for the information you choose to share when you contact us.", sections: [
    { title: "When you get in touch", text: "If you email us, we use your contact details and message to respond to your enquiry and discuss your project. Please do not send sensitive personal information." },
    { title: "Language preference", text: "Choosing a language saves it in your browser's local storage so the site can remember your choice. It is not used for tracking and never leaves your device." },
    { title: "Hosting and external services", text: "Our hosting provider may process technical request information, such as IP addresses, for delivery and security. Booking takes place on Calendly, which has its own privacy policy. External project links also lead to separate websites." },
    { title: "Questions or requests", text: `To ask about your information or request its deletion, contact ${site.email}.` },
  ] },
  notFound: { title: "Page Not Found | Solidaro", heading: "This page took a different path.", text: "The address may have changed, or the page no longer exists.", cta: "Back to Solidaro" },
};

export type Content = typeof en;

const uk: Content = {
  title: "Solidaro | Незалежна студія веброзробки",
  description: "Невелика незалежна студія веброзробки. Сайти, вебзастосунки та продумане оновлення продуктів. З України для всього світу.",
  nav: { services: "Послуги", work: "Роботи", about: "Студія", faq: "Запитання", contact: "Поговорімо", language: "Мова", open: "Відкрити меню", close: "Закрити меню", skip: "Перейти до вмісту", home: "Solidaro — головна", main: "Головне меню" },
  hero: { eyebrow: "Незалежна студія веброзробки", lead: "Мала команда. Великі вимоги до вебу.", text: "Перетворюємо хороші ідеї на зручні й надійні сайти. Від першої розмови до наступного етапу вашої справи.", cta: "Розкажіть про ідею", work: "Переглянути роботи", caption: "Зроблено уважно. Створено для людей.", location: "Наше коріння в Україні. Працюємо зі світом." },
  services: { label: "01 / Що ми робимо", title: "Веб. І тільки веб.", intro: "Один напрям. Уся увага вашому проєкту. Проєктуємо й розробляємо для браузера: від першого сайту до зрілого продукту.", items: [
    { title: "Створюємо нове", text: "Сайт із вашим характером. Вебзастосунок, що розв'язує справжню проблему. Продумані інтерфейси та надійна інженерія.", tags: ["Сайти", "Вебзастосунки", "Адаптивний дизайн"] },
    { title: "Покращуємо наявне", text: "Існуючий сайт теж заслуговує на новий початок. Упорядковуємо код, підвищуємо швидкодію та спрощуємо подальші зміни.", tags: ["Оновлення", "Швидкодія", "Доступність"] },
    { title: "Підсилюємо команду", text: "Досвідчений вебінженер поруч із вашими фахівцями. Відкрите спілкування, спільна відповідальність і увага до деталей.", tags: ["React та Next.js", "TypeScript", "Підтримка"] },
  ] },
  work: { label: "02 / Вибрані роботи", title: "Від ідеї до справжнього продукту.", intro: "Незалежні проєкти нашого засновника Андріана. Різні завдання, однакова увага до деталей.", visit: "Відкрити проєкт", items: [
    { kind: "Місцевий бізнес / Багатомовний сайт", text: "Каталог прокату для сімейного бізнесу в Іспанії. Зручний вибір і простий запит на оренду мовою відвідувача.", alt: "Сайт Antelu з каталогом транспорту для оренди та цінами" },
    { kind: "Незалежний проєкт / Вебзастосунок", text: "Застосунок для пошуку фільмів зі списком обраного та особливим смаком у кіно. Завершений продукт з увагою до кожної взаємодії.", alt: "Сайт Sharkies з постерами фільмів та фільтрами категорій" },
    { kind: "Особистий бренд / Портфоліо та резюме", text: "Власне портфоліо й резюме Андріана англійською та іспанською. Швидка й доступна сторінка, що одразу веде рекрутерів і команди до фактів.", alt: "Сайт-портфоліо Андріана Карсанашвілі з портретом, посадою та ключовими навичками" },
  ] },
  about: { label: "03 / Студія", title: "За хорошою роботою стоять люди.", text: "Solidaro заснував у 2023 році Андріан Карсанашвілі, вебінженер з України. Це невелика незалежна студія з простою ідеєю: ви маєте спілкуватися безпосередньо з людиною, яка створює ваш сайт.", second: "Без ланцюжків посередників і універсальних шаблонів. Зважені рішення, чесні розмови та спільне прагнення зробити як слід.", founder: "Засновник і вебінженер", portfolio: "Познайомитися з Андріаном", note: "Незалежні за вибором. Відкриті до співпраці.", image: "Портрет Андріана Карсанашвілі, засновника Solidaro" },
  process: { label: "04 / Як ми працюємо", title: "Зрозумілий шлях. Разом.", steps: [
    { title: "Розмова", text: "Слухаємо, ставимо запитання й розбираємося у ваших потребах. Презентація не потрібна." },
    { title: "Спільний план", text: "До початку розробки узгоджуємо обсяг, пріоритети, бюджет і реалістичні терміни." },
    { title: "Розробка й перевірка", text: "Ви бачите, як зростає проєкт. Ми тестуємо на різних екранах і враховуємо ваші відгуки." },
    { title: "Запуск і розвиток", text: "Допомагаємо з запуском, передаємо все необхідне й підтримуємо надалі за потреби." },
  ] },
  faq: { label: "05 / Поширені запитання", title: "Перш ніж розпочнемо.", contact: "Маєте інше запитання?", items: [
    { question: "За які проєкти ви беретеся?", answer: "Ми зосереджені на сайтах і вебзастосунках: створенні з нуля, редизайні, покращенні наявних продуктів і підсиленні інженерних команд. Нативною мобільною розробкою та маркетингом не займаємося." },
    { question: "Скільки коштує сайт?", answer: "Вартість залежить від обсягу, складності та контенту. Після першої розмови готуємо зрозумілу пропозицію з переліком робіт і ціною. Ви вирішуєте до початку співпраці." },
    { question: "Скільки часу триватиме розробка?", answer: "Невеликий сайт і складний вебзастосунок потребують різного часу. З'ясувавши вимоги, узгоджуємо етапи й регулярно повідомляємо про поступ." },
    { question: "Чи працюєте ви з існуючими сайтами?", answer: "Так. Можемо оцінити ваш сайт, визначити, що варто зберегти, і спланувати покращення чи перебудову. Також пропонуємо підтримку й подальшу розробку." },
    { question: "Чи працюєте ви з клієнтами за межами України?", answer: "Так, працюємо дистанційно з клієнтами з різних країн. Узгоджуємо зручні канали зв'язку й час зустрічей та регулярно ділимося результатами." },
    { question: "Що відбувається після запуску?", answer: "Передаємо вам доступ до коду та інформацію для роботи із сайтом. Подальшу підтримку, оновлення й розробку нових можливостей узгоджуємо відповідно до ваших потреб." },
  ] },
  contact: { eyebrow: "Є задум?", title: "Втілимо його разом.", text: "Нова ідея, новий початок або сайт, що здатен на більше. Усе починається з розмови.", cta: "Почати розмову", email: "Або напишіть нам" },
  schedule: { title: "Почнімо розмову | Solidaro", description: "Обговоріть із Solidaro свій сайт або вебзастосунок. Познайомтеся із засновником, розкажіть про ідею та визначте наступні кроки.", back: "Повернутися до студії", label: "Ваш наступний крок", heading: "Хороші справи починаються з привітання.", text: "Розкажіть про свій задум. Обговоримо ваші цілі, що вже є та яким може бути корисний наступний крок.", details: "Перша розмова з Андріаном", points: ["Ваша ідея та її аудиторія", "Обсяг, пріоритети й терміни", "Запитання, можливості та наступні кроки"], book: "Обрати час у Calendly", external: "Calendly відкриється в новій вкладці", alternative: "Зручніше написати?", email: "Написати нам", note: "Без зобов'язань і попередньої підготовки.", provider: "Зустрічі плануються через Calendly. Після відкриття календаря діє їхня політика конфіденційності." },
  footer: { text: "Продумані сайти. Створені разом.", rights: "Усі права захищено.", top: "Нагору", privacy: "Конфіденційність" },
  privacy: { title: "Конфіденційність | Solidaro", heading: "Трохи ясності щодо ваших даних.", intro: "На цьому сайті немає рекламних трекерів чи вбудованих віджетів бронювання. Ми отримуємо лише ті відомості, якими ви вирішите поділитися під час звернення.", sections: [
    { title: "Коли ви звертаєтеся", text: "Якщо ви пишете нам, ми використовуємо ваші контактні дані й повідомлення, щоб відповісти та обговорити проєкт. Не надсилайте чутливих особистих даних." },
    { title: "Вибір мови", text: "Обрана мова зберігається в локальному сховищі вашого браузера, щоб сайт її запам'ятав. Вона не використовується для відстеження й не залишає ваш пристрій." },
    { title: "Хостинг і зовнішні сервіси", text: "Хостинг-провайдер може обробляти технічні дані запитів, зокрема IP-адреси, для роботи й безпеки сайту. Планування зустрічей відбувається на Calendly з власною політикою конфіденційності. Посилання на проєкти також ведуть на інші сайти." },
    { title: "Запитання та звернення", text: `Щоб дізнатися про свої дані чи попросити видалити їх, напишіть на ${site.email}.` },
  ] },
  notFound: { title: "Сторінку не знайдено | Solidaro", heading: "Ця сторінка обрала інший шлях.", text: "Можливо, адресу змінено або сторінки більше не існує.", cta: "Повернутися до Solidaro" },
};

const de: Content = {
  title: "Solidaro | Unabhängiges Studio für Webentwicklung",
  description: "Ein kleines, inhabergeführtes Studio für Webentwicklung. Websites, Webanwendungen und durchdachte Relaunches. Aus der Ukraine, weltweit tätig.",
  nav: { services: "Leistungen", work: "Projekte", about: "Studio", faq: "Fragen", contact: "Kontakt", language: "Sprache", open: "Menü öffnen", close: "Menü schließen", skip: "Zum Inhalt", home: "Solidaro Startseite", main: "Hauptmenü" },
  hero: { eyebrow: "Unabhängiges Studio für Webentwicklung", lead: "Kleines Team. Große Sorgfalt fürs Web.", text: "Wir machen aus guten Ideen Websites, die sich richtig anfühlen, zuverlässig funktionieren und Bestand haben. Vom ersten Gespräch bis zum nächsten Kapitel.", cta: "Erzählen Sie uns Ihre Idee", work: "Projekte entdecken", caption: "Mit Sorgfalt gebaut. Für den Alltag gemacht.", location: "In der Ukraine verwurzelt. Weltweit verbunden." },
  services: { label: "01 / Unsere Leistungen", title: "Web. Einfach Web.", intro: "Ein Schwerpunkt. Volle Aufmerksamkeit für Ihr Projekt. Wir gestalten und entwickeln für den Browser, von der ersten Website bis zum etablierten Produkt.", items: [
    { title: "Neues schaffen", text: "Eine Website mit Ihrer Persönlichkeit. Eine Webanwendung, die ein echtes Problem löst. Durchdachte Oberflächen und zuverlässige Technik.", tags: ["Websites", "Webanwendungen", "Responsives Design"] },
    { title: "Gutes besser machen", text: "Auch eine bestehende Website verdient einen Neustart. Wir ordnen alten Code, verbessern die Leistung und erleichtern künftige Änderungen.", tags: ["Relaunches", "Performance", "Barrierefreiheit"] },
    { title: "Ihr Team verstärken", text: "Ein erfahrener Webentwickler an der Seite Ihrer Mitarbeitenden. Klare Kommunikation, gemeinsame Verantwortung und Liebe zum Detail.", tags: ["React & Next.js", "TypeScript", "Laufende Betreuung"] },
  ] },
  work: { label: "02 / Ausgewählte Projekte", title: "Von der Idee zum echten Produkt.", intro: "Unabhängige Projekte unseres Gründers Andrian. Unterschiedliche Aufgaben, dieselbe Sorgfalt.", visit: "Projekt besuchen", items: [
    { kind: "Lokales Unternehmen / Mehrsprachige Website", text: "Ein lebendiger Mietkatalog für ein Familienunternehmen in Spanien. Einfach stöbern und anfragen, in der Sprache der Besucher.", alt: "Antelu-Website mit Mietfahrzeugen und Preisen" },
    { kind: "Eigenständiges Projekt / Webanwendung", text: "Eine Filmsuche mit Live-Suche, Merkliste und einem ganz eigenen Filmgeschmack. Ein vollständiges Produkt bis ins kleinste Detail.", alt: "Sharkies-Filmwebsite mit Filmplakaten und Kategoriefiltern" },
    { kind: "Persönliche Marke / Portfolio und Lebenslauf", text: "Andrians eigenes Portfolio mit Lebenslauf, auf Englisch und Spanisch. Eine schnelle, barrierefreie Seite, die Recruiter und Teams direkt zu den Belegen führt.", alt: "Portfolio-Website von Andrian Karsanashvili mit Porträt, Rolle und Kernkompetenzen" },
  ] },
  about: { label: "03 / Das Studio", title: "Gute Arbeit beginnt mit Menschen.", text: "Solidaro wurde 2023 von Andrian Karsanashvili, einem Webentwickler aus der Ukraine, gegründet. Ein kleines, unabhängiges Studio mit einer einfachen Idee: Sie sollten direkt mit dem Menschen sprechen, der Ihre Website entwickelt.", second: "Keine langen Übergabeketten. Keine Einheitsvorlagen. Sondern bewusste Entscheidungen, ehrliche Gespräche und der gemeinsame Anspruch, es richtig zu machen.", founder: "Gründer & Webentwickler", portfolio: "Andrian kennenlernen", note: "Bewusst unabhängig. Gemeinsam am besten.", image: "Porträt von Andrian Karsanashvili, dem Gründer von Solidaro" },
  process: { label: "04 / Zusammenarbeit", title: "Ein klarer Weg. Gemeinsam.", steps: [
    { title: "Ein Gespräch", text: "Wir hören zu, stellen Fragen und verstehen Ihren Bedarf. Eine Präsentation brauchen Sie nicht." },
    { title: "Ein gemeinsamer Plan", text: "Wir vereinbaren Umfang, Prioritäten, Budget und einen realistischen Zeitplan vor dem Start." },
    { title: "Bauen und verfeinern", text: "Sie sehen das Projekt wachsen. Wir testen auf unterschiedlichen Bildschirmen und nehmen Ihr Feedback auf." },
    { title: "Starten und wachsen", text: "Wir begleiten den Start, übergeben alles Notwendige und unterstützen Sie bei Bedarf weiter." },
  ] },
  faq: { label: "05 / Gute Fragen", title: "Bevor es losgeht.", contact: "Noch eine Frage?", items: [
    { question: "Welche Projekte übernehmen Sie?", answer: "Wir konzentrieren uns auf Websites und Webanwendungen: neue Projekte, Redesigns, Produktverbesserungen und die Verstärkung interner Entwicklungsteams. Native mobile Apps und Marketing gehören nicht zu unserem Angebot." },
    { question: "Was kostet eine Website?", answer: "Das hängt von Umfang, Komplexität und Inhalten ab. Nach einem ersten Gespräch erstellen wir ein klares Angebot mit Leistungen und Preisen. Sie entscheiden, bevor eine Zusammenarbeit beginnt." },
    { question: "Wie lange dauert ein Projekt?", answer: "Eine kompakte Website und eine individuelle Webanwendung brauchen unterschiedlich viel Zeit. Sobald wir Ihre Anforderungen kennen, vereinbaren wir Meilensteine und informieren Sie regelmäßig über den Fortschritt." },
    { question: "Arbeiten Sie auch an bestehenden Websites?", answer: "Ja. Wir prüfen Ihre aktuelle Website, erkennen, was sich bewährt hat, und planen Verbesserungen oder einen Relaunch. Auch Wartung und Weiterentwicklung sind möglich." },
    { question: "Arbeiten Sie mit Kunden außerhalb der Ukraine?", answer: "Ja. Wir arbeiten remote mit Kunden aus verschiedenen Ländern. Kommunikationswege und Besprechungszeiten stimmen wir gemeinsam ab und teilen regelmäßig unsere Fortschritte." },
    { question: "Was passiert nach dem Start?", answer: "Sie erhalten Zugang zum Code und alle nötigen Informationen zum Betrieb Ihrer Website. Weitere Wartung, Updates und neue Funktionen können wir passend zu Ihrem Bedarf vereinbaren." },
  ] },
  contact: { eyebrow: "Eine Idee im Kopf?", title: "Machen wir etwas daraus.", text: "Eine neue Idee, ein Neuanfang oder eine Website, die mehr kann. Es beginnt mit einem Gespräch.", cta: "Gespräch beginnen", email: "Oder schreiben Sie uns" },
  schedule: { title: "Ein Gespräch beginnen | Solidaro", description: "Sprechen Sie mit Solidaro über Ihre Website oder Webanwendung. Lernen Sie den Gründer kennen und besprechen Sie die nächsten Schritte.", back: "Zurück zum Studio", label: "Ihr nächstes Kapitel", heading: "Gutes beginnt mit einem Hallo.", text: "Erzählen Sie uns, was Sie vorhaben. Wir sprechen über Ihre Ziele, den aktuellen Stand und einen sinnvollen nächsten Schritt.", details: "Ein erstes Gespräch mit Andrian", points: ["Ihre Idee und Ihre Zielgruppe", "Umfang, Prioritäten und Zeitplan", "Fragen, Möglichkeiten und nächste Schritte"], book: "Termin auf Calendly wählen", external: "Öffnet Calendly in einem neuen Tab", alternative: "Lieber schriftlich?", email: "E-Mail schreiben", note: "Unverbindlich. Keine Vorbereitung nötig.", provider: "Die Terminplanung erfolgt über Calendly. Beim Öffnen des Kalenders gilt deren Datenschutzerklärung." },
  footer: { text: "Durchdachte Websites. Gemeinsam gemacht.", rights: "Alle Rechte vorbehalten.", top: "Nach oben", privacy: "Datenschutz" },
  privacy: { title: "Datenschutz | Solidaro", heading: "Klarheit über Ihre Daten.", intro: "Diese Website verwendet keine Werbetracker oder eingebetteten Buchungswidgets. Wir erhalten nur die Informationen, die Sie bei einer Kontaktaufnahme freiwillig teilen.", sections: [
    { title: "Wenn Sie uns kontaktieren", text: "Wenn Sie uns eine E-Mail senden, verwenden wir Ihre Kontaktdaten und Nachricht, um Ihre Anfrage zu beantworten und Ihr Projekt zu besprechen. Bitte senden Sie keine sensiblen personenbezogenen Daten." },
    { title: "Sprachauswahl", text: "Ihre Sprachauswahl wird im lokalen Speicher Ihres Browsers abgelegt, damit die Website sie sich merkt. Sie dient nicht dem Tracking und verlässt Ihr Gerät nicht." },
    { title: "Hosting und externe Dienste", text: "Unser Hosting-Anbieter kann technische Anfragedaten wie IP-Adressen für Bereitstellung und Sicherheit verarbeiten. Die Terminbuchung erfolgt bei Calendly mit eigener Datenschutzerklärung. Projektlinks führen ebenfalls zu eigenständigen Websites." },
    { title: "Fragen und Anfragen", text: `Für Auskunft über Ihre Daten oder eine Löschanfrage schreiben Sie an ${site.email}.` },
  ] },
  notFound: { title: "Seite nicht gefunden | Solidaro", heading: "Diese Seite hat einen anderen Weg genommen.", text: "Die Adresse wurde möglicherweise geändert oder die Seite existiert nicht mehr.", cta: "Zurück zu Solidaro" },
};

const ja: Content = {
  title: "Solidaro | 独立系ウェブ開発スタジオ",
  description: "創業者が直接担当する小さなウェブ開発スタジオ。ウェブサイト、ウェブアプリ、既存サイトのリニューアルを、ウクライナから世界へ。",
  nav: { services: "サービス", work: "制作例", about: "スタジオ", faq: "よくある質問", contact: "お問い合わせ", language: "言語", open: "メニューを開く", close: "メニューを閉じる", skip: "本文へ移動", home: "Solidaro ホーム", main: "メインメニュー" },
  hero: { eyebrow: "独立系ウェブ開発スタジオ", lead: "小さなチーム。ウェブへの大きなこだわり。", text: "良いアイデアを、心地よく使えて、頼りになり、長く育てられるウェブサイトへ。最初のご相談から、その先まで。", cta: "アイデアを聞かせてください", work: "制作例を見る", caption: "丁寧につくる。日々の使いやすさのために。", location: "ウクライナを拠点に、世界とつながる。" },
  services: { label: "01 / サービス", title: "ウェブに、まっすぐ。", intro: "専門をひとつに絞り、プロジェクトにしっかり向き合います。初めてのサイトから成長したプロダクトまで、ブラウザで使うものを設計・開発します。", items: [
    { title: "新しいものをつくる", text: "あなたらしいウェブサイト。課題を解決するウェブアプリ。考え抜いたインターフェースを、確かな技術で支えます。", tags: ["ウェブサイト", "ウェブアプリ", "レスポンシブデザイン"] },
    { title: "今あるものを、より良く", text: "既存のサイトにも、新しいスタートを。古いコードを整理し、表示速度を改善して、次の更新をしやすくします。", tags: ["リニューアル", "パフォーマンス", "アクセシビリティ"] },
    { title: "チームの力になる", text: "経験豊富なウェブエンジニアが、あなたのチームと一緒に。明確なコミュニケーションと責任感を持ち、細部まで取り組みます。", tags: ["React・Next.js", "TypeScript", "継続サポート"] },
  ] },
  work: { label: "02 / 制作例", title: "アイデアを、実際に使えるものへ。", intro: "創業者アンドリアンが手がけた個人プロジェクトをご紹介します。課題は違っても、細部への姿勢は同じです。", visit: "プロジェクトを見る", items: [
    { kind: "地域ビジネス / 多言語ウェブサイト", text: "スペインの家族経営のお店のための、遊び心あるレンタルカタログ。見やすく、問い合わせやすく、お客様の言語で。", alt: "レンタル車両と料金が並ぶAnteluのウェブサイト" },
    { kind: "個人プロジェクト / ウェブアプリ", text: "ライブ検索やウォッチリストを備えた、少し個性的な映画探しのアプリ。小さな操作まで丁寧に仕上げたプロダクトです。", alt: "映画ポスターとカテゴリーフィルターがあるSharkiesのウェブサイト" },
    { kind: "パーソナルブランド / ポートフォリオ・履歴書", text: "英語とスペイン語で公開している、アンドリアン自身のポートフォリオと履歴書。採用担当者や開発チームが実績にすぐたどり着ける、高速でアクセシブルなページです。", alt: "ポートレート、職種、主なスキルが載ったアンドリアン・カルサナシヴィリのポートフォリオサイト" },
  ] },
  about: { label: "03 / スタジオ", title: "良い仕事は、人から始まる。", text: "Solidaroは、ウクライナ出身のウェブエンジニア、アンドリアン・カルサナシヴィリが2023年に設立しました。サイトをつくる本人と直接話せること。それを当たり前にしたい、小さな独立系スタジオです。", second: "何人もの担当者を介した伝言も、どこにでもあるテンプレートもなし。考え抜いた判断、率直な対話、そして良いものをつくりたいという共通の思いを大切にします。", founder: "創業者・ウェブエンジニア", portfolio: "アンドリアンについて", note: "独立した視点で、ともにつくる。", image: "Solidaro創業者アンドリアン・カルサナシヴィリのポートレート" },
  process: { label: "04 / 進め方", title: "わかりやすい道のりを、ともに。", steps: [
    { title: "まずは対話から", text: "お話を聞き、質問し、必要なことを理解します。プレゼン資料は不要です。" },
    { title: "一緒に計画する", text: "開発の前に、範囲、優先順位、予算、無理のないスケジュールを合意します。" },
    { title: "つくり、試し、磨く", text: "形になっていく様子を共有します。さまざまな画面でテストし、ご意見を反映します。" },
    { title: "公開、その先へ", text: "公開と引き継ぎをサポート。必要に応じて、その後の運用や開発もお手伝いします。" },
  ] },
  faq: { label: "05 / よくある質問", title: "始める前に。", contact: "ほかに気になることは？", items: [
    { question: "どのようなプロジェクトに対応していますか？", answer: "ウェブサイトとウェブアプリを専門に、新規開発、リデザイン、既存プロダクトの改善、社内開発チームの支援を行います。ネイティブモバイルアプリやマーケティングサービスは提供していません。" },
    { question: "ウェブサイトの費用はどのくらいですか？", answer: "規模、複雑さ、コンテンツによって異なります。最初のお話の後、作業内容と価格を明記した提案をお送りします。ご契約前に判断していただけます。" },
    { question: "制作にはどのくらいの期間がかかりますか？", answer: "シンプルなサイトと独自のウェブアプリでは、必要な期間が異なります。要件を確認してから節目を決め、進捗を定期的にお知らせします。" },
    { question: "既存のウェブサイトもお願いできますか？", answer: "はい。現在のサイトを確認し、残すべき部分を見極め、改善やリニューアルを計画できます。保守や継続的な開発にも対応します。" },
    { question: "ウクライナ以外からも依頼できますか？", answer: "はい。さまざまな国のお客様とリモートで協働しています。連絡方法と打ち合わせ時間を相談して決め、定期的に進捗を共有します。" },
    { question: "公開後のサポートはありますか？", answer: "コードへのアクセスと運用に必要な情報をお渡しします。その後の保守、更新、機能追加は、ご要望に合わせてご相談いただけます。" },
  ] },
  contact: { eyebrow: "アイデアはありますか？", title: "一緒に、形にしましょう。", text: "新しいアイデア、新しいスタート、もっと良くしたいウェブサイト。すべては会話から始まります。", cta: "相談を始める", email: "メールでもお気軽に" },
  schedule: { title: "ご相談 | Solidaro", description: "ウェブサイトやウェブアプリについてSolidaroにご相談ください。創業者とアイデアや次のステップを話しましょう。", back: "スタジオに戻る", label: "次の一歩", heading: "良いことは、こんにちはから。", text: "考えていることを聞かせてください。目標、現状、そして役立つ次の一歩についてお話ししましょう。", details: "アンドリアンとの初回相談", points: ["アイデアと届けたい人について", "範囲、優先順位、スケジュール", "ご質問、可能性、次のステップ"], book: "Calendlyで日時を選ぶ", external: "Calendlyが新しいタブで開きます", alternative: "メールをご希望ですか？", email: "メールで相談する", note: "契約義務はありません。事前準備も不要です。", provider: "日程調整にはCalendlyを使用します。カレンダーを開くと、Calendlyのプライバシーポリシーが適用されます。" },
  footer: { text: "考え抜いたウェブサイトを、ともに。", rights: "無断転載を禁じます。", top: "ページの先頭へ", privacy: "プライバシー" },
  privacy: { title: "プライバシー | Solidaro", heading: "データの取り扱いについて。", intro: "このサイトには広告トラッカーや予約ウィジェットの埋め込みはありません。お問い合わせ時に、ご自身で共有した情報のみを受け取ります。", sections: [
    { title: "お問い合わせの際", text: "メールでいただいた連絡先とメッセージは、ご返信とプロジェクトの相談に使用します。機密性の高い個人情報は送信しないでください。" },
    { title: "言語設定", text: "選択した言語は、次回も表示できるようブラウザのローカルストレージに保存されます。追跡には使用せず、お使いの端末の外には送信されません。" },
    { title: "ホスティングと外部サービス", text: "ホスティング事業者は配信と安全性のため、IPアドレスなどの技術情報を処理する場合があります。予約先のCalendlyには独自のプライバシーポリシーがあります。制作例へのリンクも外部サイトです。" },
    { title: "ご質問やご依頼", text: `情報についてのお問い合わせや削除依頼は、${site.email}までご連絡ください。` },
  ] },
  notFound: { title: "ページが見つかりません | Solidaro", heading: "このページは別の道へ。", text: "アドレスが変更されたか、ページが存在しない可能性があります。", cta: "Solidaroに戻る" },
};

export const content: Record<Locale, Content> = { en, uk, de, ja };