(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();document.querySelector("#app").innerHTML=`
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
            <source src="./video/顔laboLP用VSL.mp4" type="video/mp4">
            お使いのブラウザは動画タグに対応していません。
          </video>
        </div>
      </div>
    </div>
  </section>

  <section class="section what-is">
    <div class="container">
      <h2 class="section-title">顔ヨガとは</h2>
      <div class="what-is-content">
        <p class="what-is-definition">顔ヨガとは、お顔の<span class="highlight-text">表情筋を鍛えてストレッチ</span>することです。</p>

        <div class="what-is-description">
          <p>顔には約<span class="highlight-number">60</span>もの表情筋があり、<br>心の状態とリンクして、さまざまな感情を表現しています。</p>

          <p class="emphasis-text">でも…表情筋も筋肉。<br>使わないとどんどん衰えてしまうんです。</p>

          <p>同じ筋肉ばかりを使ってしまうと、<br>「表情ぐせ」がついて<span class="highlight-text">シワやたるみの原因</span>に。</p>

          <p class="solution-text">→ 顔ヨガでバランスよく筋肉を動かすことで、<br>表情も気持ちも前向きに整えられます◎</p>
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
          <p>顔ヨガを学び、表情筋を鍛えることで<br>顔が変わり、心も変わっていきました。</p>
          <br>
          <p>「私もまだまだこれからだ」<br>そう思えた時、人生が動き始めたんです。</p>
        </div>

        <div class="story-highlight">
          <p>今、私は同じように悩んでいる女性たちに<br>「あなたも変われる」と伝えたいと思っています。</p>
        </div>

        <div class="story-reflection">
        <p><img src="./img/S__38297608.jpg" alt="輝く未来" class="story-future-image" /></p>
          <p>何歳になっても女性はいつまでも輝けます。</p>
          <br>
          <p>「もう遅い」なんて、ありません。<br>今からでも、十分間に合います。</p>
          <br>
          <p><span class="highlight-text">顔が変われば、気持ちが変わる。<br>気持ちが変われば、人生が変わる。</span></p>
          <br>
          <p>そして、この講座では綺麗になるだけじゃなく、<br>講師として活動する道もご用意しています。<br>自分の好きなことで、誰かを笑顔にできる。<br>そんな人生を、一緒に歩みませんか？</p>
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
            <p class="testimonial-text">自分にもできることを見つけたいと思いつつ、「ちゃんと続けられるかな？」という不安がありました。でも体験できる先生にお会いしたとき、笑顔で丁寧に寄り添ってくださる姿に安心して、「この先生のもとなら楽しく学べそう！」と思えたんです。顔ヨガを通して、無理なく楽しく続けられる自信をもらえました。<br><br>終わったらお顔もリフトアップして、たくさんお話しするのでお顔と気持ちもスッキリします。私も顔ヨガ講師になったら、先生さんにこんなレッスンができる講師になりたいと思います！</p>
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
            <p class="testimonial-text">これまでエステを通して多くのお客様と接してきましたが、「もっと心の部分に寄り添えるような技術があったら」と感じることがありました。ちひろさんの講座は、技術のわかりやすさだけでなく、想いや寄り添いの温度が高くて。先生自身が伝えたいことを体現してる"感じ"に惹かれて、ここで学びたいと思いました。<br><br>お肌のお手入れのやり方やスキンケアも教えていただけて、私もこれから生徒さんに色んなアプローチができるし、これから講師として活動していくために、すごく安心感があります。エステとマインドと顔ヨガ、全部学べってすごいと思う。絶対おすすめです！</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="section instructor">
    <div class="container">
      <h2 class="section-title">講師紹介</h2>
      <p class="section-subtitle">あなたの「もう一度輝きたい」を心から応援します</p>

      <div class="instructor-card fade-in">
        <div class="instructor-image">
          <div class="instructor-photo">
            <img src="./img/講師紹介.jpg" alt="講師 ちひろ">
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
            <p class="bio-intro">元パート時給970円のエステティシャンから、<br>今ではサロンオーナーとして、<br>多くの女性の人生に寄り添う毎日を送っています。</p>
            <br>
            <p class="bio-turning-point">コロナ禍で心身ともに限界を感じていた私を変えてくれたのが、<br>他でもない「<span class="highlight-keyword">顔ヨガ</span>」でした。</p>
            <br>
            <p class="bio-philosophy">表情が変わると、マインドも変わり<br>自分を大切にできるようになります。</p>
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

  <section id="curriculum" class="section curriculum">
    <div class="container">
      <h2 class="section-title">カリキュラム</h2>

      <div class="curriculum-path">
        <div class="course-step fade-in">
          <div class="step-badge">STEP 1</div>
          <div class="course-main-card">
            <div class="course-header">
              <div class="course-title-box">
                <h3 class="course-main-title">マインドアップ美顔ヨガ講座</h3>
                <p class="course-period">2ヶ月間 / 全4回のグループレッスン</p>
              </div>
            </div>

            <div class="course-description-box">
              <p>綺麗になるだけじゃない。顔が変われば、気持ちが変わり、人生が変わる。自分を好きになるための、最初の一歩を踏み出しましょう。</p>
            </div>

            <div class="lesson-list">
              <div class="lesson-item">
                <span class="lesson-number">第1回</span>
                <span class="lesson-title">自己紹介・お顔チェック・基本ポーズレッスン・撮影</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">第2回</span>
                <span class="lesson-title">表情筋ワークと基本ポーズ</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">第3回</span>
                <span class="lesson-title">美顔ヨガを楽しむ練習法</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">第4回</span>
                <span class="lesson-title">アドバンスポーズ（応用）</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">第5回</span>
                <span class="lesson-title">総復習・撮影</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">パーソナル</span>
                <span class="lesson-title">講師による個別レッスン</span>
              </div>
            </div>

            <div class="course-schedule-box">
              <h4>📅 開講日程</h4>
              <div class="schedule-columns">
                <div class="schedule-column">
                  <h5>水曜日夜コース 20:00〜21:30</h5>
                  <ul class="schedule-dates">
                    <li>①12月24日</li>
                    <li>②1月7日</li>
                    <li>③1月21日</li>
                    <li>④2月4日</li>
                    <li>⑤2月18日</li>
                    <li>⑥パーソナル60分</li>
                  </ul>
                </div>
                <div class="schedule-column">
                  <h5>土曜日朝コース 10:00〜11:30</h5>
                  <ul class="schedule-dates">
                    <li>①12月27日</li>
                    <li>②1月10日</li>
                    <li>③1月24日</li>
                    <li>④2月7日</li>
                    <li>⑤2月21日</li>
                    <li>⑥パーソナル60分</li>
                  </ul>
                </div>
              </div>
              <p class="course-note">水⇔土の振替可能、アーカイブ参加あり<br>基本ポーズ動画プレゼント付き</p>
            </div>

            <div class="course-price-box">
              <div class="price-highlight">
                <span class="price-label">受講料</span>
                <span class="price-amount">200,000<span class="price-unit">円</span></span>
                <span class="price-tax">（税込）</span>
              </div>
            </div>
          </div>
        </div>

        <div class="step-arrow fade-in">
          <p class="arrow-simple-text">▼ さらにスキルアップして講師として活躍したい方へ</p>
        </div>

        <div class="course-step fade-in">
          <div class="step-badge step-badge-advanced">STEP 2</div>
          <div class="course-main-card course-main-card-advanced">
          

            <div class="course-header">
              <div class="course-title-box">
                <h3 class="course-main-title">顔ヨガ講師養成講座</h3>
                <p class="course-period">2ヶ月間 / 全4回のグループレッスン</p>
                <div class="diploma-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>ディプロマ発行あり</span>
                </div>
              </div>
            </div>

            <div class="course-description-box">
              <p>綺麗になるだけじゃ終わらない。学んだスキルで他者を笑顔にできる。自分の好きなことで生きていける。そんな人生を、一緒に実現しましょう。</p>
            </div>

            <div class="lesson-list">
              <div class="lesson-item">
                <span class="lesson-number">第1回</span>
                <span class="lesson-title">美顔ヨガの基礎知識・美容マインド・ポーズレッスン</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">第2回</span>
                <span class="lesson-title">体からのアプローチ・顔タイプ診断・ポーズ実践</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">第3回</span>
                <span class="lesson-title">一歩を踏み出すマインドセット＆スキンケア基礎</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">第4回</span>
                <span class="lesson-title">講師養成テスト・活動案内・撮影</span>
              </div>
              <div class="lesson-item">
                <span class="lesson-number">パーソナル</span>
                <span class="lesson-title">講師による個別レッスン</span>
              </div>
            </div>

            <div class="course-schedule-box">
              <h4>📅 開講日程</h4>
              <div class="schedule-columns">
                <div class="schedule-column">
                  <h5>火曜日夜コース 20:00〜22:00</h5>
                  <ul class="schedule-dates">
                    <li>①2月24日</li>
                    <li>②3月3日</li>
                    <li>③3月17日</li>
                    <li>④3月24日</li>
                  </ul>
                </div>
                <div class="schedule-column">
                  <h5>金曜日朝コース 10:00〜12:00</h5>
                  <ul class="schedule-dates">
                    <li>①2月27日</li>
                    <li>②3月6日</li>
                    <li>③3月20日</li>
                    <li>④3月27日</li>
                  </ul>
                </div>
              </div>
              <p class="course-note">火⇔金の振替可能、アーカイブ参加あり</p>
            </div>

            <div class="course-price-box">
              <div class="price-highlight">
                <span class="price-label">受講料</span>
                <span class="price-amount">165,000<span class="price-unit">円</span></span>
                <span class="price-tax">（税込）</span>
              </div>
            </div>

            <div class="course-goal">
              <h4>このコース修了後に実現できること</h4>
              <ul>
                <li>自分で講座を開講し、生徒さんに教えられるように</li>
                <li>副業や独立として、顔ヨガ講師として活動可能</li>
                <li>自分らしい働き方で収入を得て自立した女性に</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="personal-lesson-note fade-in">
        <p class="personal-lesson-text">
          人前で話すのが苦手な方、大勢が苦手な方、どうしてもパーソナルで受講したい方は、<br>
          完全パーソナルレッスンでの受講も可能です。お気軽に個別でメッセージください。
        </p>
      </div>
    </div>
  </section>

  <section id="faq" class="section faq">
    <div class="container">
      <h2 class="section-title">よくある質問</h2>
      <div class="faq-list">
        <div class="faq-item fade-in">
          <div class="faq-question">
            <span class="faq-icon">Q</span>
            <h3>美容のお仕事初めてでも大丈夫ですか？</h3>
          </div>
          <div class="faq-answer">
            <span class="faq-icon">A</span>
            <p>初歩的な事から覚えやすく、何歳からでも始められます。一つ一つ丁寧に指導しますので、美容の経験がなくても安心して参加いただけます。</p>
          </div>
        </div>

        <div class="faq-item fade-in">
          <div class="faq-question">
            <span class="faq-icon">Q</span>
            <h3>本業とできるか不安...</h3>
          </div>
          <div class="faq-answer">
            <span class="faq-icon">A</span>
            <p>好きな時間や場所で仕事ができるので、本業との両立も十分可能です。多くの受講生が仕事や家事と並行して活動しています。</p>
          </div>
        </div>

        <div class="faq-item fade-in">
          <div class="faq-question">
            <span class="faq-icon">Q</span>
            <h3>自分も変わって、それを教えるって難しそう...</h3>
          </div>
          <div class="faq-answer">
            <span class="faq-icon">A</span>
            <p>正しいやり方を実践すれば自分自身が変化し、その経験が教える力になります。教え方もしっかり伝えるので、自信を持って活動できます。</p>
          </div>
        </div>

        <div class="faq-item fade-in">
          <div class="faq-question">
            <span class="faq-icon">Q</span>
            <h3>自分の見た目に自信がなくてもできますか？</h3>
          </div>
          <div class="faq-answer">
            <span class="faq-icon">A</span>
            <p>最初から自信がある人はいません。自信がないからこそ、この講座を作りました。一緒に学ぶ仲間とともに、少しずつ自信を積み上げていきましょう。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section cta-final">
    <div class="container">
      <div class="cta-final-box">
        <h2 class="cta-final-title">あなたの「可愛くなりたい」を応援します</h2>
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
        <button class="cta-button" onclick="alert('お申込みフォームへ遷移します')">顔laboに参加する</button>
        
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">マインドアップ美顔ヨガ講座 顔labo</div>
      
      <div class="footer-links">
        <a href="#about">顔ヨガとは</a>
        <a href="#curriculum">カリキュラム</a>
        <a href="#testimonials">受講生の声</a>
        <a href="#faq">よくある質問</a>
      </div>
      <div class="footer-copyright">
        © 2025 顔labo. All rights reserved.
      </div>
    </div>
  </footer>
`;const r={threshold:.1,rootMargin:"0px 0px -50px 0px"},p=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},r);setTimeout(()=>{document.querySelectorAll(".fade-in").forEach(e=>{p.observe(e)})},100);document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(a){a.preventDefault();const l=document.querySelector(this.getAttribute("href"));l&&l.scrollIntoView({behavior:"smooth",block:"start"})})});const v=document.getElementById("videoThumbnail"),c=document.getElementById("videoModal"),u=document.getElementById("videoModalOverlay"),h=document.getElementById("videoModalClose"),o=document.getElementById("modalVideo");function m(){c.style.display="flex",document.body.style.overflow="hidden",o.play()}function n(){c.style.display="none",document.body.style.overflow="",o.pause(),o.currentTime=0}v.addEventListener("click",m);u.addEventListener("click",n);h.addEventListener("click",n);document.addEventListener("keydown",e=>{e.key==="Escape"&&c.style.display==="flex"&&n()});
