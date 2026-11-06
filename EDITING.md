# Customer Editing Guide — rajmahal-palace (Islamic Reception Ceremony)

This invitation is customized for the wedding reception ceremony of **Md. Hiran & Mariom Ferdousi**, featuring royal Islamic styling, golden Bismillah invocation, royal couple portrait, live countdown timer, reception event details, Google/Apple calendar export, and venue directions.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week10/hiron--mariom/editable/wedding-data.js)

### Couple & Families
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (`"Hiran"`, `"Mariom"`)
- `groomFull` & `brideFull`: Formal full names (`"Md. Hiran"`, `"Mariom Ferdousi"`)
- `groomParents`: `"Son of Md. Samsuddin Mia & Sahila Bibi"`
- `brideParents`: `"Daughter of S.K. Mustaque Ali & Sabnam Ferdousi"`
- `hashtag`: Wedding hashtag (`"#HiranWedsMariom"`)

### Reception Date & Time
Edit `wedding` in `editable/wedding-data.js`:
- `dateISO`: `"2027-01-17T12:00:00+05:30"` (ISO 8601 with IST offset). Directly drives countdown timer and calendar links.
- `dateLabel`: `"Sunday, 17th January 2027"`
- `timeLabel`: `"12:00 Noon"`

### Islamic Invocation
Edit `verse` in `editable/wedding-data.js`:
- `arabic` / `hindi`: `"بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"`
- `translation`: `"In the name of Allah, the Most Gracious, the Most Merciful"`
- `text`: Warm invitation request sentence

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- `name`: `'"Binapani" Anusthan Bhaban'`
- `address`: `"Near Yatrik Club, Police Line, Suri, Birbhum, West Bengal 731101"`
- `mapsQuery`: `"WG2J+HQ6, Birbhum Police Line, Suri, West Bengal 731101"`

### Events
Edit `events` array in `editable/wedding-data.js`:
- Reception ceremony event details, date, time, venue, and note.

### Imagery & Artwork
Replace files in `editable/assets/` or update paths in `images`:
- Couple portrait: `editable/assets/couple.png` (Transparent PNG)
- Islamic Bismillah emblem: `editable/assets/bismillah.png`
- Hero palace background: `editable/assets/hero-bg.png`
- Floral garland: `editable/assets/footer-garland.png`
