import Base from './base';

const Users = {
  list(params, opts = {}) {
    return Base.get(`/user`, params, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/user/${id}`, data, opts || {});
  }
};

export default Users;
