const questions = [
    {
      id: 1,
      title: ' What is String in Java? String is a data type?',
      info: ` String is a Class in java and defined in java.lang package. It’s not a primitive data type like int and long. String class represents character Strings. String is used in almost all the Java applications and there are some interesting facts we should know about String. String in immutable and final in Java and JVM uses String Pool to store all the String objects.
      Some other interesting things about String is the way we can instantiate a String object using double quotes and overloading of “+” operator for concatenation.`
    },
    {
      id: 2,
      title: 'What are different ways to create String Object?',
      info: `We can create String object using new operator like any normal java class or we can use double quotes to create a String object. There are several constructors available in String class to get String from char array, byte array, StringBuffer and StringBuilder.`
      , image : 'https://www.homeandlearn.co.uk/java/images/variables/string_vars_code.gif'
    },

    {
        id: 3,
        title: 'What is the String Pool in Java?',
        info: `The String pool is a special type of memory maintained by the JVM.

        String pool is used to store unique string objects.
        
        When you assign the same string literal to different string variables, JVM saves only one copy of the String object in the String pool, and String variables will start referring to that string object.`
    } ,
    {
        id: 4,
        title: 'Why String is immutable?',
        info: `n most of the Java Interviews, you will face this question. Why do you think Java language designers kept string immutable?

        You can give the following reasons.
        
        Java String pool is possible because the String is immutable.
        
        If you assign the same string literal to many string variables, JVM will save only one copy of the string object in the Java string pool, and these variables will start referring to that string object.
        
        Also, another reason can be Security. We know that almost every Java program contains a string, and it is used to save important data like usernames and passwords. So it should not be changed in-between. Otherwise, there will be a security problem.
        `  },
    {
        id: 5,
        title: 'What is the difference between the String and StringBuffer?',
        info: `The String is a final class in Java. The String is immutable. That means we can not change the value of the String object afterword.

        Since the string is widely used in applications, we have to perform several operations on the String object. Which generates a new String object each time, and all previous objects will be garbage object putting the pressure on the Garbage collector.
        
        Hence, the Java team introduced the StringBuffer class. It is a mutable String object, which means you can change its value.
        
        The string is immutable, but the StringBuffer is mutable.`
       
    }
  
    
  ]
  export default questions
  