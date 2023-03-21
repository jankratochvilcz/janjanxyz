---
title: "Mailjourney"
date: "2023-03-21"
preview: |
  [Mailjourney](https://github.com/jankratochvilcz/mailjourney) is a proof of concept of a developer-friendly simple mail automation solution. The main goal of this project was to refresh/learn the technical stack prior to joining Cozero.
coverImage: "/projects/mailjourney_list.png"
---

[Mailjourney](https://github.com/jankratochvilcz/mailjourney) is a proof of concept of a developer-friendly simple mail automation solution. The main goal of this project was to refresh/learn the technical stack before joining Cozero.

Mailjourney didn't make it into production, but it is a good testbed for onboarding into Cozero's stack and helping me experiment with new technologies I could introduce within Cozero. You can read more about my onboarding approach [here](https://www.janjan.xyz/blog/sandbox-side-projects).

The technologies used are:
* React, Redux Toolkit (focus on **RTK Query**)
* [Prisma ORM](https://www.prisma.io/), PostgreSQL
* Typescript
* [NestJS](https://docs.nestjs.com/)
* [AWS Serverless Application Model (SAM)](https://aws.amazon.com/serverless/sam/) to experiment with AWS' serverless components (Lambdas, Step Functions, SES, deployment via CloudFormations)
* [AWS Cognito](https://aws.amazon.com/cognito/)
* [Cube](https://cube.dev/)

I only scratched the surface on some of the technologies above, but I hope that it will have helped speed up my onboarding to Cozero. 💪🏻

![Journey detail screenshot](/projects/mailjourney_journey_detail.png)

*Detail screen of a mail journey. Monaco editor backed with a JSON Schema used for the template itself.*