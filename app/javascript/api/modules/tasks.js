import Base from './base';

const Tasks = {
  list(params, opts = {}) {
    return Base.get('/task', params, opts || {});
  },
  create(data, opts = {}) {
    return Base.post('/task', data, opts || {});
  },
  delete(id, params, opts = {}) {
    return Base.delete(`/task/${id}`, params, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/task/${id}`, data, opts || {});
  },
};

export default Tasks;
