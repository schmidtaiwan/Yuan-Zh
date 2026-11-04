const items = [
  { code: "F117010", name: "消防安全設備批發業", group: "fire", tag: "消防安全", blurb: "滅火、警報、避難標示與消防搶救必要設備之批發。" },
  { code: "F217010", name: "消防安全設備零售業", group: "fire", tag: "消防安全", blurb: "對應場所需求，零售滅火器、警報、避難與相關消防設備。" },
  { code: "E603040", name: "消防安全設備安裝工程業", group: "fire", tag: "消防安全", blurb: "消防安全設備之規劃、施工與維護。" },
  { code: "IF01010", name: "消防安全設備檢修業", group: "fire", tag: "消防安全", blurb: "依消防法規從事消防安全設備檢修。" },
  { code: "IB01010", name: "建築物公共安全檢查業", group: "fire", tag: "消防安全", blurb: "防火避難設施與設備安全之檢查。" },
  { code: "E601010", name: "電器承裝業", group: "engineering", tag: "工程施作", blurb: "用戶用電設備之裝設與維修。" },
  { code: "E601020", name: "電器安裝業", group: "engineering", tag: "工程施作", blurb: "家電、播音與音響等電器設備安裝。" },
  { code: "E599010", name: "配管工程業", group: "engineering", tag: "工程施作", blurb: "各類配管之規劃、施工與維護，含消防配管。" },
  { code: "E603010", name: "電纜安裝工程業", group: "engineering", tag: "工程施作", blurb: "電纜安裝之規劃、施工與維護。" },
  { code: "E603090", name: "照明設備安裝工程業", group: "engineering", tag: "工程施作", blurb: "照明設備之規劃、施工與維護。" },
  { code: "E603050", name: "自動控制設備工程業", group: "engineering", tag: "工程施作", blurb: "住家、辦公室與廠房自動控制設備之安裝維護。" },
  { code: "E701010", name: "電信工程業", group: "engineering", tag: "工程施作", blurb: "用戶端電信設備之施工與維護。" },
  { code: "EZ05010", name: "儀器、儀表安裝工程業", group: "engineering", tag: "工程施作", blurb: "儀器儀表、防盜與閉路監視系統之安裝維護。" },
  { code: "E603100", name: "電焊工程業", group: "engineering", tag: "工程施作", blurb: "電焊工程之規劃與施工。" },
  { code: "E605010", name: "電腦設備安裝業", group: "engineering", tag: "工程施作", blurb: "電腦與週邊設備之安裝、修理與維護。" },
  { code: "E603130", name: "燃氣熱水器承裝業", group: "engineering", tag: "工程施作", blurb: "燃氣熱水器及其配管之安裝。" },
  { code: "E801070", name: "廚具、衛浴設備安裝工程業", group: "engineering", tag: "工程施作", blurb: "廚具與衛浴設備之規劃、施工與維護。" },
  { code: "F106010", name: "五金批發業", group: "supply", tag: "材料供應", blurb: "小五金、手工具與相關金屬材料批發。" },
  { code: "F106040", name: "水器材料批發業", group: "supply", tag: "材料供應", blurb: "水龍頭、水管等水器材料批發。" },
  { code: "F111090", name: "建材批發業", group: "supply", tag: "材料供應", blurb: "一般建材批發。" },
  { code: "F120010", name: "耐火材料批發業", group: "supply", tag: "材料供應", blurb: "保溫、斷熱與耐火材料批發。" },
  { code: "F220010", name: "耐火材料零售業", group: "supply", tag: "材料供應", blurb: "保溫、斷熱與耐火材料零售。" },
  { code: "F119010", name: "電子材料批發業", group: "supply", tag: "材料供應", blurb: "電子零組件與電力電子材料批發。" },
  { code: "F219010", name: "電子材料零售業", group: "supply", tag: "材料供應", blurb: "電子零組件與電力電子材料零售。" },
  { code: "F113020", name: "電器批發業", group: "supply", tag: "材料供應", blurb: "電器用品與器材批發。" },
  { code: "F113070", name: "電信器材批發業", group: "supply", tag: "材料供應", blurb: "有線與無線電信器材批發。" },
  { code: "F113030", name: "精密儀器批發業", group: "supply", tag: "材料供應", blurb: "科學、工業與環境監測儀器批發。" },
  { code: "F113010", name: "機械批發業", group: "supply", tag: "材料供應", blurb: "機械及其零件批發。" },
  { code: "F113990", name: "其他機械器具批發業", group: "supply", tag: "材料供應", blurb: "其他機械器具批發。" },
  { code: "F105050", name: "家具、寢具、廚房器具、裝設品批發業", group: "supply", tag: "材料供應", blurb: "家具、廚房器具與室內裝設品批發。" },
  { code: "F401010", name: "國際貿易業", group: "service", tag: "貿易維修", blurb: "一般商品進出口貿易。" },
  { code: "JA02010", name: "電器及電子產品修理業", group: "service", tag: "貿易維修", blurb: "電器與電子產品之修理、維修與保養。" },
  { code: "JA02990", name: "其他修理業", group: "service", tag: "貿易維修", blurb: "其他修理業務。" },
  { code: "ZZ99999", name: "除許可業務外，得經營法令非禁止或限制之業務", group: "service", tag: "貿易維修", blurb: "許可業務以外，法令未禁止或限制之營業。" }
];

const list = document.querySelector("#scope-list");
const search = document.querySelector("#scope-search");
const count = document.querySelector("#scope-count");
const chips = document.querySelectorAll(".chip");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("#nav-links");
const header = document.querySelector(".site-header");

let activeGroup = "all";

function render() {
  const query = search.value.trim().toLowerCase();
  const visible = items.filter((item) => {
    const inGroup = activeGroup === "all" || item.group === activeGroup;
    const haystack = `${item.code} ${item.name} ${item.blurb}`.toLowerCase();
    return inGroup && haystack.includes(query);
  });

  count.textContent = `顯示 ${visible.length} / ${items.length} 項登記營業項目`;
  if (!visible.length) {
    list.innerHTML = '<p class="empty">沒有符合的營業項目，請改用代碼或關鍵字。</p>';
    return;
  }

  list.innerHTML = visible
    .map(
      (item) => `<article class="scope-row">
        <code>${item.code}</code>
        <div>
          <strong>${item.name}</strong>
          <p>${item.blurb}</p>
        </div>
        <span class="tag">${item.tag}</span>
      </article>`
    )
    .join("");
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeGroup = chip.dataset.group;
    chips.forEach((item) => item.setAttribute("aria-pressed", String(item === chip)));
    render();
  });
});

search.addEventListener("input", render);

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-stuck", window.scrollY > 8);
}, { passive: true });

render();
