const questions = [
    {
      id: 1,
      title: 'What is JDBC in Java?',
      info: `DBC(Java Database Connectivity) is a Java API, which is helpful in interaction with the database to retrieve, manipulate and process the data using SQL. It will make use of JDBC drivers for connecting with the database. By using JDBC, we can access tabular data stored in various types of relational databases such as Oracle, MySQL, MS Access, etc.`
    },
    {
      id: 2,
      title: 'What is ResultSet?',
      info: `The java.sql.ResultSet interface represents the database result set, which is obtained after the execution of SQL query using Statement objects.
      Object of ResultSet maintains a cursor pointing to the current row of data in the result set. Initially, the cursor is located before the first row. Then the cursor is moved to the next row by using the next() method. The next() method can be used to iterate through the result set with the help of a while loop. If there are no further rows, the next() method will return false.`
    },
    {
      id: 3,
      title: 'What is JDBC driver?',
      info:`JDBC driver is a software component having various classes and interfaces, that enables the Java application to interact with a database.

      To connect with individual databases, JDBC requires particular drivers for each specific database. These drivers are provided by the database vendor in addition to the database. For example:`,
    },
    {
      id: 4,
      title: 'Which data types are used for storing the image and file in the database table?',
      info:`BLOB data type is used to store the image in the database. We can also store videos and audio by using the BLOB data type. It stores the binary type of data.
      CLOB data type is used to store the file in the database. It stores the character type of data.`
    },

    {
      id: 5,
      title: 'What is Rowset?',
      info:`A RowSet is an object that encapsulates a row set from either JDBC result sets or tabular data sources such as files or spreadsheets. It supports component-based development models like JavaBeans, with the help of a standard set of properties and event notifications.
      The advantages of using RowSet are:
      It is easier and flexible to use.
      It is Scrollable and Updatable by default.`
    },
  
    

      
  ]
  export default questions
  