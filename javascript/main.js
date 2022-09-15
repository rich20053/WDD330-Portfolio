const linklist = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    }
  ]

for (i=0; i<linklist.length; i++) {
    let line = document.createElement('li');
    let link = document.createElement('a');
    // Change the properties of the a element to contain the link for the week
    link.href = linklist[i].url;
    link.textContent = linklist[i].label;
    console.log(link);
    // Add/append the link element to the line item
    line.appendChild(link);
    console.log(line);
    
    //<li>Lesson 2:  <a href="./lesson2/design-principles.html">Design Principles</a></li>

    // Add/append the line item to the list
    document.querySelector('#TableOfContents').appendChild(line);
}






