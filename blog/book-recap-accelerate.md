---
title: "Accelerate: The Four Metrics"
date: "2022-07-24"
preview: |
  Accelerate puts many practices, from continuous delivery to lean, under a microscope and whether they, in fact, *cause* organizations to start performing better, measured by business results.

  It defines four key metrics to measure quality - Lead Time, Deployment Frequency, Mean Time to Restore, and Change Failure Percentage.
coverImage: "/blog/chris-liverani-HUJDz6CJEaM-unsplash.jpg"
twitterImage: "/blog/chris-liverani-HUJDz6CJEaM-unsplash-twitter.jpg"
---

[Accelerate](https://amzn.to/3Px65BE) by Nicole Forsgren, Jez Humble, and Gene Kim is a fantastic book on what sets apart high-performing technical organizations from the pack. The book puts many practices, from continuous delivery to lean, under a microscope and whether they, in fact, _cause_ organizations to start performing better, measured by business results.

One of the takeaways from the research the authors conducted is that software organizations ought to focus on four software delivery performance metrics relentlessly:

1. (Delivery) Lead Time
2. Deployment Frequency
3. Mean Time to Restore
4. Change Failure Percentage

To validate the significance of these metrics, the authors leveraged surveying and collected over 23,000 responses from over 2,000 distinct organizations over several years.

## The Four Metrics

### Lead Time

The authors define lead time as **the time it takes from code to being committed to reaching production**.
It does not include the design and development of the feature the code expressed.

**High-performing teams achieve a lead time of less than one hour.**

Shorter lead times allow companies to iterate faster and resolve customer-impacting issues sooner after they are reported.

_The latest data Accelerate measures come from 2017, so high-performing teams are still better. 🏃‍♂️ The authors find that high-performing organizations keep getting better, and the scissors between the best and the worst keep widening._

### Deployment Frequency

Deployment frequency measures **how frequently are new versions shipped to production**.

**High-performing teams ship on demand, multiple times every day.**

Deployment frequency also acts as a proxy measurement for _batch size_, where shipping more frequent, smaller changes is a good practice.

### Mean Time to Restore

When a deployment goes sideways, **how frequently can service be restored** is what mean time to restore measures.
In other words, shipping quickly should not come at the cost of customers being exposed to prolonged outages when things inevitably go sideways.

**High-performing teams perform service restoration in less than an hour.**

### Change Failure Percentage

Similarly, shipping frequent versions requires them to be a "non-event."

If 30% of your deploys have adverse customer impact and you need to roll back, trying to deploy several times a day will cause a hell of a ride. For your customers and engineers both.

Change failure percentage measures **the percentage of deploys that go wrong** and require a rollback, hotfix, or another form of out-of-band intercept.

**High-performing teams have a change failure rate below 15%**

A culture that favors moving forward instead of assigning blame is a must-have to tackle failure effectively. In complex systems, failure is rarely attributable to a single individual and requires systematic solutions.

## No Compromises

One of the most eye-opening findings of Accelerate is that a **trade-off between speed and quality is a fallacy** in software.
High-performing teams have both stellar speed and quality
Low-performing teams have neither.

Further, speed can be an enabler of better product quality, as practices like continuous delivery & testing automation enable product teams to deploy a culture of experimentation and data-informed decisions, leading to better business outcomes.

## Enablers

To progress on the four metrics above, many practices will help you along the way.
Accelerate does a great job of summarizing them; check them out!

In short, Accelerate finds that **widely accepted technical best practices work**.

You won't be surprised to read that putting things into version control, trunk-based development, automating your tests, loose system coupling, and "shifting left on everything" will improve your team's performance.

Further, [a generative culture](https://qualitysafety.bmj.com/content/13/suppl_2/ii22) with high levels of trust is a critical enabler to give technical organizations the tools and confidence to keep improving.

_Photo by [Chris Liverani](https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/fast?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
