const questions = [
    {
      id: 1,
      title: ' What is an interface in Java?',
        info:'An interface in Java is a mechanism that is used to achieve complete abstraction. It is basically a kind of class that contains only constants and abstract methods.'
    },
    {
      id: 2,
      title: '  Can we define private and protected modifiers for data members (fields) in interfaces?',
      info: 'No, we cannot define private and protected modifiers for variables in interface because the fields (data members) declared in an interface are by default public, static, and final.'    },
    {
      id: 3,
      title: 'Which modifiers are allowed for methods in an Interface?',
      info:
        'Only abstract and public modifiers are allowed for methods in interfaces.',
      },
    {
      id: 4,
      title: ' Suppose A is an interface. Can we create an object using new A()?',
        info:'No, we cannot create an object of interface using new operator. But we can create a reference of interface type and interface reference refers to objects of its implementation classes.'
    },
    {
      id: 5,
      title: 'Can we define an interface with a static modifier?',
        info: ' Yes, from Java 8 onwards, we can define static and default methods in an interface. Prior to Java 8, it was not allowed.'
    },
    {
      id: 6,
      title: 'Can an interface extend another interface in Java?',
        info: 'Yes, an interface can extend another interface.'
    },
    {
      id: 7,
      title: 'Can an interface implement another interface?',
        info:'No, an interface cannot implement another interface.'
    },
    {
      id: 8,
      title:' Is it possible to define a class inside an interface?',
        info:' Yes, we can define a class inside an interface.'
    }
  ]
  export default questions
  