import Base from './base';

const Users = {
  list(params, opts = {}) {
    return Base.get(`/user`, params, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/user/${id}`, data, opts || {});
  },
  updateSelectBudget(data, opts = {}){
    return Base.post(`/user/selectbudget`, data, opts || {});
  },
  getSelectedBudgetName(data, opts = {}){
    return Base.get(`/user/getbudgetname`, data, opts || {});
  }
};

export default Users;
