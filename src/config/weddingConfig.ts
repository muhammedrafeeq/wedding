export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'ceremony' | 'reception' | 'couple' | 'details';
}

export interface WeddingConfig {
  brideName: string;
  brideNameArabic: string;
  groomName: string;
  groomNameArabic: string;
  bismillahText: string;
  brideBio: string;
  groomBio: string;
  weddingDate: string; // ISO date YYYY-MM-DDTHH:mm:ss
  weddingTime: string;
  weddingDateDisplay: string;
  weddingDayOfWeek: string;
  venueName: string;
  venueAddress: string;
  venueCity: string;
  googleMapsLink: string;
  invitationMessageHeadline: string;
  invitationMessageBody: string;
  emotionalQuote: string;
  weddingStoryTitle: string;
  weddingStoryText: string;
  nikahHeading: string;
  rsvpDeadline: string;
  dressCode: string;
  musicTrackUrl: string;
  envelopeVideoUrl: string;
  themeColors: {
    softIvory: string;
    champagneGold: string;
    antiqueGoldBronze: string;
  };
  images: {
    hero: string;
    bride: string;
    groom: string;
    auditorium: string;
    envelopeSeal: string;
    gallery: GalleryItem[];
  };
  socialSharing: {
    title: string;
    description: string;
    ogImage: string;
  };
}

export const WEDDING_CONFIG: WeddingConfig = {
  groomName: "Muhammed Rafeeq",
  groomNameArabic: "",
  brideName: "Jumana",
  brideNameArabic: "",
  bismillahText: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
  groomBio: "Ambitious, warm, and dedicated to creating unforgettable memories and lifelong joy.",
  brideBio: "Graceful, kind-hearted, and passionate about design, nature, and family traditions.",
  weddingDate: "2026-09-27T11:00:00",
  weddingTime: "11:00 AM",
  weddingDateDisplay: "September 27, 2026",
  weddingDayOfWeek: "Sunday",
  venueName: "Kohinoor Wedding Park",
  venueAddress: "Padikkal",
  venueCity: "Malappuram",
  googleMapsLink: "https://www.google.com/maps/dir//Kohinoor+Wedding+Park,+3VXW%2BVG7,+Moonniyur,+Kerala+676317/@11.09369,75.929791,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3ba6517c095559d1:0x92a3b8300915e9b7!2m2!1d75.8962905!2d11.0996564?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D",
  invitationMessageHeadline: "With the blessings of Almighty Allah & our families...",
  invitationMessageBody: "We request the honor of your presence as we exchange our Wedding vows and celebrate the sacred beginning of our eternal union.",
  emotionalQuote: "And We created you in pairs. — Quran 78:8",
  weddingStoryTitle: "Our Journey of Faith & Love",
  weddingStoryText: "Guided by love, family blessings, and shared values, our story is a celebration of two souls coming together to build a future filled with happiness and faith.",
  nikahHeading: "Counting Down to Our Wedding",
  rsvpDeadline: "September 10, 2026",
  dressCode: "Modest Luxury Formal & Traditional",
  musicTrackUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-piano-112702.mp3",
  envelopeVideoUrl: "/videos/envelope_opening.mp4",
  themeColors: {
    softIvory: "#F2F1E8",
    champagneGold: "#D2C08A",
    antiqueGoldBronze: "#9E824A",
  },
  images: {
    hero: "/images/couple.png",
    bride: "/images/bride.jpeg",
    groom: "/images/groom.jpeg",
    auditorium: "/images/auditorium.jpg",
    envelopeSeal: "/images/gallery_rings.png",
    gallery: [
      {
        id: "1",
        src: "/images/1f.jpeg",
        alt: "Muhammed Rafeeq & Jumana",
        caption: "Muhammed Rafeeq & Jumana",
        category: "couple"
      },
      {
        id: "2",
        src: "/images/2f.jpeg",
        alt: "Muhammed Rafeeq & Jumana",
        caption: "Muhammed Rafeeq & Jumana",
        category: "couple"
      }
    ]
  },
  socialSharing: {
    title: "Wedding Invitation — Muhammed Rafeeq & Jumana | Sept 27, 2026",
    description: "With the blessings of Almighty Allah & our families, you are cordially invited to celebrate the Wedding of Muhammed Rafeeq & Jumana on Sunday, September 27, 2026 at Kohinoor Wedding Park, Padikkal, Malappuram.",
    ogImage: "/images/couple.png"
  }
};
