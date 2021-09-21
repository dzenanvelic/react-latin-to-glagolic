
import { useState } from 'react';
import './App.css';

function App() {
  //set upper text
  const[text,setText]= useState('')

  //set translated text
const[newWord,setNewWord]=useState('')
//info about copin to clipboard
 const[copySuccess,setCopySuccess]= useState('')
 //choose kind of translating
 const[translateFrom,setTranslateFrom]= useState('1')
 //spliting string into characters
const words = text.split("")
//connecting char into string variable
 let newWords=''
 
 //translating function
  const translate=()=>{
   
  if(words){
   words.map((w)=>{
     if(translateFrom==='1'){
w= w.replace("a",'ⰰ')
    w=w.replace("b","ⰱ");
    w= w.replace("c",'ⱌ');
    w=w.replace("č","ⱍ");
    w= w.replace("ć",'ⱋ');
    w=w.replace("d","ⰴ");
    w= w.replace("dž",'ⰴⰶ');
    w=w.replace("đ","ⰼ");
    w= w.replace("e",'ⰵ')
    w=w.replace("f","ⱇ");
    w= w.replace("g",'ⰳ');
    w=w.replace("h","ⱈ");
    w= w.replace("i",'ⰻ');
    w=w.replace("j","ⱓ");
    w= w.replace("k",'ⰽ');
    w=w.replace("l","ⰾ");
    w=w.replace("lj","ⰾⱓ");
    w= w.replace("m",'ⱞ')
    w=w.replace("n","ⱀ");
    w= w.replace("nj",'ⱀⱓ');
    w=w.replace("o","ⱁ");
    w= w.replace("p",'ⱂ');
    w=w.replace("r","ⱃ");
    w= w.replace("s",'ⱄ');
    w=w.replace("š","ⱎ");
    w= w.replace("t",'ⱅ')
    w=w.replace("u","ⱆ");
    w= w.replace("v",'ⰲ');
    w=w.replace("z","ⰸ");
    w= w.replace("ž",'ⰶ');
    //
w= w.replace("A",'ⰰ')
    w=w.replace("B","ⰱ");
    w= w.replace("C",'ⱌ');
    w=w.replace("Č","ⱍ");
    w= w.replace("Ć",'ⱋ');
    w=w.replace("D","ⰴ");
    w= w.replace("DŽ",'ⰴⰶ');
    w=w.replace("Đ","ⰼ");
    w= w.replace("E",'ⰵ')
    w=w.replace("F","ⱇ");
    w= w.replace("G",'ⰳ');
    w=w.replace("H","ⱈ");
    w= w.replace("I",'ⰻ');
    w=w.replace("J","ⱓ");
    w= w.replace("K",'ⰽ');
    w=w.replace("L","ⰾ");
    w=w.replace("LJ","ⰾⱓ");
    w= w.replace("M",'ⱞ')
    w=w.replace("N","ⱀ");
    w= w.replace("NJ",'ⱀⱓ');
    w=w.replace("O","ⱁ");
    w= w.replace("P",'ⱂ');
    w=w.replace("R","ⱃ");
    w= w.replace("S",'ⱄ');
    w=w.replace("Š","ⱎ");
    w= w.replace("T",'ⱅ')
    w=w.replace("U","ⱆ");
    w= w.replace("V",'ⰲ');
    w=w.replace("Z","ⰸ");
    w= w.replace("Ž",'ⰶ');
     }else{
       w= w.replace('ⰰ',"a")
    w=w.replace("ⰱ","b");
    w= w.replace('ⱌ',"c");
    w=w.replace("ⱍ","č");
    w= w.replace('ⱋ',"ć");
    w=w.replace("ⰴ","d");
    w= w.replace('ⰴⰶ',"dž");
    w=w.replace("ⰼ","đ");
    w= w.replace('ⰵ',"e")
    w=w.replace("ⱇ","f");
    w= w.replace('ⰳ',"g");
    w=w.replace("ⱈ","h");
    w= w.replace('ⰻ',"i");
    w=w.replace("ⱓ","j");
    w= w.replace('ⰽ',"k");
    w=w.replace("ⰾ","l");
    w=w.replace("ⰾⱓ","lj");
    w= w.replace("m",'ⱞ')
    w=w.replace("n","ⱀ");
    w= w.replace('ⱀⱓ',"nj");
    w=w.replace("ⱁ","o");
    w= w.replace('ⱂ',"p");
    w=w.replace("ⱃ","r");
    w= w.replace('ⱄ',"s");
    w=w.replace("ⱎ","š");
    w= w.replace('ⱅ',"t")
    w=w.replace("ⱆ","u");
    w= w.replace('ⰲ',"v");
    w=w.replace("ⰸ","z");
    w= w.replace("ž",'ⰶ');
    //
w= w.replace('ⰰ',"A")
    w=w.replace("ⰱ","B");
    w= w.replace('ⱌ',"C");
    w=w.replace("ⱍ","Č");
    w= w.replace('ⱋ',"Ć");
    w=w.replace("ⰴ","D");
    w= w.replace('ⰴⰶ',"DŽ");
    w=w.replace("ⰼ","Đ");
    w= w.replace('ⰵ',"E")
    w=w.replace("ⱇ","F");
    w= w.replace('ⰳ',"G");
    w=w.replace("ⱈ","H");
    w= w.replace('ⰻ',"I");
    w=w.replace("ⱓ","J");
    w= w.replace('ⰽ',"K");
    w=w.replace("ⰾ","L");
    w=w.replace("ⰾⱓ","LJ");
    w= w.replace('ⱞ',"M")
    w=w.replace("ⱀ","N");
    w= w.replace('ⱀⱓ',"NJ");
    w=w.replace("ⱁ","O");
    w= w.replace('ⱂ',"P");
    w=w.replace("ⱃ","R");
    w= w.replace('ⱄ',"S");
    w=w.replace("ⱎ","Š");
    w= w.replace('ⱅ',"T")
    w=w.replace("ⱆ","U");
    w= w.replace('ⰲ',"V");
    w=w.replace("ⰸ","Z");
    w= w.replace('ⰶ',"Ž");
     }
    


    //console.log("W is "+ w)
    //seting translated string
    setNewWord(newWords+=w) 

    })
   
  }
  
  
  }
  //console.log(newWord)
  //copy to clipboard function
  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
      setTimeout(()=>{
        setCopySuccess('')
      },1500)
    } catch (err) {
      setCopySuccess('Failed to copy!');
       setTimeout(()=>{
        setCopySuccess('')
      },1500)
    }
  };
  //clear all text from page
  const clearState=()=>{
   
    setText("")
    setNewWord("")
  }
  console.log("Target value",translateFrom)
  return (
    <div className="translator">
      <img src="https://images.pexels.com/photos/772690/pexels-photo-772690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="slike" />
     
     <div className="up">
       <h1>Translator </h1>
      <select name="choose" id="choose"onChange={(e)=>setTranslateFrom(e.target.value)}>
          <option value="1">Latin/glagolitic</option>
          <option value='2'>Glagolitic/latin</option>
        </select>
        <h3>Enter new text</h3>
       <textarea name="transText"value={text} onChange={(e)=>setText(e.target.value)} id="transText" cols="25" rows="6"></textarea>
       <button className="btn btn-translate" onClick={()=>translate()}>Translate</button>
       
       
         <button className="btn clearText"onClick={()=>clearState()}>Clear All Fields</button>
       </div>
       
     <div className="down"> 
     <h3>Translated text</h3>
      <textarea name="transText "value={newWord} id="transText" cols="25" rows="6" className='text2'></textarea>
      <button className="btn copyToClipboardButton" onClick={()=>copyToClipBoard(newWord)}>Copy to clipboard</button>
     
      </div>
       <p className="copySucess">{copySuccess}</p>
    </div>
  );
}

export default App;
