import Base from './base';

const Tasks = {
  list(params, opts = {}) {
    return Base.get('/tasks', params, opts || {});
  },
  create(data, opts = {}) {
    return Base.post('/tasks', data, opts || {});
  },
  delete(id, params, opts = {}) {
    return Base.delete(`/tasks/${id}`, params, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/tasks/${id}`, data, opts || {});
  },
};

export default Tasks;
