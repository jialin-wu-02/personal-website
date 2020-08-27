import React from 'react';
import Article from '../../Component/Article';

const databaseOne = (props) => (
  <div className="Craft__container">
      <Article>
      <h2> Database Basics </h2>
      <h3> What is a Database? </h3>
      <p> Database is a type of infrastructure to store large amount of data in a computer system. </p>
      <p> Database is all around us. When you share a photo on your instagram, the photo and the related text would be stored into a database. When you remove a friend on snapchat, you are accessing its database and deleting an entry from the `friends` column. </p>
      
      


      <h4> REST API </h4> 
      <p> REST API is an acronym for REpresentational State Transfer. It is simply a style for how API should be constructed and how data is transmitted. </p>
      <p> Here are the six guiding principles of REST from https://databaseOneapi.net/: </p>
      <ol> 
          <li>
          <b>Client-server</b> – By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across moltiple platforms and improve scalability by simplifying the server components.
          </li>
          <li>
          <b>Stateless</b> – Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.
          </li>
          <li>
          <b>Cacheable</b> – Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.
          </li>
          <li>
          <b>Uniform interface</b> – By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. In order to obtain a uniform interface, multiple architectural constraints are needed to guide the behavior of components. REST is defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia as the engine of application state.
          </li>
          <li>
          <b>Layered system</b> – The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior such that each component cannot “see” beyond the immediate layer with which they are interacting.
          </li>
          <li>
          <b>Code on demand</b> (optional) – REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.
          </li>
      </ol>
      <p> A server application that offers a REST API is also called a databaseOne server. </p>
      </Article>
  </div>
)

export default databaseOne;

// # 

// ## 

// Database is a type of infrastructure to store large amount of data in a computer system. 

// Database is all around us. When you share a photo on your instagram, the photo and the related text would be stored into a database. When you remove a friend on snapchat, you are accessing its database and deleting an entry from the `friends` column. 

// ## Types of Databases

// There are mainly two types of databases: SQL database and NoSQL database.

// ### SQL Database

// SQL Database (short for SQL) is often what you will learn in school (i.e. CS186). It is a relational database that uses a structured query language (SQL) for defining and manipulating data. 

// SQL Database is table based, which means it consists of rows and columns. It is a more traditional way of storing the data. Common SQL Database includes `mySQL`, `SQLite`, `Oracle Cloud Database`.

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c94532e-94bd-4dcc-94a2-183531aeecef/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c94532e-94bd-4dcc-94a2-183531aeecef/Untitled.png)

// A common SQL Database Table would look something like this.

// ### NoSQL Database

// NoSQL Databases are databases where you do not use SQL to define and manipulate the data. There are various kinds of NoSQL Database out there, we will focus on `MongoDB` in our tutorial.

// NoSQL Database uses a document-like (JSON-like) way to store all your data. Unlike SQL, where changing your data schema means to recreate the database by adding a column. NoSQL Database allows you to change your data schema in a much easier way due to the JSON-like data storage methods.

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52d45828-ee7e-4140-8628-5d21c400dc43/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/52d45828-ee7e-4140-8628-5d21c400dc43/Untitled.png)

// An entry in NoSQL database.

// ## Database in Web Development

// Among the tons of choices of databases and backend framework, we have picked the two most common and widely used ones: 

// 1. `Flask` + `SQLite`
// 2. `Express` + `MongoDB`

// By learning both SQL and NoSQL databases, you would be familiar with most of the databases that companies use nowadays.

// # Flask + SQLite

// `SQLite` is a light-weight SQL Database that is easy to setup. Usually, database needs to start a separate server to process all the queries. However, SQLite is directly based upon the database files, meaning you can create a `site.db` file that can store everything that you need for a database.

// To connect Flask with SQLite, we are going to use a Python SQL Toolkit called `SQLAlchemy`. It provides a easy way to interact with any SQL database by writing Python code.

// ## Let's build a TODO app.

// In this course, we will be building the APIs and the database for a TODO app. The TODO app will consist of the following functionality:

// 1. Create a TODO and store it inside a database.
// 2. Update a already created TODO inside the database.
// 3. Delete an unwanted TODO.

// ## Preparation

// I have created a quick flask template for us to build upon. It already contains all the name of the endpoint that we are going to be building. You can find it as `[todo.py](http://todo.py)` in `before-class-material` folder. I have also pasted it down below.

// ```python
// from flask import Flask
// from flask import jsonify

// app = Flask(__name__)

// # TODO: 
// # 0. Config and Connect to SQLite database.
// # 1. Add todos into database.
// # 2. Update todos within the database.
// # 3. Delete todos.

// @app.route("/")
// def weclome():
//     return jsonify("Welcome to TODO App.")

// @app.route("/todo/list")
// def getAllTodos():
//     return jsonify({
//         "1": "Purchase Head First Java"
//     })

// @app.route("/todo/<todo_id>")
// def getSingleTodo(todo_id):
//     return jsonify({
//         todo_id: "Cancel Netflix Subscription"
//     })

// # NOTE: This is not how you usually pass down a paragraph of text. 
// #       Usually, we should put the todo_content inside the body
// #       of the request. For the sake of this course, we will put 
// #       the todo_content in the request url.
// @app.route("/todo/create/<todo_content>")
// def createTodo(todo_content):
//     return jsonify({
//         "1": todo_content
//     })

// @app.route("/todo/delete/<todo_id>")
// def deleteTodo(todo_id):
//     return jsonify({
//         todo_id: "Delete"
//     })

// @app.route("/todo/update/<todo_id>/<todo_content>")
// def updateTodo(todo_id, todo_content):
//     return jsonify({
//         todo_id: todo_content
//     })

// if __name__ == '__main__':
//     app.run(debug=True)
// ```

// ## Setup

// ### Create Database Model

// Let's first create a URI for the sqlite database and connect it to SQLAlchemy.

// `app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'` specifies where the database is going to be stored. `sqlite:///todo.db` means that you can find the todo database in the same folder as `todo.py`. 

// ```python
// from flask import Flask
// from flask import jsonify
// from flask_sqlalchemy import SQLAlchemy

// app = Flask(__name__)
// app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'

// db = SQLAlchemy(app)
// ```

// Before we set up the database, we have to have a `model` for a database. The class `model` is going to provide the schema for the database, aka the name of the column, the type of the column, the database name, and etc.

// To build our naive todo app, the database needs to have two columns, an `id` column that gives each todo a unique id, and a `content` column that allows each todo to keep track of what their content is.

// Therefore, we build the following class to implement the schema mentioned above.

// ```python
// class Todo(db.Model):
//     id = db.Column(db.Integer, primary_key=True)
//     content = db.Column(db.String(200), nullable=False)

//     def __init__(self, content):
//         self.content = content

//     def __repr__(self):
//         return '<TODO ID: {}. Content: {}. >'.format(self.id, self.content)
// ```

// Class `Todo` inherits from `db.Model`, which tells the database that this is part of the database model. Each instance variable in this class with `db.Column` indicates a column with the name of that instance variable in the database.

// To indicate the type of a column, simply pass in the corresponding parameter into `db.Column`. We want the `id` to be type Integer and `content` to be type String. 

// By passing in the `primary_key=True` flag, we specify the id column to be the primary key of the database, meaning that the id column can be used to uniquely identified each todo. 

// - This also means that we don't actually need to manually keep track of a id variable and increase it everytime a todo is created. The database is going to handle that itself.

// The `__repr__` method is used to display a todo in a user friendly way. The `__init__` method is used to create a todo instance.

// ### Config SQLite database with SQLAlchemy

// Now that we have created our todo model, let us create the SQLite database by using SQLAlchemy. 

// Open a interactive python shell in the terminal, and then use `create_all()` method to create the database that we want.

// ```python
// >>> from todo import db
// >>> db.create_all()
// ```

// - From the first command, you may see the following warning, you can basically ignore this warning for now.

//     ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6f858e8-d7b8-4a77-9ed1-0ed12baea0c5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6f858e8-d7b8-4a77-9ed1-0ed12baea0c5/Untitled.png)

// After you ran `db.create_all()`, you should see a `todo.db` file inside your project root folder. As simple as this, you have successfully created your first sqlite database!

// ## Create CURD operations to the database

// CURD stands for create, update, retrieve, and delete. For any database, most of the operations can be seen as one of the four operations. In our todo app, we also need the ability to support CURD operations.

// 1. Create: the ability to create a todo and insert it into the database.
//     - Related endpoint: `/todo/create/<todo_content>`
// 2. Update: the ability to update the content of a todo.
//     - Related endpoint: `/todo/update/<todo_id>/<todo_content>`
// 3. Retrieve: the ability to provide the content of a todo by giving a the id of a todo.
//     - Related endpoint: `/todo/list`, `/todo/<todo_id>`
// 4. Delete: the ability to delete a todo.
//     - Related endpoint: `/todo/delete/<todo_id>`

// This is the layout of our API endpoints, and now let us see how we implement each operation.

// ### Create TODO

// To create a todo, we call the Todo() class init method and init a new Todo object. Then we use `db.session.add()` to add the new todo we just created.

// We have to run `db.session.commit()` to make sure all the changes are committed into the database.

// Finally, we return the newly created todo's id and the content of the todo.

// - Notice that we never create the todo id ourselves, the database will automatically handle this.

// ```python
// @app.route("/todo/create/<todo_content>")
// def createTodo(todo_content):
//     newTodo = Todo(todo_content)
//     db.session.add(newTodo)
//     db.session.commit()
//     return jsonify({
//         newTodo.id: todo_content
//     })
// ```

// After we implement out create endpoint, we can try it out by going to [`http://127.0.0.1:5000/todo/create/hello world`](http://127.0.0.1:5000/todo/create/hello%20world) this url.

// - This url will create a todo with the content `hello world`. Feel free to try out other content.

// ### Retrieve TODO

// Now we can create a new todo, however, we have no way to ensure that the todo is really created in the database. That's where the retrieve endpoint would be very helpful for us.

// Let's first create the `/todo/list` endpoint to retrieve all the todos that we have created.

// ```python
// @app.route("/todo/list")
// def getAllTodos():
//     todoList = Todo.query.all()
//     todoContent = [(todo.id, todo.content) for todo in todoList]
//     return jsonify(todoContent) 
// ```

// We can use `Todo.query.all()` to query all the data in the todo database. It will return a list a Todo object. Since Todo object cannot be directly jsonify, we need to parse it. I parse it using a simple list comprehension. There is also a package called `marshmallow` that provides a more powerful way to represent an object.

// [marshmallow: simplified object serialization - marshmallow 3.7.1 documentation](https://marshmallow.readthedocs.io/en/stable/)

// Now, if you go to `/todo/list`, you should be able to see all the todos you just created.

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0b2311e-e6f7-485b-ac30-a82f652a1cac/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0b2311e-e6f7-485b-ac30-a82f652a1cac/Untitled.png)

// Now what if we want to just fetch the data of a single todo? We solve this by using the `todo/<todo_id>` endpoint. 

// To query the Todo database with a filter, we use the `filter_by` method. By providing `id=todo_id`, it will match all the todo that has that specific todo_id, and since todo_id is the primary key, we use `.first()` to access the one and only todo returned.

// ```python
// @app.route("/todo/<todo_id>")
// def getSingleTodo(todo_id):
//     singleTodo = Todo.query.filter_by(id=todo_id).first()
//     return jsonify([(singleTodo.id, singleTodo.content)])
// ```

// ### Delete TODO

// To delete a TODO, we need to first find the todo then use `db.session.delete()` to delete it.

// ```python
// @app.route("/todo/delete/<todo_id>")
// def deleteTodo(todo_id):
//     singleTodo = Todo.query.filter_by(id=todo_id).first()
//     db.session.delete(singleTodo)
//     db.session.commit()
//     return jsonify({
//         todo_id: "Deleted"
//     })
// ```

// After creating the delete endpoint, try visit `/todo/delete/1` to see whether it deletes the first todo.

// ### Update TODO

// To update a TODO is very similar to delete it, we first need to find the todo.

// After we find the TODO, we can directly access the `.content` attribute to change the content of the todo. Then we do `db.session.commit()`. The updated content will be stored in the database.

// ```python
// @app.route("/todo/update/<todo_id>/<todo_content>")
// def updateTodo(todo_id, todo_content):
//     singleTodo = Todo.query.filter_by(id=todo_id).first()
//     singleTodo.content = todo_content
//     db.session.commit()
//     return jsonify({
//         todo_id: todo_content
//     })
// ```