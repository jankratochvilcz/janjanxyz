---
title: "The Seven Sins of Reviewing Pull Requests"
date: "2022-09-28"
preview: |
  Reviewing PRs is hard.

  Understand the seven basic mistakes of reviewing pull requests and how to mitigate them.

  Prioritizing reviews, avoiding vague asks, and indicating optionality are a few practices 
  that will help keep your colleagues happy and the team moving forward.
coverImage: "/blog/seven-sins-of-reviewing-pull-requests.png"
twitterImage: "/blog/seven-sins-of-reviewing-pull-requests.png"
---

Are you a developer?

If yes, you have a complicated relationship with _PRs_ (pull requests).
You spend a generous chunk of time reviewing PRs, sometimes not finding time for much else.

On occasion, your reviews are a blast.
You manage to teach your colleagues new coding tricks, align on engineering values, and have profound discussions about architecture and design patterns.

But frequently, your reviews are a drag for PR authors for PR.
They are slow, forcing the PR authors to rebase multiple times.
Your feedback sounds vague, subjective, and isn't actionable.

Providing consistently great PR reviews is hard, especially if you are constantly swamped.

Rushing reviews leads to a few frequent patterns that make life harder for you, the PR author, and in the long term, the entire team.

1. Reviews are not a priority
2. Vague asks in reviews
3. Unrelated asks in reviews
4. Not indicating optionality
5. Commenting without reviewing
6. Stylistic asks unsupported by guidelines
7. Incomplete first pass review

The great news is that fixing most of these patterns doesn't require extra time; the solutions center on improving your communication patterns and empathizing with folks relying on your reviews.

Let's dive in.

## 1. Reviews Are Not a Priority

**The Situation**

The members of your team usually have five or more PRs open each.
"The system" for getting PR reviews comprises mostly complaining loudly on Slack.
It takes multiple days to merge PRs, even trivial bug fixes and small refactors.
The delays don't happen because of harsh feedback, but because everyone, you included, takes more than a day to review or re-review code.

**The Problem**

When reviews are not a priority, hard-to-quantify, but rampant time wasting becomes the norm:

- Feature branches live longer, causing painfully-frequent merge conflicts.
- Your branching strategy is reminiscent of a poorly-maintained bonsai tree. Pruning it is just as futile.
- When you encounter bugs, you are unsure whether it's already squashed somewhere else in your bonsai.
- By the time you get a review, you have mostly forgotten the details of your implementation. To rebuke your reviewer, you need to spend more time refreshing on the code you've written.

**The Solution**

**Prioritize PR reviews above all else during your work day**.

During planning and status meetings, be vocal about your review work to ensure you don't get assigned more tasks that would prevent you from reviewing. Making your manager aware you have reviewed work is effective; they should understand the value of shipping in-progress work as it limits [work-in-progress](https://www.atlassian.com/agile/kanban/wip-limits).

If you can't find time for reviews no matter what you do, **review PRs first thing in the morning** before you dive into your code.

## 2. Vague Asks in Reviews

**The Situation**

When you review PRs, you sometimes have trouble articulating your specific concerns and how the author could mitigate them.
Regardless, there's nothing worse than unspoken worries, so you write comments like:

- _I'm not sure whether this is a suitable architecture for the solution..._
- _This part of the code is on a hot path, so we should address performance concerns._
- _The formatting of this section could be improved._

**The Problem**

It's unclear what you want the PR author to do; you only create FUD (a.k.a. fear, uncertainty, and doubt).
This kind of feedback puts the author in a challenging position.
They need to resolve your comment to move forward, but there is no _specific_ change to make; dispelling vague concerns is hard.
In most cases, the author will attempt a blanket justification of the current design to soothe your concerns.

Arguing against vague feedback gets harder the more junior the developer.
Junior developers frequently assume that their seniors' vague concerns are valid. _How can you argue with people that know so dang many shortcuts?_
As a junior developer, it's hard to muster the confidence to tell the reviewer to put more thought into their feedback or rescind it.

**Solution**

Always make sure you're either **making a _specific_ ask about a change that would resolve your comment** (even if that means starting over) or clarify the comment is just food for thought - you expect no action, just acknowledgment.

## 3. Unrelated Asks in Reviews

**Situation**

One of your API endpoints doesn't require user authorization by mistake.
You are reviewing the PR that adds authorization to the endpoint by reusing what other parts of the application have been doing for the past two years.

You take this as an opportunity to explore how authorization works in the API and discover flaws in the design.
You leave a comment along the lines of _The authorization mechanism we use has security gaps; we should switch away from basic auth towards OAuth._

**Problem**

While you may have a point, the roots of the troubles are not in the PR.
You will get pushback, and the feedback will either fizzle or eventually be moved to a different place to placate you.
It takes a few days to arrive at the inevitable _Let's make a thread in Slack!_, causing an unnecessary slowdown.

**Solution**

When you see a problem during code perusal not caused by the PR, remark it on the PR, but open a discussion elsewhere.
This approach will give the PR author visibility about your thoughts, but you're not blocking them from progressing.

## 4. Not Indicating Optionality

**Situation**

You are reviewing a PR of a more junior developer.
You notice possible refactors.
They are not essential but could be a great learning opportunity for the PR author.
With excitement, you add comments like:

- _This could be more concise if you used the function X of library Y we have in the codebase._
- _By changing the formatting to X, the code would be more readable._

**Problem**

Your suggestions are genuinely helpful!
Comments like this induce team learning, the nirvana of pull request reviews.
They are just not _must-haves_.

Depending on the circumstance, shipping the code earlier could be more valuable than finessing the syntax (assuming it was OK in the first place).
You might not have the context to make that call.
By creating a lot of suggestions like this, you are ensuring there will need to be another review round, increasing the time required to merge.

**Solution**

This problem has the easiest fix from the whole list.
Prefix your comment with an _(optional)_ text snippet.
This snippet lets the author know that adopting the feedback is welcome but not required.

_Comments marked this way tend to be well-received by PR authors. They indicate you trust the author to make the final call, fostering a sense of agency and collaboration in the team._

## 5. Commenting without Reviewing

**Situation 1**

You have a busy day, but think to help out your colleague by looking at their PR.
You add a few comments but don't have time for a proper review.
You hope the comments are still helpful.
Either way, you are feeling good about yourself.

**Situation 2**

You are a nice person.
Marking a PR as "changes requested" feels so...harsh. Who even has the heart to press that button?

You prefer just to add comments until you can approve.
Much more aligned with the personality archetype you posess according to the latest [16Personalities](https://www.16personalities.com/) run-through you did.

**Problem**

In both situations, the problem is that the PR is now in an unclear state.
In Situation 1, the PR is unlikely to attract real reviewers.
"Looks like the PR is already being reviewed" is the easiest excuse to make to yourself when scanning a list of reviews.

In Situation 2, it's unclear that the PR is in a bad state.
The author may feel that the feedback is not a must-have.

Additionally, for folks like managers and tech leads looking at PRs in aggregate and mostly seeing them as lists, it becomes muddy who is waiting on who and where they can help with PR allocations and extra bandwidth.

**Solution**

If you're leaving a few random comments and you genuinely can't provide a full review, leave an explicit comment on the PR stating this.

If you're a nice person, take a breath and mark the PR as "changes requested."
You can leave a friendly message on the PR along the lines of "looks good, we just need to polish up the last few bits" to soften the blow.

## 6. Stylistic Asks Unsupported by Guidelines

**Situation**

You are reviewing a PR from a colleague who recently joined the team and you want to help them align their style to your team's. You write comments like:

- _Use function X from library Y for async operations_
- _Rename this JSON property to snake case_

**Problem**

While your goal of ensuring codebase consistency is admirable, coaching new hires through PR comments on style is a frustrating experience for the author.

From the author's point of view, you are just throwing up random, subjective comments.
They could easily argue the opposite side of the coin.
It's dispiriting and prolongs the process.
From the author's point of view, your comments feel arbitrary.

**Solution**

Add a link if there are **written style guidelines** for the practice you want to reinforce.
Links help the author understand that your feedback is not just your point of view.
It also incentivizes PR authors to improve their awareness of the guidelines.

If your team has no style guidelines (you should!), think twice before posting stylistic feedback.
You should be 100% sure it represents a team practice and not just your opinion, even if you agree on it with a few developers closest to you.

## 7. Incomplete First Pass Review

**Situation**

You are a busy reviewer.
When you review PRs and discover flaws that will prevent approval anyways, you document them and move on before finishing reading the entire PR.
This "move on after first fail" approach helps you to churn through more reviews and batch feedback, making it less overwhelming.

**Problem**

This review style creates the impression that the PR is just one or two tweaks from approval.
But when the PR author submits the tweaks, they get entirely new pieces of feedback.
This makes it hard to understand how many rounds of reviews the PR will need, making it difficult for the author to plan their next steps.

**Solution**

**Make the initial review complete whenever possible.**

Go through all the changes and flag any issues you spot in a single go.
The ideal target is only to refine your existing feedback during subsequent re-reviews.

If you need to do partial reviews due to fundamental flaws in the PR or the lack of time, clearly state that more feedback is yet to come in the summary of the original review.
It's not ideal, but it at least clarifies the review's state.

If you hear feedback that your review contains too many review comments, the root cause might be the size of the PR. A topic for another time, but a good PR is a small PR, not one that touches half of the codebase.

## Summary

PRs are a tricky part of the modern software development lifecycle.
Even with an all-hands-on-deck effort, frustrations won't disappear overnight.
There are no silver bullets for handling PR reviews.

The name of the game is _kaizen_, small and incremental but persistent improvements.
Submitting crystal-clear feedback, not blocking merges unnecessarily, and providing consistent review times will make you an outstanding reviewer of any team.
The authors of PRs you review will notice and start copying you.

Before you know it, the team review culture will shift from slow and frustrating to something more joyful and valuable.

Photo by[五玄土 ORIENTO](https://unsplash.com/@oriento?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/bonsai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
