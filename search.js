const lyrics = 'Amr sunar bangla ami tomai valobasi. Jodi tor dak sone kew na ase tobe akla colo re. ami bondo kala phaki tomi jeno ki. bosonto kale tomai volte pari ni.';

const searchStinrg = 'bondo';
// const doesExit = lyrics.includes('bangla');
// const doesExit = lyrics.includes('Bangla');

const lyricsLowerCase = lyrics.toLowerCase()

const searchStinrgLower = searchStinrg.toLowerCase();
const doesExit = lyrics.includes(searchStinrg);
console.log(doesExit);

const doesExitOneline = lyrics.toLowerCase().includes(searchStinrg.toLowerCase());
console.log(doesExitOneline);

// -----------------------------------------------
// index Of

console.log(lyrics.indexOf('bondo'));
console.log(lyrics.indexOf('sunar'));

if(lyrics.indexOf('ami') !== -1){
    console.log('exit inside the string')
}
else{
    console.log('cannot exit')
}

// startsWith
console.log(lyrics.startsWith('amr'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'myPic.png';
console.log(otherFile.endsWith('.png'));