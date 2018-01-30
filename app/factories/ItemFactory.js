// "use strict";

// angular.module("todoApp").factory("ItemFactory", ($q, FBUrl, $http) => {
//   // let items = [
//   //   {
//   //     id: 0,
//   //     task: "mow the lawn",
//   //     isCompleted: false,
//   //     dueDate: "12/5/17",
//   //     assignedTo: "Greg",
//   //     location: "Joe's house",
//   //     urgency: "low",
//   //     dependencies: "sunshine, clippers, hat, water, headphones"
//   //   },
//   //   {
//   //     id: 1,
//   //     task: "grade quizzes, I mean Mastery Watzits",
//   //     isCompleted: false,
//   //     dueDate: "12/5/17",
//   //     assignedTo: "Joe",
//   //     location: "NSS",
//   //     urgency: "high",
//   //     dependencies: "wifi, tissues, vodka"
//   //   },
//   //   {
//   //     id: 2,
//   //     task: "take a nap",
//   //     isCompleted: false,
//   //     dueDate: "5/21/18",
//   //     assignedTo: "Joe",
//   //     location: "Porch of lakefront cabin",
//   //     urgency: "medium",
//   //     dependencies: "hammock, silence"
//   //   }
//   // ];

//   // function getTodoItems() { //THIS IS WHAT WE WERE USING BEFORE FIREBASE
//   //   // return items;
//   // }

//   function getTodoItems() {
//     return $q((resolve, reject) => {
//       $http
//         .get(`${FBUrl}/items.json`)
//         //{itemsData} (below) is syntax for destructuring! It's cool. New to ES6. Get used to it. we will use a lot in nodd
//         //destructuring is a shortcut for assigning variables out of objects
//         // let obj = { name: "Fred"};
//         // const { name } = obj;
//         // console.log(name) and you'll get "Fred", usually you'd have to do console.log(obj.name)
//         .then (( {itemsData} ) => {
//           // could do {itemsData: { stuff }} to keep going further into the object
//           // and the {itemsData} is the same as let taskData = itemsData.data
//           console.log("tasks", itemsData);
//           let taskArr = Object.keys(itemsData).map(taskKey => {
//             console.log("taskKey", taskKey);
//             itemsData[taskKey].id = taskKey;
//             return itemsData[taskKey];
//           });
//           console.log('taskArr',taskArr);
//           resolve(taskArr);
//         })
//         // the above works the same as this, but withough having to set an explicit var for tasks.data
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }

//   function addNewItem(todoItem) {
//     // todoItem.id = items.length;
//     // items.push(todoItem);
//     return $q((resolve, reject) => {
//       $http
//         .post(`${FBUrl}/items.json`,
//         JSON.stringify(todoItem)
//         )
//         .then( (data) => {
//           resolve(data);
//         console.log("New Item Posted", data.data.name);
//         })
//         .catch( (error) => {
//           reject(error);
//         });
//     });
//   }

// function updateItem(todoItem, itemId) {
//   return $q((resolve, reject) => {
//     $http
//       .put(`${FBUrl}/items/${itemId}.json`),
//       JSON.stringify(todoItem)
//   })
// }

// //here we are building a bunch of objects by listing variables
// //we are building an object and a value
// //getTodoItems, for instance, stands for a key and a value
//   return { getTodoItems, addNewItem, updateItem };
// });

"use strict";

angular.module("todoApp").factory("ItemFactory", (FBUrl, $http, $q) => {

  function getTodoItems() {
    return $q((resolve, reject) => {
      $http
        .get(`${FBUrl}/items.json`)
        // {data} is syntax for destructuring! It's cool. New to ES6. Get used to it. We will use a lot in Node
        .then(({ data }) => {
          console.log("tasks", data);
          let taskArr = Object.keys(data).map(taskKey => {
            console.log("taskKey", taskKey);
            data[taskKey].id = taskKey;
            return data[taskKey];
          });
          console.log("taskArr", taskArr);
          resolve(taskArr);
        });
      // The above works the same as this, but without having to set an explicit var for tasks.data
      // .then(tasks => {
      //   console.log("tasks", tasks);
      //   let taskData = tasks.data;
      //   let taskArr = Object.keys(taskData).map(taskKey => {
      //     console.log("taskKey", taskKey);
      //     taskData[taskKey].id = taskKey;
      //     return taskData[taskKey];
      //   });
      //   console.log("taskArr", taskArr);
      //   resolve(taskArr);
      // })
      // .catch(err => {
      //   reject(err);
      // });
    });
  }

  function addNewItem(todoItem) {
    // todoItem.id = items.length;
    // items.push(todoItem);
    return $q((resolve, reject) => {
      $http
        .post(`${FBUrl}/items.json`, JSON.stringify(todoItem))
        .then(data => {
          console.log("New Item posted", data.data.name);
          resolve(data.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }

  function getTodoItem(todoItemId) {
    return $q((resolve, reject) => {
      $http
        .get(`${FBUrl}/items/${todoItemId}.json`)
        .then(item => {
          resolve(item.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  function updateItem(todoItem, itemId) {
    return $q((resolve, reject) => {
      $http
        .put(`${FBUrl}/items/${itemId}.json`,
        JSON.stringify(todoItem)
        )
        .then((data) => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  function deleteItem(todoItemId) {
    return $q((resolve, reject) => {
      $http
        .delete(`${FBUrl}/items/${todoItemId}.json`)
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  return { getTodoItems, getTodoItem, addNewItem, updateItem, deleteItem };
});