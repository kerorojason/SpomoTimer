const axios = require('axios');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  // get all todos
  app.get('/api/todos', async (req, res) => {
    const user = await User.findById(req.user.id);
    res.send(user.todos);
  });

  // add one todo
  app.post('/api/todos/:id', async (req, res) => {
    const user = await User.findById(req.user.id);
    user.todos.push({ ...req.body, id: req.params.id });
    user.save();
    // .then(res.send(user.todos));
  });

  // delete one todo
  app.delete('/api/todos/:id', async (req, res) => {
    // User.findOneAndUpdate(
    //   { 'todos.id': req.params.id },
    //   { $pull: { todos: { id: req.params.id } } },
    //   { new: true },
    //   function(err, productcontact) {
    //     if (err) res.send(err);
    //     res.json({ message: 'Role successfully deleted.' });
    //   }
    // );
    let user = await User.findById(req.user.id);
    user.todos.find(todo => todo.id === req.params.id).remove();
    user.save();
  });

  // delete completed todos
  app.delete('/api/todos', async (req, res) => {
    const user = await User.findById(req.user.id);
    let i = user.todos.length;
    while (i--) {
      if (user.todos[i].completed) {
        user.todos[i].remove();
      }
    }
    user.save();
    // .then(res.send(user.todos));
  });

  // toggle/edit/add-count todo
  app.put('/api/todos/:id/:type', async (req, res) => {
    // User.findOneAndUpdate(
    //   { id: req.user.id, 'todos.id': req.params.id },
    //   { $set: { 'todos.$.completed':true } }
    // );
    const user = await User.findById(req.user.id);
    let todo = user.todos.find(todo => todo.id === req.params.id);
    switch (req.params.type) {
      case 'toggle':
        todo.set({ completed: !todo.completed });
        break;
      case 'edit':
        // edit todo
        todo.set({ text: req.body.text });
        break;
      case 'add-count':
        // add-count todo
        todo.set({ count: todo.count + 1 });
    }
    user.save();
  });
};
