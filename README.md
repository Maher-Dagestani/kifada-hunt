# KIFADA

A puzzle hunt built for a university cyber club. Five levels and a physical finish, in this order:

poster → deleted site → silent page → book cipher → deleted video → a QR code on campus → winners page

## Level 1 — first checkpoint

![Level 1 — the first checkpoint](level-1/first-checkpoint.png)

The starting poster. Text on it:

> Nicely done reaching the first checkpoint. But don't trust what's on the surface — the real clue isn't in the picture, it's behind it.

The address of level 2 is in the image's metadata, in its description field. It shows up by right-clicking the image and opening its properties.

**Files:** `level-1/first-checkpoint.png`.

## Level 2 — the deleted site

![Level 2 — the deleted site](docs/level-2-deleted-site.jpg)

> error: site has been deleted
>
> Only if you can return to the past...

"the past" is the Wayback Machine. The site's older build is archived, and that older build is the cipher page:

![Level 2 — the archived build, from the Wayback Machine](docs/level-2-the-past.png)

A dot-matrix sigil labelled `CAESER4` and one line:

```
lxxtw://weki-wjskpmexippe-016049.rixpmjc.ett
```

Caesar shift of 4 on the letters:

| cipher | plain |
|---|---|
| `lxxtw` | `https` |
| `weki-wjskpmexippe` | `sfogliatella` |
| `rixpmjc` | `netlify` |
| `ett` | `app` |

→ `https://sage-sfogliatella-016049.netlify.app`

**Files:** `level-2/` is the deleted-site page; `level-2/caesar-cipher/` is the cipher page.

## Level 3 — the silent page

![Level 3 — the silent page](docs/level-3-silent-page.jpg)

The page holds a single tag, `kifada/stg`, and one image: `empty.png`. The file is named empty and weighs 1.02 MB — a black-and-white photo of the campus water tower with the moth over it. It is 1080 × 1350 with nothing appended after the last chunk.

**Files:** `level-3/index.html`, `level-3/empty.png`.

## Level 4 — the book cipher

![Level 4 — the book cipher page](docs/level-4-book-cipher.jpg)

The moth logo, the number 6367, one italic line — *"the key lies in the html"* — and a monospace block: a fake paper on the aerodynamics of the potato, 52 lines. Copying the block is trapped; the clipboard gets `ops, u can't copy this`.

The single HTML comment on the page holds the key:

```html
<!-- 5:2 1:4 1:8 5:5 1:3 1:9 3:7 4:2 3:4 2:2 2:5 7:8 4:6 1:2 7:10 1:7 5:6 4:1
     6:9 2:1 2:6 4:10 1:6 3:1 3:3 9:2 4:8 7:6 7:2 5:8 8:1 8:3 3:6 6:7 10:1 3:8 -->
```

Thirty-six pairs of line and character. Take that character from that line of the essay printed on the page, in order, and it spells the next address:

```
https://github.com/kifada/kifada6367
```

The pairs only reach the first ten lines of the essay.

**Files:** `level-4/index.html`, `level-4/logo.jpg`.

## Level 5 — the deleted video

The book cipher pointed at a public repository holding one file, `videoplayback.mp4` — 28 seconds, the *أبو حسن* clip (channel 505). The repository is empty now; the video was deleted from it.

The message is in the sound, not the picture. In a spectrogram the audio spells:

![Level 5 — the spectrogram](docs/level-5-spectrogram.jpg)

```
59-2001
```

That was a position on campus. A QR code was there, and scanning it opened the winners page.

**Files:** `level-5/videoplayback.mp4`.

## KIFADA AI and the oath

![KIFADA AI](docs/the-machine.jpg)

A chat page, `KIFADA AI`, subtitled *the gate*. It answered in character and would explain craft — A1Z26, spectrograms, EXIF — but refused anything about the levels, their answers or how many there were.

Teams also had to take this oath, in English and Arabic, before starting:

> I swear by God that I will not use any AI model other than KIFADA AI during this competition, and that I will not share anything about the competition's solutions with any other team while it is running. The AI rule lifts only when we give you further commands.

Not in this repository — the chat and oath pages live in their own repos.

## Winners

![The winners page](docs/winners.jpg)

 is a Netlify edge function: it returns 403 to AI crawler user agents, rate-limits per IP, and lets `robots.txt` through. There is no password gate; one was built and removed before the event.
