const questions = [
    {
      id: 1,
      title: 'What is a Set? What are Core Classes Implementing Set Interface?',
      info: `A Set models the mathematical set in set theory. The Set interface is similar to List interface but with some differences.

      Unlike List, A Set does not have index-based operations. It only has methods that are inherited by the Collection interface.
      A Set is not an ordered collection. So no ordering is preserved while adding or removing elements.
      A Set guarantees the “uniqueness of elements”. It does not store duplicate elements.
      Set also adds a stronger contract on the behavior of the equals() and hashCode() operations, allowing two Set instances to be compared meaningfully even if their implementation types differ. Two Set instances are equal if they contain the same elements.`
    },
    {
      id: 2,
      title: 'Difference between Set and List?',
      info:`The most noticeable differences are :

      Set is unordered collection where List is ordered collection based on zero based index.
      List allow duplicate elements but Set does not allow duplicates.
      List does not prevent inserting null elements (as many you like), but Set will allow only one null element.`,
    
    },
    
      
  ]
  export default questions
  