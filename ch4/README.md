# Chapter 4 - Clean Code in TypeScript Projects

This chapter moves from isolated language features into the practical structure of a full TypeScript project. The focus is on organizing code so a project stays readable, maintainable, and scalable as it grows. The examples in this folder show how folder structure, modules, dependency management, and code quality tooling work together to support clean code at the project level.

The chapter compares feature-based, function-based, and hybrid folder structures, then demonstrates how modules improve encapsulation, reuse, and testing. It also covers dependency management choices and introduces linting and formatting with ESLint and Prettier. By the end of the chapter, readers should be able to organize a TypeScript codebase more deliberately and add supporting tooling that keeps the project consistent over time.

In this chapter we are going to cover the following main topics:

- Best practices for folder structure
- Learning module systems
- Managing dependencies in TypeScript projects
- Linting and code formatting

# Technical requirements

The code for this chapter lives in `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch4`.

You will need:

- Node.js and npm
- The TypeScript compiler
- A code editor or IDE with TypeScript support

Optional tooling demonstrated in this chapter:

- ESLint
- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`
- Prettier
- `eslint-plugin-prettier`
- `eslint-config-prettier`

GitHub repository: <https://github.com/PacktPublishing/Clean-Code-with-Typescript>

Install the chapter dependencies from `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch4`:

```sh
npm install
```

Build the chapter examples:

```sh
npm run build
```

# Organizing a TypeScript project

The examples under [src/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch4/src) focus on modular project organization. They include a small `User` model and service, utility modules, a simple order model, and a sample test file to show how modules support encapsulation, reuse, scalability, and testing.

This chapter also discusses three common structure patterns:

- Feature-based organization
- Function-based organization
- A hybrid approach that groups by feature first and by responsibility inside each feature

# Learning module systems

The ES module and CommonJS examples are included in [src/module-systems/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch4/src/module-systems). These files demonstrate both `import` or `export` syntax and `require` or `module.exports` style usage so the differences are visible in code.

# Adding code quality tooling

The linting and formatting setup from the chapter is represented by [eslint.config.mjs](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch4/eslint.config.mjs), [.prettierrc](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch4/.prettierrc), and the intentionally faulty lint example in [lint-demo/index.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch4/lint-demo/index.ts).

# Summary

This chapter package turns the manuscript’s project-level practices into a concrete TypeScript workspace. It gives readers a runnable set of module examples plus the supporting lint and format configuration that help a project stay clean as it scales. The next chapter can build on this foundation by applying these patterns inside a more substantial application.
