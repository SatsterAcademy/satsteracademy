'use client';
import * as React from 'react';
export default function SatsterHome() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight">Satster Academy</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#courses" className="hover:text-blue-600">Courses</a>
            <a href="#results" className="hover:text-blue-600">Results</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#blog" className="hover:text-blue-600">Blog</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#book" className="rounded-2xl px-4 py-2 bg-blue-600 text-white font-medium shadow hover:bg-blue-700">Consultation with P'Berry</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-black">
              เรียน SAT กับพี่แบรี่
            </h1>
            <h2 className="mt-1 text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-red-700">
              BBACU 25
            </h2>
            <h3 className="mt-1 text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-blue-600">
              Digital SAT 1550
            </h3>
            <p className="mt-4 text-slate-600 text-lg">
              Proven SAT Math & Reading/Writing programs. อัพคะแนนได้จริง แบบไม่เครียด สอนตรง กระชับ ประยุกต์ใช้กับการสอบจริงได้แน่นอน
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="rounded-2xl px-4 py-2 bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
                Consultation with P'Berry
              </a>
              <a href="#courses" className="rounded-2xl px-4 py-2 bg-white border border-slate-300 text-slate-700 font-medium shadow hover:bg-slate-50 transition">
                Explore Courses
              </a>
            </div>
            <p className="mt-4 text-slate-500 text-sm">
              Free Assessment / วางแผนการเรียน / ปรึกษาพี่แบรี่ / แนะนำคอร์สที่เหมาะสม
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="grid grid-cols-3 divide-x divide-slate-200">
              <Stat kpi="+100" label="คะแนนเพิ่มเฉลี่ย" />
              <Stat kpi="92%" label="คะแนนเพิ่มขึ้น หลังจากเรียนไป 12 คลาส" />
              <Stat kpi="5 ปี" label="ประสบการณ์ติว SAT ระดับมืออาชีพ" />
            </div>
            <h4 className="mt-6 text-lg font-bold text-slate-800">ทำไมควรเรียนกับพี่แบรี่</h4>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><Bullet/> เข้าใจน้องๆ ปรับแผนการเรียนให้เข้ากับตัวน้องๆ ที่สุด ไม่มีพื้นฐานก็ทำได้</li>
              <li className="flex items-start gap-2"><Bullet/> มีทริคการทำโจทย์ทุกแบบ ทำข้อสอบแบบเป็นระบบ ไม่มั่วแน่นอน</li>
              <li className="flex items-start gap-2"><Bullet/> ทวนพื้นฐานครบ เรียนสดกับติวเตอร์ตัวจริง ถามตอบได้ทันที</li>
              <li className="flex items-start gap-2"><Bullet/> ติดต่อถามหลังคลาสได้ตลอด ดูแลจนสอบเสร็จทุกคน</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section aria-label="Trusted results" className="py-6 border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Trust label="Verbal 680+" sub="เชี่ยวการการติวพาร์ท Verbal ให้ได้คะแนนสูง" />
          <Trust label="Math 800 เต็ม" sub="Roadmap สำหรับเก็บ Math เต็มชัดเจน" />
          <Trust label="1,200+ ข้อ" sub="โจทย์ฝึกจากแบบฝึกหัด และ ข้อสอบจริง" />
          <Trust label="2020 – 2026" sub="สอน SAT มามากกว่า 5 ปี" />
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">Tutoring Rates 2026</h2>
        <p className="text-slate-600 mt-2">เรามีคอร์สให้น้องๆ เลือกทุกรูปแบบ ทั้ง Private, คลาสกลุ่ม, และ วีดีโอคอร์ส เข้าใจ กระชับ ตรงกับข้อสอบจริงแน่นอน</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <CourseCard
            title="Video Course ปรับพื้นฐาน 24 ชม."
            price="฿5,900 / 2 Subjects"
            bullets={["คอร์สนี้เหมาะสำหรับน้องๆ ที่อยากเริ่มเรียนเนื้อหาตั้งแต่ต้น 😀","ปรับพื้นฐาน สอนเก็บเนื้อหาทั้งหมด ครบ 8 บทแบบละเอียด ครบทั้งสองวิชา","โจทย์มากกว่า 550+ ข้อ และ แบบฝึกหัดท้ายบทจากข้อสอบจริง🚀","ถาม-ตอบ 24 ชั่วโมง ติดตามผลนักเรียนจนสอบติด"]}
            cta="Join Fundamental Class"
          />
          <CourseCard
            featured
            title="Upscore Fundamental / Intensive"
            price="฿9,990 / Course"
            bullets={["คลาสสดและวีดีโอกว่า 10+ คลาส / คอร์ส","เรียนสด small group ถามตอบได้ตลอด","โจทย์มากกว่า 500+ ข้อจากข้อสอบจริง","ถาม-ตอบ 24 ชั่วโมง ติดตามผลนักเรียนจนสอบติด"]}
            cta="Join Upscore Class"
          />
          <CourseCard
            title="Private Tutoring"
            price="Inquire For Pricing"
            bullets={["เรียนสด 1‑on‑1 กับพี่แบรี่ผ่าน Google Meet","เหมาะกับทุกระดับ ตั้งแต่ไม่มีพื้นฐาน ไปจนถึงระดับ Advanced","ปรับเนื้อหาให้เข้ากับน้อง 100%","ถาม-ตอบ 24 ชม. ติดตามผลนักเรียนจนสอบติด","นักเรียนในคลาสไพรเวต อัตราการสอบติด 100%","รับจำนวนจำกัด จองคิวเรียนล่วงหน้า"]}
            cta="Enquire Private"
          />
        </div>
      </section>

      {/* Results */}
      <section id="results" className="relative overflow-hidden border-y border-blue-100" style={{background: 'linear-gradient(135deg, #eff6ff 0%, #fdf4ff 50%, #f0fdf4 100%)'}}>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">Student Results</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Reviews & Results จากน้องๆ คนเก่ง 💕</h2>
            <p className="text-slate-400 mt-2 text-base">ผลลัพธ์จริง คะแนนขึ้นทุกคน 🚀</p>
          </div>
          <ReviewImageSlider />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold">FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <FAQ q="ยังไม่มีพื้นฐานเลย อยากเริ่มเรียนตั้งแต่ต้นได้ไหมคะ?" a="เรียนได้ค้าบบ ทางเราจะแนะนำหลักสูตร รวมถึงการวางแผนให้ตั้งแต่ต้นเลย สามารถสอบถามเพิ่มเติมที่ Line หรือ Instragram ของเราได้นะค้าบ💕" />
          <FAQ q="คลาสออนไลน์ เรียนผ่านอะไรครับ?" a="เรียนผ่าน Google Meet ค้าบ ส่วนการลงทะเบียนสามารถใช้ Gmail ส่วนตัวของตัวเอง ลงทะเบียนเรียน ทั้งคอร์สออนไลน์💻 และ วีดีโอคอร์ส🎥 ได้เลยค้าบ" />
          <FAQ q="คลาสกลุ่มอัพสกอร์เรียนประมาณกี่คนคะ?" a="ขนาดคลาสประมาณ 5-10 คน สามารถเรียนแล้วเข้าใจทุกคนแน่นอนค้าบ ถ้ามีคำถามสามารถถามได้ทันที ถ้าเข้าเรียนไม่ทัน มีวีดีโออัดไว้ให้ทุกคลาสครับ!" />
          <FAQ q="จองคลาส Private กับพี่แบรี่ยังไงครับ?" a="สามารถทักมาสอบถามทาง Line Official: @satster_academy ได้เลยค้าบ ทักมาสอบถามก่อนนะครับ❤️" />
        </div>
      </section>

      {/* Book */}
<section id="book" className="bg-blue-50/40 border-y border-blue-100">
  <div className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-2xl font-bold">Consultation with P'Berry</h2>
    <p className="text-slate-600 mt-2">
      Free Assessment / วางแผนการเรียน / ปรึกษาพี่แบรี่ / แนะนำคอร์สที่เหมาะสม
    </p>
    <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
      {/* Left box */}
<div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex items-center justify-center">
  <img
    src="/images/LineOAqr.jpg"
    alt="Consultation"
    className="w-full h-auto max-w-[250px] max-h-[250px] object-contain"
  />
</div>

      {/* Right box */}
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between self-start">
  <div>
    <h3 className="font-semibold">สมัครเรียน ติดต่อ Line Official / Email</h3>
    <p className="text-sm text-slate-600 mt-1">Message us and we'll be in touch jaa!</p>
    <div className="mt-4 flex flex-wrap gap-3">
      <a href="https://lin.ee/wkBcwoc" target="_blank" rel="noopener noreferrer" className="rounded-2xl px-4 py-2 bg-green-600 text-white font-medium shadow hover:bg-green-700">Add LINE</a>
      <a href="mailto:berrysattutor@gmail.com" className="rounded-2xl px-4 py-2 bg-white border border-slate-200 font-medium">Email Us</a>
    </div>
  </div>
  <p className="mt-4 text-xs text-slate-500">Office hours: Mon–Sat 10:00 – 20:00 (Bangkok)</p>
</div>
    </div>
  </div>
</section>

      {/* About */}
<section id="about" className="mx-auto max-w-6xl px-4 py-16">
  <h2 className="text-2xl font-bold">P' Berry💫</h2>
  <ul className="mt-4 space-y-2 text-slate-600">
    <li>🏆 ศิษย์เก่า BBA จุฬาฯ สาขาการเงิน ใช้เวลาเตรียมสอบ SAT เพียง 2 เดือน หลังกลับจากแลกเปลี่ยน สอบติดในรอบเดียว!</li>
    <li>🥈 PAT5 (ความถนัดทางวิชาชีพครู) ปี 63 อันดับ 2 ของประเทศ (จาก 64221 คน)</li>
    <li>🥇 สอบชิงทุนแลกเปลี่ยน โครงการ ECE ได้อันดับที่ 1 ของประเทศ ได้ทุนเต็มจำนวนประเทศนิวซีแลนด์ ปี 2016</li>
    <li>🥇 HSK6 242/300 ภายใน 1 ปี ในโครงการ AFS จีน รุ่น 57 ปี 2018</li>
    <li>🎓 สอนนักเรียนติดมหาวิทยาลัยมาแล้วมากกว่า 30+ คนทั้งในไทยและต่างประเทศ</li>
  </ul>
</section>

      {/* Blog placeholder */}
      <section id="blog" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Tips & Updates</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {t: "คลาสกลุ่ม รอบหน้าจะจัดตอนไหน?", e: "ปกติเราจัดสำหรับทุกรอบสอบเลยค้าบบ ติดตามได้ผ่านทางเพจไอจีเลยน้าา❤️"},
              {t: "ไม่เก่งเลข จะทำ Math ได้ไหม?", e: "ถ้าปูพื้นฐานอย่างถูกวีธี และขยันทำโจทย์ พี่รับประกันว่าได้ 750+ ได้แน่นอนครับ"},
              {t: "Verbal ยากจังเลยค่ะ😭", e: "ถ้ามีทริคดีๆ จากยากจะกลายเป็นง่ายที่ Satster Academy มาจอยคลาสของเรากันค้าบ!!!"},
            ].map((p, i) => (
              <article key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <h3 className="font-semibold">{p.t}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.e}</p>
                <a href="#" className="inline-block mt-3 text-blue-600 font-medium">Contact us →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="mx-auto max-w-6xl px-4 py-16">
  <h2 className="text-2xl font-bold">Contact</h2>

  <form
    action="https://formsubmit.co/berrysattutor@gmail.com"
    method="POST"
    className="mt-6 grid gap-4 max-w-xl"
  >
    {/* FormSubmit options */}
    <input type="hidden" name="_subject" value="New message from Satster Academy" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />
    {/* After submit, go to a simple thank-you page. You can change this later */}
    <input type="hidden" name="_next" value="https://formsubmit.co/thanks.html" />

    <div>
      <label className="block text-sm font-medium">Name</label>
      <input
        name="Name"
        required
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
        placeholder="Your name"
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Email</label>
      <input
        type="email"
        name="Email"
        required
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
        placeholder="you@example.com"
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Message</label>
      <textarea
        name="Message"
        rows={4}
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2"
        placeholder="How can we help?"
      />
    </div>

    <button
      type="submit"
      className="rounded-2xl px-5 py-3 bg-blue-600 text-white font-medium shadow hover:bg-blue-700 w-max"
    >
      Send Message
    </button>

    <p className="text-xs text-slate-500">
      By submitting, you agree to our privacy policy.
    </p>
  </form>
</section>




      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-6">
          <div>
            <div className="font-bold">Satster Academy</div>
            <p className="text-sm text-slate-400 mt-2">Score higher. Stress less.</p>
          </div>
          <div>
            <div className="font-semibold">Explore</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li><a href="#courses" className="hover:underline">Courses</a></li>
              <li><a href="#results" className="hover:underline">Results</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Help</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li><a href="#faq" className="hover:underline">FAQs</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li><a href="https://lin.ee/wkBcwoc" target="_blank" rel="noopener noreferrer" className="hover:underline">LINE</a></li>
              <li><a href="https://www.instagram.com/satster_academy/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.youtube.com/@satster_academy" target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-400 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Satster Academy</span>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Floating LINE button */}
      <a
        href="https://lin.ee/wkBcwoc"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white font-semibold shadow-lg hover:bg-green-600 transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.037 2 11c0 2.812 1.388 5.328 3.57 7.012L4.5 22l4.23-2.197A10.8 10.8 0 0 0 12 20c5.523 0 10-4.037 10-9S17.523 2 12 2Z"/>
        </svg>
        LINE
      </a>
    </main>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="p-4 text-center">
      <div className="text-3xl font-extrabold text-slate-900">{kpi}</div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

function Bullet() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-1">
      <circle cx="12" cy="12" r="10" stroke="currentColor" className="text-blue-600"/>
      <path d="M7 12l3 3 7-7" stroke="currentColor"/>
    </svg>
  );
}

function Trust({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
      <div className="text-xl font-bold">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </div>
  );
}

function CourseCard({ title, price, bullets, cta, featured }: { title: string; price: string; bullets: string[]; cta: string; featured?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${featured ? 'border-blue-300 bg-blue-50/40' : 'border-slate-200 bg-white'}`}>
      {featured && <div className="text-xs font-semibold text-blue-700 mb-2">Recommended</div>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-1 text-2xl font-extrabold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {bullets.map((b,i)=>(
          <li key={i} className="flex items-start gap-2"><Bullet/> {b}</li>
        ))}
      </ul>
      <a href="#book" className={`mt-5 inline-block rounded-2xl px-4 py-2 font-medium ${featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white border border-slate-200 hover:border-slate-300'}`}>{cta}</a>
    </div>
  );
}

function ReviewImageSlider() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const all = Array.from({ length: 49 }, (_, i) => i + 1);
  // Split into 3 rows
  const row1 = all.filter((_, i) => i % 3 === 0);
  const row2 = all.filter((_, i) => i % 3 === 1);
  const row3 = all.filter((_, i) => i % 3 === 2);

  function scrollByDir(dir: 1 | -1) {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  }

  const imgClass = "w-full block rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-white/60";
  const colW = "w-[340px] shrink-0";

  return (
    <div className="relative">
      {/* Nav buttons */}
      <div className="flex justify-end gap-3 mb-5">
        <button onClick={() => scrollByDir(-1)} aria-label="Previous"
          className="h-11 w-11 rounded-full bg-white border border-slate-200 shadow-md hover:bg-blue-50 hover:shadow-lg grid place-items-center text-slate-600 text-xl font-bold transition-all">
          ‹
        </button>
        <button onClick={() => scrollByDir(1)} aria-label="Next"
          className="h-11 w-11 rounded-full bg-white border border-slate-200 shadow-md hover:bg-blue-50 hover:shadow-lg grid place-items-center text-slate-600 text-xl font-bold transition-all">
          ›
        </button>
      </div>

      {/* 3-row horizontal scroll grid */}
      <div
        ref={containerRef}
        className="overflow-x-auto pb-4"
        style={{ scrollbarWidth: 'none' as any }}
      >
        <div className="flex flex-col gap-4" style={{ width: 'max-content' }}>
          <div className="flex gap-4">
            {row1.map(n => <div key={n} className={colW}><img src={`/images/reviews/${n}.jpg`} alt={`Review ${n}`} className={imgClass} loading="lazy" /></div>)}
          </div>
          <div className="flex gap-4">
            {row2.map(n => <div key={n} className={colW}><img src={`/images/reviews/${n}.jpg`} alt={`Review ${n}`} className={imgClass} loading="lazy" /></div>)}
          </div>
          <div className="flex gap-4">
            {row3.map(n => <div key={n} className={colW}><img src={`/images/reviews/${n}.jpg`} alt={`Review ${n}`} className={imgClass} loading="lazy" /></div>)}
          </div>
        </div>
      </div>

      {/* Footer link */}
      <div className="mt-6 text-center">
        <a href="https://www.instagram.com/satster_academy/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          ดูรีวิวเพิ่มเติมที่ Instagram
        </a>
      </div>
    </div>
  );
}
function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
      <summary className="cursor-pointer font-medium">{q}</summary>
      <p className="mt-2 text-sm text-slate-600">{a}</p>
    </details>
  );
}
