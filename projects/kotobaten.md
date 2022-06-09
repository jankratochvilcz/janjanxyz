---
title: "Kotobaten"
date: "2022-05-30"
preview: |
  [Kotobaten](https://kotobaten.app) is a Japanese vocabulary language app that I've used as my daily driver for a few years now. It's been rewritten a few times, currently it's build on top of ASP.NET Core, Flutter, and Azure.
coverImage: "/projects/kotobaten-promo.png"
---

[Kotobaten](https://kotobaten.app) is a Japanese vocabulary language app that I've used as my daily driver for a few years now. It helps me keep track of words I want to learn and make sure I retained the words I already learned.

It's also my main sandbox for keeping my technical skillset sharp and experimenting with new technologies. Currently, the app is built with:

- **Flutter**. Originally written in React, I wanted to go cross-platform and after experimenting with React Native, settled on Flutter due to its excellent developer tooling and working well on all platforms out of box.
- **ASP .NET Core**. The backend is written in .NET, leveraging [Entity Framework](https://docs.microsoft.com/en-us/ef/) and [OpenIddict](https://github.com/openiddict/openiddict-core).
- **Azure**. The server app runs in a container and leverages the [Azure Container Repository](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) for deploymenents, as well as managed SQL.
- **Gatsby**. The landing pages are built using Gatsby, which I spent a ton of time fiddling with.

This has been an amazing project to help me grow and push me to expore areas I otherwise wouldn't. E.g., the Kotobaten apps are published on Play, Microsoft Store, and App Store, which helped me get exposure of all the store ecosystems. The app is also connected to [Mixpanel](https://mixpanel.com) through [Segment](https://segment.com/), helping me learn new analytics tools.

[Give it a try !](https://kotobaten.app)

You can find the source code for the Flutter app [here](https://github.com/jankratochvilcz/kotobaten-flutter/).
