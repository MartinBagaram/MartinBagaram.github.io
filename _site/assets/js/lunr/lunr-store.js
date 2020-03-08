var store = [{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.   To add new posts, simply add a file in the _posts directory that follows the convention YYYY-MM-DD-name-of-post.ext and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.   Jekyll also offers powerful support for code snippets:   def print_hi(name)   puts \"Hi, #{name}\" end print_hi('Tom') #=&gt; prints 'Hi, Tom' to STDOUT.  Check out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk.   ","categories": ["blog","jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/blog/jekyll/update/welcome-to-jekyll/",
        "teaser":null},{
        "title": "Set up Cplex API for JAVA and for Python",
        "excerpt":"It can be overwhelming when you start your journey to Optimization using commercial solvers such as CPLEX and Gurobi. The first challenge is the choice of the optimization engine. If you go or you want to go for Cplex, then this post is perfect for you. I you still ensure continue reading   After you have chosen CPLEX the next question is how to write the mathematical model. There are many third parties that can be used for this end. For instance, AMPL is a mathematical modelling language that can be used for translating your mathematical model written on paper into a model that is understood by computers. We are not going to use any third party. Let stick with CpLEX. Cplex offers a programming language known as OPL (Optimization Programming Language). If you know any coding language such as python, java or c/c++ or R then I suggest to not waste your time learning OPL. In fact, even if you don’t know any coding language I suggest you invest your time and energy learning one of general purpose languages such as python or R. After all, knowing one of the languages will serve more purposes than just writing your mathematical models which limits the usefulness of OPL. Let get back to CPLEX and how to use CPLEX API for Python.     Install cplex academic edition or commercial version   Intall docplex. If you use Anaconda or Miniconda, you can try this command conda install -c ibmdecisionoptimization docplex   The tricky part is to copy your cplex concert technology files into your python directory. To do so you need to navigate to the directory where your cplex is installed. It is usually C:\\Program Files\\IBM\\ILOG\\CPLEX_Studio128\\cplex\\python From that directory choose your python version. Mine is 3.6. The whole path becomes C:\\Program Files\\IBM\\ILOG\\CPLEX_Studio128\\cplex\\python\\3.6\\x64_win64 and then copy cplex folder and setup.py file to the root of your python.   That is it, launch your python and try  from docplex import *   ","categories": ["Optimization"],
        "tags": ["cplex","java","python","Docplex","Concert technology"],
        "url": "http://localhost:4000/optimization/set-up-cplex-api-for-python-java/",
        "teaser":null}]
