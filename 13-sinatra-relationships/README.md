# Key Questions
* How can I have multiple controllers in Sinatra, and how do I know if I need more than one?
  - Create them and need them if you have more than one model
  - config.ru -> `use HabitsController` before `run ApplicationController`

* How do I work with two models worth of views in Sinatra?
  - Go to view file and create a folder `habits`
  - erb :"habits/show"

* How does domain modeling work again? Where do my foreign keys go? How can I use has_many and belongs_to?

* How does the <select></select> tag work?
  * What's the difference between it and an <input />?
  * What are some similarities?
* How can I list the thing I has_many of in a view?





## Other fun things
* Many to Many relationships
* Different ways to create instances through relationships
* Build search
    * query string
    * params
    * filtering
    * forms
* Partials
