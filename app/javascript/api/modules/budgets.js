import Base from './base';

const Budgets = {
  list(params, opts = {}) {
    return Base.get(`/budget`, params, opts || {});
  },
  create(data, opts = {}) {
    return Base.post('/budget', data, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/budget/${id}`, data, opts || {});
  },
  delete(id, params, opts = {}) {
    return Base.delete(`/budget/${id}`, params, opts || {});
  },
  updateSelectBudget(data, opts = {}){
    return Base.post(`/budget/selectbudget`, data, opts || {});
  },
  getSelectedBudgetId(data, opts = {}){
    return Base.get(`/budget/getbudgetid`, data, opts || {});
  },
  getSelectedBudgetRole(data, opts = {}){
    return Base.get(`/budget/getcurrentbudgetrole`, data, opts || {});
  },
  adduser(data, opts = {}){
    return Base.post(`/budget/adduser`, data, opts || {});
  },
  removeuser(data, opts = {}){
    return Base.post(`/budget/removeuser`, data, opts || {});
  },
  leavebudget(data, opts = {}){
    return Base.post(`/budget/leavebudget`, data, opts || {});
  },
  getcurrentuserid(data, opts = {}){
    return Base.get(`/budget/getcurrentuserid`, data, opts || {});
  },
  getnotconfirmedbudgets(data, opts = {}){
    return Base.get(`/budget/getnotconfirmedbudgets`, data, opts || {});
  }
};

export default Budgets;
