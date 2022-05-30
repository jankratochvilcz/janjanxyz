---
title: "Book Recap: Agile Project Management with Kanban by Eric Brechner"
date: "2016-12-16"
coverImage: "/blog/joseph-greve-8iwevf9a2dg-unsplash.jpg"
preview: |
  Overall, where Scrum feels like a structured approach with an eye on speed, Kanban feels like a _flowing river_. There’s no time-boxing. Instead, Kanban focuses on creating a clean and narrow channel for your work to flow though. 
  
  Let’s take a look at the Kanban process.
---

In classic Microsoft Press fashion, Agile Project management focuses on execution and pragmatism. To that end, I’ll structure this recap a bit differently.

Overall, where Scrum feels like a structured approach with an eye on speed, Kanban feels like a _flowing river_. There’s no time-boxing. Instead, Kanban focuses on creating a clean and narrow channel for your work to flow though.

Let’s take a look at the Kanban process.

## Process

The core idea of Kanban is similar to what Andy Groove [talks about](https://medium.com/@jankratochvil/book-recap-high-output-management-by-andy-grove-d77bbb16d98c). **Find your limiting step and optimize the rest of the process around it.**

Here are the basics steps, simplified for brevity:

1. **Define the steps of your process.** _Specify, Design, Implement, Test, Release_ might be a good start.
2. **Find your limiting step.** It's the one that determines the throughput of the system as a whole. For Doist, _specify and design_ is frequently where we spend a significant portion of the process.
3. **Optimize your limiting step.** I. Break it down to multiple steps; II. Increase throughput if necessary (i.e. deploying more resources); III. shorten it (this is called _elevating the constraint_)
4. **Define _done rules_ for individual steps.** For coding, it could be e.g. _Code complete and unit tests pass_
5. **Calculate WIP (work in progress) limits** for individual steps. [Start low and increase the limits where necessary.](https://docs.microsoft.com/en-us/vsts/work/kanban/wip-limits#determine-initial-wip-limits)
6. **Visualize your process** as a board.
7. **Create an _ordered_ backlog**
8. Let the work can start flowing

![Image for post](images/679e4-0c7it9zjikarenned.png)

A simple Kanban board in [VSTS](https://docs.microsoft.com/en-us/vsts/work/kanban/kanban-quickstart)

After you set up the process, you need to fill it up with work. A frequent way to do this is to define an MVP (Minimum Viable Product). How do you know what fit’s in the scope on an MVP tho’?

### Determining MVP Scope

All task are sorted into four priorities:

- 0 — Must be included in the MVP. To determine these, ask the question: _“Would we really hold up the release for that?”_
- 1 — Should be in the MVP
- 2 — Would like to have in the MVP
- 3 — Would be nice to have it in the MVP

Having work item buckets like this should make the backlog ordering much easier and enable you to react when the scope needs to change.

## Comparison with Scrum

_If you're not familiar with the essential traits of Scrum, it might be worth skimming [my post about Scrum](https://janjan.xyz/2017/12/10/book-recap-scrum-the-art-of-doing-twice-the-work-in-half-the-time-by-jeff-sutherland/) before continuing._

In some ways, Kanban shares a lot of traits with Scrum, but they have significant differences as well.

### Effort Estimation

Since Kanban doesn’t have time-boxing, effort estimation might not be needed at all in a lot of cases. Instead of the burn-down chart in Scrum, Kanban works with the Cumulative flow diagram.

![Image for post](images/68248-0quuvydbcccxnvmon.png)

Cumulative Flow Chart in [VSTS](https://docs.microsoft.com/en-us/vsts/report/dashboards/cumulative-flow)

There are a few things going you can see from the chart:

- How much you’re shipping over time.
- Is your backlog growing or shrinking over time? Seeing that the backlog is growing no mater how hard your team tries might not be best for motivation
- How much work is in progress right now and in what stages

Notice that the unit of the Y axis is _Work Items Count._ If this was Scrum, it’d say _Story Points_. But Kanban doesn’t work with Story Points.

Instead, **Kanban assumes all tasks are roughly equal in size**. This means that in practice, _1 task = 1 story point_. From there, you can easily deploy estimation methods like wideband Delphi in case you need to. The only difference is that you go from _“How many story points will this user story cost”_ to _“How many tasks will this feature result in?”_.

### Late Binding

In Scrum, you can choose whether you assign team members to specific user stories or tasks as part of the sprint planning meeting or if assignment happens organically during the spring.

In Kanban, _late binding_ seems more mandatory. When a team member finishes a task, they should ideally take the top one from the backlog.

It’s going to be key in Kanban to make sure people still work on stuff that excites them instead of working on an item simply because it was on top of the queue.

### Kaizen

In Kanban, there are no sprints and in extension, no sprint retrospectives that generate kaizens. Instead, Kanban relies on WIP limits to expose friction and create motivation to fix problems. When work starts piling up in a specific step, it’s time to start asking questions.

### Daily Standups

The assumption of daily standups is an Achilles' heel of both Srum and Kanban from a remote team’s perspective.

A major advantages that remote teams have is that members can do deep work for days at a time without any distractions. At least for us at Doist, this makes daily meetings a no-go.

We will need to experiment with this at Doist Windows, but initially it looks like Scrum will be more welcoming to dropping the meeting requirement. Time-boxing creates strong commitments, sohaving a single meeting per sprint to do planning as well as retrospective could be enough. For Kanban, the daily standups feel a more key as it’s the main vehicle to discuss kaizens and re-prioritize work when needed.

## Nuggets

Eric had a few interesting remarks that are not strictly related to Kanban, but still peaked my interest :-)

- Developers tend to pick a workflow that works for them and stick with it. This is usually a workflow they learned in their first professional experience.
- The role of a _product manager_ at Microsoft combines the responsibilities of a project manager and a business analyst.
- There’s a difference between _continuous deployment and continuous delivery_. Continuous deployment is deploying **every** build to production while continuous delivery still leaves the decision which builds to deploy to production up to the user
- When coordinating work across multiple teams, regular weekly meetings with progress reports and plan adjustments are useful. It’s like a scrum of scrums
- Internally marketing working on support issues as a fantastic way to get to know both the product and the customer is a smart idea
- A ton of our processes as a human race could be vastly better if reengineered from the ground up. The problem is that as systems develop over time, most of the focus is put on local optimization, but global optimization is tough to achieve

_Cover Image Credit: Photo by [Joseph Greve](https://unsplash.com/@lime517?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/toyota?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
