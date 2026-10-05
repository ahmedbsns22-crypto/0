const CONFIG = {
  senderName: "حمودي",
  recipientName: "رفولتي",
  nickname: "لوزايتي",
  birthday: "13/10/2026",
  music: "music.mp3"
};

const MSG1 = "2026/10/13 اليوم مختلف ومستثنى عن باقى الأيام ، اليوم عيد ميلاد حبيبتي ربي أعطاني حظوظ الدنيا كلها يوم صارت حبيبتي ، سنه حلوه تشبه حلاوه وجهج ونضافه قلبج يوم ميلاد أنيسةُ روحي وحبيبتي الحلوَة وقلبي وملجأي دائماً كل عام وأنتي بخير يا أجملَ شئ بحياتي انتي الخير كله الدنيا ، كُل عام وأنتي بخير يا أجملَ مَن زاد عُمره سنة وكُل عام وأنتي للعُمر أجمل سَنينة كل عام وأنتي صدفه أختلفت عن كل الصدف يا نعمة من سابع سما كل عام أدعي ان تبقي لي عمر كبرتي سنه وكبر حبج بداخلي يوم ميلاد سعيد ياروح روحي ميلادك ميلاد للأيام الحلوة بعمري كل عام وانتي حبيبتي الحلوة .🥳🥳🎉🎉🎊🎊💝💝";
const MSG2 = "كل عام وانتي بالف خير مليار خير ترليون خير هم قليلات حبيبتي الله يساعده امج بهل يوم شلون اتحمليت كميه العضمه وتاريخ العالم لو يدري بيج بهل يوم جا اطوه عطله رسميه جا كعد العالم عل ركبه باسرته ويكولون لقد انخلقت وولدتت ونورت الدنيه يامئونسه العالم يا اميره الكون بس محدد يدري بيج بس اني واني الي راح اسويهن انولدت حياه جديده يا اميره روحي يا حبيبتي انتي انقلتيني من الضلمات الى النور الحياه حلوه وياج الحياه بيه كل خير وياج ولو هيه ماتسوه شي بس انتي خليته بنسبه اليه شي عضيم وتاريخ وماناسه كل لحضه عشته وياج راح تبقه بذاكرتي وبمخيلتي وراح اعيش وموت وياه لاخر نفس انتي عايشه بداخلي وبمناسبه هل يوم ان شاءالله يوم اسويلج عيد ميلادج بيدي وانتي يمي🥳🥳🎉🎉🎉🎉🎂🎂🎂💝💝💝💝💝";

const N = CONFIG.nickname, Z = CONFIG.recipientName, S = CONFIG.senderName, B = CONFIG.birthday.replace(/\//g, " / ");
const QS = [
  { q: `${N}... تعرفين شنو أحلى شي صار بحياتي؟ ❤️`, o: ["إني عرفتك؟ 🥹❤️", "إني حبيتك؟ ❤️", "إنك بقيتي وياي؟ 🥺"], r: "بالضبط... إنتِ أحلى شي صار بحياتي. ❤️" },
  { q: `${Z}... إذا أكدر أعطيج هدية وحدة بهالدنيا، شراح تختارين؟ 🥹❤️`, o: ["وردة 🌹", "حب ما ينتهي ❤️", "أبقى يمج طول العمر 🫂", "كلهم 😭❤️"], r: "وأني اختار أبقى يمج... لأن كلشي ثاني ما يسوه بدونج. ❤️" },
  { q: `${N}... تعرفين شنو اليوم؟ 👀🎂`, o: ["عيد ميلادي؟ 😂", "عيد ميلادج؟ 🥹❤️", "يوم حلو؟"], r: "إي... اليوم يوم انولدت بيه الإنسانة اللي غيرت حياتي. ❤️", bday: true },
  { q: `${Z}... مستعدة تقرين شنو ${S} يريد يكولج؟ 🥹❤️`, o: ["إي... ❤️"], big: true }
];

const $ = id => document.getElementById(id), wait = ms => new Promise(r => setTimeout(r, ms));
const fx = $("fx"); let cur = null;
const HE = ["❤️", "💖", "💗", "🩷", "💕"];

function show(id) { if (cur) cur.classList.remove("on"); cur = $(id); cur.classList.add("on"); }
function rise(n, size) {
  for (let i = 0; i < n; i++) {
    const h = document.createElement("div"); h.className = "fh"; h.textContent = HE[Math.random() * HE.length | 0];
    const s = (size || 14) + Math.random() * (size || 14);
    h.style.cssText = `left:${Math.random() * 100}%;font-size:${s}px;animation-duration:${5 + Math.random() * 6}s;animation-delay:${Math.random() * 1.5}s;--dx:${(Math.random() - .5) * 120}px;--r:${(Math.random() - .5) * 60}deg`;
    fx.appendChild(h); setTimeout(() => h.remove(), 13000);
  }
}
function burst(x, y, n = 14, dist = 160) {
  const items = ["❤️", "💖", "✨", "💗", "🌹", "✨"];
  for (let i = 0; i < n; i++) {
    const p = document.createElement("div"); p.className = "bu"; p.textContent = items[i % items.length];
    const a = Math.random() * 6.28, d = dist * (.5 + Math.random());
    p.style.cssText = `left:${x}px;top:${y}px;font-size:${14 + Math.random() * 20}px;--x:${Math.cos(a) * d}px;--y:${Math.sin(a) * d}px;--r:${(Math.random() - .5) * 200}deg`;
    fx.appendChild(p); setTimeout(() => p.remove(), 1000);
  }
  const r = document.createElement("div"); r.className = "rip"; r.style.cssText = `left:${x}px;top:${y}px`;
  fx.appendChild(r); setTimeout(() => r.remove(), 900);
}
function bigBurst() {
  const w = innerWidth, h = innerHeight;
  for (let i = 0; i < 6; i++) setTimeout(() => burst(w * (.15 + Math.random() * .7), h * (.2 + Math.random() * .6), 22, 260), i * 160);
  rise(60, 20);
}
function at(el) { const b = el.getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2]; }
function pulse(el) { el.classList.add("pop"); if (navigator.vibrate) navigator.vibrate(25); setTimeout(() => el.classList.remove("pop"), 220); }

// ambient hearts
rise(10); setInterval(() => rise(2, 12), 1800);
document.addEventListener("pointerdown", e => { if (!e.target.closest("button")) burst(e.clientX, e.clientY, 6, 70); });

// music
const audio = new Audio(CONFIG.music); audio.loop = true; audio.preload = "auto";
const mini = $("mini"); let playing = false;
function setPlaying(p) { playing = p; mini.classList.toggle("paused", !p); $("mi").textContent = p ? "❚❚" : "▶"; }
mini.onclick = () => { if (playing) { audio.pause(); setPlaying(false); } else { audio.play().then(() => setPlaying(true)).catch(() => {}); } };

// typewriter
async function reveal(el, text, perWord = 55, box) {
  el.innerHTML = "";
  const parts = text.split(/\s+/);
  for (const w of parts) {
    const s = document.createElement("span"); s.textContent = w; el.appendChild(s);
    (box || el.parentElement).scrollTop = 1e6;
    await wait(perWord);
  }
  await wait(900);
}
async function lines(arr, gap) { for (const [id, txt, d] of arr) { const e = $(id); if (txt) e.textContent = txt; e.classList.add("on"); await wait(d || gap); } }

// scene 1 -> 2
$("enter").onclick = async e => {
  pulse(e.currentTarget); const [x, y] = at(e.currentTarget); burst(x, y, 26, 280); rise(30, 20);
  e.currentTarget.classList.add("go"); document.body.classList.add("bright");
  await wait(900); show("s2"); setTimeout(() => document.body.classList.remove("bright"), 1500);
};
// scene 2 -> 3
$("play").onclick = async e => {
  const b = e.currentTarget; pulse(b); const [x, y] = at(b); burst(x, y, 20, 200);
  try { await audio.play(); setPlaying(true); } catch (_) { setPlaying(false); }
  mini.classList.remove("hidden"); b.classList.add("go");
  await wait(1100); show("s3"); runQ(0);
};

// questions
async function runQ(i) {
  const d = QS[i], q = $("q"), o = $("opts"), r = $("resp");
  r.classList.remove("on"); q.style.opacity = o.style.opacity = 1;
  q.textContent = d.q; o.innerHTML = "";
  d.o.forEach((t, k) => {
    const b = document.createElement("button"); b.className = "btn"; b.textContent = t; b.style.animationDelay = `0s,${.25 + k * .15}s`;
    b.onclick = async ev => {
      o.querySelectorAll("button").forEach(x => x.disabled = true);
      pulse(b); const [x, y] = at(b);
      if (d.big) { bigBurst(); await wait(1300); show("s4"); return startMsg1(); }
      burst(x, y, 20, 200); rise(14, 20); b.style.filter = "brightness(1.4)";
      await wait(450); q.style.opacity = o.style.opacity = 0;
      await wait(500); r.textContent = d.r; r.classList.add("on");
      if (d.bday) { await wait(2200); $("bday").classList.add("on"); bigBurst(); await wait(3200); $("bday").classList.remove("on"); await wait(900); }
      else await wait(2300);
      runQ(i + 1);
    };
    o.appendChild(b);
  });
}

// message 1
async function startMsg1() {
  await wait(900); await reveal($("t1"), MSG1, 50, document.querySelector("#s4 .letter"));
  $("sig1").classList.add("on"); rise(20, 18); await wait(1200);
  const m = $("more"); m.classList.remove("hidden");
  m.onclick = async e => { pulse(m); const [x, y] = at(m); burst(x, y, 20, 200); transition(); };
}
// cinematic bridge
async function transition() {
  const f = $("flash"); f.classList.add("on"); await wait(700); show("s5");
  document.querySelector("#s5 .bigheart").style.display = "block";
  await wait(1800); await lines([["c1", "بس قبل لا نكمل...", 1900], ["c2", "أريدج تعرفين شغلة. ❤️", 2300]]);
  rise(30, 22); f.classList.remove("on"); show("s6"); startMsg2();
}
async function startMsg2() {
  await wait(900); rise(25, 16); await reveal($("t2"), MSG2, 55, document.querySelector("#s6 .letter"));
  await wait(900); finale();
}
// finale
async function finale() {
  show("s7");
  await wait(900); await lines([["f1", `${N} ❤️`, 1700], ["f2", "كل عام وانتي بخير.", 1900],
    ["f3", "وإن شاء الله الجاية أحتفل بيج وإنتي يمّي. 🎂❤️", 2400]]);
  $("f1").classList.remove("on"); $("f2").classList.remove("on"); $("f3").classList.remove("on");
  await wait(900); await lines([["f4", B, 1800], ["f5", `ميلاد سعيد يا ${Z}... يا ${N}. ❤️`, 2200], ["f6", `من ${S} ❤️`, 600]]);
  bigBurst(); confetti();
  setInterval(() => rise(12, 20), 900); setInterval(confetti, 2500);
}
function confetti() {
  const cols = ["#e6c27a", "#ffb3c6", "#c9456a", "#c9b6e4", "#fff4ee"];
  for (let i = 0; i < 70; i++) {
    const p = document.createElement("div"); p.className = "fh";
    p.style.cssText = `left:${Math.random() * 100}%;bottom:auto;top:-20px;width:7px;height:12px;border-radius:2px;background:${cols[i % 5]};filter:none;animation:fall ${3 + Math.random() * 3}s linear forwards;animation-delay:${Math.random()}s;--dx:${(Math.random() - .5) * 160}px;--r:${Math.random() * 720}deg`;
    fx.appendChild(p); setTimeout(() => p.remove(), 7500);
  }
}
const st = document.createElement("style");
st.textContent = "@keyframes fall{to{transform:translate(var(--dx),115dvh) rotate(var(--r));opacity:.2}}";
document.head.appendChild(st);

show("s1");
