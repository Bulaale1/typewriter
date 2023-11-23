/* eslint-disable keyword-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */

const sentence = "hello there from lighthouse labs";
// let delayTime = 0;

for (let index = 0; index < sentence.length; index++){
  if(sentence[index] !== ' '){
    const delayTime = 50 * index;
    setTimeout(()=>{
      console.log(`${sentence[index]},${delayTime} ms`);
    },delayTime);
  }
}
setTimeout(()=>{
  console.log('...');
},50 * sentence.length);
