import './Panel.css';
import React, {useEffect} from 'react';

function Panel(){
    useEffect(() => {

        const plainText = document.getElementById("plainText")
        ,     cipherText = document.getElementById("cipherText");

        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        plainText.addEventListener("input", ()=>{
            let cipher = '';

            for(let i = 0; i < plainText.value.length; i++){
                if(plainText.value.charAt(i) == 'z'){
                    cipher += 'a';
                }else{
                    if(alphabet.includes(plainText.value.charAt(i))){
                        cipher += alphabet[alphabet.indexOf(plainText.value.charAt(i)) + 1];
                    }else{
                        cipher += plainText.value.charAt(i);
                    }
                }
            }
            cipherText.value = cipher;
        });

        cipherText.addEventListener("input", ()=>{
            let text = '';

            for(let i = 0; i < cipherText.value.length; i++){
                if(cipherText.value.charAt(i) == 'a'){
                    text += 'z';
                }else{
                    if(alphabet.includes(cipherText.value.charAt(i))){
                        text += alphabet[alphabet.indexOf(cipherText.value.charAt(i)) - 1];
                    }else{
                        text += cipherText.value.charAt(i);
                    }
                }
            }
            plainText.value = text;
        });
    });

    return(
        <div className='Wrapper'>
            <main className='Panel'>
                <input id="plainText" placeholder='Type text here...'/>
                <input id="cipherText" placeholder='Type cipher here...' />
            </main>
        </div>


    )
}

export default Panel;