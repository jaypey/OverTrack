import Base from './base';

const CsvConfig = {
  create(data, opts = {}) {
    return Base.post('/csv_config', data, opts || {});
  },
  list(params, opts = {}) {
    return Base.get('/csv_config', params, opts || {});
  }
};

export default CsvConfig;
