const lyrics = 'Amr sunar bangla ami tomai valobasi. Jodi tor dak sone kew na ase tobe akla colo re. ami bondo kala phaki tomi jeno ki. bosonto kale tomai volte pari ni.';

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const characters = lyrics.split('');
// console.log(characters);

// slice 
const partial = lyrics.slice(2, 5);
const partial1 = lyrics.substring(2, 5);
const partial2 = lyrics.at(-2);

console.log(partial2);

const lines = [
    'Amr sunar bangla ami tomai valobasi',
    ' Jodi tor dak sone kew na ase tobe akla colo re',
    ' ami bondo kala phaki tomi jeno ki',  ' bosonto kale tomai volte pari ni', 
    ''
]

const newSong = lines.join('; ');
console.log(newSong);