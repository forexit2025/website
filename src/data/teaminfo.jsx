// import all images from the team folders
const importedImages = import.meta.glob("../assets/team/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

// map filenames to urls
const images = {};
for (const path in importedImages) {
  const filename = path.split("/").pop();
  images[filename] = importedImages[path];
}

const team = [
  {
    name: "Annabella Cheng",
    role: "Co-President",
    port: "",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "William Lin",
    role: "Co-President",
    port: "",
    degree: "tba",
    year: "2025",
    img: "william.png",
  },
  {
    name: "Elaina Chao",
    role: "Secretary",
    port: "",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Amy Wang",
    role: "Vice President of Internals",
    port: "Internals",
    degree: "tba",
    year: "2025",
    img: "amy.png",
  },
  {
    name: "Marcus Len",
    role: "Vice President of Marketing",
    port: "Marketing",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Mark Qu",
    role: "Vice President of Sponsorships",
    port: "Sponsorships",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Nicole Chan",
    role: "Vice President of Externals",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Lianzhi Li",
    role: "Information Technology Director",
    port: "Internals",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Agnes Tjokrosetio",
    role: "Information Technology Director",
    port: "Internals",
    degree: "tba",
    year: "2025",
    img: "agnes.jpg",
  },
  {
    name: "Jayden Choi",
    role: "Human Resources Director",
    port: "Internals",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Julianna Clarisse Lansangan",
    role: "Human Resources Director",
    port: "Internals",
    degree: "tba",
    year: "2025",
    img: "jc.jpeg",
  },
  {
    name: "Davis Lim",
    role: "Human Resources Director",
    port: "Internals",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Jay Jeong",
    role: "Marketing Director",
    port: "Marketing",
    degree: "tba",
    year: "2025",
    img: "jay.jpeg",
  },
  {
    name: "Angela Yang",
    role: "Marketing Director",
    port: "Marketing",
    degree: "tba",
    year: "2025",
    img: "angela.jpeg",
  },
  {
    name: "Clare Kim",
    role: "Marketing Director",
    port: "Marketing",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Natasha Lo",
    role: "Marketing Director",
    port: "Marketing",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Max Li",
    role: "Marketing Director",
    port: "Marketing",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Nicholas Ng",
    role: "Sponsorships Director",
    port: "Sponsorships",
    degree: "tba",
    year: "2025",
    img: "nick.jpeg",
  },
  {
    name: "Talia Xia",
    role: "Sponsorships Director",
    port: "Sponsorships",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Declan Gormley",
    role: "Sponsorships Director",
    port: "Sponsorships",
    degree: "tba",
    year: "2025",
    img: "declan.jpeg",
  },
  {
    name: "Katya Lal",
    role: "Activities Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Keane Lie",
    role: "Activities Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Brandon Nguyen",
    role: "Activities Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: "brandon.jpeg",
  },
  {
    name: "Daisy Liu",
    role: "Activities Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: "daisy.png",
  },
  {
    name: "Jaesung Park",
    role: "Careers Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: "jaesung.jpeg",
  },
  {
    name: "Kayla Lee",
    role: "Careers Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: null,
  },
  {
    name: "Jeeviha Sangar",
    role: "Careers Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: "jeeviha.jpeg",
  },
  {
    name: "Jon Huh",
    role: "Careers Director",
    port: "Externals",
    degree: "tba",
    year: "2025",
    img: "jon.jpg",
  },
];

// include imported image
export const showTeam = team.map((p) => ({
  ...p,
  // img: p.img && images[p.img] ? images[p.img] : images["peppa-pig.jpg"],
  img: p.img && images[p.img] ? images[p.img] : images["placeholder.png"],
}));
