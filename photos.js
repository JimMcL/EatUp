// Photo timeout in milliseconds
photoTimeout = 5000;
// Number of photos to show
numPhotos = 15;
// List of photos
samplePhotos = [
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
];

// --------------------------------------------------------------------------------

class PhotoSeq {
    constructor(photos, numToShow) {
        this.index = 0;
        this.numToShow = numToShow;
        this.photos = this.selectRandom(photos, numToShow);
    }
    
    get moveToNext() {
        return ++this.index < this.numToShow;
    }
    get currentPhoto() { return this.photos[this.index]; }
    get hasCurrentPhoto() { return this.index < this.numToShow; }

    get url() { return this.currentPhoto.url; }
    get knownType() { return this.currentPhoto.known; }

    selectRandom(photos, numToShow) {
        shuffleArray(photos);
        var result = [];
        // Pick out numToShow photos, based on weighting
        // Calculate total weight
        let total = 0;
        for (let i = photos.length - 1; i > 0; i--) {
            total += photos[i].weight;
            photos[i].cumulative = total;
        }
        // Calculate weight change between photos
        let inc = total / numToShow;
        for (let i = photos.length - 1; i > 0; i--) {
            if (photos[i].cumulative >= result.length * inc) {
                result.push(photos[i]);
            }
        }
        return result;
    }
};

function shuffleArray(a) {

    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [a[i], a[j]] = [a[j], a[i]]                  // Swap elements
    }
}
