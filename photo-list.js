// Photo timeout (i.e. time until "escape") in milliseconds
var escapeTimeout = 10000;
// Number of photos to show in a single trial
var numPhotos = 12;
// List of candidate photos. Each photo has a URL, a weight
// (i.e. relative likelihood of being included in a trial), and
// whether its type should be known (i.e. should be correctly
// identified) by the "average" predator. The "known" field must be
// one of "ant", "notAnt" or null.
var candidatePhotos = [
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
    { url: "images/GJA-4522.jpg",
      weight: 1,
      known: null
    },
    { url: "images/GJA-5324.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/146.jpg",
      weight: 1,
      known: null
    },
    { url: "images/147.jpg",
      weight: 1,
      known: null
    },
    { url: "images/303.jpg",
      weight: 1,
      known: null
    },
    { url: "images/1545.jpg",
      weight: 1,
      known: null
    },
    { url: "images/1547.jpg",
      weight: 1,
      known: null
    },
    { url: "images/2609.jpg",
      weight: 1,
      known: null
    },
    { url: "images/2626.jpg",
      weight: 1,
      known: null
    },
    { url: "images/2647.jpg",
      weight: 1,
      known: null
    },
    { url: "images/2651.jpg",
      weight: 1,
      known: null
    },
    { url: "images/2751.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3199.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z001.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z002.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z003.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z004.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z005.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z008.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z009.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z010.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z011.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/Z012.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z013.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z014.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z015.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z016.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z017.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z018.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z019.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/943.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3109.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3112.jpg",
      weight: 1,
      known: null
    },
    { url: "images/3114.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4013.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4017.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4029.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4030.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4199.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4230.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4233.jpg",
      weight: 1,
      known: null
    },
    { url: "images/4755.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z020.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z021.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z022.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z023.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z024.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z025.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z026.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z027.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z028.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z029.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z030.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z031.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z032.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z033.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z034.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z035.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z037.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z038.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/Z039.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z040.jpg",
      weight: 1,
      known: null
    },
    { url: "images/Z041.jpg",
      weight: 1,
      known: "notAnt"
    },
    { url: "images/IMG_8943.jpg",
      weight: 1,
      known: null
    },
    { url: "images/IMG_8184.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/IMG_8113.jpg",
      weight: 1,
      known: null
    },
    { url: "images/IMG_7181.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/IMG_7019.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/IMG_5789.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/IMG_4510.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/IMG_4460.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A011.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A010.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A001.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A002.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A003.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A004.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A005.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A006.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A007.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A008.jpg",
      weight: 1,
      known: "ant"
    },
    { url: "images/A009.jpg",
      weight: 1,
      known: "ant"
    },

];

