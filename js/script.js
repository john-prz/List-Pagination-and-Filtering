/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/***********************Global Decorations START ***********************/
const divPage = document.querySelector('.page');
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;
/***********************Global Global Decorations END***********************/

/***********************Functions START***********************/
//function to dynamically show or hide students based on current selected page
const showPage = (pageLink) => {
  const pageNumber = (parseInt(pageLink.textContent));
  //calculate index of the first student on page
  let firstStudentIndex  = (pageNumber === 1) ? 0 : (pageNumber - 1) * studentsPerPage;
  //calculate index of the last student on page
  let lastStudentIndex = firstStudentIndex + studentsPerPage - 1;

  for(let i = 0; i < students.length; i ++) {
    //add or remove the hide class based on index of students arr item
    if(i < firstStudentIndex || i > lastStudentIndex) {
      students[i].classList.add("hide");
    }
    else {
      students[i].classList.remove("hide");
    }
  }
}
//function to create page links
const createPageLinks = (ul) => {
  let numOfPages = Math.ceil(students.length/studentsPerPage);
  //declare an array that will store a block referance to all page links
  const pageLinksArr = [];
  //loop based on numOfPages to create page links
  for(let i = 0; i < numOfPages; i ++) {
    //create lis and links
    const li = document.createElement('li');
    const a = document.createElement('a');
    //add page links to array as they are created
    pageLinksArr.push(a);

    //append link to li and li to ul
    ul.appendChild(li);
    li.appendChild(a);
    //assign values to link properties
    a.href = "#";
    a.textContent = i + 1;

    //event listener for page links
    a.addEventListener('click', (event) => {
      const pageLink = event.target
      showPage(pageLink);

      //Remove class of active from all page links in linkArr
      for(let i = 0; i < pageLinksArr.length; i++){
        pageLinksArr[i].className = "";
      }
      //Assign clicked click a class of .active
      pageLink.className = "active";
    });
  }
}
//function to append page links to DOM
const appendPageLinks = () => {
  //create div and ul that will contain pagination links
  const div = document.createElement('div');
  const ul = document.createElement('ul');

  divPage.appendChild(div);
  div.appendChild(ul);
  div.className = "pagination";

  createPageLinks(ul);
}
//function to excute the program
const execute = () => {
  //buid Pagination
  appendPageLinks();
  //select first page
  const firstPage = document.querySelector('.pagination a');
  firstPage.className = "active";
  //show first page by default
  showPage(firstPage);
}
/***********************Functions END***********************/
execute();
/***********************Exe Start***********************/
