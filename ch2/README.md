# Chapter 2 - Writing Clean Functions

Functions are one of the main ways we organize behavior in TypeScript, so their quality has a direct effect on readability, maintainability, and testability. This chapter focuses on writing functions that are easier to reason about by keeping responsibilities narrow, reducing side effects, making signatures explicit, and documenting intent clearly. The examples in this folder follow the manuscript closely and turn the chapter snippets into a small, navigable code package.

By working through these examples, readers can see how a function changes when it is refactored around the Single Responsibility Principle, why shared mutable state creates problems in concurrent code, and how clear parameter and return types make functions easier to use correctly. The chapter then moves into documentation with TSDoc and TypeDoc, showing how source annotations improve editor feedback and generated reference material.

In this chapter we are going to cover the following main topics:

- Learning principles of clean functions
- Applying the Single Responsibility Principle
- Understanding and avoiding side effects in TypeScript functions
- Understanding function signatures
- Integrating TypeDoc for TypeScript documentation
- Creating static documentation pages with TypeDoc integration

# Technical requirements

To work with the examples in this chapter, you will need:

- Node.js and npm
- A code editor or IDE such as Visual Studio Code
- The TypeScript compiler

Optional documentation tooling used in this chapter:

- TypeDoc

The code for this chapter lives in `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch2`.

GitHub repository: <https://github.com/Rukeeo1/Clean-Code-in-TypeScript.git>

Install the chapter dependencies from `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch2`:

```sh
npm install
```

Build the chapter examples:

```sh
npm run build
```

Generate static documentation pages with TypeDoc:

```sh
npm run docs
```

# Learning clean-function design

The clean-function examples are grouped by topic so each principle can be inspected on its own. The SRP refactor lives in [src/clean-functions/srp-before.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch2/src/clean-functions/srp-before.ts) and [src/clean-functions/srp-after.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch2/src/clean-functions/srp-after.ts), while side-effect and signature examples are separated into their own folders.

# Documenting TypeScript code

The documentation-focused examples are under [src/documentation/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch2/src/documentation). They include raw TSDoc tag examples, a documented `ShoppingCart` class, and the TypeDoc configuration from the chapter in [typedoc.json](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch2/typedoc.json).

# Summary

This chapter package turns the manuscript examples into a runnable chapter folder with focused TypeScript files and documentation scaffolding. It gives readers a concrete way to study SRP, side effects, function signatures, and TSDoc or TypeDoc usage without reconstructing snippets from the PDF. The next chapter can build on this by introducing object-oriented design patterns on top of these clean coding foundations.
