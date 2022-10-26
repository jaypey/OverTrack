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
  getSelectedBudgetName(data, opts = {}){
    return Base.get(`/budget/getbudgetname`, data, opts || {});
  }
};

export default Budgets;
