const questions = [
    {
      id: 1,
      title: 'What is an exception?',
      info: `Exception is an abnormal condition which occurs during the execution of a program and disrupts normal flow of the program. This exception must be handled properly. If it is not handled, program will be terminated abruptly.`
    },
    {
      id: 2,
      title: ' How the exceptions are handled in Java? OR Explain exception handling mechanism in Java?',
info:`Exceptions in Java are handled using try, catch and finally blocks.

try block : The code or set of statements which are to be monitored for exception are kept in this block.

catch block : This block catches the exceptions occurred in the try block.

finally block : This block is always executed whether exception is occurred in the try block or not and occurred exception is caught in the catch block or not.`    
    },
    
    {
      id: 3,
      title: '     Can we write only try block without catch and finally blocks?      ',
info:`No, It shows compilation error. The try block must be followed by either catch or finally block. You can remove either catch block or finally block but not both.` 
 },
      
 {
  id: 4,
  title: ' Can we throw an exception manually? If yes, how?  ',
info:`Yes, we can throw an exception manually using throw keyword. Syntax for throwing an exception manually is

throw InstanceOfThrowableType;` 
},

  ]
  export default questions
  