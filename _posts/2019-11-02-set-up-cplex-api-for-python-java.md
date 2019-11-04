---
title: "Set up Cplex API for JAVA and for Python"
categories:
  - Optimization
tags:
  - cplex
  - java
  - python
---

It can be overwhelming when you start your journey to Optimization using commercial solvers such as CPLEX and Gurobi. The first challenge is the choice of the optimization engine. If you go or you want to go for Cplex, then this post is perfect for you. I you still ensure continue reading

After you have chosen CPLEX the next question is how to write the mathematical model. There are many third parties that can be used for this end. For instance, AMPL is a mathematical modelling language that can be used for translating your mathematical model written on paper into a model that is understood by computers. We are not going to use any third party. Let stick with CpLEX.
Cplex offers a programming language known as OPL (Optimization Programming Language). If you know any coding language such as python, java or c/c++ or R then I suggest to not waste your time learning OPL. In fact, even if you don’t know any coding language I suggest you invest your time and energy learning one of general purpose languages such as python or R. After all, knowing one of the languages will serve more purposes than just writing your mathematical models which limits the usefulness of OPL. Let get back to CPLEX and how to use CPLEX API for Python.

