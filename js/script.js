/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

///Global variables & constants

const divPage = document.querySelector('.page');
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 9;

//function to dynamically show or hide students based on current selected page
const showPage = (firstStudentIndex) => {

  let lastStudentIndex = firstStudentIndex + studentsPerPage;

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

const createPageLinks = () => {
  
}

const appendPageLinks = () => {
  //create div and ul that will contain pagination links
  const div = document.createElement('div');
  const ul = document.createElement('ul');

  divpPage.appendChild(div);
  div.appendChild(ul);
  div.className = "pagination";

  createPageLinks();
}
