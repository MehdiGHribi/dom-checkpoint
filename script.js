function words(str){
    let wcount = 0,vcount = 0,ucount =0,i = 0
    while(i < str.length){
        let ch = str[i]
         
        // condition checking for word count
        if (ch == " " || ch == ".")
            wcount += 1
             
        // condition checking for vowels
        // in lower case    
        if(ch == "a" || ch == "e" ||
           ch == "i" || ch == 'o' || ch == "u")
            vcount += 1
             
        // condition checking for vowels in uppercase
        if (ch == "A" || ch == "E" ||
            ch == "I" || ch == 'O' || ch == "U")
            vcount += 1
 
        // condition checking for upper case characters
        if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90){
            ucount += 1
        }
        i += 1
    }
         
    document.write("number of words = ", wcount,"</br>")
    document.write("number of vowels = ", vcount,"</br>")
    document.write("number of upper case characters = ",
                                        ucount,"</br>")
}
     
// a method to print the frequency
// of each character.
function frequency(str){
     
    let i = 1
     
    // checking each and every
    // ascii code character
    while(i < 127){
        let ch1 = String.fromCharCode(i);
        let c = 0
        let j = 0
        while(j < str.length){
            let ch2 = str[j]
            if(ch1 == ch2)
                c += 1
            j += 1
        }
             
        // condition to print the frequency
        if(c > 0)
            document.write("Character:", ch1 + " Frequency:", c,"</br>")
        i += 1
    }
}