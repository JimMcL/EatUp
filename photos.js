"use strict";

// The PhotoSeq class represents a random sequence of photos which
// make up a single trial, with a current photo.
class PhotoSeq {
    constructor(photos, numToShow) {
        this.index = 0;
        this.numToShow = numToShow;
        this.photos = this.selectRandom(photos, numToShow);
    }

    // Progresses the current photo to the next photo in the trial
    get moveToNext() {
        return ++this.index < this.numToShow;
    }
    get currentPhoto() { return this.photos[this.index]; }
    get hasCurrentPhoto() { return this.index < this.numToShow; }
    get percentComplete() { return 100 * (this.index + 1) / this.numToShow; }

    // Returns the URL of the current photo
    get url() { return this.currentPhoto.url; }
    // Returns the "known" type of the current photo, either "ant", "notAnt" or null
    get knownType() { return this.currentPhoto.known; }

    // Used internally. Selects the photos to be used in the trial
    // from the list of candidate photos
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
