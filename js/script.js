/* =========================================================
   Дом-музей п. Николаевка — виртуальный тур
   Данные музея (6 страниц) + рендер SPA на hash-навигации
   ========================================================= */

const DATA = {
  pages: [
    /* ---------- СТРАНИЦА 1: ГЛАВНАЯ (5 залов) ---------- */
    {
      id: "home",
      nav: "Главная",
      title: "Дом-музей п. Николаевка",
      lead: "Пять залов — пять эпох и ремёсел. Выберите зал, чтобы увидеть экспонаты, прочитать описания и послушать аудиогид.",
      exhibits: [
        {
          id: "hall-black",
          icon: "🕯️",
          image: "files/img/Прихожка (Черная комната).jpg",
          title: "Прихожка (Чёрная Комната)",
          meta: "Зал I",
          description: "Зал ретро и винтажных вещей.",
          href: "#medieval"
        },
        {
          id: "hall-small",
          icon: "🪑",
          image: "files/img/малый зал.jpg",
          title: "Малый зал",
          meta: "Зал II",
          description: "Уютный зал крестьянского и городского быта: мебель, инструменты, предметы домашнего труда.",
          href: "#ancient"
        },
        {
          id: "hall-crafts",
          icon: "🛠️",
          image: "files/img/Лавка мастеров.jpg",
          title: "Лавка мастеров",
          meta: "Зал III",
          description: "Собрание ремесленных изделий и предметов восточного искусства.",
          href: "#orient"
        },
        {
          id: "hall-war",
          icon: "🎖️",
          image: "files/img/Зал ВОВ и Советского прошлого.jpg",
          title: "Зал Великой Отечественной Войны и Советского прошлого",
          meta: "Зал IV",
          description: "Память о войне и советской эпохе: документы, фотографии, предметы быта и искусства XX века.",
          href: "#modern"
        },
        {
          id: "hall-white",
          icon: "🖼️",
          image: "files/img/белая гостиница.jpg",
          title: "Белый зал",
          meta: "Зал V",
          description: "Светлый зал живописи: портрет, пейзаж и натюрморт XVII–XIX веков из собрания музея.",
          href: "#painting"
        }
      ]
    },

    /* ---------- СТРАНИЦА 2: ПРИХОЖКА «ЧЁРНАЯ КОМНАТА» ---------- */
    {
      id: "medieval",
      nav: "Прихожка",
      title: "Прихожка «Чёрная комната»",
      lead: "Эпоха рыцарей, монастырских скрипториев и византийских мастеров. Предметы веры, войны и повседневного быта.",
      exhibits: [
        {
          id: "m1",
          icon: "⚔️",
          image: "files/img/опр.jpg",
          title: "Ассамбляж.",
          meta: "",
          description: " ",
          audio: ""
        },
        {
          id: "m2",
          icon: "📖",
          image: "files/img/пластинки.jpg",
          title: "Гримпластинки",
          meta: "",
          description: " ",
          audio: ""
        },
        {
          id: "m3",
          icon: "💾",
          image: "files/img/ади.jpg",
          title: "Аудиокассеты и компьютерные дискеты.",
          meta: "",
          description: " ",
          audio: ""
        }
      ]
    },

    /* ---------- СТРАНИЦА 3: МАЛЫЙ ЗАЛ ---------- */
    {
      id: "ancient",
      nav: "Малый зал",
      title: "Малый зал",
      lead: "Крестьянский и городской быт: мебель, инструменты, предметы домашнего труда.",
      exhibits: [
        {
          id: "a4",
          icon: "🗄️",
          image: "files/img/gold.jpg",
          title: "Шкаф.",
          meta: "Западная Европа, Кёнигсберг · 1850–1914 гг.",
          description:
            "Дерево, резьба, стекло. Поступление: дар Натальи Журкиной.\n\n" +
            "Массивный трёхдверный буфет в стиле ренессанс. Центральная секция застеклена и служила витриной для фарфора и хрусталя. Боковые дверцы глухие, украшены резными розетками. Особенность предмета — точёные опоры в виде львиных лап, характерные для парадной мебели второй половины XIX — начала XX века. Фасад декорирован ручной резьбой с растительным орнаментом.\n\n" +
            "Изготовлен в Кёнигсберге (ныне Калининград) в период 1850–1914 годов. Передан в дар музею Натальей Журкиной. Проделал долгий путь из Калининграда на Дальний Восток и ныне представлен в экспозиции музея.",
          audio: ""
        },
        {
          id: "a5",
          icon: "⚖️",
          image: "files/img/sixseven.jpg",
          title: "Ручной пружинный безмен (кантарь)",
          meta: "Российская империя · XIX — начало XX века",
          description:
            "Классический ручной пружинный безмен (по-другому кантарь). Состоит из массивного круглого корпуса с верхним подвесным кольцом и двумя крюками: верхним (для фиксации) и нижним (для груза). Внутри — пружина со стрелкой, на внутренней стороне корпуса закреплена изогнутая латунная шкала с насечками и цифрами.\n\n" +
            "Принцип действия:\n" +
            "При подвешивании груза пружина сжимается, и стрелка указывает массу на шкале. Градуировка — в пудах и фунтах (реже в килограммах), по системе мер, действовавшей в Российской империи до 1918 года.\n\n" +
            "Историко-бытовое значение:\n" +
            "Безмены были незаменимы в торговле, на складах и в крестьянских хозяйствах. Они компактны, прочны и просты в использовании, позволяли взвешивать грузы до 10 пудов и более. Наличие латунной шкалы и клейм указывает на заводское изготовление, что делает их ценными памятниками истории метрологии и торговли.",
          audio: ""
        },
        {
          id: "a6",
          icon: "🍳",
          image: "files/img/chad.jpg",
          title: "Чапельник (сковородник)",
          meta: "Россия · XIX — начало XX века",
          description:
            "Перед вами — чапельник, или сковородник. Главная задача этого нехитрого инструмента — удерживать раскалённую сковороду в русской печи.\n\n" +
            "Обратите внимание на форму металлического наконечника: он изогнут в виде крюка с небольшим «язычком». Такая конструкция позволяла надёжно захватывать сковороду за ушко и манипулировать ею внутри печи, не рискуя уронить. Длинная деревянная ручка берегла руки хозяйки от жара.",
          audio: ""
        },
        {
          id: "a7",
          icon: "🥾",
          image: "files/img/boots.jpg",
          title: "Сапожная лапа",
          meta: "Россия · XIX — начало XX века",
          description:
            "Перед вами сапожная лапа, верный спутник каждого сапожника. Её задача — удерживать обувь во время работы: шитья, прибивки подошвы, правки.\n\n" +
            "Обратите внимание на форму: каплевидная площадка удобна для надевания обуви, ребро жёсткости выдерживало нагрузки, а широкое основание не давало инструменту опрокинуться. Всё продумано — от устойчивости зависело качество каждой пары.",
          audio: ""
        },
        {
          id: "a9",
          icon: "🪮",
          image: "files/img/чесалка.jpg",
          title: "Чесалка",
          meta: "Россия · XIX — начало XX века",
          description:
            "Массивная деревянная чесалка в виде гребня с длинными редкими зубьями и фигурной рукоятью. Зубья вырезаны вручную, с равным шагом. Поверхность тёмная, со следами длительного использования.\n\n" +
            "Принцип действия:\n" +
            "Шерсть накладывали на зубья и прочёсывали, удаляя комки и сор. Полученную однородную массу использовали для прядения.\n\n" +
            "Историко-бытовое значение:\n" +
            "Незаменимый инструмент в крестьянском хозяйстве. Входила в набор предметов для домашнего прядения и ткачества. Изготавливались вручную и передавались по наследству.",
          audio: ""
        }
      ]
    },

    /* ---------- СТРАНИЦА 4: ЛАВКА МАСТЕРОВ ---------- */
    {
      id: "orient",
      nav: "Лавка мастеров",
      title: "Лавка мастеров",
      lead: "Собрание ремесленных изделий и предметов восточного искусства: керамика, бронза, шёлк, каллиграфия.",
      exhibits: [
        {
          id: "o1",
          icon: "🐉",
          image: "files/img/выв.jpg",
          title: "Славянские дети.",
          meta: "",
          description: " ",
          audio: ""
        },
        {
          id: "o2",
          icon: "🎎",
          image: "files/img/мри.jpg",
          title: "Уютный городок.",
          meta: "",
          description: " ",
          audio: ""
        },
        {
          id: "o3",
          icon: "🪔",
          image: "files/img/иви.jpg",
          title: "Домик гнома-садовника.",
          meta: "",
          description: " ",
          audio: ""
        }
      ]
    },

    /* ---------- СТРАНИЦА 5: ЗАЛ ВОВ И СОВЕТСКОГО ПРОШЛОГО ---------- */
    {
      id: "modern",
      nav: "Зал ВОВ",
      title: "Зал Великой Отечественной Войны и Советского прошлого",
      lead: "Память о войне и советской эпохе: фотографии, предметы быта и искусства XX века.",
      exhibits: [
        {
          id: "n1",
          icon: "🎨",
          image: "files/img/Картина.jpg",
          title: "Картина «Мальчик за партой».",
          meta: "",
          description: " ",
          audio: ""
        },
        {
          id: "n2",
          icon: "💡",
          image: "files/img/Медали.jpg",
          title: "Медали / значки со времён войны.",
          meta: "",
          description: ".",
          audio: ""
        },
        {
          id: "n3",
          icon: "🗿",
          image: "files/img/окак.jpg",
          title: "Радиола.",
          meta: "",
          description: " ",
          audio: ""
        }
      ]
    },

    /* ---------- СТРАНИЦА 6: БЕЛЫЙ ЗАЛ ---------- */
    {
      id: "painting",
      nav: "Белый зал",
      title: "Белый зал",
      lead: "Светлый зал живописи: портреты, пейзажи и натюрморты.",
      exhibits: [
        {
          id: "p1",
          icon: "🖼️",
          image: "files/img/Картина2.jpg",
          title: "Картина «Тихий вечер».",
          meta: "",
          description: ".",
          audio: ""
        },
        {
          id: "p2",
          icon: "🌊",
          image: "files/img/Цапля.jpg",
          title: "Цапля из запчастей.",
          meta: "",
          description: ".",
          audio: ""
        },
        {
          id: "p3",
          icon: "💐",
          image: "files/img/Ансамбль.jpg",
          title: "Стальной ансамбль",
          meta: " ",
          description: " .",
          audio: ""
        }
      ]
    }
  ]
};

/* =========================================================
   ТИТРЫ — показываются только на главной странице
   ========================================================= */
const CREDITS = [
  { role: "Автор идеи",              name: "Лидия Мартынова" },
  { role: "Разработчик-программист", name: "Артур Юрченко" },
  { role: "Дизайнер",                name: "Андрей Ефисов" },
  { role: "Помощник программиста",   name: "Савелий Буцкий" }
];

/* =========================================================
   УТИЛИТЫ
   ========================================================= */
const app    = document.getElementById("app");
const navEl  = document.getElementById("nav");
const burger = document.getElementById("burger");

function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* Безопасная подстановка emoji в inline-обработчик onerror */
function safeIcon(icon) {
  return String(icon || "🖼️").replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

/* Кодируем путь к файлу (пробелы, кириллица) */
function srcUrl(path) {
  return String(path).split("/").map(encodeURIComponent).join("/");
}

function currentPageId() {
  const id = decodeURIComponent(location.hash.replace(/^#/, ""));
  return DATA.pages.some(p => p.id === id) ? id : DATA.pages[0].id;
}

/* =========================================================
   РЕНДЕР
   ========================================================= */
function renderNav() {
  navEl.innerHTML = DATA.pages
    .map(p => `<a href="#${p.id}" data-nav="${p.id}">${esc(p.nav)}</a>`)
    .join("");
}

/* Карточка-экспонат (внутри зала) */
function exhibitCard(ex) {
  const desc     = String(ex.description ?? "").trim();
  const audio    = String(ex.audio ?? "").trim();
  const image    = String(ex.image ?? "").trim();
  const hasAudio = audio.length > 0;
  const hasImage = image.length > 0;

  const visual = hasImage
    ? `<img src="${esc(srcUrl(image))}" alt="${esc(ex.title)}" loading="lazy"
            onerror="this.replaceWith(document.createTextNode('${safeIcon(ex.icon)}'))">`
    : (ex.icon || "🖼️");

  return `
    <article class="card">
      <div class="card__visual" aria-hidden="${hasImage ? "false" : "true"}">${visual}</div>
      <div class="card__body">
        <p class="card__meta">${esc(ex.meta)}</p>
        <h2 class="card__title">${esc(ex.title)}</h2>
        <p class="card__desc">${desc ? esc(desc) : '<span class="muted">Описание отсутствует.</span>'}</p>

        <div class="audio-box">
          <div class="audio-box__label">🎧 Аудиогид</div>
          ${hasAudio
            ? `<audio controls preload="none" src="${esc(srcUrl(audio))}"></audio>`
            : `<p class="audio-empty">Аудиогид не добавлен.</p>`}
        </div>
      </div>
    </article>`;
}

/* Карточка-зал (на главной) — кликабельная ссылка */
function hallCard(hall) {
  const image    = String(hall.image ?? "").trim();
  const hasImage = image.length > 0;

  const visual = hasImage
    ? `<img src="${esc(srcUrl(image))}" alt="${esc(hall.title)}" loading="lazy"
            onerror="this.replaceWith(document.createTextNode('${safeIcon(hall.icon || "🏛️")}'))">`
    : (hall.icon || "🏛️");

  return `
    <a class="card card--hall" href="${esc(hall.href)}">
      <div class="card__visual" aria-hidden="${hasImage ? "false" : "true"}">${visual}</div>
      <div class="card__body">
        <p class="card__meta">${esc(hall.meta || "")}</p>
        <h2 class="card__title">${esc(hall.title)}</h2>
        <p class="card__desc">${esc(hall.description)}</p>
        <span class="card__cta">Перейти в зал →</span>
      </div>
    </a>`;
}

function creditsBlock() {
  return `
    <section class="credits" aria-label="Над проектом работали">
      <h2 class="credits__title">Над проектом работали</h2>
      <div class="credits__grid">
        ${CREDITS.map(c => `
          <div class="credits__item">
            <p class="credits__role">${esc(c.role)}</p>
            <p class="credits__name">${esc(c.name)}</p>
          </div>`).join("")}
      </div>
    </section>`;
}

function render(scrollTop = false) {
  const id   = currentPageId();
  const page = DATA.pages.find(p => p.id === id);

  navEl.querySelectorAll("a").forEach(a => {
    a.classList.toggle("active", a.dataset.nav === id);
  });

  const isHome = page.id === "home";

  const cardsHTML = isHome
    ? page.exhibits.map(hallCard).join("")
    : page.exhibits.map(exhibitCard).join("");

  app.innerHTML = `
    <section class="page-hero">
      <h1>${esc(page.title)}</h1>
      <p>${esc(page.lead)}</p>
    </section>
    <div class="grid">
      ${cardsHTML}
    </div>
    ${isHome ? creditsBlock() : ""}`;

  document.title = page.title + " — Дом-музей п. Николаевка";

  if (scrollTop) window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   НАВИГАЦИЯ
   ========================================================= */
burger.addEventListener("click", () => {
  const open = navEl.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

navEl.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    navEl.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("hashchange", () => render(true));

/* =========================================================
   СТАРТ
   ========================================================= */
renderNav();
render(true);

