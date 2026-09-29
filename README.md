# KIFADA — 6367

The complete KIFADA puzzle hunt, archived as it ran. Every file here is the shipped build, moved in byte-for-byte.

The hunt: a Cicada-style trail of gates for a university cyber club. Four levels, a decoy layer aimed at anyone who tried to solve it with an AI, and a finish page. Seal: **6367**.

## Layout

| Folder | What it holds |
|---|---|
| `level-1/` | The first checkpoint poster (`first-checkpoint.png`). The clue is not in the picture — it is behind it: the PNG's metadata (tEXt, IPTC, XMP, EXIF) carries the address of the next level. Added unedited; re-encoding the image destroys the clue. |
| `level-2/` | The deleted-site page — *"error: site has been deleted — Only if you can return to the past…"* The shipped build carries 757 invisible variation-selector characters holding an AI-decoy note (a "hostmaster's restore note" pointing at a DNS TXT record). |
| `level-2/caesar-cipher/` | The earlier level-2 page, kept unedited: a `CAESER4` ASCII sigil over a single encoded line (Caesar −4), which decodes to the next host. |
| `level-3/` | **Ran as level 4.** The silent page: the text `kifada/stg` and one image, `empty.png` — 1.02 MB despite the name, plus 117 hidden variation-selector characters holding the "release note" decoy. |
| `level-4/` | **Ran as level 3.** The book-cipher page: the logo, the hint *"the key lies in the html"*, and the potato essay. The key is a single HTML comment and nothing else; copying is trapped (the clipboard receives *"ops, u can't copy this"*). The shipped build carries no hidden characters. |
| `winners/` | The finish page shown to the teams that completed the hunt. |
| `_shared/` | `gate.js`, `robots.txt`, `_headers` — byte-identical across the three level sites, so they live here once. `gate.js` is a Netlify edge function: a hard 403 for AI crawler user agents, a per-IP rate limit, and a `robots.txt` passthrough. No password gate — the earlier one was removed before the event, so the sites served content directly. |

**Note on the numbering:** `level-3/` and `level-4/` are named in swapped order relative to the live hunt — the folder `level-3/` holds the level that ran fourth, and `level-4/` holds the level that ran third.

## The decoy layer

Levels 2, 3 and 4 each ship invisible variation-selector characters (`U+E0100`–`U+E01EF`) inside the page. Decoded, they are instructions written for a solver's AI — notes claiming to be a hostmaster's restore note, a marginal note, a release note — each one steering a machine reader toward a false trail instead of the hunt's real path. A human reading the page sees nothing; anything that dumps the file sees the bait.

## Provenance

Files were pulled from the live per-level repositories and verified before the push: each file's git blob SHA in this repo matches the blob SHA of the source it came from, including the level-1 poster, which matches the original byte-for-byte (SHA-256 identical).
