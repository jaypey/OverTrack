import Base from './base';

const Reports = {
  year(params, opts = {}) {
    return Base.get('/reports/year', params, opts || {});
  },
  month(params, opts = {}) {
    return Base.get('/reports/month', params, opts || {});
  },
  prediction(params, opts = {}) {
    let year = Base.get('/reports/year', params, opts || {});
    // year.categories.map((categorie) => (
    //   console.log(categorie.name)
    // ))
    // for (let test in year.PromiseResult)
    // {
    //   console.log(test.name)
    // }
    console.log(year.PromiseResult);
    return year
  },
};

export default Reports;
