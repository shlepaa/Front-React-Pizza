# !\[alt text\]([./photo_2023-01-06_18-12-23.jpg](https://badgen.net/badge/Test/React%20pizzas/black?icon=github&label)) React pizza - site about pizzas

React pizzas has built on react by using webpack

You can see site on this link - https://reactpizzas.netlify.app/

!\[alt text\](./photo_2023-01-06_18-12-23.jpg)

## Table of Contents

+ [Main Technologies](#Main-Technologies) 
+ [Introduction](#Introduction)
+ [Install](#Install)
+ [Run project](#Run-project)
  + [Middleware](#Middleware)
  + [Development](#Development)
  + [Production](#Production)
+ [License](#License) 

## Main Technologies 

+ Webpack 5.74
+ React 18.2
+ Redux 4.2
+ Redux Toolkit 1.9
+ TypeScript 4.9
+ Cypress 12.2
+ Jest 29.3

## Introduction

In application you can see different pizzas. You can choose whatever you want pizza then go to the cart page and order it.

Pizza state as a dough or size save after realoding. Sort filters works on frontend part.

Backend server for pizzas and types(it means meat, cheese or fish and etc.) have located at https://reactpizzas.ru on port 5000. You can also see code for backend on this repository https://github.com/bot1291/Back-React-Pizza. 

This application has configured with CI CD by using github actions. There is check for any linting and types format and then jest and automatic cypress tests. Deployment take place on Netlify, link has introduced above.
