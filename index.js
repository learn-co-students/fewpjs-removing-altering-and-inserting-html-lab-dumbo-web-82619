// Write your code here!

// Selects the main element with an id ='main' and removes it.
// Step 1)    ✓ no longer has DOM node 'main#main'
document.querySelector('main#main').remove();

//Step 2)     ✓ has a 'newHeader' variable that points to node 'h1#victory'
/*When the test states points to node it means creating/assigning */
let newHeader = document.createElement('h1');

//Step 3)      ✓ has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id = "victory"
// Step 4)     ✓ has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "Theresa is the champion"
