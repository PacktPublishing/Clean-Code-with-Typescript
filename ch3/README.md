# Chapter 3 - Object-Oriented Programming with TypeScript

Object-Oriented Programming (OOP) helps organize software around objects that combine data and behavior. In TypeScript, OOP concepts become easier to express safely because the language adds static typing and clearer structure on top of JavaScript’s runtime model. This chapter turns those concepts into focused examples that show how classes, inheritance, encapsulation, polymorphism, and composition work in practice.

The examples in this folder follow the chapter flow from object literals and basic classes through prototype chains, access control, and interface-based design. They also connect TypeScript’s class syntax back to the JavaScript it compiles into, which is important for understanding how inheritance actually works at runtime. By the end of the chapter, readers should be able to model reusable objects, choose between inheritance and composition, and build more maintainable application structures.

In this chapter we are going to cover the following main topics:

- Understanding the concept of OOP
- Classes, inheritance, and prototype chains for robust and flexible designs
- Encapsulation to ensure data privacy and controlled access
- Polymorphism in TypeScript OOP
- Interfaces in OOP: defining contracts and ensuring consistency
- Composition over inheritance for agile development

# Technical requirements

The setup for this chapter is similar to the previous ones. To work with the examples in this chapter, you will need:

- Node.js and npm
- The TypeScript compiler
- A code editor or IDE with TypeScript support

The code for this chapter lives in `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3`.

GitHub repository: <https://github.com/Rukeeo1/Clean-Code-in-TypeScript.git>

Install dependencies from `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3`:

```sh
npm install
```

Build the chapter examples:

```sh
npm run build
```

# Working through TypeScript OOP

The source files are grouped by topic so each OOP concept can be reviewed independently:

- Objects and classes: [src/classes/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3/src/classes)
- Inheritance and prototype chains: [src/inheritance/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3/src/inheritance)
- Encapsulation: [src/encapsulation/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3/src/encapsulation)
- Polymorphism and interfaces: [src/polymorphism/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3/src/polymorphism)
- Composition: [src/composition/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3/src/composition)

The generated JavaScript example that shows how a class compiles down to constructor and prototype code is preserved in [src/inheritance/dummy-class.generated.js](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch3/src/inheritance/dummy-class.generated.js) as a reference artifact from the chapter discussion.

# Summary

This chapter package converts the manuscript’s OOP examples into a structured, buildable TypeScript chapter folder. Readers can inspect object literals, classes, inheritance, access control, and composition as separate examples while still seeing how those ideas relate. The next chapter can build on this foundation by applying these design ideas inside a larger TypeScript project.
