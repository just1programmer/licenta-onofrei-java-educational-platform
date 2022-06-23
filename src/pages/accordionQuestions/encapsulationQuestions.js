const questions = [
    {
      id: 1,
      title: 'What is Encapsulation in Java? Why is it called Data hiding?',
      info : `The process of binding data and corresponding methods (behavior) together into a single unit is called encapsulation in Java.

      In other words, encapsulation is a programming technique that binds the class members (variables and methods) together and prevents them from being accessed by other classes, thereby we can keep variables and methods safes from outside interference and misuse.
      
      If a field is declared private in the class then it cannot be accessed by anyone outside the class and hides the fields within the class. Therefore, Encapsulation is also called data hiding.`
    },
    {
      id: 2,
      title: 'What are the important features of Encapsulation?',
      info: ` Encapsulation means combining the data of our application and its manipulation in one place. It allows the state of an object to be accessed and modified through behavior. It reduces the coupling of modules and increases the cohesion inside them.`,
    },
    {
      id: 3,
      title: 'What is the advantage of Encapsulation?',
      info: `There are the following advantages of encapsulation in Java. They are as follows:

      The encapsulated code is more flexible and easy to change with new requirements.
      It prevents the other classes to access the private fields.
      Encapsulation allows modifying implemented code without breaking other code who have implemented the code.
      It keeps the data and codes safe from external inheritance. Thus, Encapsulation helps to achieve security.
      It improves the maintainability of the application.`
    },
   
      
  ]
  export default questions
  