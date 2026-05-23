(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const k=`<section id="overview" class="section poster-section">
  <article class="poster-frame overview-poster reveal" aria-labelledby="overview-title">
    <div class="poster-sky" aria-hidden="true">
      <img src="/assets/illustrations/saloon.png" alt="" class="poster-town-art poster-town-left" />
      <img src="/assets/illustrations/watchtower.png" alt="" class="poster-town-art poster-town-right" />
    </div>

    <header class="poster-masthead">
      <div class="alliance-plank">#1075 QueenRae</div>
      <img src="/assets/illustrations/longhorn-skull.png" alt="" class="masthead-skull" />
      <div class="wood-sign">
        <div class="plank-seams" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="sign-rivets" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="wood-sign-kicker">Last War</div>
        <h2 id="overview-title">Season 5</h2>
        <div class="wood-sign-sub">General Guide</div>
      </div>
    </header>

    <section class="hero-callout poster-panel torn-panel">
      <img src="/assets/illustrations/coffee-mug.png" alt="" class="callout-prop callout-coffee" />
      <div class="callout-copy">
        <div class="poster-eyebrow">Main priority in the first days</div>
        <h3>Coffee + Caffeine Institute</h3>
        <p>Build resistance first. Coffee comes before everything.</p>
      </div>
      <img src="/assets/illustrations/bank.png" alt="" class="callout-prop callout-bank" />
    </section>

    <section class="poster-panel resource-strip" aria-labelledby="resources-title">
      <div class="poster-strip-title" id="resources-title">
        <svg><use href="/assets/icons/icons.svg#i-diamond"/></svg>
        Resources Overview
      </div>
      <div class="resource-track" data-resource-picker>
        <button class="resource-token active" type="button" data-resource-token data-title="Coffee Beans" data-kicker="Season 5 Stone" data-replaces="Stone (S4)" data-use="Used to upgrade and unlock Coffee Factories." data-priority="Spend these before collecting Coffee when a factory breakpoint is close." aria-pressed="true">
          <img src="/assets/resources/coffee-beans.png" alt="" class="resource-art" />
          <strong>Coffee Beans</strong>
          <span>= Stone (S4)</span>
          <small>for Coffee Factories</small>
        </button>
        <button class="resource-token" type="button" data-resource-token data-title="Coffee" data-kicker="Institute Fuel" data-replaces="Quartz (S4)" data-use="Required to level the Caffeine Institute and build resistance." data-priority="Main early-season resource. Coffee progress comes before almost everything else." aria-pressed="false">
          <img src="/assets/resources/coffee.png" alt="" class="resource-art" />
          <strong>Coffee</strong>
          <span>= Quartz (S4)</span>
          <small>for Caffeine Institute</small>
        </button>
        <button class="resource-token" type="button" data-resource-token data-title="CrystalGold" data-kicker="Season Shop Currency" data-replaces="Similar to Magatama" data-use="Buys season resources, tactic cards, overlord resources, and shop progression." data-priority="Treat it as flexible power. Avoid wasting it before weekly shop priorities are clear." aria-pressed="false">
          <img src="/assets/resources/crystalgold.png" alt="" class="resource-art" />
          <strong>CrystalGold</strong>
          <span>similar to Magatama</span>
          <small>CrystalGold Shop: season rss, tactic cards, overlord rss</small>
        </button>
        <button class="resource-token" type="button" data-resource-token data-title="Whiskey" data-kicker="New Uncommon Resource" data-replaces="New in Season 5" data-use="Sold through The Fortune train to earn CrystalGolds." data-priority="Split shipments across trains because 50% of a load can be plundered." aria-pressed="false">
          <img src="/assets/resources/whiskey.png" alt="" class="resource-art" />
          <strong>Whiskey <em>(New)</em></strong>
          <span>uncommon rss</span>
          <small>used to buy CrystalGolds</small>
        </button>
      </div>
      <div class="resource-detail-plaque" data-resource-detail aria-live="polite">
        <div class="resource-detail-kicker" data-resource-kicker>Season 5 Stone</div>
        <h3 data-resource-title>Coffee Beans</h3>
        <div class="resource-detail-grid">
          <div><span>Replaces</span><strong data-resource-replaces>Stone (S4)</strong></div>
          <div><span>Use</span><strong data-resource-use>Used to upgrade and unlock Coffee Factories.</strong></div>
          <div><span>Priority</span><strong data-resource-priority>Spend these before collecting Coffee when a factory breakpoint is close.</strong></div>
        </div>
      </div>
    </section>

    <div class="poster-mosaic">
      <section class="poster-panel major-panel factories-panel" aria-labelledby="factories-title">
        <div class="poster-strip-title" id="factories-title">
          <svg><use href="/assets/icons/icons.svg#i-coffee"/></svg>
          Coffee Factories
        </div>
        <div class="fact-chip-row">
          <span>Produce</span>
          <span>Unlock</span>
          <span>Feed Institute</span>
        </div>
        <ul class="poster-list dense-list factory-copy">
          <li><strong>Produce Coffee</strong> required to level up your Caffeine Institute.</li>
          <li><strong>1st Factory:</strong> available from the start of Season 5.</li>
          <li><strong>2nd Factory:</strong> unlocks when Factory I reaches level 10.</li>
          <li><strong>3rd &amp; 4th Factories:</strong> unlock at level 15 of the previous Factory.</li>
          <li><strong>5th Factory:</strong> requires the Season Weekly Pass.</li>
        </ul>
        <img src="/assets/overview/coffee-factory.png" alt="" class="overview-art factory-art" />
        <div class="factory-row factory-map" aria-label="Coffee factory unlock path">
          <img src="/assets/illustrations/coffee-mug.png" alt="" />
          <div class="mini-factory"><b>I</b><small>Start</small></div>
          <div class="mini-factory"><b>II</b><small>I Lv.10</small></div>
          <div class="mini-factory"><b>III</b><small>II Lv.15</small></div>
          <div class="mini-factory"><b>IV</b><small>III Lv.15</small></div>
          <div class="mini-factory locked"><b>V</b><small>Weekly Pass</small></div>
        </div>
      </section>

      <aside class="poster-panel stack-panel institute-panel" aria-labelledby="institute-title">
        <div class="poster-strip-title small" id="institute-title">
          <svg><use href="/assets/icons/icons.svg#i-coffee-r"/></svg>
          Caffeine Institute
        </div>
        <img src="/assets/overview/caffeine-institute.png" alt="" class="overview-art institute-art" />
        <ul class="poster-list dense-list">
          <li>Upgrading the Institute increases your virus resistance.</li>
          <li>It prepares Coffee cups that grant different 8h buffs.</li>
          <li>Drink Coffee before big pushes, research, training, or rallies.</li>
        </ul>
        <div class="stat-token-grid">
          <div><svg><use href="/assets/icons/icons.svg#i-star"/></svg><strong>VR+</strong><span>Resistance</span></div>
          <div><svg><use href="/assets/icons/icons.svg#i-coffee-r"/></svg><strong>8h</strong><span>Buffs</span></div>
          <div><svg><use href="/assets/icons/icons.svg#i-target"/></svg><strong>Lv.60</strong><span>Bars</span></div>
        </div>
      </aside>

      <aside class="poster-panel stack-panel tactics-panel" aria-labelledby="bars-title">
        <div class="poster-strip-title small" id="bars-title">Tanker / Pilot / Missileer Bar</div>
        <img src="/assets/overview/hero-shields.png" alt="" class="overview-art shields-art" />
        <ul class="poster-list dense-list">
          <li><strong>Unlock requirement:</strong> Caffeine Institute level 60.</li>
          <li>Boosts damage caused by the matching hero type.</li>
          <li>Choose the bar that matches your strongest march first.</li>
        </ul>
        <img src="/assets/overview/tactic-cards.png" alt="" class="overview-art tactic-art" />
        <p>Tactic Cards are back. Farm them every day and use last season's guide for the route.</p>
      </aside>

      <section class="poster-panel major-panel strategy-panel" aria-labelledby="strategy-title">
        <div class="poster-strip-title" id="strategy-title">Upgrade Strategy</div>
        <div class="strategy-route">
          <div><b>1</b><span>Factory I to 10</span></div>
          <div><b>2</b><span>Factory II to 5</span></div>
          <div><b>3</b><span>Factory I to 15</span></div>
          <div><b>4</b><span>Factory II to 15</span></div>
          <div><b>5</b><span>Factory III to 15</span></div>
          <div><b>6</b><span>Factory IV to 15</span></div>
        </div>
        <div class="green-ribbon">Then upgrade all together</div>
        <div class="level-route">
          <span>All Lv.16</span>
          <i>→</i>
          <span>All Lv.17</span>
          <i>→</i>
          <span>Progress evenly</span>
        </div>
        <p class="poster-mini-note">Do not collect Coffee before upgrading factories when you are close to the next breakpoint.</p>
      </section>

      <section class="poster-panel purchasing-panel" aria-labelledby="purchase-title">
        <div class="poster-strip-title" id="purchase-title">Purchasing Priorities</div>
        <img src="/assets/overview/purchasing-props.png" alt="" class="overview-art purchasing-art" />
        <div class="medal-list">
          <div><b>1</b><span><strong>Season Pass</strong>Most valuable for low spenders.</span></div>
          <div><b>2</b><span><strong>Weekly Pass</strong>Good for moderate spenders and unlocks the 5th Factory.</span></div>
          <div><b>3</b><span><strong>Coffee Bean Packs</strong>Only recommended for heavy spenders or resistance leaders.</span></div>
        </div>
        <p class="poster-mini-note">If you plan to spend, buy progression first. Cosmetic or low-yield packs can wait.</p>
        <div class="poster-cowboy" aria-hidden="true"></div>
      </section>
    </div>
  </article>
</section>
`,y=`<section id="checklist" class="section poster-section">
  <article class="poster-frame checklist-poster reveal" aria-labelledby="checklist-title">
    <div class="poster-sky" aria-hidden="true">
      <img src="/assets/illustrations/saloon.png" alt="" class="poster-town-art poster-town-left" />
      <img src="/assets/illustrations/watchtower.png" alt="" class="poster-town-art poster-town-right" />
    </div>

    <header class="poster-masthead compact">
      <div class="alliance-plank">#1075 QueenRae</div>
      <img src="/assets/illustrations/longhorn-skull.png" alt="" class="masthead-skull" />
      <div class="wood-sign">
        <div class="plank-seams" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="sign-rivets" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="wood-sign-kicker">Last War</div>
        <h2 id="checklist-title">Season 5</h2>
        <div class="wood-sign-sub">Checklist &amp; First Weeks</div>
      </div>
    </header>

    <section class="poster-panel checklist-hero">
      <div class="poster-strip-title">Prep Checklist</div>
      <img src="/assets/checklist/clipboard-map.png" alt="" class="checklist-clipboard-art" />
      <ul class="poster-list dense-list hero-rules">
        <li><strong>Do prep before reset.</strong> The opening hours are for map unlocks, resistance, and Bank timing.</li>
        <li><strong>Do not spend resources blindly.</strong> Wait for the season systems to load before major actions.</li>
      </ul>
      <div class="cl-progress-wrap poster-progress reveal">
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
    </section>

    <div class="poster-mosaic checklist-grid">
      <section class="poster-panel checklist-card reveal">
        <div class="poster-strip-title">Before the Season</div>
        <div data-checklist>
          <div class="checklist-row" data-id="prep1"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-tp"/></svg></span><input type="checkbox" id="prep1"/><label for="prep1"><strong>Save TPs</strong><small>No more free TP between servers</small></label></div>
          <div class="checklist-row" data-id="prep2"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-hospital"/></svg></span><input type="checkbox" id="prep2"/><label for="prep2"><strong>Fill troops</strong><small>Drill grounds &amp; hospitals</small></label></div>
          <div class="checklist-row" data-id="prep3"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-star"/></svg></span><input type="checkbox" id="prep3"/><label for="prep3"><strong>Prep Venom</strong><small>5 stars, level 160 on wall</small></label></div>
          <div class="checklist-row" data-id="prep4"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-phone-off"/></svg></span><input type="checkbox" id="prep4"/><label for="prep4"><strong>Disable shake rss</strong><small>Turn off shake to collect</small></label></div>
          <div class="checklist-row" data-id="prep5"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-radar"/></svg></span><input type="checkbox" id="prep5"/><label for="prep5"><strong>Stack radar</strong><small>Complete Sunday before start</small></label></div>
        </div>
      </section>

      <section class="poster-panel checklist-card reveal">
        <div class="poster-strip-title">When It Starts</div>
        <div data-checklist>
          <div class="checklist-row" data-id="start1"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-pass"/></svg></span><input type="checkbox" id="start1"/><label for="start1"><strong>Buy passes early</strong><small>Season / Weekly if spending</small></label></div>
          <div class="checklist-row" data-id="start2"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-ticket"/></svg></span><input type="checkbox" id="start2"/><label for="start2"><strong>Use return tickets</strong><small>All Heroes' Return Tickets</small></label></div>
          <div class="checklist-row" data-id="start3"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-brain"/></svg></span><input type="checkbox" id="start3"/><label for="start3"><strong>Reset profession</strong><small>Redistribute skill points</small></label></div>
          <div class="checklist-row" data-id="start4"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-skull"/></svg></span><input type="checkbox" id="start4"/><label for="start4"><strong>Wait for new map</strong><small>Then kill highest Doom Walker, min 250</small></label></div>
          <div class="checklist-row" data-id="start5"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-map"/></svg></span><input type="checkbox" id="start5"/><label for="start5"><strong>Do radar after map</strong><small>Let season map load first</small></label></div>
        </div>
      </section>

      <section class="poster-panel checklist-card wide reveal">
        <div class="poster-strip-title">First Week</div>
        <img src="/assets/checklist/clipboard-map.png" alt="" class="panel-corner-art checklist-map-prop" />
        <div data-checklist>
          <div class="checklist-row" data-id="week1"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-coffee"/></svg></span><input type="checkbox" id="week1"/><label for="week1"><strong>Upgrade factories first</strong><small>Before collecting coffee</small></label></div>
          <div class="checklist-row" data-id="week2"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-target"/></svg></span><input type="checkbox" id="week2"/><label for="week2"><strong>Start pass goals</strong><small>Work on them from day one</small></label></div>
          <div class="checklist-row" data-id="week3"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-bank"/></svg></span><input type="checkbox" id="week3"/><label for="week3"><strong>Join Bank Captures</strong><small>Participate every time</small></label></div>
          <div class="checklist-row" data-id="week4"><span class="check-icon-circle"><svg><use href="/assets/icons/icons.svg#i-handshake"/></svg></span><input type="checkbox" id="week4"/><label for="week4"><strong>Support resistance leaders</strong><small>Lighten their burden; do not demand carries</small></label></div>
        </div>
      </section>
    </div>

    <div class="text-center mt-4">
      <button id="reset-checklist" class="font-heading uppercase tracking-wider bg-blood text-white px-6 py-2 rounded border-2 border-blood-bright shadow-stamp hover:bg-blood-bright transition-colors text-sm">
        Reset All Checkboxes
      </button>
    </div>
  </article>
</section>
`,w=`<section id="coffee" class="section poster-section">
  <article class="poster-frame coffee-poster reveal" aria-labelledby="coffee-title">
    <div class="poster-sky" aria-hidden="true">
      <img src="/assets/illustrations/watchtower.png" alt="" class="poster-town-art poster-town-left" />
      <img src="/assets/illustrations/train-fortune.png" alt="" class="poster-train-bg" />
    </div>

    <header class="poster-masthead compact">
      <div class="alliance-plank">#1075 QueenRae</div>
      <img src="/assets/illustrations/coffee-mug.png" alt="" class="masthead-skull coffee-emblem" />
      <div class="wood-sign">
        <div class="plank-seams" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="sign-rivets" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="wood-sign-kicker">The Caffeine</div>
        <h2 id="coffee-title">Institute</h2>
        <div class="wood-sign-sub">Coffee Recipes</div>
      </div>
    </header>

    <section class="poster-panel coffee-system">
      <img src="/assets/coffee/barista-skill.png" alt="" class="coffee-system-cup barista-skill-art" />
      <ul class="poster-list dense-list coffee-rules">
        <li><strong>Produces one cup every 12h.</strong> You can stack up to 3 cups at once.</li>
        <li><strong>Barista lowers brewing to 8h.</strong> With 8h buffs, this lets you maintain uptime.</li>
        <li><strong>Early season starts with Black Coffee.</strong> Recipes unlock through drops and shop weeks.</li>
      </ul>
      <div class="coffee-facts">
        <div><b>12h</b><span>Base brew</span></div>
        <div><b>3</b><span>Cups stacked</span></div>
        <div><b>8h</b><span>Buff duration</span></div>
        <div><b>8h</b><span>With Barista</span></div>
      </div>
      <div class="poster-note">
        <strong>Barista Skill</strong>
        <span>Lv.0 to 1 cuts brewing to 8h. Keep one buff active at all times.</span>
      </div>
    </section>

    <section class="poster-panel recipe-poster-panel reveal">
      <div class="poster-strip-title">List of Recipes</div>
      <div class="recipe-grid recipe-grid-poster">
        <div class="recipe-card"><span class="recipe-week">Start</span><img src="/assets/illustrations/coffee-cups/black.png" alt="" /><h4>Black Coffee</h4><div class="recipe-bonus"><span>+200 Resistance</span></div><div class="recipe-how">Available at start</div></div>
        <div class="recipe-card"><span class="recipe-week wk-drop">Lv.20</span><img src="/assets/illustrations/coffee-cups/espresso.png" alt="" /><h4>Espresso</h4><div class="recipe-bonus"><span>+200 Resistance</span><span>Construction +5%</span></div><div class="recipe-how">Dancer Zombie drop</div></div>
        <div class="recipe-card"><span class="recipe-week wk-drop">Lv.40</span><img src="/assets/illustrations/coffee-cups/specialty.png" alt="" /><h4>Specialty</h4><div class="recipe-bonus"><span>+200 Resistance</span><span>Training +2%</span></div><div class="recipe-how">Dancer Zombie drop</div></div>
        <div class="recipe-card"><span class="recipe-week wk-shop">Wk 2</span><img src="/assets/illustrations/coffee-cups/cowboy.png" alt="" /><h4>Cowboy</h4><div class="recipe-bonus"><span>+500 Resistance</span></div><div class="recipe-how">1,000 CrystalGolds</div></div>
        <div class="recipe-card"><span class="recipe-week wk-shop">Wk 3</span><img src="/assets/illustrations/coffee-cups/latte.png" alt="" /><h4>Latte</h4><div class="recipe-bonus"><span>+500 Resistance</span><span>Research +5%</span></div><div class="recipe-how">3,000 CrystalGolds</div></div>
        <div class="recipe-card"><span class="recipe-week wk-shop">Wk 5</span><img src="/assets/illustrations/coffee-cups/caramel.png" alt="" /><h4>Caramel</h4><div class="recipe-bonus"><span>+500 Resistance</span><span>Skill Damage +5%</span></div><div class="recipe-how">5,000 CrystalGolds</div></div>
        <div class="recipe-card"><span class="recipe-week wk-shop">Wk 6</span><img src="/assets/illustrations/coffee-cups/mocha.png" alt="" /><h4>Mocha</h4><div class="recipe-bonus"><span>+500 Resistance</span><span>March Speed +5%</span></div><div class="recipe-how">5,000 CrystalGolds</div></div>
        <div class="recipe-card"><span class="recipe-week wk-drop">Drop</span><img src="/assets/illustrations/coffee-cups/cream.png" alt="" /><h4>Cream</h4><div class="recipe-bonus"><span>+500 Resistance</span><span>Output +5%</span></div><div class="recipe-how">Lv.91+ Doom Elite</div></div>
        <div class="recipe-card"><span class="recipe-week wk-drop">Wk 2+</span><img src="/assets/illustrations/coffee-cups/truffle.png" alt="" /><h4>Truffle</h4><div class="recipe-bonus"><span>+500 Resistance</span><span>vs. Monsters +5%</span></div><div class="recipe-how">Plague Rooster drop</div></div>
      </div>
    </section>

    <div class="slogan-banner reveal">
      <div class="slogan-text">Drink Coffee. Get Stronger.</div>
      <span class="slogan-sub">Buy available recipes — the bonuses compound all season.</span>
    </div>
  </article>
</section>
`,S=`<section id="banks" class="section poster-section">
  <article class="poster-frame bank-poster reveal" aria-labelledby="banks-title">
    <div class="poster-sky" aria-hidden="true">
      <img src="/assets/illustrations/watchtower.png" alt="" class="poster-town-art poster-town-left" />
      <img src="/assets/illustrations/bank.png" alt="" class="poster-bank-bg" />
    </div>

    <header class="poster-masthead compact">
      <div class="alliance-plank">#1075 QueenRae</div>
      <img src="/assets/illustrations/longhorn-skull.png" alt="" class="masthead-skull" />
      <div class="wood-sign">
        <div class="plank-seams" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="sign-rivets" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="wood-sign-kicker">Bank Investment</div>
        <h2 id="banks-title">Finance Tycoon</h2>
        <div class="wood-sign-sub">Banks are the new Strongholds</div>
      </div>
    </header>

    <section class="poster-panel bank-hero-panel">
      <img src="/assets/banks/vault-plunder.png" alt="" class="bank-hero-art vault-hero-art" />
      <ul class="poster-list dense-list bank-rules">
        <li><strong>Banks are the new Strongholds.</strong> Hold them, deposit CrystalGold, and protect alliance value.</li>
        <li><strong>Longer deposits pay better.</strong> They also become more painful if the Bank is captured.</li>
        <li><strong>Plunder follows diplomacy.</strong> If leadership issues instructions, follow them exactly.</li>
      </ul>
      <div class="bank-token-row">
        <div><b>3</b><span>Deposits / day</span></div>
        <div><b>15</b><span>Active deposits</span></div>
        <div><b>3d</b><span>Base term</span></div>
        <div><b>Risk</b><span>Plunder exposure</span></div>
      </div>
    </section>

    <div class="poster-mosaic bank-grid">
      <section class="poster-panel reveal">
        <div class="poster-strip-title">Deposits</div>
        <img src="/assets/illustrations/bank.png" alt="" class="panel-corner-art bank-deposit-prop" />
        <ul class="poster-list compact-list">
          <li><strong>3 CrystalGold deposits</strong> per day in Banks we hold</li>
          <li><strong>15 active deposits</strong> maximum</li>
          <li><strong>Up to 3 days</strong> early season, later extending to 5 days</li>
          <li>Longer terms pay more but carry more risk</li>
          <li>If the Bank is taken and plundered, you can lose part of it</li>
        </ul>
      </section>

      <section class="poster-panel reveal">
        <div class="poster-strip-title">Plunder</div>
        <div class="vault-scene" aria-hidden="true">
          <img src="/assets/banks/vault-plunder.png" alt="" />
        </div>
        <div class="split-tokens">
          <div><span class="tag tag-neutral">Neutral</span><b>NPCs</b><small>1,000 CG per SH attack · max 12k</small></div>
          <div><span class="tag tag-owned">Pre-Owned</span><b>Players</b><small>60-minute window after capture</small></div>
        </div>
      </section>

      <section class="poster-panel alert-panel wide reveal">
        <div class="warning-icon">!</div>
        <strong>No-plundering instruction = obey it.</strong>
        <span>We expect every alliance member to respect diplomacy calls.</span>
      </section>

      <section class="poster-panel wide reveal">
        <div class="poster-strip-title">Smart Deposit Tips</div>
        <div class="tip-grid poster-tip-grid">
          <div class="tip-card"><div class="tip-card-head">First 2 weeks</div><div class="tip-card-body">Safest window. Use maximum-duration deposits.</div></div>
          <div class="tip-card"><div class="tip-card-head">Near warzones</div><div class="tip-card-body">Move back to 3-day deposits near end of week 2.</div></div>
          <div class="tip-card"><div class="tip-card-head">After capture</div><div class="tip-card-body">60-hour cooldown makes fresh 3-day deposits safer.</div></div>
          <div class="tip-card"><div class="tip-card-head">1-day deposits</div><div class="tip-card-body">Best raw return, worst stacking. Use only at high risk.</div></div>
        </div>
      </section>
    </div>

    <div class="motto-stamp reveal">
      <span class="motto-word">Strategize</span><span class="motto-sep">·</span>
      <span class="motto-word">Invest</span><span class="motto-sep">·</span>
      <span class="motto-word">Protect</span><span class="motto-sep">·</span>
      <span class="motto-word">Prosper</span>
    </div>
  </article>
</section>
`,C=`<section id="trains" class="section poster-section">
  <article class="poster-frame train-poster reveal" aria-labelledby="trains-title">
    <div class="poster-sky" aria-hidden="true">
      <img src="/assets/illustrations/watchtower.png" alt="" class="poster-town-art poster-town-left" />
      <img src="/assets/trains/fortune-train.png" alt="" class="poster-train-hero poster-train-generated" />
    </div>

    <header class="poster-masthead compact">
      <div class="alliance-plank">#1075 QueenRae</div>
      <img src="/assets/illustrations/longhorn-skull.png" alt="" class="masthead-skull" />
      <div class="wood-sign">
        <div class="plank-seams" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="sign-rivets" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="wood-sign-kicker">The Train</div>
        <h2 id="trains-title">Railroad Tycoon</h2>
        <div class="wood-sign-sub">Sell Whiskey · Earn CrystalGolds</div>
      </div>
    </header>

    <section class="hero-callout poster-panel torn-panel">
      <img src="/assets/resources/whiskey.png" alt="" class="callout-prop callout-coffee" />
      <div class="callout-copy">
        <div class="poster-eyebrow">The Fortune</div>
        <h3>Personal Train</h3>
        <p>Used to sell Whiskey for CrystalGolds. Not linked to the alliance train.</p>
        <ul class="poster-list dense-list train-callout-rules">
          <li>Consign for fixed-price simple sales.</li>
          <li>Use Premium Sale from week 3 when station limits matter.</li>
        </ul>
      </div>
      <img src="/assets/trains/fortune-train.png" alt="" class="callout-prop callout-bank callout-train-generated" />
    </section>

    <div class="inner-tab-bar poster-inner-tabs" id="train-tabs">
      <button class="inner-tab active" data-inner="selling">Selling</button>
      <button class="inner-tab" data-inner="schedule">Schedule</button>
      <button class="inner-tab" data-inner="plunder">Plundering</button>
    </div>

    <div data-inner-panel="selling">
      <div class="poster-mosaic train-grid">
        <section class="poster-panel reveal">
          <div class="poster-strip-title">Consign</div>
          <div class="sale-card-art"><img src="/assets/resources/whiskey.png" alt="" /></div>
          <ul class="poster-list compact-list">
            <li>Fixed prices</li>
            <li>Each station buys 10 whiskeys</li>
            <li>Up to 100 whiskeys / day</li>
          </ul>
        </section>
        <section class="poster-panel reveal">
          <div class="poster-strip-title">Premium Sale <small>Week 3+</small></div>
          <div class="sale-card-art sale-train-art"><img src="/assets/trains/fortune-train.png" alt="" /></div>
          <ul class="poster-list compact-list">
            <li>You set the price</li>
            <li>Cheapest whiskey sells first</li>
            <li>Up to 200 whiskeys / day</li>
            <li>Use Trade Logs for station limits</li>
          </ul>
        </section>
      </div>

      <section class="poster-panel train-warning reveal">
        <div class="warning-icon">!</div>
        <div>
          <strong>50% of what you send can be plundered.</strong>
          <span>Split Whiskey over 2+ trains to make each load less attractive.</span>
        </div>
        <div class="split-load-art" aria-hidden="true">
          <img src="/assets/trains/fortune-train.png" alt="" />
          <b>÷</b>
          <img src="/assets/trains/fortune-train.png" alt="" />
        </div>
      </section>
    </div>

    <div data-inner-panel="schedule" hidden>
      <section class="poster-panel reveal">
        <div class="poster-strip-title">6 Trains Per Day</div>
        <div class="train-sched">
          <div class="train-sched-track">
            <div class="train-node"><img src="/assets/illustrations/train-fortune.png" alt="" /><div class="train-node-label">Reset</div><div class="train-node-num">Train 1</div></div>
            <div class="train-arrow"><div class="train-arrow-inner"><div class="train-arrow-line"></div><div class="train-arrow-head">▶</div></div><div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div></div>
            <div class="train-node"><img src="/assets/illustrations/train-fortune.png" alt="" /><div class="train-node-label">+4h</div><div class="train-node-num">Train 2</div></div>
            <div class="train-arrow"><div class="train-arrow-inner"><div class="train-arrow-line"></div><div class="train-arrow-head">▶</div></div><div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div></div>
            <div class="train-node"><img src="/assets/illustrations/train-fortune.png" alt="" /><div class="train-node-label">+8h</div><div class="train-node-num">Train 3</div></div>
            <div class="train-arrow"><div class="train-arrow-inner"><div class="train-arrow-line"></div><div class="train-arrow-head">▶</div></div><div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div></div>
            <div class="train-node"><img src="/assets/illustrations/train-fortune.png" alt="" /><div class="train-node-label">+12h</div><div class="train-node-num">Train 4</div></div>
            <div class="train-arrow"><div class="train-arrow-inner"><div class="train-arrow-line"></div><div class="train-arrow-head">▶</div></div><div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div></div>
            <div class="train-node"><img src="/assets/illustrations/train-fortune.png" alt="" /><div class="train-node-label">+16h</div><div class="train-node-num">Train 5</div></div>
            <div class="train-arrow"><div class="train-arrow-inner"><div class="train-arrow-line"></div><div class="train-arrow-head">▶</div></div><div class="font-heading text-gold-dim text-[0.65rem] uppercase tracking-wider mt-1">+4h</div></div>
            <div class="train-node"><img src="/assets/illustrations/train-fortune.png" alt="" /><div class="train-node-label">+20h</div><div class="train-node-num">Train 6</div></div>
          </div>
        </div>
        <div class="train-sched-summary">Every 4 hours from reset</div>
      </section>
    </div>

    <div data-inner-panel="plunder" hidden>
      <section class="poster-panel reveal">
        <div class="poster-strip-title">Plundering Rules</div>
        <div class="plunder-token-grid">
          <div><b>3</b><span>Attempts / day</span></div>
          <div><b>3</b><span>Free refreshes</span></div>
          <div><b>10%</b><span>Goods stolen</span></div>
          <div><b>7</b><span>Max stored attempts</span></div>
        </div>
        <p class="poster-mini-note">If free refreshes are gone, wait for tomorrow instead of spending CG on a bad target.</p>
      </section>
    </div>
  </article>
</section>
`,x="/lws5/";function g(a){return a.replace(/(["'(])\/assets\//g,`$1${x}assets/`)}const h={overview:g(k),checklist:g(y),coffee:g(w),banks:g(S),trains:g(C)};function I(a){const t=document.getElementById("app"),r=document.querySelectorAll("#main-nav button");function e(i){const c=h[i]??h.overview;t.innerHTML=c,r.forEach(p=>{const o=p.dataset.target===i;p.classList.toggle("active",o),p.setAttribute("aria-selected",String(o))}),a(i,t)}function s(i,c=!0){c&&history.pushState(null,"",`#${i}`);const p=document;p.startViewTransition?p.startViewTransition(()=>e(i)):e(i),window.scrollTo({top:0,behavior:"smooth"})}r.forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.target;c&&s(c)})}),window.addEventListener("popstate",()=>{const i=location.hash.slice(1),c=h[i]?i:"overview";e(c),window.scrollTo({top:0,behavior:"instant"})});const n=location.hash.slice(1);e(h[n]?n:"overview")}const f="lws5_";function E(a){const t=a.querySelectorAll(".checklist-row"),r=a.querySelector("[data-cl-done]"),e=a.querySelector("[data-cl-total]"),s=a.querySelector("[data-cl-fill]"),n=a.querySelector("[data-cl-pct]"),i=t.length;e&&(e.textContent=String(i));function c(){const o=a.querySelectorAll(".checklist-row input:checked").length;r&&(r.textContent=String(o)),n&&(n.textContent=i>0?Math.round(o/i*100)+"%":"0%"),s&&(s.style.width=i>0?`${o/i*100}%`:"0%")}t.forEach(o=>{const d=o.dataset.id;if(!d)return;const l=o.querySelector("input[type=checkbox]");if(!l)return;localStorage.getItem(f+d)==="true"&&(l.checked=!0,o.classList.add("checked"));const v=()=>{l.checked=!l.checked,m(d,l.checked,o),c()};o.addEventListener("click",u=>{u.target===l||u.target.tagName==="LABEL"||v()}),l.addEventListener("change",()=>{m(d,l.checked,o),c()})});const p=a.querySelector("#reset-checklist");p&&p.addEventListener("click",()=>{t.forEach(o=>{const d=o.dataset.id,l=o.querySelector("input[type=checkbox]");!l||!d||(l.checked=!1,o.classList.remove("checked"),localStorage.removeItem(f+d))}),c()}),c()}function m(a,t,r){r.classList.toggle("checked",t),localStorage.setItem(f+a,String(t))}function L(a){const t=a.querySelectorAll(".inner-tab");t.length!==0&&t.forEach(r=>{r.addEventListener("click",()=>{const e=r.dataset.inner;e&&(t.forEach(s=>s.classList.toggle("active",s===r)),a.querySelectorAll("[data-inner-panel]").forEach(s=>{const n=s.dataset.innerPanel===e;s.hidden=!n}))})})}function P(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=Array.from(document.querySelectorAll(".parallax"));if(a.length===0)return;let t=!1;function r(){const s=window.scrollY;for(const n of a){const i=parseFloat(n.dataset.speed??"0.5"),c=s*(1-i);n.style.transform=`translate3d(0, ${c.toFixed(1)}px, 0)`}t=!1}function e(){t||(t=!0,requestAnimationFrame(r))}window.addEventListener("scroll",e,{passive:!0}),r()}function B(){const a=document.getElementById("progress-bar");if(!a)return;let t=!1;function r(){const e=document.documentElement,s=e.scrollHeight-e.clientHeight,n=s>0?e.scrollTop/s*100:0;a.style.width=n+"%",t=!1}window.addEventListener("scroll",()=>{t||(t=!0,requestAnimationFrame(r))},{passive:!0})}function T(a,t,r){var e;if(a instanceof Element)return[a];if(typeof a=="string"){let s=document;const n=(e=void 0)!==null&&e!==void 0?e:s.querySelectorAll(a);return n?Array.from(n):[]}return Array.from(a)}const R={some:0,all:1};function b(a,t,{root:r,margin:e,amount:s="some"}={}){const n=T(a),i=new WeakMap,c=o=>{o.forEach(d=>{const l=i.get(d.target);if(d.isIntersecting!==!!l)if(d.isIntersecting){const v=t(d);typeof v=="function"?i.set(d.target,v):p.unobserve(d.target)}else typeof l=="function"&&(l(d),i.delete(d.target))})},p=new IntersectionObserver(c,{root:r,rootMargin:e,threshold:typeof s=="number"?s:R[s]});return n.forEach(o=>p.observe(o)),()=>p.disconnect()}function F(a){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){a.querySelectorAll(".reveal").forEach(e=>e.classList.add("in-view"));return}a.querySelectorAll(".reveal").forEach((e,s)=>{e.style.transitionDelay=`${Math.min(s*.05,.3)}s`,b(e,()=>{e.classList.add("in-view")},{amount:.15})}),a.querySelectorAll(".recipe-card").forEach((e,s)=>{e.style.opacity="0",e.style.transform="translateY(16px)",e.style.transition=`opacity .45s cubic-bezier(.2,.7,.2,1) ${s*.04}s, transform .45s cubic-bezier(.2,.7,.2,1) ${s*.04}s`,b(e,()=>{e.style.opacity="1",e.style.transform="translateY(0)"},{amount:.2})})}function q(a=document){const t=a.querySelector("[data-resource-picker]"),r=a.querySelector("[data-resource-detail]");if(!t||!r)return;const e=r,s=Array.from(t.querySelectorAll("[data-resource-token]")),n=r.querySelector("[data-resource-title]"),i=r.querySelector("[data-resource-kicker]"),c=r.querySelector("[data-resource-replaces]"),p=r.querySelector("[data-resource-use]"),o=r.querySelector("[data-resource-priority]");function d(l){s.forEach(v=>{const u=v===l;v.classList.toggle("active",u),v.setAttribute("aria-pressed",String(u))}),n&&(n.textContent=l.dataset.title??""),i&&(i.textContent=l.dataset.kicker??""),c&&(c.textContent=l.dataset.replaces??""),p&&(p.textContent=l.dataset.use??""),o&&(o.textContent=l.dataset.priority??""),e.classList.remove("resource-detail-pop"),window.requestAnimationFrame(()=>e.classList.add("resource-detail-pop"))}s.forEach(l=>{l.addEventListener("click",()=>d(l))})}B();P();I((a,t)=>{E(t),L(t),q(t),F(t)});
//# sourceMappingURL=index-B3rChp5X.js.map
