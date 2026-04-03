document.querySelector("#app").innerHTML = /*html*/ `
  <section class="hero">
    <div class="hero-content">
      <div class="hero-brand">
        <h1 class="hero-title">マインドアップ<br>美顔ヨガ講座</h1>
        <p class="hero-subtitle-brand">顔 labo</p>
      </div>
      <h2 class="hero-catchphrase">お顔と心をあげて<br>最高に可愛い自分に出会う</h2>
      <br>

      <div class="hero-video-thumbnail" id="videoThumbnail">
        <img src="./img/VSLサムネ.png" alt="動画サムネイル" class="video-thumbnail-img">
        <div class="play-button">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)"/>
            <path d="M32 25L55 40L32 55V25Z" fill="#8B6F47"/>
          </svg>
        </div>
      </div>

      <div class="video-modal" id="videoModal">
        <div class="video-modal-overlay" id="videoModalOverlay"></div>
        <div class="video-modal-content">
          <button class="video-modal-close" id="videoModalClose">×</button>
          <video controls id="modalVideo" class="modal-video-player">
            <source src="./video/kaolabo-vsl.mp4" type="video/mp4">
            お使いのブラウザは動画タグに対応していません。
          </video>
        </div>
      </div>

      <div class="hero-offer-period">
        <span class="offer-badge">満員御礼</span>
        <p class="offer-date">次回は2026年5月募集予定です❣️</p>
        <p class="offer-note">次回参加希望の方は<br>以下のボタンからLINE登録してお待ちください</p>
      </div>
      <br>

      <a href="https://form.lmes.jp/landing-qr/2001999955-dv0AAknx?uLand=zbIZmA"
   target="_blank"
   class="cta-button"
   onclick="gtag('event', 'cta_click', {
     event_category: 'CTA',
     event_label: 'cta_main',
     transport_type: 'beacon'
   });">
  お申し込みはこちら▶︎
</a>



    </div>
  </section>

  <section class="section what-is">
    <div class="container">
      <h2 class="section-title">顔ヨガって？</h2>
      <div class="what-is-content">
        <p class="what-is-definition">顔ヨガとは、お顔の<span class="highlight-text">表情筋を鍛えてストレッチ</span>することです。</p>

        <div class="what-is-description">
          <p>顔には約<span class="highlight-number">60</span>もの表情筋があり、<br>心の状態とリンクして、さまざまな感情を表現しています。</p>

          <p class="emphasis-text">でも…表情筋も筋肉。<br>使わないとどんどん衰えてしまうんです。</p>

          <p>同じ筋肉ばかりを使ってしまうと、「表情ぐせ」がついて<span class="highlight-text">シワやたるみの原因</span>に。</p>

          <p class="solution-text">顔ヨガでバランスよく筋肉を動かすことで、表情も気持ちも前向きに整えられます◎</p>
        </div>
      </div>

      <div class="before-after-content">
        <div class="before-after-header">
          <p class="before-after-title">ほんの少しの習慣でこの変化！</p>
        </div>

        <div class="before-after-images">
          <img src="./img/biforeAfter.jpg" alt="顔ヨガのビフォーアフター" class="before-after-image">
        </div>

        <p class="before-after-caption">表情が変わると、気持ちまで変わるんです♡</p>
      </div>
    </div>
  </section>

  <section class="section story">
    <div class="container">

        <div class="story-problems">
          <p class="story-intro">気付けばもうすぐ50代...<br>こんな悩みを抱えていませんか？</p>
          <div class="divider-line"></div>
          <div class="problems-list">
            <div class="problem-item">鏡を見るたびに老けを感じて、ショックを受ける</div>
            <div class="problem-item">「このままでいいのかな」と漠然とした不安を感じる</div>
            <div class="problem-item">「私には何があるんだろう」と自分に自信が持てない</div>
            <div class="problem-item">「今さら新しいことを始めるなんて…」と踏み出せない</div>
            <div class="problem-item">家族のためだけじゃなく、自分のために生きたい</div>
          </div>
        </div>

        <div class="story-text-with-image">
          <p class="story-text">若い頃は輝いていたはずなのに<br>仕事や家族のために全力で走ってきたら<br>自分のことがどんどん後回しになってしまって・・・</p>
        </div>


        <div class="story-realization">
         <img src="./img/悩み1.png" alt="悩む女性" class="story-worry-image" />
          <p>私も同じでした。<br>「私には何が残っているんだろう」<br>そんな不安でいっぱいの時、美容の仕事と出会いました。</p>
          <br>
          <p>顔ヨガを学び、表情筋を鍛えることで顔が変わり、心も変わっていきました。</p>
          <br>
          <p>「私もまだまだこれからだ」<br>そう思えた時、人生が動き始めたんです。</p>
        </div>

        <div class="story-highlight">
          <p>今、私は同じように悩んでいる女性たちに「あなたも変われる」と伝えたいと思っています。</p>
        </div>

        <div class="story-reflection">
        <p><img src="./img/S__38297608.jpg" alt="輝く未来" class="story-future-image" /></p>
          <p>何歳になっても女性はいつまでも輝けます。</p>
          <br>
          <p>「もう遅い」なんて、ありません。<br>今からでも、十分間に合います。</p>
          <br>
          <p><span class="highlight-text">顔が変われば、気持ちが変わる。<br>気持ちが変われば、人生が変わる。</span></p>
          <br>
          <p>何かを始めるのにもう遅いなんてない。<br>でも今日が1番あなたの若い日です。<br>スタートは絶対に1日でも早い方がいい！</p>
          <br>
          <p><span class="highlight-text">お顔も心も上げて、自分史上最高に可愛い自分に出会いましょう♡</span></p>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials" class="section testimonials">
    <div class="container">
      <h2 class="section-title">受講生の声</h2>
      <p class="section-subtitle">「私も変われた」そんな声がたくさん届いています</p>

      <div class="testimonials-grid">
        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化1.jpg" alt="受講生の変化1" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              ちひろ先生のレッスンは毎回楽しく、自分にもできるか不安だった私も楽しく無理なく続けられました！
            </div>
            <p class="testimonial-text">自分にもできることを見つけたいと思いつつ、「ちゃんと続けられるかな？」という不安がありました。でも体験できる先生にお会いしたとき、笑顔で丁寧に寄り添ってくださる姿に安心して、「この先生のもとなら楽しく学べそう！」と思えたんです。顔ヨガを通して、無理なく楽しく続けられる自信をもらえました。<br><br>終わったらお顔もリフトアップして、たくさんお話しするのでお顔と気持ちもスッキリします。同世代の女性に笑顔になってもらえる、美容のお仕事をこれからしたいと思っています！</p>
          </div>
        </div>

        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化2.jpg" alt="受講生の変化2" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              ちひろ先生の顔ヨガはなんと言っても「心もお顔も上げる」で人生の見え方が変わりました！
            </div>
            <p class="testimonial-text">年齢を重ねる中で、表情や気持ちの変化に戸惑っていました。「顔ヨガ」と聞いて最初は表情筋の運動かと思っていたのですが、ちひろさんの「心もお顔も上げていくレッスン」の考え方に惹かれて、「これはただの技術じゃなく、人生が前向きになる講座だ」と感じたのが決め手でした。<br><br>顔ヨガだけやってもお顔はちゃんと上がります。でも女性としての気持ちの持ち方を学べて、それをこれから私もたくさんの方にお伝えしていくんだと思うと、50代が楽しくなりました！！</p>
          </div>
        </div>

        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化3.jpg" alt="受講生の変化3" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              ちひろ先生はベテランのエステティシャンでもあるので、マッサージのやり方やほぐし方もすごく分かりやすかったです。
            </div>
            <p class="testimonial-text">これまでエステを通して多くのお客様と接してきましたが、「もっと心の部分に寄り添えるような技術があったら」と感じることがありました。ちひろさんの講座は、技術のわかりやすさだけでなく、想いや寄り添いの温度が高くて。先生自身が伝えたいことを体現してる"感じ"に惹かれて、ここで学びたいと思いました。<br><br>お肌のお手入れのやり方やスキンケアも教えていただけて、私もこれから生徒さんに色んなアプローチができるし、これから講師として活動していくために、すごく安心感があります。エステとマインドと顔ヨガ、全部学べるってすごいと思う。絶対おすすめです！</p>
          </div>
        </div>
      </div>
                        <a href="https://form.lmes.jp/landing-qr/2001999955-dv0AAknx?uLand=zbIZmA"
   target="_blank"
   class="cta-button"
   onclick="gtag('event', 'cta_click', {
     event_category: 'CTA',
     event_label: 'cta_main',
     transport_type: 'beacon'
   });">
  お申し込みはこちら▶︎
</a>


    </div>
  </section>

  <section id="about" class="section instructor">
    <div class="container">
      <h2 class="section-title">講師紹介</h2>

      <div class="instructor-card fade-in">
        <div class="instructor-image">
          <div class="instructor-photo">
            <img src="./img/instructor-chihiro.jpg" alt="講師 ちひろ">
          </div>
          <div class="instructor-name-box instructor-name-box-desktop">
            <h3 class="instructor-name">ちひろ</h3>
            <p class="instructor-subtitle">エステティシャン歴20年以上・顔ヨガ講師</p>
          </div>
        </div>

        <div class="instructor-content">
          <div class="instructor-name-box instructor-name-box-mobile">
            <h3 class="instructor-name">ちひろ</h3>
            <p class="instructor-subtitle">エステティシャン歴20年以上・顔ヨガ講師</p>
          </div>

          <div class="instructor-bio">
            <p class="bio-intro">元パート時給970円のエステティシャンから、今ではサロンオーナーとして多くの女性の人生に寄り添う毎日を送っています。</p>
            <br>
            <p class="bio-turning-point">コロナ禍で心身ともに限界を感じていた私を変えてくれたのが、他でもない「<span class="highlight-keyword">顔ヨガ</span>」でした。</p>
            <br>
            <p class="bio-philosophy">表情が変わると、マインドも変わり自分を大切にできるようになります。</p>
            <br>
            <p class="bio-results">今では、ありがたいことに<br><span class="voice-quote">「自分のことが好きになれた」</span><br><span class="voice-quote">「理想の働き方が叶った」</span><br>そんな声がたくさん届いています。</p>
            <br>
            <p class="bio-mission">私自身が変われたからこそ、<br><span class="mission-text">「皆さんの一歩を全力でサポートしたい」</span><br>そういった想いのもと活動しています。</p>
            <br>
            <p class="bio-cta">私と一緒に<br><span class="final-message">「可愛い笑顔」と「理想の未来」を手に入れましょう♡</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="lesson-content" class="section lesson-content">
    <div class="container">
      <h2 class="section-title">講座内容について</h2>

      <!-- レッスン内容カード -->
      <div class="lesson-block fade-in">
        <div class="lesson-block-header">
          <h3 class="lesson-block-title">レッスン内容</h3>
          <p class="lesson-block-meta">60分 × 全6回（約3ヶ月）／ 毎月2回 Zoom開催</p>
        </div>
        <div class="lesson-list">
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">美顔ヨガレッスン</span></div>
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">スキンケア、インナーケア、ポインターレクチャー</span></div>
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">あなたのお悩みに合わせたトレーニング</span></div>
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">可愛いを引き出すマインドアップセッション</span></div>
        </div>
      </div>

      <!-- 受講生限定特典カード -->
      <div class="benefit-block fade-in">
        <div class="benefit-block-header">
          <h3 class="benefit-block-title">受講生限定特典</h3>
        </div>
        <div class="lesson-list">
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">基本の美顔ヨガ動画プレゼント</span></div>
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">変化を感じられるビフォーアフター写真お渡し</span></div>
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">期間中サロン優待（施術、化粧品など）</span></div>
          <div class="lesson-item"><span class="lesson-dot"></span><span class="lesson-title">ご卒業後も安心の卒業生だけの優待サポートレッスン</span></div>
        </div>
      </div>

      <a href="https://form.lmes.jp/landing-qr/2001999955-dv0AAknx?uLand=zbIZmA"
         target="_blank"
         class="cta-button"
         onclick="gtag('event', 'cta_click', {
           event_category: 'CTA',
           event_label: 'cta_main',
           transport_type: 'beacon'
         });">
        お申し込みはこちら▶︎
      </a>

    </div>
    
  </section>

<section id="faq" class="section faq">
  <div class="container">
    <h2 class="section-title">よくある質問</h2>
    <div class="faq-list">

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>美顔ヨガは本当に効果がありますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            正しく続ければ効果は出ます。<br>
            ただし「一回で別人」ではなく、筋肉の使い方を理解して継続していくことで効果を感じていただけます。
          </p>
        </div>
      </div>

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>何歳からでも変われますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            年齢制限はありません。<br>
            実際に、35歳から60歳まで100人以上の幅広い年齢の方がご受講くださっています。<br>
            特に40代以降は、表情筋＋マインドの整え方が大切です。「もう遅い」と感じている方にも、諦めずぜひチャレンジしてほしいです。
          </p>
        </div>
      </div>

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>どれくらいで変化を感じますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            早い方で2週間ほどで変化を感じていただけます。<br>
            1ヶ月くらいで変化を感じられる方がほとんどです。（むくみ・フェイスライン・目元・表情など）
          </p>
        </div>
      </div>

      <!-- <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>グループレッスンでもちゃんと見てもらえますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            はい。少人数制なので一人ずつしっかりチェックできます。<br>
            6回目は完全個別レッスンで、お悩みや苦手をお伺いしてレッスンをさせていただきます。
          </p>
        </div>
      </div> -->

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>続けられるか不安です…</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            その不安は、みなさんが一番感じることです。<br>
            3ヶ月のレッスンの中で、継続できる方法もお伝えしていきますのでご安心くださいね。
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


  <section class="section cta-final">
    <div class="container">
      <div class="cta-final-box">
        <h2 class="cta-final-title">あなたの<br>「可愛くなりたい」<br>を応援します</h2>
        <p class="cta-final-text">
          これまで頑張ってきたあなただからこそ、<br>
          今度は自分を大切にする番です。<br><br>
          「もう遅いかも」なんて、ありません。<br>
          <br>
          鏡を見るのが楽しみになる、<br>
          自分を好きになれる、<br>
          自分らしく生きられる。<br><br>
          そんな人生を、一緒に歩みませんか？
        </p>
        <a href="https://form.lmes.jp/landing-qr/2001999955-dv0AAknx?uLand=zbIZmA"
   target="_blank"
   class="cta-button"
   onclick="gtag('event', 'cta_click', {
     event_category: 'CTA',
     event_label: 'cta_main',
     transport_type: 'beacon'
   });">
  お申し込みはこちら▶︎
</a>


        
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">マインドアップ美顔ヨガ講座 顔labo</div>
      
      <div class="footer-links">
        <a href="#about">顔ヨガとは</a>
        <a href="#lesson-content">講座内容について</a>
        <a href="#testimonials">受講生の声</a>
        <a href="#faq">よくある質問</a>
      </div>
      <div class="footer-copyright">
        © 2025 顔labo. All rights reserved.
      </div>
    </div>
  </footer>
`;

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

setTimeout(() => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
}, 100);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Video modal functionality
const videoThumbnail = document.getElementById("videoThumbnail");
const videoModal = document.getElementById("videoModal");
const videoModalOverlay = document.getElementById("videoModalOverlay");
const videoModalClose = document.getElementById("videoModalClose");
const modalVideo = document.getElementById("modalVideo");

function openVideoModal() {
  videoModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  modalVideo.play();
}

function closeVideoModal() {
  videoModal.style.display = "none";
  document.body.style.overflow = "";
  modalVideo.pause();
  modalVideo.currentTime = 0;
}

videoThumbnail.addEventListener("click", openVideoModal);
videoModalOverlay.addEventListener("click", closeVideoModal);
videoModalClose.addEventListener("click", closeVideoModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.style.display === "flex") {
    closeVideoModal();
  }
});

// ===============================
// CTAリンク 自動切替
// ===============================

// // 11/29 21:00 を指定（日本時間）
// const switchTime = new Date("2025-11-29T21:00:00+09:00").getTime();

// // 切り替え後のリンク
// const afterLink = "https://liff.line.me/2001999955-5xXKKOay?unique_key=m1xLsv&ts=1764377281";

// // 今のリンク（元のLPリンク）
// const beforeLink = "https://form.lmes.jp/landing-qr/2001999955-dv0AAknx?uLand=zbIZmA";

// function updateCtaLink() {
//   const now = Date.now();
//   const ctas = document.querySelectorAll(".cta-button");

//   ctas.forEach((btn) => {
//     const target = now >= switchTime ? afterLink : beforeLink;
//     btn.setAttribute("href", target);
//   });
// }

// // 初回実行
// updateCtaLink();

// // 30秒ごとにチェック（ページ開いたままの人にも反映）
// setInterval(updateCtaLink, 30000);
