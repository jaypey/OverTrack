# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

### User seed
if (Role.where(role_name: 'owner')==[]) then
    role_owner = Role.create(role_name: 'owner', role_value: 1)
    role_member = Role.create(role_name: 'member', role_value: 2)
end

# Seed csv config
if (CsvConfig.where(name: 'Desjardins'))
        CsvConfig.create(
            name: 'Desjardins',
            config_json: '{"has_header":true,"descriptions":{"index":"5","ignore_substrings":[]},"categories":{"index":"5","mappings":{}},"spends":{"index":"7","skip_non_spend":false},"incomes":{"index":"8","skip_non_income":false},"timestamps":{"index":"3"},"auto_detect":{"filename_substring":"N/A","default_category":"Uncategorized"}}'
        )
end