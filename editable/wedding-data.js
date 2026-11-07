/**
 * wedding-data.js — Customer-facing editable data layer for rajmahal-palace (Islamic Reception)
 * Edit this file to update couple names, parents, dates, venue, Islamic verse, events, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Mariom",
    groom: "Hiran",
    brideFull: "Mariom Ferdousi",
    groomFull: "Md. Hiran",
    brideParents: "Daughter of S.K. Mustaque Ali & Sabnam Ferdousi",
    groomParents: "Son of Md. Samsuddin Mia & Sahila Bibi",
    hashtag: "#HiranWedsMariom",
  },

  wedding: {
    dateISO: "2027-01-17T12:00:00+05:30",
    dateLabel: "Sunday, 17th January 2027",
    timeLabel: "12:00 Noon",
  },

  verse: {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    hindi: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
    text: "Together with their families, request the honour of your gracious presence to celebrate the wedding reception of Md. Hiran & Mariom Ferdousi.",
  },

  venue: {
    name: '"Binapani" Anusthan Bhaban',
    address: "Near Yatrik Club, Police Line, Suri, Birbhum, West Bengal 731101",
    mapsQuery: "WG2J+HQ6, Birbhum Police Line, Suri, West Bengal 731101",
  },

  events: [
    {
      name: "Reception Ceremony",
      icon: "heart",
      date: "Sunday, 17th January 2027",
      time: "12:00 Noon",
      venue: '"Binapani" Anusthan Bhaban, Suri, Birbhum',
      note: "With the blessings of Allah and our families, please join us to celebrate the auspicious wedding reception of Md. Hiran & Mariom Ferdousi.",
    },
  ],

  images: {
    couple: "./editable/assets/couple.png",
    heroBg: "./editable/assets/hero-bg.png",
    ganesha: "./editable/assets/bismillah.png",
    bismillah: "./editable/assets/bismillah.png",
    diya: "./editable/assets/diya.png",
    mandala: "./editable/assets/mandala.png",
    footerGarland: "./editable/assets/footer-garland.png",
    bgm: "./editable/assets/bgm.mp3",
  },
};
