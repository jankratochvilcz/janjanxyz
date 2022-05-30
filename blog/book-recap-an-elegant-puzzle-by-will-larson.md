---
title: "Book Recap: An Elegant Puzzle by Will Larson"
date: "2020-10-04"
preview: |
  Overall, where Scrum feels like a structured approach with an eye on speed, Kanban feels like a _flowing river_. There’s no time-boxing. Instead, Kanban focuses on creating a clean and narrow channel for your work to flow though. 
  
  Let’s take a look at the Kanban process.
coverImage: "/blog/jeffrey-blum-ssv57guwwgu-unsplash.jpg"
---

[An Elegant Puzzle: Systems of Engineering Management](http://An Elegant Puzzle: Systems of Engineering Management) by Will Larson is an excellent entry into the growing collection of books by [Stripe Press](https://press.stripe.com/).

The book is a personal narrative of leading larger technical organizations. It presents the author's take on some of the most crucial challenges like **organizational design, the hiring pipeline, career narratives, and product work**.

In this post, I'm trying to pick out some of the best gems I've found. There's a lot more to the book than I'm covering here; it's a worthwhile read.

## Four States of a Team('s Technical Debt)

Technical teams can be in one of four stages of technical debt.

Understanding the current stage helps the manager pick the right approach to guide the team along the progression curve.

1. **😩 Falling Behind** - The team is taking on technical debt. The system fix is to find quick wins and keep up the morale while hiring more people.
2. **🤹‍♂️ Treading Water** - The team is not taking on more debt, but it's not repaying it either. The fix is to limit work-in-progress (_[kanban](https://janjan.xyz/2016/12/16/book-recap-agile-project-management-with-kanban-by-eric-brechner/) can be a great tool here!_) and ensure that team members primarily look at the overall team performance instead of their individual one.
3. 👷‍♂️ **Repaying Debt** - The team is paing down technical debt. Support the team by giving them more time to continue debt repayment and look for easy user-facing wins to prove to stakeholders that the team is not staying still, alleviating external pressure to stop focusing on debt repayment
4. 💪 **Innovating** - The team's technical debt levels are low and they are free to move quickly and innovate. Maintain slack (i.e., don't aim for 100% utilization), innovate, and ensure that innovation is valued within the broader company

## Grow Teams in Bursts

After each hire, a team undergoes a gelling process, i.e., going through [forming-storming-norming-performing](https://en.wikipedia.org/wiki/Tuckman%27s_stages_of_group_development). Adding new hires disturbs this process and resets it to a degree.

For that reason, the author recommends going through "growth spurt" periods with periods of low hiring activity in between. This approach gives teams time to gel fully before adding more members that restart the process.

## Ad-hoc Communication

Ad-hoc communication is a know productivity killer. Asks for help, feedback, troubleshooting assistance, external communication takes a lot of time.

The recommended setup is:

- **Funnel all team interruptions into an ever-smaller surface and automate** aggressively (i.e., ask people to file tickets instead of having ad-hoc conversations)
- Create a rotation of people that manage this communication surface

On a side-note, at Doist we handle this by having a "hero role", which is a similar concept. We have a [blog post](https://blog.doist.com/heroes-housekeeping-days/) if you're interested in the details!

## Goal Definitions

A good goal has four parts:

- A **target** to reach
- A **baseline** that defines the current state
- A **trend** that describes the current velocity if no action is taken
- A **time frame** in which the target should be reached

An example of a good goal would be: _In Q4, we will improve the 2nd-day retention of our plugin users from 15% to 25%._ _Since the launch of the plugin, the retention has remained static at around 15%._

When defining goals, setting a countervailing metric can be useful to prevent focusing solely on reaching the target to the detriment of other metrics.

You can read more about goal setting on the [author's blog](https://lethain.com/goals-and-baselines/).

## Snippets

Lastly, here are a few snippets from the book that are interesting even outside of their context:

- _There is a lot less competition for hard work._ When discussing how to grow professionally, the author points out that it can be more useful to picking up new work areas instead of focusing on the formal career ladder. EDIT: I kept thinking about this one and have written a subsequent blog post about it [here](https://janjan.xyz/2020/11/29/hard-work/).
- _It’s one thing to know that you’ve never used your education budget, and something else entirely to know that you’re the only person who isn’t using it._ Showing people where they fall on the distribution to make a strong point.
- _Treating your peers as your first team allows you to begin practicing your manager’s job, without having to get promoted into the role first._ This rings true with my experience! Taking on your manager's work leads to closer collaboration with the manager as you'll get insights into the problems your manager is having.
- _Rather, that approach (weeding out folks who don't show passion about their work during the hiring process) seems to mostly filter for candidates willing to represent enthusiasm, as opposed to finding authentic passion._ Something I'm always mulling over when discussing the hiring process as there's frequently contention about this point.
- _Because (career) level expansion is typically driven more by the need for career progression than by the introduction of objectively distinct accomplishment, levels added at the top create downward pressure on existing levels. Expectations at a given level decrease over time._ Having worked intensely on career definition in the past year, I'm curious if this statement will turn out to be true.

_Cover Image Credit: Photo by [Jeffrey Blum](https://unsplash.com/@jeffreyblum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/puzzle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
