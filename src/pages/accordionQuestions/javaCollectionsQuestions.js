const questions = [
    {
      id: 1,
      title: ' What do you understand by Collection Framework in Java?',
      info: `The Java Collection framework provides an architecture to store and manage a group of objects. It permits the developers to access prepackaged data structures as well as algorithms to manipulate data. The collection framework includes the following:

      Interfaces
      Classes
      Algorithm
      All these classes and interfaces support various operations such as Searching, Sorting, Insertion, Manipulation, and Deletion which makes the data manipulation really easy and quick.`
    },
    {
      id: 2,
      title: 'How the Collection objects are sorted in Java?',
      info:' Sorting in Java Collections is implemented via Comparable and Comparator interfaces. When Collections.sort()  method is used the elements get sorted based on the natural order that is specified in the compareTo() method. On the other hand when Collections.sort(Comparator) method is used it sorts the objects based on compare() method of the Comparator interface. ',
     
    },
    
      
  ]
  export default questions
  