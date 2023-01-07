# Guide

This guide details the basics of how to connect MongoDB to a Node.js backend using TypeScript as well as then using the backend to obtain data for use with a React frontend.

## Starting off

We start off using vite to build us a functional easily accessible React frontend using TypeScript

``` shell
npm create vite@latest frontend -template react-ts
```

This will create a React frontend with minimal requirements in TypeScript.

From there, we'll also need to create a backend using Node and TypeScript:

``` shell
npm init -y
npm install  typescript --save
```
