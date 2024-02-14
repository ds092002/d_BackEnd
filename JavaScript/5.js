/*
        string => collection of characters (Array)
*/

// let txt;
// let str = "Hello World";
// str = 'Skill Qode'

// txt = "Hello Guys'How Are You"
// txt = 'Hello Guys"How Are You'

// console.log(txt);

/*
        String Methods
        Length -> property
        slice(start position , end position)
        substing(start position , end position)
        substr(start position , length)
        toUpperCase -> upper case convert
        toLowerCase -> lower case convert
        charAt -> return index character
        charCodeAt -> return index character ASCII value
        concat -> merge two string
*/        

// let data = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.";

// console.log(data.length)

// console.log(data.slice(12,56));          // s the world's most popular programming langu
// console.log(data.slice(20));          // string to rest of all string
// console.log(data.slice(-18,-5));          // last to counting
// console.log(data.slice(-18));          // last to counting

// console.log(data.substring(12,56));          // s the world's most popular programming langu
// console.log(data.substring(20));          // string to rest of all string
// console.log(data.substring(-4));          // counting to 0
// console.log(data.substring(-4 , 5));          // counting to 0

// console.log(data.substr(5,23));     // cript is the world's mo
// console.log(data.substr(-5,23));     //  Web.

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

// console.log(data.charAt(56));
// console.log(data.charCodeAt(56));

// console.log(data.concat("Hello" , "\n World!"));

let data = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.";

// console.log(data.replace("JavaScript" , "Moye Moye "))
// console.log(data.replace(/javaScript/i , "Moye Moye "))
// console.log(data.replace(/JavaScript/g , "Moye Moye "))

// console.log(data.replaceAll("programming" , "Moye Moye"))

// let txt = "           Hello World            ";
// console.log(txt);
// console.log("Length is : "+txt.length)

// console.log(txt.trim());                // Remove Extra Space
// console.log("Length is : "+(txt.trim()).length);

// console.log(txt.trimStart());                // Remove Extra Space From Start
// console.log("Length is : "+(txt.trimStart()).length);

// console.log(txt.trimEnd());                // Remove Extra Space From End
// console.log("Length is : "+(txt.trimEnd()).length);

// let txt = "Hello";
// console.log(txt.padStart(8,"XXX"));

// let txt = "1234";
// console.log(txt.padEnd(8,"*"));
// console.log(txt.padEnd(8,"*").concat(9));

console.log(data.split(" "));