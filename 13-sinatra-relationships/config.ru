require './config/environment'

if ActiveRecord::Migrator.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end

# use Rack::MethodOverride
use InterestsController
use TopicsController
use StudentsController
use HabitsController
run ApplicationController
