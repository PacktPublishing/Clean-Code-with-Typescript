# Chapter 5 - Testing and Test-Driven Development (TDD)

Testing is one of the main ways to keep a TypeScript codebase reliable as it evolves. This chapter introduces the core testing levels, focuses on unit and integration testing, and shows how Test-Driven Development (TDD) helps shape cleaner application design. The examples in this folder turn the manuscript into a practical chapter package that demonstrates assertions, mocks, test runners, an Express integration test flow, and common patterns for writing maintainable tests.

The chapter starts with very simple assertions and testing terminology, then moves into modern unit testing with Vitest. It also shows how to isolate dependencies with mocks and stubs, how to think about top-down and bottom-up integration testing, and how to test a small blog API end to end with Supertest. The final examples focus on TDD and general test-writing practices such as naming, isolating concerns, and using the Arrange-Act-Assert pattern.

In this chapter we are going to cover the following main topics:

- Grasping the fundamentals of testing
- Unit testing in TypeScript
- Integration testing in TypeScript
- Test-Driven Development (TDD) in TypeScript

# Technical requirements

To work with the examples in this chapter, you will need:

- Node.js 20.0.0 or later
- TypeScript 5.0 or later

Testing libraries and tooling used in this chapter:

- Vitest
- Supertest
- Express
- ts-node
- `@types/node`
- `@types/express`
- `@types/supertest`

The code for this chapter lives in `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5`.

GitHub repository: <https://github.com/PacktPublishing/Clean-Code-with-Typescript/tree/ch5>

Install dependencies from `/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5`:

```sh
npm install
```

Build the chapter examples:

```sh
npm run build
```

Run the tests:

```sh
npm run test
```

# Learning testing fundamentals

The introductory examples are grouped under [src/fundamentals/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5/src/fundamentals). These include a simple assertion-based test, unit testing terminology examples, manual and module-based mocking examples, and stub or driver demonstrations for integration-style thinking.

# Writing unit tests with Vitest

The Vitest setup and the `square` example live under [src/unit/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5/src/unit). The chapter-level test runner configuration is defined in [vitest.config.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5/vitest.config.ts).

# Integration testing an API

The blog API sample is organized under [src/integration/blog-api/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5/src/integration/blog-api), and the integration tests are in [tests/blog-api.integration.test.ts](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5/tests/blog-api.integration.test.ts). This mirrors the chapter’s service, controller, route, and app setup flow.

# Practicing TDD

The TDD-oriented examples are kept under [src/tdd/](/Users/rukeeojigbo/Documents/packt-typescript/Clean-Code-with-Typescript/ch5/src/tdd). They focus on descriptive test naming, isolated tests, mocked API dependencies, and the Arrange-Act-Assert pattern.

# Summary

This chapter package turns the testing manuscript into a runnable TypeScript workspace with small focused examples and a simple integration-tested application. It gives readers a direct way to study testing levels, Vitest-based unit testing, dependency isolation, and TDD habits in real code. The next chapter can build on this by applying the same confidence-building practices in more complex project scenarios.
