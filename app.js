
const tripDate = new Date("2026-07-30T08:00:00+03:00");

const days = [
  {
    date:"30.7", label:"יום 1", title:"נחיתה בקרקוב", summary:"איסוף רכב, קניות ונסיעה לקושצ'ליסקו.",
    mood:"יום רגוע", map:"https://www.google.com/maps",
    details:["נחיתה משוערת: 08:00","איסוף רכב בשדה","עצירת הצטיידות","נסיעה של כשעתיים לאזור הלינה","ערב רגוע והתארגנות"]
  },
  {
    date:"31.7", label:"יום 2", title:"זאקופנה בקצב משפחתי", summary:"תצפית, מדרחוב ואטרקציה קלה.",
    mood:"עיר ונוף", map:"https://www.google.com/maps/search/Zakopane",
    details:["בוקר נינוח","רכבל או תצפית בהתאם למזג האוויר","מרכז זאקופנה","חזרה מוקדמת לשבת"]
  },
  {
    date:"1.8", label:"שבת", title:"שבת באזור ההרים", summary:"מנוחה, תפילות וטיול רגלי קצר ליד הלינה.",
    mood:"שבת", map:"#",
    details:["ללא נסיעות","טיול רגלי קצר בלבד","סעודות וזמן משפחתי","התוכנית תותאם למיקום הלינה הסופי"]
  },
  {
    date:"2.8", label:"יום 4", title:"יום אגם ואופניים", summary:"מסלול מישורי, נוף פתוח וזמן חופשי.",
    mood:"טבע רגוע", map:"https://www.google.com/maps",
    details:["יציאה אחרי ארוחת בוקר","אגם שמתאים לרכיבה משפחתית","פיקניק","אפשרות לקיצור לפי הילדים"]
  },
  {
    date:"3.8", label:"יום 5", title:"מגלשות הרים ואומגה", summary:"יום חווייתי עם אפשרויות לפי גיל.",
    mood:"אקסטרים", map:"https://www.google.com/maps",
    details:["בדיקת מגבלות גיל וגובה מראש","רכישת כרטיסים בהתאם למזג האוויר","חלופה מקורה במקרה גשם"]
  },
  {
    date:"4.8", label:"יום 6", title:"סלובקיה", summary:"מעבר גבול, נופים ואטרקציה משפחתית.",
    mood:"יום טיול", map:"https://www.google.com/maps/search/Slovakia+Tatras",
    details:["לקחת דרכונים לכולם","בדיקת מדבקת כבישים","מסלול קצר בלבד","חזרה בשעה סבירה"]
  },
  {
    date:"5.8", label:"יום 7", title:"יום גמיש", summary:"בחירה לפי מזג האוויר והאנרגיה.",
    mood:"פתוח", map:"https://www.google.com/maps",
    details:["אפשרות למנוחה","קניות","אטרקציה שלא הספקנו","התאמה לתחזית"]
  },
  {
    date:"6.8", label:"יום 8", title:"עוד יום בהרי הטטרה", summary:"רכבל, הליכה קצרה ונקודת תצפית.",
    mood:"הרים", map:"https://www.google.com/maps/search/Tatra+Mountains",
    details:["בחירת רכבל לפי עומס ותחזית","הליכה של עד 30 דקות","ציוד חם גם בקיץ"]
  },
  {
    date:"7.8", label:"יום 9", title:"מעבר לקרקוב", summary:"נסיעה, כניסה לדירה והתארגנות לשבת.",
    mood:"מעבר", map:"https://www.google.com/maps/search/Krakow",
    details:["יציאה מוקדמת יחסית","עצירה בדרך","קניות לשבת","בדיקת מסלול הליכה לבית הכנסת"]
  },
  {
    date:"8.8", label:"שבת", title:"שבת בקרקוב", summary:"תפילות, סעודות וטיול רגלי באזור.",
    mood:"שבת", map:"#",
    details:["ללא נסיעות","בית כנסת ובית חב״ד","טיול רגלי לפי מיקום הלינה"]
  },
  {
    date:"9.8", label:"יום 11", title:"קרקוב העתיקה", summary:"כיכר העיר, רובע יהודי וקצב נוח.",
    mood:"עיר", map:"https://www.google.com/maps/search/Krakow+Old+Town",
    details:["העיר העתיקה","רובע קז'ימייז'","מקומות כשרים","זמן חופשי לקניות"]
  },
  {
    date:"10–12.8", label:"ימים אחרונים", title:"קרקוב וגמישות", summary:"קניות, השלמות וטיסה הביתה.",
    mood:"סיום", map:"https://www.google.com/maps",
    details:["השלמת אטרקציות","קניות ומתנות","אריזה","יציאה לשדה עם מרווח זמן"]
  }
];

const packing = [
  "דרכונים לכל בני המשפחה","ביטוח נסיעות","רישיונות נהיגה","כרטיסי טיסה",
  "תרופות קבועות","מטענים וסוללות ניידות","בגדים חמים להרים","מעילי גשם",
  "נעלי הליכה","כובעים וקרם הגנה","ציוד לשבת","מזון ראשוני מהארץ",
  "עגלה לילדה","משחקים לנסיעות","בקבוקי מים","עותקים של ההזמנות"
];

function renderCountdown(){
  const el = document.getElementById("countdown");
  const diff = tripDate - new Date();
  if(diff <= 0){ el.innerHTML = '<div class="count-item"><strong>יצאנו!</strong><span>טיול נעים</span></div>'; return; }
  const d = Math.floor(diff/86400000);
  const h = Math.floor(diff/3600000)%24;
  const m = Math.floor(diff/60000)%60;
  el.innerHTML = `
    <div class="count-item"><strong>${d}</strong><span>ימים</span></div>
    <div class="count-item"><strong>${h}</strong><span>שעות</span></div>
    <div class="count-item"><strong>${m}</strong><span>דקות</span></div>`;
}
renderCountdown();
setInterval(renderCountdown,60000);

const grid = document.getElementById("daysGrid");
days.forEach((day,i)=>{
  const btn = document.createElement("button");
  btn.className="day-card";
  btn.innerHTML=`
    <div class="day-top"><span>${day.label}</span><b>${day.date}</b></div>
    <h3>${day.title}</h3>
    <p>${day.summary}</p>
    <span class="day-tag">${day.mood} ←</span>`;
  btn.onclick=()=>openDay(i);
  grid.appendChild(btn);
});

function openDay(i){
  const d=days[i];
  document.getElementById("modalContent").innerHTML=`
    <span class="eyebrow dark">${d.label} · ${d.date}</span>
    <h2>${d.title}</h2>
    <p>${d.summary}</p>
    <div class="route-box">
      <strong>תוכנית מוצעת</strong>
      <div class="timeline">${d.details.map((x,j)=>`<div><b>${String(j+1).padStart(2,"0")}</b><span>${x}</span></div>`).join("")}</div>
    </div>
    <p><b>חשוב:</b> זהו אבטיפוס. נעדכן שעות, מחירים, כתובות וקישורי הזמנה אחרי שהמסלול ייסגר.</p>
    <div class="modal-actions">
      ${d.map !== "#" ? `<a href="${d.map}" target="_blank" rel="noopener">פתיחת ניווט</a>` : ""}
      <a href="#packing" onclick="closeModal()">ציוד ליום</a>
    </div>`;
  document.getElementById("dayModal").classList.add("show");
  document.getElementById("dayModal").setAttribute("aria-hidden","false");
}
function closeModal(){
  document.getElementById("dayModal").classList.remove("show");
  document.getElementById("dayModal").setAttribute("aria-hidden","true");
}
document.getElementById("modalClose").onclick=closeModal;
document.getElementById("dayModal").onclick=e=>{if(e.target.id==="dayModal")closeModal()};

const packingList=document.getElementById("packingList");
function renderPacking(){
  const saved=JSON.parse(localStorage.getItem("packing2026")||"{}");
  packingList.innerHTML="";
  packing.forEach((item,i)=>{
    const label=document.createElement("label");
    label.className="check-item"+(saved[i]?" done":"");
    label.innerHTML=`<input type="checkbox" ${saved[i]?"checked":""}><span>${item}</span>`;
    label.querySelector("input").onchange=(e)=>{
      saved[i]=e.target.checked;
      localStorage.setItem("packing2026",JSON.stringify(saved));
      label.classList.toggle("done",e.target.checked);
    };
    packingList.appendChild(label);
  });
}
renderPacking();
document.getElementById("resetPacking").onclick=()=>{localStorage.removeItem("packing2026");renderPacking()};

const drawer=document.getElementById("drawer"),backdrop=document.getElementById("backdrop");
function closeDrawer(){drawer.classList.remove("open");backdrop.classList.remove("show")}
document.getElementById("menuBtn").onclick=()=>{drawer.classList.add("open");backdrop.classList.add("show")};
document.getElementById("closeDrawer").onclick=closeDrawer;
backdrop.onclick=closeDrawer;
drawer.querySelectorAll("a").forEach(a=>a.onclick=closeDrawer);

document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("dark");

const toast=document.getElementById("toast");
document.querySelectorAll("[data-toast]").forEach(btn=>btn.onclick=()=>{
  toast.textContent=btn.dataset.toast;toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),2400);
});
