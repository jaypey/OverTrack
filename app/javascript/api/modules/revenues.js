import Base from './base';

const Revenues = {
  list(params, opts = {}) {
    return Base.get('/revenues', params, opts || {});
  },
  create(data, opts = {}) {
    return Base.post('/revenues', data, opts || {});
  },
  delete(id, params, opts = {}) {
    return Base.delete(`/revenues/${id}`, params, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/revenues/${id}`, data, opts || {});
  },
};

export default Revenues;
