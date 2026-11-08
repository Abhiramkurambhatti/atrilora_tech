# Video Prompts for Atrilora Technologies Website

> These prompts are ready to run in Veo 2 / Veo 3, Runway Gen-3 Alpha, or Kling.
> Once generated, drop the MP4 files in `/public/videos/` and the site will play them automatically.

---

## Video 1 — Hero Background

**File names to use:**
- `/public/videos/hero-bg.mp4`
- `/public/videos/hero-bg.webm`
- `/public/videos/hero-bg-poster.jpg` (first frame screenshot)

**Prompt:**
```
Cinematic slow push-in on a premium sunlit home office workspace. White marble desk, sleek MacBook Pro open with a glowing dark screen, a glass of water, a small green potted plant in a white ceramic pot, a leather notebook with a gold pen. Warm, soft morning window light streams in from the left, casting long gentle shadows across the desk. Dust particles drift slowly in the light beams. Very slow, smooth, almost imperceptible forward camera movement (dolly push). Color grade: warm cream and ivory with golden highlights. Shot on 35mm anamorphic lens. Shallow depth of field, bokeh background. Film grain, cinematic, hyper-realistic, 4K, no text, no people. Duration: 7 seconds, seamless loop.
```

**Style notes:** Slow (Ken Burns-style push), warm light, no motion blur artifacts, no text, no people. Muted, plays on loop.

---

## Video 2 — CTA Section Gold Ribbon

**File names to use:**
- `/public/videos/gold-ribbon.mp4`
- `/public/videos/gold-ribbon.webm`
- `/public/videos/gold-ribbon-poster.jpg`

**Prompt:**
```
Abstract flowing liquid gold ribbon on a rich black background. Molten gold and bronze liquid metal flows in slow, elegant, organic curves. The movement is smooth, meditative, continuous — like liquid honey or mercury moving in slow motion. Close-up macro shot. Warm golden light reflects off the surface. Film grain overlay. No text, no people, no shapes. 4K, seamless loop, 6 seconds. Color palette: deep black background, warm gold #C9A66B and bronze #8A6A3C tones.
```

---

## Video 3 — Process / Services Section

**File names to use:**
- `/public/videos/build-screen.mp4`
- `/public/videos/build-screen.webm`
- `/public/videos/build-screen-poster.jpg`

**Prompt:**
```
Screen recording-style cinematic shot of a designer working in a modern code editor and Figma simultaneously. Split screen showing clean React component code on the left and a beautiful UI design with rounded cards, gold accents, and clean typography on the right. Mouse cursor moves naturally and thoughtfully. Soft ambient office lighting. The designer's hands are partially visible at the keyboard bottom edge. 1920x1080, slow and confident pacing, 8 seconds, seamless loop. Film grain, warm ambient light.
```

---

## How to Wire Videos into the Site

Once you have the MP4 files, the site is already wired to use them. Find these placeholders in the components and swap them in:

### Hero section (`/components/sections/HeroSection.tsx`)
Replace the `<Image>` background with:
```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  poster="/videos/hero-bg-poster.jpg"
  preload="none"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-bg.webm" type="video/webm" />
  <source src="/videos/hero-bg.mp4" type="video/mp4" />
</video>
```

### CTA section (`/components/sections/CTASection.tsx`)
Add as the background of the dark panel:
```tsx
<video
  autoPlay muted loop playsInline
  poster="/videos/gold-ribbon-poster.jpg"
  className="absolute inset-0 w-full h-full object-cover opacity-20"
>
  <source src="/videos/gold-ribbon.webm" type="video/webm" />
  <source src="/videos/gold-ribbon.mp4" type="video/mp4" />
</video>
```

---

## Compression Settings

After generating, compress with ffmpeg:

```bash
# MP4 (H.264, web-safe)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset slow -movflags +faststart -an output.mp4

# WebM (VP9, smaller)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -an output.webm

# Poster image (first frame)
ffmpeg -i input.mp4 -ss 00:00:00 -vframes 1 poster.jpg
```

Target file sizes: MP4 < 4MB, WebM < 2MB per video.
