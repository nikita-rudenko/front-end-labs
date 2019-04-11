(function(window, document) {
  "use strict";

  var data, source, template;

  // Our data object
  data = [
    {
      id: 0,
      author: {
        firstname: "John",
        lastname: "Doe",
        id: 1234
      },
      comment: "Hello",
      like: true
    },
    {
      id: 1,
      author: {
        firstname: "John",
        lastname: "Travolta",
        id: 1235
      },
      comment: "LOL",
      like: false
    },
    {
      id: 2,
      author: {
        firstname: "Vasya",
        lastname: "Smith",
        id: 1236
      },
      comment: "Nice!!!!",
      like: true
    }
  ];

  // Get the template source
  source = $("#my-template").html();

  // Compile the template into a Handlebars function
  template = Handlebars.compile(source);

  // Pass our data object to the compiled Handlebars function
  // Insert back into the page
  $("#comment").html(template(data));

  Handlebars.registerHelper('fullName', function(person) {
    return person.firstName + " " + person.lastName;
  });
})(window, document);
