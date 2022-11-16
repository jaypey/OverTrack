import Base from './base';

const Roles = {
  list(params, opts = {}) {
    return Base.get(`/roles`, params, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/roles/${id}`, data, opts || {});
  },
};

export default Roles;