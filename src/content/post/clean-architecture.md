---
title: "Clean Architecture"
description: "Clean architecture as a good software development technique."
publishDate: "9 Jun 2024"
tags: ["coding", "productivity"]
ogImage: "/social-card.png"
---

## Clean architecture

Clean Architecture is a software design technique that emphasizes the separation of concerns, ensuring that systems are maintainable, scalable, and tested. By dividing code into discrete layers, each with a specific responsibility.

## Why clean architecture?

There are lot's of architecture techniques when it comes to software development. What separates clean architecture from the most is "Maintainability", "Understandability", "Reusablity" and "Scalability". Software Engineering is doing 80% of work with existing code and 20% with what you can improve and new feature implementation.

As a fresher, there were times when you just don't understand what's going on in the existing codebase. Maintaining a large codebase gets difficult over time. That's when i started looking for new techniques and methods which can potentially over time make the task of implementing and reusing code a breeze.

## My motivation

On my job whenever we push our code to origin and run pipeline, there is a step called "Sonar Qube Scan", which checks code smell and duplications within codebase and lot's more, it's a great tool to check your code quality and embraces you to write good code.

I've been working on a feedback module which consists of multiple submodules and code across all these submodules is 70% similar. So naturally SonarQube will catch the duplication of code and not let the code pass to next step in pipeline. One way my colleagues found was to rename the variables accordingly so that it's counted as different line, but that would just be lazy work. So, i thought why not just create a service which handles this same work throughout the feedback module. This would achieve two things "Reusablity of Code" and "Maintainablity of Code". By implementing clean architecture in my on site project, the duplication of lines and code smells have been reduced significantly and till date have not faced any sonar qube issues, when it comes to duplications and code smells.

## What is clean architecture?

![Clean Architecture](../../assets/clean-architecture.jpg)

The basic principle of clean architecture is to separate software components into layers based on their responsibilities, ensuring that dependencies flow from the outer layers to the inner ones. This approach emphasizes maintainability, scalability, and testability by decoupling different parts of the system and making them independent of each other.

**Key Principles:**

- Separation of Concerns: Clean architecture divides the system into distinct layers, each responsible for a specific task. This separation helps to keep the code organized and easier to understand.

- Dependency Inversion: Dependencies should always flow from the outer layers to the inner ones. This means that high-level components should not depend on low-level technical implementations, but rather the other way around.

- Independent Layers: Each layer should be able to function independently without affecting other layers. This ensures that changes in one layer do not impact the entire system.

- Testability: Clean architecture promotes testability by isolating business logic and making it easier to write unit tests for each component.

**Layers:**

Imagine your software as a building. You divide it into floors, each with its own job:

- Entities: These are like the building blocks of your software. They hold the core business logic and data.

- Use Cases: Think of these as the tasks your software needs to do. Each task has its own set of rules and steps.

- Interface Adapters: These are like translators. They help the different parts of your software talk to each other. They convert data from one format to another, so everyone understands.

- Frameworks and Drivers: These are the tools and systems your software uses to work. They handle things like user interfaces, databases, and other external stuff.

**Benefits:**

Now, let's talk about why this setup is awesome:

- Keeps things tidy: By separating tasks into different layers, everything stays organized and easy to understand.

- Plays well with others: Dependencies flow smoothly from the outside layers to the inside ones. It's like teamwork, where everyone knows their role and works together.

- No drama between layers: Each layer can do its thing without messing up the others. So, if you need to change something, it won't cause chaos everywhere else.

- Testing is a breeze: Since everything is neatly separated, it's easier to test each part individually. It's like checking each ingredient before baking a cake.

- Easy to upgrade: Without tangled dependencies, it's simpler to adapt to new technologies or add cool new features without breaking everything.
