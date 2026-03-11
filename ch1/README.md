# Chapter 1 - Getting Started with TypeScript

This chapter introduces TypeScript as a practical way to write clearer, safer, and more maintainable JavaScript applications. The examples in this folder follow the chapter flow from understanding why TypeScript matters, through setting up a first project, to using basic, complex, and advanced types. By working through these snippets, readers can see how static typing improves refactoring, editor support, and overall code quality.

The code in `ch1/` is organized as small focused examples so each concept can be reviewed independently. By the end of the chapter, readers should be able to create a simple TypeScript project, declare and use core TypeScript types, model richer data with objects and collections, and apply more advanced features such as unions, intersections, generics, and conditional types.

In this chapter we are going to cover the following main topics:

- Why TypeScript
- Getting started with TypeScript
- Understanding basic types
- Working with complex types
- Mastering advanced types
- Configuring `tsconfig.json`

# Technical requirements

To work with the examples in this chapter, you will need the following:

- Node.js and npm
- A text editor or IDE with TypeScript support, such as Visual Studio Code
- The TypeScript compiler

Install TypeScript globally if you want to follow the setup exactly as shown in the chapter:

```sh
npm install -g typescript
```

Initialize and run the chapter project with these commands from `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch1`:

```sh
npm init -y
npm install --save-dev typescript
npx tsc --init
npx tsc
node dist/getting-started/index.js
```

GitHub repository: <https://github.com/Rukeeo1/Clean-Code-in-TypeScript.git>

Create a GitHub folder named `ch1` for this chapter's code. In this repository, that folder is `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch1`.

# Exploring why TypeScript helps

The examples in this chapter show how TypeScript catches type errors early, makes object shapes explicit, and improves reuse through typed abstractions. The files under `src/basic-types`, `src/complex-types`, and `src/advanced-types` mirror those learning steps.

# Setting up a first TypeScript project

The first runnable example is in [src/getting-started/index.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch1/src/getting-started/index.ts). It matches the chapter's initial `Hello, TypeScript!` walkthrough and can be compiled with the `tsconfig.json` in this folder.

# Practicing type fundamentals

The rest of the chapter examples are grouped by topic:

- Basic types: [src/basic-types/basic-types.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch1/src/basic-types/basic-types.ts)
- Complex types: [src/complex-types/object-literal.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch1/src/complex-types/object-literal.ts)
- Advanced types: [src/advanced-types/generics.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch1/src/advanced-types/generics.ts)

Intentional error demonstrations from the chapter are preserved as `*.error.ts` files. They are excluded from compilation so the main chapter project remains buildable.

# Summary

This folder turns the PDF examples into a chapter-oriented code package that is easier to browse and run. Readers can move from project setup through type fundamentals and into more expressive TypeScript patterns without having to reconstruct snippets from the manuscript. The next chapter can build on this foundation by applying these same practices in a larger application context.
