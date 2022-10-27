import Base from './base';

const CsvConfig = {
  create(data, opts = {}) {
    return Base.post('/csv_config', data, opts || {});
  }
};

export default CsvConfig;
