# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

On the terminal you would type: 
rails new my_rails_app -d postgresql -T


2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

You will need to create a migration to update the database.
- In the terminal $ rails g migration add_column
-In the migration directory open the file that was just created and update the def change method to look like this:

def change
    :table_name, :modelname_id, :integer
end

-save the file and then in the terminal $ rails db:migrate

-The database and schema file should now be updated to contain the forign key!


3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string

If data type was not string you could specify another data type in place of string after each column name.


4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The name of the model is uppercase and singular. I think PascalCase also.
The database table is plural and snake_case.


5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

The books will contain the foreign key, the column will be named library_id


6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema file is a ruby file that is a blueprint for what the tables should look like in the database. You should not modify the schema file directly because they are not designed to be edited, they just represent the current state of the database.