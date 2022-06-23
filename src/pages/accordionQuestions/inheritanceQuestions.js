const questions = [
    {
      id: 1,
      title: 'What is Inheritance in Java?',
      info: 'The technique of creating a new class by using an existing class functionality is called inheritance in Java. In other words, inheritance is a process where a child class acquires all the properties and behaviors of the parent class.'
    },
    {
      id: 2,
      title: 'Why do we need to use inheritance?',
      info: `Inheritance is one of the main pillars of OOPs concept. Some objects share certain properties and behaviors. By using inheritance, a child class acquires all properties and behaviors of parent class.

      There are the following reasons to use inheritance in java.
      
      We can reuse the code from the base class.
      Using inheritance, we can increase features of class or method by overriding.
      Inheritance is used to use the existing features of class.
      It is used to achieve runtime polymorphism i.e method overriding.
   `
    
    },
    {
      id: 3,
      title: 'What is super class and subclass?',
      info:`A class from where a subclass inherits features is called superclass. It is also called base class or parent class.

      A class that inherits all the members (fields, method, and nested classes) from other class is called subclass. It is also called a derived class, child class, or extended class.`,
 
    
    },
    {
      id: 4,
      title: ' How is Inheritance implemented/achieved in Java?',
      info:`Inheritance can be implemented or achieved by using two keywords:

      extends: extends is a keyword that is used for developing the inheritance between two classes and two interfaces.
      implements: implements keyword is used for developing the inheritance between a class and interface.`,

    
    },
    {
      id: 5,
      title: ' Can a class extend more than one class?',
      info:' No, one class can extend only a single class.',

    
    },
      {
      id: 6,
      title: 'What are the advantages of inheritance in Java?',
      info:`The advantages of inheritance in java are as follows:

      We can minimize the length of duplicate code in an application by putting the common code in the superclass and sharing it amongst several subclasses.
      Due to reducing the length of code, the redundancy of the application is also reduced.
      Inheritance can also make application code more flexible to change.
      `,

    
    }



    
      
  ]
  export default questions
  