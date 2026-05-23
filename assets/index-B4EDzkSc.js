(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const b=`<section id="overview" class="section">
  <h2 class="ribbon-title">General Guide</h2>

  <div class="card-dark callout-banner reveal">
    <div class="callout-rule"></div>
    <div class="callout-label">🔥 Main Priority — First Days</div>
    <div class="callout-headline">Coffee + Caffeine Institute</div>
    <div class="callout-sub">Focus on Coffee until your resistance is built up.</div>
  </div>

  <div class="ornament-divider" aria-hidden="true">
    <div class="line"></div>
    <svg><use href="/assets/icons/icons.svg#i-diamond"/></svg>
    <div class="line"></div>
  </div>

  <div class="card-parchment reveal">
    <h3 class="card-title">⚙️ Resources Overview</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
      <div class="text-center">
        <div class="resource-pill mx-auto"><svg><use href="/assets/icons/icons.svg#i-beans"/></svg> Coffee Beans</div>
        <p class="text-xs text-brown mt-1">= Stone ($4) — for Coffee Factories</p>
      </div>
      <div class="text-center">
        <div class="resource-pill mx-auto"><svg><use href="/assets/icons/icons.svg#i-coffee-r"/></svg> Coffee</div>
        <p class="text-xs text-brown mt-1">= Quartz ($4) — for Caffeine Institute</p>
      </div>
      <div class="text-center">
        <div class="resource-pill mx-auto"><svg><use href="/assets/icons/icons.svg#i-gold"/></svg> CrystalGold</div>
        <p class="text-xs text-brown mt-1">Magatama-like, buy season items</p>
      </div>
      <div class="text-center">
        <div class="resource-pill mx-auto"><svg><use href="/assets/icons/icons.svg#i-whiskey"/></svg> Whiskey <span class="tag tag-warn text-[0.55rem] ml-1">NEW</span></div>
        <p class="text-xs text-brown mt-1">Uncommon rss → CrystalGolds</p>
      </div>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-4">
    <div class="card-parchment reveal">
      <h3 class="card-title">🏭 Coffee Factory Unlocks</h3>
      <ul class="guide-list">
        <li><strong>1st Factory:</strong> Available from the start</li>
        <li><strong>2nd Factory:</strong> Unlocks when 1st reaches level 10</li>
        <li><strong>3rd &amp; 4th:</strong> Unlock at level 15 of the previous one</li>
        <li><strong>5th Factory:</strong> Requires the Season Weekly Pass</li>
      </ul>
    </div>
    <div class="card-parchment reveal">
      <h3 class="card-title">☕ Caffeine Institute</h3>
      <ul class="guide-list">
        <li>Upgrading increases your virus resistance</li>
        <li>Prepares coffee cups — drink to gain various 8h buffs</li>
        <li><strong>Tanker/Pilot/Missileer Bar:</strong> Requires Caffeine Institute level 60 — boosts damage for those hero types</li>
        <li>Tactic Cards are back — refer to last season's guide for daily farming</li>
      </ul>
    </div>
  </div>

  <div class="ornament-divider" aria-hidden="true">
    <div class="line"></div>
    <svg><use href="/assets/icons/icons.svg#i-diamond"/></svg>
    <div class="line"></div>
  </div>

  <div class="card-parchment reveal">
    <h3 class="card-title">📈 Coffee Factory Upgrade Strategy</h3>
    <div class="upgrade-steps">
      <div class="upgrade-step"><div class="step-num">1</div><div class="step-text">Level up Coffee Factory I to <strong>level 10</strong></div></div>
      <div class="upgrade-step"><div class="step-num">2</div><div class="step-text">Level up Coffee Factory II to <strong>level 5</strong></div></div>
      <div class="upgrade-step"><div class="step-num">3</div><div class="step-text">Level up Coffee Factory I to <strong>level 15</strong></div></div>
      <div class="upgrade-step"><div class="step-num">4</div><div class="step-text">Level up Coffee Factory II to <strong>level 15</strong></div></div>
      <div class="upgrade-step"><div class="step-num">5</div><div class="step-text">Level up Coffee Factory III to <strong>level 15</strong></div></div>
      <div class="upgrade-step"><div class="step-num">6</div><div class="step-text">Level up Coffee Factory IV to <strong>level 15</strong></div></div>
      <div class="upgrade-step"><div class="step-num">→</div><div class="step-text">Then upgrade <strong>all together</strong>: all to 16 → all to 17 → continue progressively</div></div>
    </div>
  </div>

  <div class="card-parchment reveal">
    <h3 class="card-title">💰 Purchasing Priorities</h3>
    <div class="space-y-2">
      <div class="flex gap-3 items-start py-2 border-b border-brown/20">
        <div class="flex items-center justify-center min-w-[2rem] h-8 rounded bg-gradient-to-b from-blood-bright to-blood text-white font-heading font-bold shadow-stamp">1</div>
        <div><strong>Season Pass</strong> — most valuable for low spenders</div>
      </div>
      <div class="flex gap-3 items-start py-2 border-b border-brown/20">
        <div class="flex items-center justify-center min-w-[2rem] h-8 rounded bg-gradient-to-b from-blood-bright to-blood text-white font-heading font-bold shadow-stamp">2</div>
        <div><strong>Weekly Pass</strong> — good for moderate spenders</div>
      </div>
      <div class="flex gap-3 items-start py-2">
        <div class="flex items-center justify-center min-w-[2rem] h-8 rounded bg-gradient-to-b from-blood-bright to-blood text-white font-heading font-bold shadow-stamp">3</div>
        <div><strong>Coffee Beans Packs</strong> — speed up resistance growth, only recommended for heavy spenders / resistance leaders</div>
      </div>
    </div>
  </div>
</section>
`,y=`<section id="checklist" class="section">
  <h2 class="ribbon-title">Checklist &amp; First Weeks</h2>

  <div class="card-parchment reveal">
    <h3 class="card-title">📋 Prep Checklist</h3>
    <p class="text-sm text-brown mb-3 italic">Tick off items as you complete them — progress is saved in your browser.</p>
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
        <label for="prep3">Bring Venom to at least 5 stars, level 160 on the wall, to have him UR 5 stars when promoting</label>
      </div>
      <div class="checklist-row" data-id="prep4">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-phone-off"/></svg></span>
        <input type="checkbox" id="prep4"/>
        <label for="prep4">Turn off "shake to collect rss"</label>
      </div>
      <div class="checklist-row" data-id="prep5">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-radar"/></svg></span>
        <input type="checkbox" id="prep5"/>
        <label for="prep5">Radar missions stacked on Sunday before the start</label>
      </div>
    </div>
  </div>

  <div class="card-parchment reveal">
    <h3 class="card-title">🌟 When the Season Starts</h3>
    <div data-checklist>
      <div class="checklist-row" data-id="start1">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-pass"/></svg></span>
        <input type="checkbox" id="start1"/>
        <label for="start1">Buy Season/Weekly Passes early (if spending)</label>
      </div>
      <div class="checklist-row" data-id="start2">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-ticket"/></svg></span>
        <input type="checkbox" id="start2"/>
        <label for="start2">Use all Heroes' Return Tickets</label>
      </div>
      <div class="checklist-row" data-id="start3">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-brain"/></svg></span>
        <input type="checkbox" id="start3"/>
        <label for="start3">Redistribute Profession Skill Points</label>
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

  <div class="card-parchment reveal">
    <h3 class="card-title">🏦 For the First Week</h3>
    <div data-checklist>
      <div class="checklist-row" data-id="week1">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-coffee"/></svg></span>
        <input type="checkbox" id="week1"/>
        <label for="week1">Upgrade your coffee factories before collecting coffee</label>
      </div>
      <div class="checklist-row" data-id="week2">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-target"/></svg></span>
        <input type="checkbox" id="week2"/>
        <label for="week2">Look at the season pass goals and start working on them</label>
      </div>
      <div class="checklist-row" data-id="week3">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-bank"/></svg></span>
        <input type="checkbox" id="week3"/>
        <label for="week3">Take part in every Bank Capture</label>
      </div>
      <div class="checklist-row" data-id="week4">
        <span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-handshake"/></svg></span>
        <input type="checkbox" id="week4"/>
        <label for="week4">Help resistance leaders — do not ask to be carried at the same level you are; they will carry you up to the level they can handle without losing troops</label>
      </div>
    </div>
  </div>

  <div class="text-center mt-6">
    <button id="reset-checklist" class="font-heading uppercase tracking-wider bg-blood text-white px-6 py-2 rounded border-2 border-blood-bright shadow-stamp hover:bg-blood-bright transition-colors">
      Reset All Checkboxes
    </button>
  </div>
</section>
`,k=`<section id="coffee" class="section">
  <h2 class="ribbon-title">The Caffeine Institute</h2>

  <div class="card-dark reveal flex items-center gap-4 flex-wrap">
    <img src="/assets/illustrations/coffee-mug.png" alt="" class="w-24 md:w-32 flex-shrink-0 drop-shadow-[0_0_16px_rgba(212,144,10,0.5)]" />
    <div class="flex-1 min-w-[200px]">
      <h3 class="card-title">☕ Production &amp; Cups</h3>
      <ul class="guide-list">
        <li>One cup of coffee every <strong>12 hours</strong></li>
        <li>Stack up to <strong>3 cups</strong> at the same time</li>
        <li>Coffee cup buffs last <strong>8 hours</strong> — activates when you drink</li>
      </ul>
    </div>
  </div>

  <div class="card-dark reveal flex items-center gap-4 flex-wrap">
    <img src="/assets/illustrations/barista.png" alt="" class="w-24 md:w-32 flex-shrink-0 drop-shadow-[0_0_16px_rgba(212,144,10,0.5)]" />
    <div class="flex-1 min-w-[200px]">
      <h3 class="card-title">🧑‍🍳 Barista Skill</h3>
      <ul class="guide-list">
        <li>Unlocks at skill level 1 (Lv.0 → 1)</li>
        <li>Reduces brewing time from 12h to <strong>8 hours</strong></li>
        <li>With Barista skill: buff lasts 8h = you can <strong>always have a buff</strong> active</li>
        <li>Buy available recipes — they are cheap and worth it</li>
      </ul>
    </div>
  </div>

  <div class="card-parchment reveal">
    <h3 class="card-title">📖 Coffee Recipes</h3>
    <div class="recipe-grid">
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/black.png" alt="" />
        <h4>Black Coffee</h4>
        <div class="recipe-bonus"><span>+200 Resistance</span></div>
        <div class="recipe-how">Available at start</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/espresso.png" alt="" />
        <h4>Espresso</h4>
        <div class="recipe-bonus"><span>+200 Resistance</span><span>Construction +5%</span></div>
        <div class="recipe-how">Kill a Lv.20 Dancer Zombie</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/specialty.png" alt="" />
        <h4>Specialty</h4>
        <div class="recipe-bonus"><span>+200 Resistance</span><span>Training +2%</span></div>
        <div class="recipe-how">Kill a Lv.40 Dancer Zombie</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/cowboy.png" alt="" />
        <h4>Cowboy</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span></div>
        <div class="recipe-how">1,000 CG in shop — Week 2</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/latte.png" alt="" />
        <h4>Latte</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>Research +5%</span></div>
        <div class="recipe-how">3,000 CG in shop — Week 3</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/caramel.png" alt="" />
        <h4>Caramel</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>Skill Damage +5%</span></div>
        <div class="recipe-how">5,000 CG in shop — Week 5</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/mocha.png" alt="" />
        <h4>Mocha</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>March Speed +5%</span></div>
        <div class="recipe-how">5,000 CG in shop — Week 6</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/cream.png" alt="" />
        <h4>Cream</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>Output +5%</span></div>
        <div class="recipe-how">Lv.91+ Doom Elite drop</div>
      </div>
      <div class="recipe-card">
        <img src="/assets/illustrations/coffee-cups/truffle.png" alt="" />
        <h4>Truffle</h4>
        <div class="recipe-bonus"><span>+500 Resistance</span><span>vs. Monsters +5%</span></div>
        <div class="recipe-how">Plague Rooster drop (Week 2+)</div>
      </div>
    </div>
  </div>
</section>
`,w=`<section id="banks" class="section">
  <h2 class="ribbon-title">Bank Investment / Finance Tycoon</h2>

  <div class="card-dark reveal flex items-center gap-4 flex-wrap">
    <img src="/assets/illustrations/bank.png" alt="" class="w-32 md:w-44 flex-shrink-0 drop-shadow-[0_0_16px_rgba(212,144,10,0.5)]" />
    <div class="flex-1 min-w-[200px] text-center md:text-left">
      <p class="font-display text-gold-light text-2xl md:text-3xl tracking-wider" style="text-shadow:2px 2px 0 #000;">Banks are the new Strongholds</p>
      <p class="text-parchment opacity-80 mt-2 text-sm">Capture, defend, deposit, plunder.</p>
    </div>
  </div>

  <div class="card-parchment reveal">
    <h3 class="card-title">🏦 Deposits</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <ul class="guide-list">
        <li>Make <strong>3 CrystalGold deposits</strong> per day in Banks you hold</li>
        <li>Up to <strong>15 active deposits</strong> at once</li>
        <li>Deposits last up to <strong>3 days</strong> (5 days later in the season)</li>
      </ul>
      <ul class="guide-list">
        <li>Longer deposit terms = higher interest rates but more risk exposure</li>
        <li>If the bank is taken and plundered, <strong>you can lose part of your investment</strong></li>
      </ul>
    </div>
  </div>

  <div class="grid md:grid-cols-2 gap-4">
    <div class="card-parchment reveal">
      <h3 class="card-title"><span class="tag tag-neutral">Neutral Banks</span></h3>
      <ul class="guide-list">
        <li>Fixed rate: <strong>1,000 CrystalGolds</strong> per attack on the SH / max 12k per SH</li>
        <li>Send multiple squads to attack the SH to maximise your plundered amount</li>
        <li>You plunder from <strong>NPCs</strong></li>
        <li>When you rank at the top for the Code, you receive a 1-day buff that increases your plunder amount</li>
      </ul>
    </div>
    <div class="card-parchment reveal">
      <h3 class="card-title"><span class="tag tag-owned">Pre-Owned Banks 🔒</span></h3>
      <ul class="guide-list">
        <li><strong>60-minute</strong> plunder window after capture</li>
        <li>Get various amounts of CrystalGolds depending on deposits in the bank</li>
        <li>You plunder from <strong>real players</strong></li>
        <li>We may choose <em>not</em> to plunder after a capture, based on allies and partnerships</li>
        <li>We will most likely ask players to <strong>never plunder a bank pre-owned by 1075 alliances</strong> — stay aware of upcoming instructions</li>
      </ul>
    </div>
  </div>

  <div class="alert-banner reveal">
    ⚠️ If we issue a no-plundering instruction, we strictly expect EVERYONE in the alliance to respect it
  </div>

  <div class="card-success reveal">
    <h3 class="card-title">💡 Tips for Bank Deposits</h3>
    <ul class="guide-list">
      <li><strong>First 2 weeks</strong> will be relatively safe — use maximum-duration deposits (best time for long-term deposits)</li>
      <li>Go back to <strong>3-day deposits</strong> for banks within reach of other warzones near the <strong>end of week 2</strong></li>
      <li>After a Bank is captured there is a <strong>60-hour cooldown</strong> — 3-day deposits made right after will only be vulnerable for the <strong>last 12 hours</strong></li>
      <li><strong>1-day deposits give the best return</strong> BUT they won't let you stack multiple investments (3-per-day limit) — not recommended unless there is a high chance of the bank being plundered</li>
    </ul>
  </div>
</section>
`,x=`<section id="trains" class="section">
  <h2 class="ribbon-title">The Train / Railroad Tycoon</h2>

  <div class="card-dark reveal flex items-center gap-4 flex-wrap">
    <img src="/assets/illustrations/train-fortune.png" alt="" class="w-40 md:w-56 flex-shrink-0 drop-shadow-[0_0_16px_rgba(212,144,10,0.5)]" />
    <div class="flex-1 min-w-[220px]">
      <h3 class="card-title">🚂 "The Fortune"</h3>
      <p class="text-parchment">A new personal train used to sell your whiskey and earn CrystalGolds.</p>
      <p class="text-gold-light mt-2 text-sm italic">Not linked to the alliance train.</p>
    </div>
  </div>

  <div class="flex flex-wrap gap-2 mb-3" id="train-tabs">
    <button class="inner-tab active" data-inner="selling">Selling Methods</button>
    <button class="inner-tab" data-inner="schedule">Train Schedule</button>
    <button class="inner-tab" data-inner="plunder">Plundering</button>
  </div>

  <div data-inner-panel="selling">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="card-parchment reveal">
        <h3 class="card-title"><span class="tag tag-neutral">Consign</span></h3>
        <ul class="guide-list">
          <li>Fixed prices</li>
          <li>Each station buys <strong>10 whiskeys</strong> from you</li>
          <li>Up to <strong>100 whiskeys/day</strong></li>
          <li>Simple and predictable income</li>
        </ul>
      </div>
      <div class="card-parchment reveal">
        <h3 class="card-title"><span class="tag tag-warn">Premium Sale</span> <span class="text-xs text-brown">(Week 3+)</span></h3>
        <ul class="guide-list">
          <li>You set the price</li>
          <li>Each station buys the cheapest whiskey first and has a maximum amount it can buy</li>
          <li>Up to <strong>200 whiskeys/day</strong></li>
          <li>Use the <strong>Trade Logs</strong> to identify each station's planned purchase quantities</li>
        </ul>
      </div>
    </div>

    <div class="card-parchment reveal">
      <h3 class="card-title">📋 Trade Logs — Station Limits</h3>
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-brown text-parchment font-heading uppercase tracking-wider text-xs">
            <th class="text-left px-3 py-2">Station</th>
            <th class="text-left px-3 py-2">Plan (Whiskeys)</th>
            <th class="text-left px-3 py-2">Limit (Max)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="even:bg-brown/10"><td class="px-3 py-2 border-b border-border">A</td><td class="px-3 py-2 border-b border-border">80</td><td class="px-3 py-2 border-b border-border">120</td></tr>
          <tr class="even:bg-brown/10"><td class="px-3 py-2 border-b border-border">B</td><td class="px-3 py-2 border-b border-border">60</td><td class="px-3 py-2 border-b border-border">150</td></tr>
          <tr class="even:bg-brown/10"><td class="px-3 py-2 border-b border-border">C</td><td class="px-3 py-2 border-b border-border">40</td><td class="px-3 py-2 border-b border-border">100</td></tr>
          <tr class="even:bg-brown/10"><td class="px-3 py-2">D</td><td class="px-3 py-2">50</td><td class="px-3 py-2">130</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card-warning reveal">
      <h3 class="card-title">⚠️ 50% of What You Send Can Be Plundered!</h3>
      <p class="mb-2">It's better to <strong>split your whiskey over 2 or more trains</strong> to make it less attractive for robbers.</p>
      <p class="text-sm">❌ <strong>DON'T:</strong> Send all your whiskey on one train<br/>
      ✅ <strong>DO:</strong> Split it across 2–3 trains</p>
    </div>
  </div>

  <div data-inner-panel="schedule" hidden>
    <div class="card-dark reveal">
      <h3 class="card-title">🕐 6 Trains Per Day</h3>
      <p class="text-parchment text-sm mb-3">Every 4 hours starting at reset. Plan your whiskey distribution accordingly.</p>
      <div class="train-timeline">
        <div class="train-stop">
          <img src="/assets/illustrations/train-fortune.png" alt="" />
          <div class="ts-label">Reset</div>
          <div class="ts-num">Train 1</div>
        </div>
        <div class="train-connector">+4h →</div>
        <div class="train-stop">
          <img src="/assets/illustrations/train-fortune.png" alt="" />
          <div class="ts-label">+4h</div>
          <div class="ts-num">Train 2</div>
        </div>
        <div class="train-connector">+4h →</div>
        <div class="train-stop">
          <img src="/assets/illustrations/train-fortune.png" alt="" />
          <div class="ts-label">+8h</div>
          <div class="ts-num">Train 3</div>
        </div>
        <div class="train-connector">+4h →</div>
        <div class="train-stop">
          <img src="/assets/illustrations/train-fortune.png" alt="" />
          <div class="ts-label">+12h</div>
          <div class="ts-num">Train 4</div>
        </div>
        <div class="train-connector">+4h →</div>
        <div class="train-stop">
          <img src="/assets/illustrations/train-fortune.png" alt="" />
          <div class="ts-label">+16h</div>
          <div class="ts-num">Train 5</div>
        </div>
        <div class="train-connector">+4h →</div>
        <div class="train-stop">
          <img src="/assets/illustrations/train-fortune.png" alt="" />
          <div class="ts-label">+20h</div>
          <div class="ts-num">Train 6</div>
        </div>
      </div>
    </div>
  </div>

  <div data-inner-panel="plunder" hidden>
    <div class="card-parchment reveal">
      <h3 class="card-title">⚔️ Train Plundering Rules</h3>
      <ul class="guide-list">
        <li><strong>3 plunder attempts</strong> per day</li>
        <li><strong>3 refreshes</strong> per day; after that, it costs CrystalGolds to search for new targets</li>
        <li>You steal <strong>10% of the goods</strong> per successful plunder</li>
        <li>Unused plunder attempts accumulate across days, up to a maximum of <strong>7 attempts</strong></li>
        <li>If you have used all free refreshes, it's better to <strong>wait until the next day</strong> rather than spending CrystalGolds on someone you can't beat</li>
      </ul>
    </div>
  </div>
</section>
`,C="/lws5/";function d(i){return i.replace(/(["'(])\/assets\//g,`$1${C}assets/`)}const g={overview:d(b),checklist:d(y),coffee:d(k),banks:d(w),trains:d(x)};function S(i){const t=document.getElementById("app"),a=document.querySelectorAll("#main-nav button");function e(n){const r=g[n]??g.overview;t.innerHTML=r,a.forEach(l=>{const c=l.dataset.target===n;l.classList.toggle("active",c),l.setAttribute("aria-selected",String(c))}),i(n,t)}function s(n){const r=document;r.startViewTransition?r.startViewTransition(()=>e(n)):e(n),window.scrollTo({top:0,behavior:"smooth"})}a.forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.target;r&&s(r)})}),e("overview")}const u="lws5_";function E(i){const t=i.querySelectorAll(".checklist-row");t.forEach(e=>{const s=e.dataset.id;if(!s)return;const n=e.querySelector("input[type=checkbox]");if(!n)return;localStorage.getItem(u+s)==="true"&&(n.checked=!0,e.classList.add("checked"));const l=()=>{n.checked=!n.checked,f(s,n.checked,e)};e.addEventListener("click",c=>{c.target===n||c.target.tagName==="LABEL"||l()}),n.addEventListener("change",()=>f(s,n.checked,e))});const a=i.querySelector("#reset-checklist");a&&a.addEventListener("click",()=>{t.forEach(e=>{const s=e.dataset.id,n=e.querySelector("input[type=checkbox]");!n||!s||(n.checked=!1,e.classList.remove("checked"),localStorage.removeItem(u+s))})})}function f(i,t,a){a.classList.toggle("checked",t),localStorage.setItem(u+i,String(t))}function T(i){const t=i.querySelectorAll(".inner-tab");t.length!==0&&t.forEach(a=>{a.addEventListener("click",()=>{const e=a.dataset.inner;e&&(t.forEach(s=>s.classList.toggle("active",s===a)),i.querySelectorAll("[data-inner-panel]").forEach(s=>{const n=s.dataset.innerPanel===e;s.hidden=!n}))})})}function L(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const i=Array.from(document.querySelectorAll(".parallax"));if(i.length===0)return;let t=!1;function a(){const s=window.scrollY;for(const n of i){const r=parseFloat(n.dataset.speed??"0.5"),l=s*(1-r);n.style.transform=`translate3d(0, ${l.toFixed(1)}px, 0)`}t=!1}function e(){t||(t=!0,requestAnimationFrame(a))}window.addEventListener("scroll",e,{passive:!0}),a()}function P(){const i=document.getElementById("progress-bar");if(!i)return;let t=!1;function a(){const e=document.documentElement,s=e.scrollHeight-e.clientHeight,n=s>0?e.scrollTop/s*100:0;i.style.width=n+"%",t=!1}window.addEventListener("scroll",()=>{t||(t=!0,requestAnimationFrame(a))},{passive:!0})}function I(i,t,a){var e;if(i instanceof Element)return[i];if(typeof i=="string"){let s=document;const n=(e=void 0)!==null&&e!==void 0?e:s.querySelectorAll(i);return n?Array.from(n):[]}return Array.from(i)}const B={some:0,all:1};function m(i,t,{root:a,margin:e,amount:s="some"}={}){const n=I(i),r=new WeakMap,l=p=>{p.forEach(o=>{const v=r.get(o.target);if(o.isIntersecting!==!!v)if(o.isIntersecting){const h=t(o);typeof h=="function"?r.set(o.target,h):c.unobserve(o.target)}else typeof v=="function"&&(v(o),r.delete(o.target))})},c=new IntersectionObserver(l,{root:a,rootMargin:e,threshold:typeof s=="number"?s:B[s]});return n.forEach(p=>c.observe(p)),()=>c.disconnect()}function F(i){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){i.querySelectorAll(".reveal").forEach(e=>e.classList.add("in-view"));return}i.querySelectorAll(".reveal").forEach((e,s)=>{e.style.transitionDelay=`${Math.min(s*.05,.3)}s`,m(e,()=>{e.classList.add("in-view")},{amount:.15})}),i.querySelectorAll(".recipe-card").forEach((e,s)=>{e.style.opacity="0",e.style.transform="translateY(16px)",e.style.transition=`opacity .45s cubic-bezier(.2,.7,.2,1) ${s*.04}s, transform .45s cubic-bezier(.2,.7,.2,1) ${s*.04}s`,m(e,()=>{e.style.opacity="1",e.style.transform="translateY(0)"},{amount:.2})})}P();L();S((i,t)=>{E(t),T(t),F(t)});
//# sourceMappingURL=index-B4EDzkSc.js.map
