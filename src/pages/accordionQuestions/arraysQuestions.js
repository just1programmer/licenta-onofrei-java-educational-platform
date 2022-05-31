const questions = [
    {
      id: 1,
      title: ' What is an Array?',
      info:'An Array is a collection of similar data types. It can not have different data type. It can hold both primitive types (int, float, double) and object references. It is fixed in length i.e static in nature.'
    },
    {
      id: 2,
      title: ' How do you declare an Array in Java?',
      info: 'You can declare an Array in java by the following way :',
        image:'https://mathbits.com/JavaBitsNotebook/Arrays/arraygridpic.jpg'
    },
    {
      id: 3,
      title: 'Can you change the size of an Array in Java after creation?',
      info:
        'You can not change the size of Array after creation. Although there are other data-structures which can change size after creation.',
      },
    {
      id: 4,
      title: 'Can you pass a negative number in Array size?',
      info:'No, you cannot pass a negative number as the array size. Passing a negative number to the array size does not cause a compiler error. Instead, it raises a NegativeArraySizeException at run time.',
    },
    {
      id: 5,
      title: 'Can you declare an Array without an Array size?',
      info:" No, you can't declare an Array without the Array size. You will get a compile-time error.",
    },
    {
      id: 6,
      title: 'What is ArrayStoreException ? When is this exception thrown ?',
      info:"ArrayStoreException is a runtime exception. Array must contain the same data type elements.This exception is thrown to indicate that an attempt has been made to store the wrong type of object into an array of objects. In other words, if you want to store the integer Object in an Array of String you will get ArrayStoreException.",
      image :'https://rollbar.com/wp-content/uploads/2022/01/take-further-action-to-handle-arraystoreexception.png'
    },
    {
      id: 7,
      title: 'What is a two dimensional Array in java?',
      info : `An Array of an Array in java is called as two dimensional Array.` ,
      image: 'https://voyager.deanza.edu/~hso/cis35a/lecture/java10/images/jagged.png'
    },
    {
      id: 8,
      title:' What are the advantages and disadvantages of an Array?',
      image: 'https://images.slideplayer.com/1/679680/slides/slide_7.jpg'
    }
  ]
  export default questions
  