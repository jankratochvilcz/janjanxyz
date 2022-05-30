---
title: Cracking Personal Planning with Todoist
preview: |
    Even though I've worked on [Todoist](https://todoist.com) for several years as a developer and a product person, I've never really felt that I figured out how to use Todoist myself.
    
    There was too much friction and disorganization in my setup. I've fallen off the wagon many times over the years.
    
    This year, for the first time, I feel like I've finally nailed it, and I'm here to share.
date: '2021-09-22'
---

Even though I've worked on [Todoist](https://todoist.com) for several years as a developer and a product person, I've never really felt that I figured out how to use Todoist myself. There was too much friction and disorganization in my setup. I've fallen off the wagon many times over the years.

This year, for the first time, I feel like I've finally nailed it, and I'm here to share; hopefully, it will give you some valuable ideas for your Todoist usage.

## Problems to solve

To make Todoist truly useful, I need it to do a couple of things for me.

### #1 (work) Support my weekly planning cycle

Every Monday, I reflect on the prior work week and plan the next one, [as every Doister](https://twitter.com/amix3k/status/1120317586963685379?lang=en).

This process includes looking at my Todoist to keep commitments and make meaningful progress beyond the usual firefighting. The goal is to generate a list that looks as follows.

![Weekly snippets](/blog/cracking-personal-planning-with-todoist-1.png)

### #2 (personal) Keep up with life

I don't excel at recurring chores, as our finance team could attest to 😅. Making sure all personal monthly payments are going out, doing my Japanese homework on time, etc. If I need to rely on my memory and will, all is lost.

At the same time, I don't want to make my personal life overly deadline-driven. If I don't manage to code a new feature for my side project on Sunday, it's a shame, but I don't want to feel bad about it. I don't want to come to a Todoist overflowing with overdue tasks at the start of my Sunday; that's completely demotivating.

### #3 Separating work and personal tasks


I need to strongly divide my work and personal tasks. I don't want to see tasks I have overdue at work during the weekend as [I'm not going to do anything about them anyway](https://twitter.com/jankratochvilcz/status/1439245838308593672).

At the same time, I don't want to see that I'm late on my phone bill while at work, as it's super distracting.

## Previous setup

My previous Todoist setup was heavily deadline-driven. If something should get done, it gets a specific day, and I will pluck it from the *Today* view when the time comes.

This system *kind of* worked but had a bunch of weak points:

* By pretending that everything has a hard deadline (most things don't), my<strong>&nbsp;prioritization became about hitting as many arbitrary deadlines as possible, not focusing on what's the most important.
* **Brutal for work that involves async collaboration.** Deadlines for personal work items are very stressful when working asynchronously. Response time and quality vary significantly between people within async companies, so planning to finish tasks requiring collaboration within a specific day is a fool's errand.
* My Todoist required **constant upkeep**. rescheduling late tasks, scheduling new tasks, etc. If I didn't do it for two days, the overdue tasks overwhelmed the app, and I became resentful of opening it, compounding the problem.
* Keeping personal and work tasks were difficult, as they both surfaced in the *Today* view with Todoist.

## New setup

To tackle the above problem, my new setup has several building blocks:

* The **@current** and **@upcoming** labels indicate work that is in the current or upcoming batches. These two time boxes don't have a specific date attached to them
* Only tasks that **must** be completed by a specific date get a due date, nothing else.
* Only two top-level projects exist in my account: *Doist* (where I work) and *Personal*. Both of these have many subprojects.
* Finally, four filters. *Personal (current)*, *Personal (upcoming)*, *Doist (current)*, and *Doist (upcoming)*.

![Todoist setup](/blog/cracking-personal-planning-with-todoist-2.png)

For convenience, here are the exact filter queries I'm using. 👇

```
##Personal & (@current | today | overdue) & !assigned to: others
##Personal & @upcoming &amp; !assigned to: others
##Doist & (@current | today | overdue) & !assigned to: others
##Doist & @upcoming &amp; !assigned to: others</pre>
```

This system allows me to meet all actual deadlines while still tailoring my day based on where I feel I can make the most impac *today* based on which collaboration ping-pongs moved forward and how I feel.

As a bonus, it also cuts the time I need to spend on rescheduling tasks as I need to switch from *@upcoming* to *@current* and scout for the next *@upcoming* tasks only when I'm done with the *@curent* ones. I still typically do this weekly at work, but it's much more fluent for my personal life.

I hope you found learning a bit about my setup helpful, and if you're struggling with your Todoist setup, you have walked away with a few ideas!
