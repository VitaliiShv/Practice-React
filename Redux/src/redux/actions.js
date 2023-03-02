// import { nanoid } from 'nanoid';
// import { createAction } from '@reduxjs/toolkit';

// // const addTask = {
// //   type: 'tasks/addTask',
// //   payload: {
// //     id: 'Generated id',
// //     text: 'User entered text',
// //     completed: 'false',
// //   },
// // };

// // export const addTask = text => {
// //   return {
// //     type: 'tasks/addTask',
// //     payload: {
// //       id: nanoid(),
// //       text,
// //       completed: false,
// //     },
// //   };
// // };

// export const addTask = createAction('tasks/addTask', text => {
//   return {
//     payload: {
//       id: nanoid(),
//       text,
//       completed: false,
//     },
//   };
// });

// // const deleteTask = {
// //   type: 'task/deleteTask',
// //   payload: 'Task id',
// // };

// // export const deleteTask = taskId => {
// //   return {
// //     type: 'task/deleteTask',
// //     payload: taskId,
// //   };
// // };

// export const deleteTask = createAction('task/deleteTask', taskId => {
//   return {
//     payload: taskId,
//   };
// });

// // const toggleCompleted = {
// //   type: 'task/toggleCompleted',
// //   payload: 'Task id',
// // };

// // export const toggleCompleted = taskId => {
// //   return {
// //     type: 'tasks/toggleCompleted',
// //     payload: taskId,
// //   };
// // };

// export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
//   return {
//     payload: taskId,
//   };
// });

// // const setStatusFilter = {
// //   type: 'filters/setStatusFilter',
// //   payload: 'filterValue',
// // };

// // export const setStatusFilter = value => {
// //   return {
// //     type: 'filters/setStatusFilter',
// //     payload: value,
// //   };
// // };

// export const setStatusFilter = createAction(
//   'filters/setStatusFilter',
//   value => {
//     return {
//       payload: value,
//     };
//   }
// );
