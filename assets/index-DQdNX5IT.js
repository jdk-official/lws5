(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const y=`<section id="overview" class="section">

  <!-- SPLASH HEADER -->
  <div class="sec-splash">
    <img src="/assets/illustrations/coffee-mug.png" alt="" class="sec-splash-img" />
    <div class="sec-splash-body">
      <div class="sec-splash-eyebrow">Alliance #1075 QueenRae · Season 5</div>
      <div class="sec-splash-title">General Guide</div>
      <div class="sec-splash-sub">Your complete playbook for Season 5</div>
      <div class="sec-splash-badge">🔥 First Priority: Coffee + Caffeine Institute</div>
    </div>
    <img src="/assets/illustrations/barista.png" alt="" class="sec-splash-img right" />
  </div>

  <!-- MAIN PRIORITY CALLOUT -->
  <div class="card-dark callout-banner reveal">
    <div class="callout-rule"></div>
    <div class="callout-label">🔥 Main Priority — First Days</div>
    <div class="callout-headline">Coffee + Caffeine Institute</div>
    <div class="callout-sub">Focus on Coffee until your resistance is built up. Everything else comes after.</div>
  </div>

  <div class="ornament-divider" aria-hidden="true">
    <div class="line"></div>
    <svg><use href="/assets/icons/icons.svg#i-diamond"/></svg>
    <div class="line"></div>
  </div>

  <!-- RESOURCES -->
  <div class="card-parchment reveal">
    <h3 class="card-title">⚙️ Resources Overview</h3>
    <div class="res-grid">
      <div class="res-card">
        <svg><use href="/assets/icons/icons.svg#i-beans"/></svg>
        <div class="res-card-name">Coffee Beans</div>
        <div class="res-card-eq">= Stone ($4)</div>
        <div class="res-card-desc">Used to run your Coffee Factories</div>
      </div>
      <div class="res-card">
        <svg><use href="/assets/icons/icons.svg#i-coffee-r"/></svg>
        <div class="res-card-name">Coffee</div>
        <div class="res-card-eq">= Quartz ($4)</div>
        <div class="res-card-desc">Feeds the Caffeine Institute to brew cups</div>
      </div>
      <div class="res-card">
        <svg><use href="/assets/icons/icons.svg#i-gold"/></svg>
        <div class="res-card-name">CrystalGold</div>
        <div class="res-card-eq">= Magatama</div>
        <div class="res-card-desc">Season currency — buy items, deposit in Banks</div>
      </div>
      <div class="res-card">
        <span class="res-card-new">NEW</span>
        <svg><use href="/assets/icons/icons.svg#i-whiskey"/></svg>
        <div class="res-card-name">Whiskey</div>
        <div class="res-card-eq">Rare resource</div>
        <div class="res-card-desc">Sell via The Fortune train for CrystalGolds</div>
      </div>
    </div>
  </div>

  <!-- COFFEE FACTORIES + CAFFEINE INSTITUTE side by side -->
  <div class="grid md:grid-cols-2 gap-4 mb-5">

    <div class="split-feature reveal">
      <div class="split-feature-img">
        <img src="/assets/illustrations/coffee-mug.png" alt="" />
      </div>
      <div class="split-feature-body">
        <h3 class="card-title">🏭 Coffee Factories</h3>
        <p class="text-xs text-brown italic mb-2">Produce Coffee Beans — required to level up the Caffeine Institute</p>
        <ul class="guide-list">
          <li><strong>1st Factory:</strong> Available from the start</li>
          <li><strong>2nd Factory:</strong> Unlocks when 1st hits level 10</li>
          <li><strong>3rd &amp; 4th:</strong> Unlock at level 15 of the previous</li>
          <li><strong>5th Factory:</strong> Requires the Season Weekly Pass</li>
        </ul>
      </div>
    </div>

    <div class="split-feature reveal">
      <div class="split-feature-img">
        <img src="/assets/illustrations/barista.png" alt="" />
      </div>
      <div class="split-feature-body">
        <h3 class="card-title">☕ Caffeine Institute</h3>
        <p class="text-xs text-brown italic mb-2">Upgrading increases your virus resistance and brews coffee buffs</p>
        <ul class="guide-list">
          <li>Each upgrade increases virus resistance</li>
          <li>Brews cups — drink for powerful 8h buffs</li>
          <li><strong>Tanker / Pilot / Missileer Bar</strong> unlocks at level 60 — damage boost for those hero types</li>
          <li>Tactic Cards back this season — farm daily</li>
        </ul>
      </div>
    </div>

  </div>

  <div class="ornament-divider" aria-hidden="true">
    <div class="line"></div>
    <svg><use href="/assets/icons/icons.svg#i-diamond"/></svg>
    <div class="line"></div>
  </div>

  <!-- UPGRADE STRATEGY -->
  <div class="card-parchment reveal">
    <h3 class="card-title">📈 Coffee Factory Upgrade Strategy</h3>
    <p class="text-xs text-brown italic mb-3">Follow this order exactly — rushing factories out of sequence wastes resources.</p>
    <div class="upgrade-steps">
      <div class="upgrade-step">
        <div class="step-num">1</div>
        <div class="step-text">Level up Coffee Factory I to <strong>level 10</strong> — unlocks Factory II</div>
      </div>
      <div class="upgrade-step">
        <div class="step-num">2</div>
        <div class="step-text">Level up Coffee Factory II to <strong>level 5</strong></div>
      </div>
      <div class="upgrade-step">
        <div class="step-num">3</div>
        <div class="step-text">Level up Coffee Factory I to <strong>level 15</strong> — unlocks Factory III</div>
      </div>
      <div class="upgrade-step">
        <div class="step-num">4</div>
        <div class="step-text">Level up Coffee Factory II to <strong>level 15</strong> — unlocks Factory IV</div>
      </div>
      <div class="upgrade-step">
        <div class="step-num">5</div>
        <div class="step-text">Level up Coffee Factory III to <strong>level 15</strong></div>
      </div>
      <div class="upgrade-step">
        <div class="step-num">6</div>
        <div class="step-text">Level up Coffee Factory IV to <strong>level 15</strong></div>
      </div>
      <div class="upgrade-step">
        <div class="step-num">→</div>
        <div class="step-text"><strong>Then upgrade all together:</strong> all to 16 → all to 17 → continue progressively from there</div>
      </div>
    </div>
  </div>

  <!-- PURCHASING PRIORITIES -->
  <div class="card-parchment reveal">
    <h3 class="card-title">💰 Purchasing Priorities</h3>
    <p class="text-xs text-brown italic mb-3">If you plan to spend, buy in this order.</p>
    <div class="priority-list">
      <div class="priority-item">
        <div class="priority-rank r1">1</div>
        <div class="priority-body">
          <div class="priority-title">Season Pass</div>
          <div class="priority-desc">Most valuable for low spenders — best return per dollar in the game right now</div>
        </div>
      </div>
      <div class="priority-item">
        <div class="priority-rank r2">2</div>
        <div class="priority-body">
          <div class="priority-title">Weekly Pass</div>
          <div class="priority-desc">Good value for moderate spenders — compounds well over the full season</div>
        </div>
      </div>
      <div class="priority-item">
        <div class="priority-rank r3">3</div>
        <div class="priority-body">
          <div class="priority-title">Coffee Bean Packs</div>
          <div class="priority-desc">Speeds up resistance growth — only recommended for heavy spenders and resistance leaders</div>
        </div>
      </div>
    </div>
  </div>

</section>
`,w=`<section id="checklist" class="section">

  <!-- SPLASH HEADER -->
  <div class="sec-splash">
    <img src="/assets/illustrations/coffee-mug.png" alt="" class="sec-splash-img" />
    <div class="sec-splash-body">
      <div class="sec-splash-eyebrow">Alliance #1075 QueenRae · Season 5</div>
      <div class="sec-splash-title">Checklist &amp; First Weeks</div>
      <div class="sec-splash-sub">Everything you need to do before and after the season starts</div>
    </div>
  </div>

  <!-- PROGRESS STRIP -->
  <div class="cl-progress-wrap reveal">
    <div class="cl-progress-row">
      <span class="cl-progress-label">Your Progress</span>
      <span>
        <span class="cl-progress-count" data-cl-done>0</span>
        <span class="font-heading text-parchment/50 text-lg"> / </span>
        <span class="cl-progress-count" data-cl-total>14</span>
        <span class="cl-progress-pct ml-2 font-heading text-gold text-sm" data-cl-pct>0%</span>
      </span>
    </div>
    <div class="cl-progress-bar-track">
      <div class="cl-progress-bar-fill" data-cl-fill></div>
    </div>
  </div>

  <!-- PHASE I: PREP CHECKLIST -->
  <div class="card-parchment reveal">
    <div class="phase-head">
      <div class="phase-head-inner">
        <svg><use href="/assets/icons/icons.svg#i-star"/></svg>
        Phase I — Before the Season
      </div>
    </div>
    <p class="text-xs text-brown italic mb-3">Complete these tasks before the new season begins.</p>
    <div data-checklist>
      <div class="checklist-row" data-id="prep1">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-tp"/></svg></span>
        <input type="checkbox" id="prep1"/>
        <label for="prep1">Save TPs — no more free TP between servers</label>
      </div>
      <div class="checklist-row" data-id="prep2">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-hospital"/></svg></span>
        <input type="checkbox" id="prep2"/>
        <label for="prep2">Fill drill grounds &amp; hospitals</label>
      </div>
      <div class="checklist-row" data-id="prep3">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-star"/></svg></span>
        <input type="checkbox" id="prep3"/>
        <label for="prep3">Bring Venom to at least 5 stars, level 160 on the wall — he needs this to reach UR 5 stars on promotion</label>
      </div>
      <div class="checklist-row" data-id="prep4">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-phone-off"/></svg></span>
        <input type="checkbox" id="prep4"/>
        <label for="prep4">Turn off "shake to collect rss"</label>
      </div>
      <div class="checklist-row" data-id="prep5">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-radar"/></svg></span>
        <input type="checkbox" id="prep5"/>
        <label for="prep5">Stack radar missions — complete on Sunday before the start</label>
      </div>
    </div>
  </div>

  <!-- PHASE II: SEASON START -->
  <div class="card-parchment reveal">
    <div class="phase-head">
      <div class="phase-head-inner">
        <svg><use href="/assets/icons/icons.svg#i-star"/></svg>
        Phase II — When the Season Starts
      </div>
    </div>
    <p class="text-xs text-brown italic mb-3">Do these immediately on day one.</p>
    <div data-checklist>
      <div class="checklist-row" data-id="start1">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-pass"/></svg></span>
        <input type="checkbox" id="start1"/>
        <label for="start1">Buy Season / Weekly Passes early if you're spending</label>
      </div>
      <div class="checklist-row" data-id="start2">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-ticket"/></svg></span>
        <input type="checkbox" id="start2"/>
        <label for="start2">Use all Heroes' Return Tickets</label>
      </div>
      <div class="checklist-row" data-id="start3">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-brain"/></svg></span>
        <input type="checkbox" id="start3"/>
        <label for="start3">Redistribute Profession Skill Points for the new season</label>
      </div>
      <div class="checklist-row" data-id="start4">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-skull"/></svg></span>
        <input type="checkbox" id="start4"/>
        <label for="start4">Wait for the new map to load before killing your first Doom Walker — highest level you can, minimum 250</label>
      </div>
      <div class="checklist-row" data-id="start5">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-map"/></svg></span>
        <input type="checkbox" id="start5"/>
        <label for="start5">Wait for the new map to load before doing radar tasks</label>
      </div>
    </div>
  </div>

  <!-- PHASE III: FIRST WEEK -->
  <div class="card-parchment reveal">
    <div class="phase-head">
      <div class="phase-head-inner">
        <svg><use href="/assets/icons/icons.svg#i-star"/></svg>
        Phase III — The First Week
      </div>
    </div>
    <p class="text-xs text-brown italic mb-3">These set you up for the rest of the season.</p>
    <div data-checklist>
      <div class="checklist-row" data-id="week1">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-coffee"/></svg></span>
        <input type="checkbox" id="week1"/>
        <label for="week1">Upgrade your coffee factories before collecting coffee — don't leave beans sitting there</label>
      </div>
      <div class="checklist-row" data-id="week2">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-target"/></svg></span>
        <input type="checkbox" id="week2"/>
        <label for="week2">Look at the season pass goals and start working on them from day one</label>
      </div>
      <div class="checklist-row" data-id="week3">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-bank"/></svg></span>
        <input type="checkbox" id="week3"/>
        <label for="week3">Take part in every Bank Capture</label>
      </div>
      <div class="checklist-row" data-id="week4">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-handshake"/></svg></span>
        <input type="checkbox" id="week4"/>
        <label for="week4">Help resistance leaders — do not ask to be carried; they will carry you up to the level they can handle without losing troops</label>
      </div>
    </div>
  </div>

  <div class="text-center mt-2 mb-4">
    <button id="reset-checklist" class="font-heading uppercase tracking-wider bg-blood text-white px-6 py-2 rounded border-2 border-blood-bright shadow-stamp hover:bg-blood-bright transition-colors text-sm">
      Reset All Checkboxes
    </button>
  </div>

</section>
`,k=`<section id="coffee" class="section">

  <!-- SPLASH HEADER -->
  <div class="sec-splash">
    <img src="/assets/illustrations/coffee-mug.png" alt="" class="sec-splash-img" />
    <div class="sec-splash-body">
      <div class="sec-splash-eyebrow">Alliance #1075 QueenRae · Season 5</div>
      <div class="sec-splash-title">The Caffeine Institute</div>
      <div class="sec-splash-sub">Master the coffee system — it's your primary resistance engine</div>
      <div class="sec-splash-badge">☕ Your most important building</div>
    </div>
    <img src="/assets/illustrations/barista.png" alt="" class="sec-splash-img right" />
  </div>

  <!-- KEY STATS -->
  <div class="stat-strip reveal">
    <div class="stat-box">
      <div class="stat-num">12h</div>
      <div class="stat-label">Brew Time</div>
    </div>
    <div class="stat-box">
      <div class="stat-num">3</div>
      <div class="stat-label">Max Cups Stacked</div>
    </div>
    <div class="stat-box">
      <div class="stat-num">8h</div>
      <div class="stat-label">Buff Duration</div>
    </div>
    <div class="stat-box">
      <div class="stat-num">8h</div>
      <div class="stat-label">Brew w/ Barista</div>
    </div>
  </div>

  <!-- PRODUCTION -->
  <div class="card-dark reveal">
    <h3 class="card-title">☕ How it Works</h3>
    <ul class="guide-list">
      <li>The Caffeine Institute produces <strong>one cup of coffee every 12 hours</strong></li>
      <li>You can stack up to <strong>3 cups</strong> at the same time — don't let them overflow</li>
      <li>Drinking a cup <strong>activates the buff immediately</strong> — buffs last 8 hours</li>
      <li>You start with Black Coffee only — new recipes unlock as the season progresses</li>
    </ul>
  </div>

  <!-- BARISTA SKILL -->
  <div class="split-feature reveal">
    <div class="split-feature-img">
      <img src="/assets/illustrations/barista.png" alt="" />
    </div>
    <div class="split-feature-body">
      <h3 class="card-title">🧑‍🍳 Barista Skill — Get This First</h3>
      <ul class="guide-list">
        <li>Unlocks at Lv.0 → Lv.1 — costs very little</li>
        <li>Reduces brew time from <strong>12h down to 8h</strong></li>
        <li>With the 8h brew + 8h buff, you can <strong>always have a buff active</strong> — zero downtime</li>
        <li><strong>Buy all available recipes</strong> as soon as they appear — they are cheap and the resistance bonus compounds</li>
      </ul>
    </div>
  </div>

  <div class="ornament-divider" aria-hidden="true">
    <div class="line"></div>
    <svg><use href="/assets/icons/icons.svg#i-diamond"/></svg>
    <div class="line"></div>
  </div>

  <!-- RECIPE GRID -->
  <div class="card-parchment reveal">
    <h3 class="card-title">📖 Coffee Recipes</h3>
    <p class="text-xs text-brown italic mb-4">Each recipe adds resistance and may grant a secondary bonus. Unlock them in order as the season progresses.</p>
    <div class="recipe-grid">

      <div class="recipe-card">
        <span class="recipe-week">Start</span>
        <img src="/assets/illustrations/coffee-cups/black.png" alt="" />
        <h4>Black Coffee</h4>
        <div class="recipe-bonus"><span>+200 Resistance</span></div>
        <div class="recipe-how">Available from the start</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-drop">Drop</span>
        <img src="/assets/illustrations/coffee-cups/espresso.png" alt="" />
        <h4>Espresso</h4>
        <div class="recipe-bonus"><span>+200 Resistance</span><span>Construction +5%</span></div>
        <div class="recipe-how">Kill a Lv.20 Dancer Zombie</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-drop">Drop</span>
        <img src="/assets/illustrations/coffee-cups/specialty.png" alt="" />
        <h4>Specialty</h4>
        <div class="recipe-bonus"><span>+200 Resistance</span><span>Training +2%</span></div>
        <div class="recipe-how">Kill a Lv.40 Dancer Zombie</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-shop">Wk 2</span>
        <img src="/assets/illustrations/coffee-cups/cowboy.png" alt="" />
        <h4>Cowboy</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span></div>
        <div class="recipe-how">1,000 CG in shop</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-shop">Wk 3</span>
        <img src="/assets/illustrations/coffee-cups/latte.png" alt="" />
        <h4>Latte</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>Research +5%</span></div>
        <div class="recipe-how">3,000 CG in shop</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-shop">Wk 5</span>
        <img src="/assets/illustrations/coffee-cups/caramel.png" alt="" />
        <h4>Caramel</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>Skill Damage +5%</span></div>
        <div class="recipe-how">5,000 CG in shop</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-shop">Wk 6</span>
        <img src="/assets/illustrations/coffee-cups/mocha.png" alt="" />
        <h4>Mocha</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>March Speed +5%</span></div>
        <div class="recipe-how">5,000 CG in shop</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-drop">Drop</span>
        <img src="/assets/illustrations/coffee-cups/cream.png" alt="" />
        <h4>Cream</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>Output +5%</span></div>
        <div class="recipe-how">Lv.91+ Doom Elite drop</div>
      </div>

      <div class="recipe-card">
        <span class="recipe-week wk-drop">Wk 2+</span>
        <img src="/assets/illustrations/coffee-cups/truffle.png" alt="" />
        <h4>Truffle</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>vs. Monsters +5%</span></div>
        <div class="recipe-how">Plague Rooster drop</div>
      </div>

    </div>
  </div>

  <!-- SLOGAN BANNER -->
  <div class="slogan-banner reveal">
    <div class="slogan-text">Drink Coffee. Get Stronger.</div>
    <span class="slogan-sub">The Caffeine Institute · Alliance #1075 QueenRae · Season 5</span>
  </div>

</section>
`,x=`<section id="banks" class="section">

  <!-- SPLASH HEADER -->
  <div class="sec-splash">
    <img src="/assets/illustrations/bank.png" alt="" class="sec-splash-img" />
    <div class="sec-splash-body">
      <div class="sec-splash-eyebrow">Alliance #1075 QueenRae · Season 5</div>
      <div class="sec-splash-title">Bank Investment</div>
      <div class="sec-splash-sub">Finance Tycoon — Banks are the new Strongholds</div>
      <div class="sec-splash-badge">💰 Capture · Deposit · Defend · Plunder</div>
    </div>
  </div>

  <!-- DEPOSITS -->
  <div class="card-parchment reveal">
    <h3 class="card-title">🏦 How Deposits Work</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <ul class="guide-list">
        <li>Make <strong>3 CrystalGold deposits</strong> per day in Banks you hold</li>
        <li>Up to <strong>15 active deposits</strong> at once across all your banks</li>
        <li>Deposits last up to <strong>3 days</strong> (5 days later in the season)</li>
      </ul>
      <ul class="guide-list">
        <li>Longer deposit terms = <strong>higher interest rates</strong> but more risk</li>
        <li>If the bank is taken and plundered, <strong>you can lose part of your investment</strong></li>
        <li>Plan your deposit timing around the zone's safety window</li>
      </ul>
    </div>
  </div>

  <!-- NEUTRAL vs PRE-OWNED -->
  <div class="grid md:grid-cols-2 gap-4">
    <div class="card-parchment reveal">
      <h3 class="card-title"><span class="tag tag-neutral">Neutral Banks</span></h3>
      <ul class="guide-list">
        <li>Fixed rate: <strong>1,000 CrystalGolds</strong> per attack on the SH — max 12k per SH</li>
        <li>Send multiple squads to attack the SH to maximise your plundered amount</li>
        <li>You plunder from <strong>NPCs</strong> — no diplomacy concerns</li>
        <li>Top-ranked attackers receive a <strong>1-day buff</strong> that boosts your plunder amount</li>
      </ul>
    </div>
    <div class="card-parchment reveal">
      <h3 class="card-title"><span class="tag tag-owned">Pre-Owned Banks</span></h3>
      <ul class="guide-list">
        <li><strong>60-minute</strong> plunder window opens after capture</li>
        <li>Get various amounts of CrystalGolds depending on what's deposited</li>
        <li>You plunder from <strong>real players</strong> — diplomacy matters</li>
        <li>We may choose <em>not</em> to plunder after capturing, depending on allies and partnerships</li>
        <li>Never plunder a bank pre-owned by 1075 alliances — watch for instructions</li>
      </ul>
    </div>
  </div>

  <!-- ALERT -->
  <div class="alert-banner reveal">
    ⚠️ If we issue a no-plundering instruction, we strictly expect everyone in the alliance to respect it
  </div>

  <!-- DEPOSIT TIPS -->
  <div class="card-success reveal">
    <h3 class="card-title">💡 Smart Deposit Tips</h3>
    <div class="tip-grid">
      <div class="tip-card">
        <div class="tip-card-head">📅 First Two Weeks — Go Long</div>
        <div class="tip-card-body">The first two weeks are the safest. Use <strong>maximum-duration deposits</strong> to lock in the best interest rates while risk is low.</div>
      </div>
      <div class="tip-card">
        <div class="tip-card-head">⚠️ Near Other Warzones — Go Short</div>
        <div class="tip-card-body">Switch to <strong>3-day deposits</strong> for banks within reach of other warzones near the <strong>end of week 2</strong>.</div>
      </div>
      <div class="tip-card">
        <div class="tip-card-head">🔒 After a Capture — 60h Window</div>
        <div class="tip-card-body">After a Bank is captured there's a <strong>60-hour cooldown</strong>. 3-day deposits made right after are only exposed for the final 12 hours.</div>
      </div>
      <div class="tip-card">
        <div class="tip-card-head">📊 1-Day Deposits — Last Resort</div>
        <div class="tip-card-body"><strong>Best raw return</strong> per deposit but won't let you stack multiple investments at once. Use only when plunder risk is very high.</div>
      </div>
    </div>
  </div>

  <!-- MOTTO STAMP -->
  <div class="motto-stamp reveal">
    <span class="motto-word">Strategize</span>
    <span class="motto-sep">·</span>
    <span class="motto-word">Invest</span>
    <span class="motto-sep">·</span>
    <span class="motto-word">Protect</span>
    <span class="motto-sep">·</span>
    <span class="motto-word">Prosper</span>
  </div>

</section>
`,S=`<section id="trains" class="section">

  <!-- SPLASH HEADER -->
  <div class="sec-splash">
    <img src="/assets/illustrations/train-fortune.png" alt="" class="sec-splash-img" style="width: clamp(120px, 25vw, 220px);" />
    <div class="sec-splash-body">
      <div class="sec-splash-eyebrow">Alliance #1075 QueenRae · Season 5</div>
      <div class="sec-splash-title">The Fortune</div>
      <div class="sec-splash-sub">Railroad Tycoon — sell your Whiskey, earn CrystalGolds</div>
      <div class="sec-splash-badge">🚂 Personal train — not linked to the alliance train</div>
    </div>
  </div>

  <!-- INNER TABS -->
  <div class="inner-tab-bar" id="train-tabs">
    <button class="inner-tab active" data-inner="selling">⚖️ Selling Methods</button>
    <button class="inner-tab" data-inner="schedule">🕐 Train Schedule</button>
    <button class="inner-tab" data-inner="plunder">💀 Plundering</button>
  </div>

  <!-- SELLING METHODS -->
  <div data-inner-panel="selling">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="card-parchment reveal">
        <h3 class="card-title"><span class="tag tag-neutral">Consign</span></h3>
        <ul class="guide-list">
          <li><strong>Fixed prices</strong> — predictable income every time</li>
          <li>Each station buys <strong>up to 10 whiskeys</strong> from you per train</li>
          <li>Up to <strong>100 whiskeys/day</strong> total across all stations</li>
          <li>Simple and safe — good baseline strategy</li>
        </ul>
      </div>
      <div class="card-parchment reveal">
        <h3 class="card-title"><span class="tag tag-warn">Premium Sale</span> <span class="text-xs text-brown font-body normal-case tracking-normal">(Week 3+)</span></h3>
        <ul class="guide-list">
          <li><strong>You set the price</strong> — each station buys the cheapest available first</li>
          <li>Each station has a maximum amount it can buy per train</li>
          <li>Up to <strong>200 whiskeys/day</strong> — double Consign capacity</li>
          <li>Use the <strong>Trade Logs</strong> to check each station's planned purchase quantities before setting price</li>
        </ul>
      </div>
    </div>

    <div class="card-parchment reveal">
      <h3 class="card-title">📋 Trade Logs — Station Purchase Limits</h3>
      <p class="text-xs text-brown italic mb-3">Use these to set your Premium Sale price correctly — undercut the plan to sell out, or price higher for better margins.</p>
      <div class="overflow-x-auto">
        <table class="w-full text-sm min-w-[280px]">
          <thead>
            <tr class="bg-brown text-parchment font-heading uppercase tracking-wider text-xs">
              <th class="text-left px-3 py-2 rounded-tl">Station</th>
              <th class="text-left px-3 py-2">Plan (Whiskeys)</th>
              <th class="text-left px-3 py-2 rounded-tr">Max Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr class="even:bg-brown/10"><td class="px-3 py-2 border-b border-border font-heading font-bold">A</td><td class="px-3 py-2 border-b border-border">80</td><td class="px-3 py-2 border-b border-border">120</td></tr>
            <tr class="even:bg-brown/10"><td class="px-3 py-2 border-b border-border font-heading font-bold">B</td><td class="px-3 py-2 border-b border-border">60</td><td class="px-3 py-2 border-b border-border">150</td></tr>
            <tr class="even:bg-brown/10"><td class="px-3 py-2 border-b border-border font-heading font-bold">C</td><td class="px-3 py-2 border-b border-border">40</td><td class="px-3 py-2 border-b border-border">100</td></tr>
            <tr class="even:bg-brown/10"><td class="px-3 py-2 font-heading font-bold">D</td><td class="px-3 py-2">50</td><td class="px-3 py-2">130</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-warning reveal">
      <h3 class="card-title">⚠️ 50% of What You Send Can Be Plundered</h3>
      <p class="mb-3">Split your whiskey across <strong>2 or more trains</strong> to make each load less attractive to robbers. A smaller load = a smaller target.</p>
      <div class="grid grid-cols-2 gap-3 mt-2">
        <div class="rounded border-2 border-blood-bright/40 bg-black/20 p-3 text-center">
          <div class="font-heading font-bold text-blood-bright text-sm uppercase tracking-wider mb-1">❌ Don't</div>
          <div class="text-parchment text-sm">Load <strong>all your whiskey</strong> on one train</div>
        </div>
        <div class="rounded border-2 border-forest/40 bg-black/20 p-3 text-center">
          <div class="font-heading font-bold text-green-400 text-sm uppercase tracking-wider mb-1">✅ Do</div>
          <div class="text-parchment text-sm">Split across <strong>2–3 trains</strong> per day</div>
        </div>
      </div>
    </div>
  </div>

  <!-- TRAIN SCHEDULE -->
  <div data-inner-panel="schedule" hidden>
    <div class="card-dark reveal">
      <h3 class="card-title">🕐 6 Trains Per Day — Every 4 Hours</h3>
      <p class="text-parchment text-sm mb-4 opacity-85">Trains depart every 4 hours starting at the daily reset. Plan your whiskey distribution to catch multiple departures.</p>
      <div class="train-sched">
        <div class="train-sched-track">

          <div class="train-node">
            <img src="/assets/illustrations/train-fortune.png" alt="" />
            <div class="train-node-label">Reset</div>
            <div class="train-node-num">Train 1</div>
          </div>

          <div class="train-arrow">
            <div class="train-arrow-inner">
              <div class="train-arrow-line"></div>
              <div class="train-arrow-head">▶</div>
            </div>
            <div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div>
          </div>

          <div class="train-node">
            <img src="/assets/illustrations/train-fortune.png" alt="" />
            <div class="train-node-label">+4h</div>
            <div class="train-node-num">Train 2</div>
          </div>

          <div class="train-arrow">
            <div class="train-arrow-inner">
              <div class="train-arrow-line"></div>
              <div class="train-arrow-head">▶</div>
            </div>
            <div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div>
          </div>

          <div class="train-node">
            <img src="/assets/illustrations/train-fortune.png" alt="" />
            <div class="train-node-label">+8h</div>
            <div class="train-node-num">Train 3</div>
          </div>

          <div class="train-arrow">
            <div class="train-arrow-inner">
              <div class="train-arrow-line"></div>
              <div class="train-arrow-head">▶</div>
            </div>
            <div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div>
          </div>

          <div class="train-node">
            <img src="/assets/illustrations/train-fortune.png" alt="" />
            <div class="train-node-label">+12h</div>
            <div class="train-node-num">Train 4</div>
          </div>

          <div class="train-arrow">
            <div class="train-arrow-inner">
              <div class="train-arrow-line"></div>
              <div class="train-arrow-head">▶</div>
            </div>
            <div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div>
          </div>

          <div class="train-node">
            <img src="/assets/illustrations/train-fortune.png" alt="" />
            <div class="train-node-label">+16h</div>
            <div class="train-node-num">Train 5</div>
          </div>

          <div class="train-arrow">
            <div class="train-arrow-inner">
              <div class="train-arrow-line"></div>
              <div class="train-arrow-head">▶</div>
            </div>
            <div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div>
          </div>

          <div class="train-node">
            <img src="/assets/illustrations/train-fortune.png" alt="" />
            <div class="train-node-label">+20h</div>
            <div class="train-node-num">Train 6</div>
          </div>

        </div>
      </div>
      <div class="train-sched-summary">= 6 Trains Total Per Day</div>
    </div>
  </div>

  <!-- PLUNDERING -->
  <div data-inner-panel="plunder" hidden>
    <div class="card-parchment reveal">
      <h3 class="card-title">⚔️ Plundering Rules</h3>
      <ul class="guide-list">
        <li><strong>3 plunder attempts</strong> per day — use them wisely</li>
        <li><strong>3 free target refreshes</strong> per day; after that it costs CrystalGolds to find new targets</li>
        <li>A successful plunder steals <strong>10% of the target's goods</strong></li>
        <li>Unused attempts carry over — you can accumulate up to <strong>7 total attempts</strong></li>
        <li>If you've used your free refreshes, <strong>wait until the next day</strong> rather than spending CG on a target you can't beat</li>
      </ul>
    </div>
  </div>

</section>
`,E="/lws5/";function p(n){return n.replace(/(["'(])\/assets\//g,`$1${E}assets/`)}const h={overview:p(y),checklist:p(w),coffee:p(k),banks:p(x),trains:p(S)};function I(n){const a=document.getElementById("app"),r=document.querySelectorAll("#main-nav button");function e(i){const c=h[i]??h.overview;a.innerHTML=c,r.forEach(v=>{const l=v.dataset.target===i;v.classList.toggle("active",l),v.setAttribute("aria-selected",String(l))}),n(i,a)}function s(i,c=!0){c&&history.pushState(null,"",`#${i}`);const v=document;v.startViewTransition?v.startViewTransition(()=>e(i)):e(i),window.scrollTo({top:0,behavior:"smooth"})}r.forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.target;c&&s(c)})}),window.addEventListener("popstate",()=>{const i=location.hash.slice(1),c=h[i]?i:"overview";e(c),window.scrollTo({top:0,behavior:"instant"})});const t=location.hash.slice(1);e(h[t]?t:"overview")}const g="lws5_";function T(n){const a=n.querySelectorAll(".checklist-row"),r=n.querySelector("[data-cl-done]"),e=n.querySelector("[data-cl-total]"),s=n.querySelector("[data-cl-fill]"),t=n.querySelector("[data-cl-pct]"),i=a.length;e&&(e.textContent=String(i));function c(){const l=n.querySelectorAll(".checklist-row input:checked").length;r&&(r.textContent=String(l)),t&&(t.textContent=i>0?Math.round(l/i*100)+"%":"0%"),s&&(s.style.width=i>0?`${l/i*100}%`:"0%")}a.forEach(l=>{const o=l.dataset.id;if(!o)return;const d=l.querySelector("input[type=checkbox]");if(!d)return;localStorage.getItem(g+o)==="true"&&(d.checked=!0,l.classList.add("checked"));const u=()=>{d.checked=!d.checked,m(o,d.checked,l),c()};l.addEventListener("click",f=>{f.target===d||f.target.tagName==="LABEL"||u()}),d.addEventListener("change",()=>{m(o,d.checked,l),c()})});const v=n.querySelector("#reset-checklist");v&&v.addEventListener("click",()=>{a.forEach(l=>{const o=l.dataset.id,d=l.querySelector("input[type=checkbox]");!d||!o||(d.checked=!1,l.classList.remove("checked"),localStorage.removeItem(g+o))}),c()}),c()}function m(n,a,r){r.classList.toggle("checked",a),localStorage.setItem(g+n,String(a))}function C(n){const a=n.querySelectorAll(".inner-tab");a.length!==0&&a.forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.inner;e&&(a.forEach(s=>s.classList.toggle("active",s===r)),n.querySelectorAll("[data-inner-panel]").forEach(s=>{const t=s.dataset.innerPanel===e;s.hidden=!t}))})})}function P(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=Array.from(document.querySelectorAll(".parallax"));if(n.length===0)return;let a=!1;function r(){const s=window.scrollY;for(const t of n){const i=parseFloat(t.dataset.speed??"0.5"),c=s*(1-i);t.style.transform=`translate3d(0, ${c.toFixed(1)}px, 0)`}a=!1}function e(){a||(a=!0,requestAnimationFrame(r))}window.addEventListener("scroll",e,{passive:!0}),r()}function A(){const n=document.getElementById("progress-bar");if(!n)return;let a=!1;function r(){const e=document.documentElement,s=e.scrollHeight-e.clientHeight,t=s>0?e.scrollTop/s*100:0;n.style.width=t+"%",a=!1}window.addEventListener("scroll",()=>{a||(a=!0,requestAnimationFrame(r))},{passive:!0})}function R(n,a,r){var e;if(n instanceof Element)return[n];if(typeof n=="string"){let s=document;const t=(e=void 0)!==null&&e!==void 0?e:s.querySelectorAll(n);return t?Array.from(t):[]}return Array.from(n)}const L={some:0,all:1};function b(n,a,{root:r,margin:e,amount:s="some"}={}){const t=R(n),i=new WeakMap,c=l=>{l.forEach(o=>{const d=i.get(o.target);if(o.isIntersecting!==!!d)if(o.isIntersecting){const u=a(o);typeof u=="function"?i.set(o.target,u):v.unobserve(o.target)}else typeof d=="function"&&(d(o),i.delete(o.target))})},v=new IntersectionObserver(c,{root:r,rootMargin:e,threshold:typeof s=="number"?s:L[s]});return t.forEach(l=>v.observe(l)),()=>v.disconnect()}function F(n){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){n.querySelectorAll(".reveal").forEach(e=>e.classList.add("in-view"));return}n.querySelectorAll(".reveal").forEach((e,s)=>{e.style.transitionDelay=`${Math.min(s*.05,.3)}s`,b(e,()=>{e.classList.add("in-view")},{amount:.15})}),n.querySelectorAll(".recipe-card").forEach((e,s)=>{e.style.opacity="0",e.style.transform="translateY(16px)",e.style.transition=`opacity .45s cubic-bezier(.2,.7,.2,1) ${s*.04}s, transform .45s cubic-bezier(.2,.7,.2,1) ${s*.04}s`,b(e,()=>{e.style.opacity="1",e.style.transform="translateY(0)"},{amount:.2})})}A();P();I((n,a)=>{T(a),C(a),F(a)});
//# sourceMappingURL=index-DQdNX5IT.js.map
