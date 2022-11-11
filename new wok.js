var a = "abc"
alert(a);
var a = 20
var b = 10
var c = a / b
console.log(c);
var c = a + b
var c = a - b
var a = 10
var b = a++
var c = a + b
var a = 11
var b = 30
var c = a + b - a++ + --b + ++a - b + --b
console.log(c);
var a = prompt('write your subject',"English")
var officer = true
var assisstent = true

if (officer === false){
    alert("Work Submitted To Officer")
}
 if (assisstent === false){
    alert("Work Submitted To Assisstent")
}else 
{alert("Work Return")
}
var fruit1 = "mango"
var fruit2 = "orange"
var fruit3 = "grapes"
var fruit4 = "pineapple"
var fruit5 = "apple"

var fruits = ["mango","orange",'grapes',"pineapple","apple"]
console.log(fruits[3])

var a = ["affan","nasir","shahzaib","shoaib","sheriyar"]
a.push("huanin");
a.pop();
a.shift();
a.unshift("saif");
var b = a.slice(0,3)
var c = a.splice(1,4)
console.log(b);
console.log(c);

var f = a.indexOf("shahzaib")
console.log(f);
for(var i = 0; i < 10; i++){
    alert("continued")
}

var a = ["a","b","c","d","e","f"]
var b = ("e")
for(var i = 0; i < a.length; i++){
    if(b == a[i]){alert(("Word Found"))
    wordfound = true
    break;
}
}
if(wordfound == true){
    alert("Word Found")
}else{alert("Word Not Found");}
for(var i = 0; i < 10; i++){
    console.log("2 *" + (i + 1) + "=" + 2 * (i + 1))
}