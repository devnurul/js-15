var speech = "I am a good person.  I don't snore at right";
 
var wordCount = 1;
for (let i = 0; i <speech.length; i++) {
    const element =speech[i];
    if (element == " " && speech[i-1] != " ") {
        wordCount++
    }
    
}
console.log(wordCount);