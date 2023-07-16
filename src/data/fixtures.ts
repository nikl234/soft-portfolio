export default {
  author: "Niklas Baack",
  hero: {
    subtitle: "Informatik BSc - Leibniz Universität Hannover",
    description: "Neben den Studium ist er viel auf Github oder in der Konsole. Seine lieblings IDEs sind Visual Studio Code, Intelij, Pycharm und NeoVim. Zudem baut er gerne Innovative Apps.",
    cta: "Browse Products",
  },
  products: {
    featured: [
      {
        name: "Itemify",
        medium: "React · Hasura · Python · S3",
        summary: "3D Objekt Marktplatz",
        copy: [
          "Eine Alternative zu bekannten Seiten wie Thingiverse, jedoch mit der Möglichkeit seine 3D Modelle zu verkaufen und andere zu kaufen. Zudem wird es hier in Zukunft einen Markt für 3D Druckaufträge geben."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Check out",
            url: "https://itemify.eu/"
          }
        },
        images: [
          "/itemify/itemify1.png",
          "/itemify/itemify2.png",
          "/itemify/itemify3.png",
        ]
      },
      {
        name: "Obcelere",
        medium: "Grafana · Postgres · Data Pipelines",
        summary: "Stock Predictions",
        copy: [
          "Wie wirken sich Medien auf Aktienkurse aus? Das habe ich mich gefragt und eine Menge Graphen basierend auf mitlerweile 10 Millionen Artikeln erstellt. Jeden Tag werden es bis zu fünftausend Artikel mehr.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://grafana.baackfs.com"
          }
        },
        images: [
          "/obcelere/obscelere.png",
          "/obcelere/0.png",
          "/obcelere/1.png",
          "/obcelere/2.png",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      // {
      //   name: "Volunteer Portal",
      //   description: "Find and track volunteer opportunities.",
      //   link: {
      //     name: "Github",
      //     url: "https://github.com/zendesk/volunteer_portal"
      //   }
      // },
      // {
      //   name: "Final Slash VR",
      //   description: "Short survival experience on an abandoned planet.",
      //   link: {
      //     name: "Download",
      //     url: "https://samzx.itch.io/final-slash-vr"
      //   }
      // },
      // {
      //   name: "MPH Watch",
      //   description: "Stats for miners mining on Mining Pool Hub.",
      //   link: {
      //     name: "Demo",
      //     url: "https://mphwatch.samxie.net/demo"
      //   }
      // }
    ]
  },
  logoSection: {
    title: "As hired by",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/vhv-versicherungen-vector-logo.svg",
        url: "https://unimelb.edu.au/",
        alt: "VHV Versicherung"
      },
      // {
      //   src: "/logos/zendesk.svg",
      //   url: "https://www.zendesk.com/",
      //   alt: "Zendesk"
      // },
      // {
      //   src: "/logos/cashapp.svg",
      //   url: "https://cash.app/",
      //   alt: "Cash App"
      // }
  ]
  },
  footer: {
    tagline: "Niklas Baack — Hannover",
    links: [
      {
        name: "Github",
        url: "https://github.com/nikl234",
        fa: "fab fa-github"
      },
      {
        name: "Xing",
        url: "https://www.xing.com/profile/Niklas_Baack/",
        fa: "fab fa-xing"
      },
      {
        name: "Email",
        url: "mailto:niklasbaack@gmail.com",
        fa: "fa fa-envelope"
      },
      {
        name: "Medium",
        url: "https://medium.com/@niklasbaack",
        fa: "fab fa-medium"
      },
    ]
  }
}