# ChatGPT (GPT-4o) Image Prompts for lws5 Assets

Each section maps to a file in `public/assets/`. GPT-4o image generation outputs **true transparent PNGs natively** — no background removal step needed. Drop the file in the listed path, then change the `src="…saloon.svg"` to `src="…saloon.png"` in the matching section partial.

## 🎯 Workflow tips for GPT-4o

1. **Use one chat per category** (e.g. one chat for "all 9 coffee cups", another for "all hero pieces"). GPT-4o keeps style consistent across generations *in the same chat*. Once your first coffee cup looks right, ask for the next variant in the same chat — it will match the style.

2. **First message of each chat — set the global style:**
   > *"I need you to generate a series of illustrations in a consistent style. Style guide: stylised western frontier infographic illustration, painted digital art, warm sepia and amber palette (golds #d4900a, deep reds #5a1008, aged parchment cream #ecdea8, dark walnut browns #281405). Strong outlined linework, slight cel-shading with soft highlights and warm shadows, slightly aged/weathered feel, vintage saloon poster vibe. **Every image must have a fully transparent background (output as PNG with alpha channel) — no white background, no rectangle, no shadow base.** No text in the image unless I explicitly ask for it. Acknowledge this style guide, then wait for me to send the first subject."*

3. **Then send each prompt below as a separate message** in that chat.

4. **For aspect ratio**, mention it conversationally: *"This one should be landscape (16:9)"* or *"square (1:1)"*. GPT-4o respects it.

5. **If a generation drifts**, say *"keep the same style as the previous image, but…"* and re-prompt.

---

## 🤠 Hero Illustrations (one chat — keep style locked)

### `illustrations/longhorn-skull.png` — landscape 16:9
> A stylised western longhorn cattle skull, centred, facing forward. Wide sweeping curved horns extending horizontally across the frame, bone-cream coloured with darker brown tips. Empty dark eye sockets, prominent nasal cavity, hint of teeth along the lower jaw. Slight aged wear, small cracks. Golden rim-light catching the upper edges. Painted infographic style. Transparent background — no plinth, no shadow on the ground. No text.

### `illustrations/saloon.png` — portrait 3:5
> Side-on view of a classic Wild West wooden saloon façade, two storeys with the iconic flat false front, swinging double doors at the entrance, large rectangular windows glowing warm yellow from interior lamps, a hanging wooden sign that reads "WHISKEY", lanterns mounted on the porch posts, a wooden barrel beside the door, weathered plank walls, pitched roof. Painted infographic style, warm amber lighting, deep brown wood tones. Transparent background. The only text visible should be "WHISKEY" on the hanging sign.

### `illustrations/watchtower.png` — portrait 1:2 (tall and narrow)
> A tall wooden frontier watchtower with four splayed support posts, X-shaped cross-bracing between them, a small ladder running up one side, a covered platform at the top with railings, pitched shingle roof, a flagpole with a small red flag flying from the peak. Weathered dark wood, warm golden lantern glowing under the platform. Stylised infographic, slight perspective showing structural depth. Transparent background. No people, no text.

---

## 🚂 Section Anchor Illustrations (separate chat OK, or continue the hero chat)

### `illustrations/train-fortune.png` — landscape 2:1 (wide)
> Side view of a classic 1880s American steam locomotive. Black iron boiler with three polished brass bands, tall smokestack with a crown rim, brass steam dome and whistle, glowing yellow front headlamp, dark red engineer's cab with an arched yellow window, a gold plaque on the cab side that reads "FORTUNE", two large spoked driver wheels plus a smaller leading wheel, cow-catcher pilot at the front. Soft puffs of grey-white steam rising from the smokestack. Stylised painted infographic, warm metallic highlights. Transparent background. The only text should be "FORTUNE" on the cab plaque.

### `illustrations/bank.png` — slightly wide 5:4
> Front view of a Western frontier bank façade. Classical stone-and-wood architecture, two tall fluted columns flanking a double-door arched entrance, a large sign mounted above the doorway in gold letters that reads "BANK", ornate triangular pediment above the sign, stone-block textured walls in warm tan, small barred windows on either side of the entrance, a circular gold "$" emblem above the BANK sign, stone steps leading up to the door. Painted infographic style, warm afternoon lighting. Transparent background. The only text should be "BANK" on the sign.

### `illustrations/coffee-mug.png` — square 1:1
> A tall stylised western enamel coffee mug, cream and brown ceramic with a wide handle on the right, filled with dark steaming coffee, three thin curling steam wisps rising from the surface, a decorative band wrapping the mug with small gold stars. Warm cream-to-amber gradient on the body. Painted infographic style, slight 3/4 angle showing the rim and the coffee surface inside. Transparent background. No text.

### `illustrations/barista.png` — portrait 4:5
> A burlap sack of coffee beans, tan canvas material with horizontal weave texture, tied at the top with rope, a few dark coffee beans spilling out from the opening, a paper tag hanging on the front that reads "COFFEE BEANS" in vintage western typography, small gold star ornaments at the bottom corners. Painted infographic style, warm sepia tones. Transparent background. The only text should be "COFFEE BEANS" on the tag.

---

## ☕ Coffee Recipe Cup Variants (×9) — STRONGLY recommend ONE chat for all 9

Use the very first cup (Black) to lock the mug design, then for each subsequent variant just say *"same mug, but…"* and describe the new variant. This will keep all 9 visually consistent.

**First-message setup for this chat:**
> *"I need a set of 9 western-style coffee mug illustrations, all in a consistent style. Style: painted infographic, stylised western frontier, enamel coffee mug with a cream-to-amber gradient body, brown handle on the right, decorative band around the middle with small gold star motifs. View: slight 3/4 angle showing the rim and the liquid surface inside. Every image must have a fully transparent background — no white, no plinth, no shadow. Each square 1:1. No text. Acknowledge, then I'll describe the first variant."*

### `coffee-cups/black.png`
> Variant 1 — Black Coffee: the mug filled to the top with plain pitch-black coffee, glossy dark surface, no foam, no topping. Faint steam wisps rising.

### `coffee-cups/espresso.png`
> Variant 2 — Espresso: same mug, filled with dark espresso topped with a thin golden-tan crema layer (lighter brown foam ring around the edges, slightly darker centre).

### `coffee-cups/specialty.png`
> Variant 3 — Specialty: same mug, rich brown coffee, surface scattered with tiny golden star-shaped sprinkles.

### `coffee-cups/cowboy.png`
> Variant 4 — Cowboy: same mug, strong dark coffee, with a small dark brown cowboy hat sitting on top of the mug rim as a garnish.

### `coffee-cups/latte.png`
> Variant 5 — Latte: same mug, filled with creamy tan latte, topped with delicate brown leaf-shaped latte art swirled into the surface foam.

### `coffee-cups/caramel.png`
> Variant 6 — Caramel: same mug, tan caramel-coloured coffee, topped with a zig-zag drizzle of dark amber caramel sauce across the surface.

### `coffee-cups/mocha.png`
> Variant 7 — Mocha: same mug, deep dark-chocolate-brown mocha coffee, topped with a thin squiggle of darker chocolate sauce drizzled across the surface.

### `coffee-cups/cream.png`
> Variant 8 — Cream: same mug, pale creamy coffee, topped with a tall swirled peak of whipped cream rising above the rim.

### `coffee-cups/truffle.png`
> Variant 9 — Truffle: same mug, very dark coffee, garnished with a small dark brown truffle mushroom shape sitting on top, plus a small square of cream-coloured fudge beside it.

---

## 🪵 Tileable Textures

**These need solid backgrounds and seamless tiling — DON'T ask for transparency here.** GPT-4o is decent at textures but isn't perfect at seamless tiling. If results aren't tileable, the SVG placeholders in the repo are already good — these are optional upgrades.

### `textures/wood-dark.jpg` — square 1:1
> Seamlessly tileable dark walnut wood plank texture, very dark deep brown base with subtle warm amber grain running horizontally, faint knots, slight roughness, photorealistic but slightly stylised. Tileable on all four edges (top edge matches bottom, left matches right). No vignette, no shadows on the edges. Square image. **Solid texture — not transparent.**

### `textures/parchment.jpg` — square 1:1
> Seamlessly tileable aged parchment paper texture, warm cream-amber base colour, visible paper fibres, faint brown foxing stains scattered across, slight darkening towards the corners, grainy paper surface. Tileable on all four edges. No drawn borders, no rolled edges. Square image. **Solid texture — not transparent.**

### `textures/parchment-dark.jpg` — square 1:1
> Seamlessly tileable aged dark leather or burnt-paper texture, deep warm brown base, faint grain and stains, slightly oily/worn surface. Tileable on all four edges. Square image. **Solid texture — not transparent.**

---

## 🔘 Checklist & Resource Icons (16 total)

The existing SVG sprite (`icons/icons.svg`) is already crisp and scalable. Only upgrade if you specifically want painted icons. If you do, generate them in one chat for consistency.

**First-message setup for the icon chat:**
> *"I need 16 small painted icons in a consistent style. Each: a single subject centred in the frame, gold-on-dark-brown colour scheme (#d4900a gold with #3a1c08 outline), flat painted with a subtle warm shadow, simple readable silhouette. Each image square 1:1, transparent background. No text. Acknowledge, then I'll list each subject."*

Then send each as: *"Icon: [subject from list below]"*

**Prep:** teleport symbol (circle with four outward arrows) · medical cross inside a wooden cabin · five-pointed star · phone with red strike-through · radar concentric rings with sweep line and dot.

**Start:** credit card / season pass · stub ticket with notches · stylised brain · small western skull · folded paper map with X marks the spot.

**Week:** coffee mug with steam · bullseye target · tiny bank façade · two clasping hands.

**Resource:** two overlapping coffee beans · cup silhouette · diamond-shaped golden gem · whiskey bottle with cork.

---

## 📋 Final swap workflow

```
public/assets/illustrations/saloon.svg   →   public/assets/illustrations/saloon.png   (drop new file)
src/sections/overview.html                →   change src extension .svg → .png
npm run dev                               →   preview locally
npm run deploy                            →   publish to gh-pages
```

The SVG placeholders stay in the repo as fallbacks. You can upgrade one asset at a time.
