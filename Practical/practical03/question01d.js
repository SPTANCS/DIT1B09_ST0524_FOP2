let score = [45, 68, 78, 66, 77, 89, 76, 82];

let highscore = (score) => {
    highestscore = score[0];
    hscoreIndex = 0;
    for (var j = 1; j < score.length; j++) {
        if (score[j] > highestscore) {
            highestscore = score[j];
            hscoreIndex = j;
        }

    }

    return {
        hscore() {
            return highestscore;
        },
        indexhscore() {
            return hscoreIndex;
        },
    }
}

getHighScore = highscore(score);
console.log("The highest score is " + getHighScore.hscore());
console.log("The index for highest score is " + getHighScore.indexhscore());
