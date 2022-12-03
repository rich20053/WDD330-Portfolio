const linklist = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "Week 5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week 6 notes",
        url: "week6/index.html"
    },
    {
        label: "Week 7 notes",
        url: "week7/index.html"
    },
    {
        label: "Week 8 notes",
        url: "week8/index.html"
    },
    {
        label: "Week 9 notes",
        url: "week9/index.html"
    },
    {
        label: "Week 10 notes",
        url: "week10/index.html"
    },
    {
        label: "Week 11 notes",
        url: "week11/index.html"
    }
  ]

for (i=0; i<linklist.length; i++) {
    let line = document.createElement('li');
    let link = document.createElement('a');
    // Change the properties of the a element to contain the link for the week
    link.href = linklist[i].url;
    link.textContent = linklist[i].label;
    // Add/append the link element to the line item
    line.appendChild(link);
    
    //<li>Lesson 2:  <a href="./lesson2/design-principles.html">Design Principles</a></li>

    // Add/append the line item to the list
    document.querySelector('#TableOfContents').appendChild(line);
}






