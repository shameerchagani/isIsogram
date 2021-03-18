// 
let btnCheck = document.getElementById('btn-check')
btnCheck.addEventListener('click', 
function(e)
 {
   e.preventDefault()
   
   let sWord = document.getElementById('sWord').value
   if(sWord.length > 1){
    for (let i = 0; i < sWord.length; i++)
    if (sWord.substring(i + 1).includes(sWord.charAt(i)))
      return document.getElementById('demo').innerHTML = `${sWord} is not an Isogram`;
  return document.getElementById('demo').innerHTML = `${sWord} is an Isogram`;
   }else document.getElementById('demo').innerHTML = "Please enter a valid word(s) to Check"
  
 }
 )