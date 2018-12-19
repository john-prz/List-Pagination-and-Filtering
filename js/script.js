/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/***********************Global START ***********************/
const divPage = document.querySelector('.page');
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;
/***********************Global END***********************/

/***********************Functions START***********************/
//function to dynamically show or hide students based on current selected page
const showPage = (pageLink) => {
  const pageNumber = (parseInt(pageLink.textContent));
  let firstStudentIndex;
  let lastStudentIndex;

  if (pageNumber === 1) {
    firstStudentIndex = 0;
  }
  else {
    firstStudentIndex = (pageNumber - 1) * studentsPerPage;
  }

  lastStudentIndex = firstStudentIndex + studentsPerPage - 1;

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
  //loop based on numOfPages to create page links
  for(let i = 0; i < numOfPages; i ++) {
    //create lis and links
    const li = document.createElement('li');
    const a = document.createElement('a');
    //append link to li and li to ul
    ul.appendChild(li);
    li.appendChild(a);
    //assign values to link properties
    a.href = "#";
    a.textContent = i + 1;

    a.addEventListener('click', (event) => {
      const pageLink = event.target
      showPage(pageLink);
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
/***********************Functions END***********************/

/***********************User Event Listeners START***********************/
appendPageLinks();
/***********************User Event Listeners END***********************/
