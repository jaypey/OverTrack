import Base from './base';

const CsvConfig = {
  create(data, opts = {}) {
    return Base.post('/csv_config', data, opts || {});
  },
  list(params, opts = {}) {
    return Base.get('/csv_config', params, opts || {});
  },
  delete(id, params, opts = {}) {
    return Base.delete(`/csv_config/${id}`, params, opts || {});
  },
  update(id, data, opts = {}) {
    return Base.put(`/csv_config/${id}`, data, opts || {});
  },
  get(id, params, opts = {}) {
    return Base.get(`/csv_config/${id}`, params, opts || {});
  }
};

export default CsvConfig;
