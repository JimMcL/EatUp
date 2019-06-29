// Photo timeout (i.e. time until "escape") in milliseconds
escapeTimeout = 5000;
// Number of photos to show in a single trial
numPhotos = 15;
// List of candidate photos. Each photo has a URL, a weight
// (i.e. relative likelihood of being included in a trial), and
// whether its type should be known (i.e. should be correctly
// identified) by the "average" predator. The "known" field must be
// one of "ant", "notAnt" or null.
candidatePhotos = [
    { url: "images/IMG_1990.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/IMG_2003.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/85.jpg",
      weight: 1,
      known: null
    },
    { url: "images/149.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/606.jpg",
      weight: 1,
      known: null
    },
    { url: "images/736.jpg",
      weight: 1,
      known: null
    },
    { url: "images/2712.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/3243.jpg",
      weight: 1,
      known: null
    },
    { url: "images/524.jpg",
      weight: 1,
      known: null
    },
    { url: "images/1773.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4201.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4512.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/4592.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3857.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/3858.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/3859.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/1262.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/3849.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/487.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/3014.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3015.jpg",
      weight: 1,
      known: null
    },
    { url: "images/1827.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/1828.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/1951.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/2462.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/2465.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/2806.jpg",
      weight: 1,
      known: null
    },
    { url: "images/2962.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/3171.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3451.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/3973.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3976.jpg",
      weight: 1,
      known: null
    },
    { url: "images/784.jpg",
      weight: 1,
      known: null
    },
    { url: "images/786.jpg",
      weight: 1,
      known: null
    },
];

