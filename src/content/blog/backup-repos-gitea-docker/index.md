---
title: 'How to Backup Repositories in Gitea Docker'
description: "How I finally managed to do it without using Python scripts"
date: 2024-06-20
draft: false
---

## Introduction

I previously wrote a [blog post]((https://simeonat.github.io/blog/git-python-scripts/)) where I discussed how I wrote
Python scripts to *automate* the process of backing up my repositories in my self-hosted [Gitea](https://github.com/go-gitea/gitea) Docker instance.
The reason I wrote these scripts in the first place was because I would get
the annoying `The Git data underlying repository
cannot be read` error message every time I update my Gitea Docker instance. Although my Docker container would be updated to the newest version of Gitea,
I wouldn't be able to access any of my respositories.

<figure>
  <img src="/images/gitea-error.png"/>
  <figcaption>The error message that I got when visiting my repositories every time I update my Gitea instance.</figcaption>
</figure>

To work around this error, my Python scripts would first clone all of the repositories hosted on my Gitea instance to my computer *before* I began to update Gitea. After updating, I programmed the scripts to delete all the respositories hosted on Gitea. Afterwards, the scripts would then subsequently push all the repositories stored on my local computer back onto the Gitea instance.

Although the scripts were successful in preserving my
Git repositories whenever I update Gitea, I got feedback stating that there must
exist a significantly easier way to do this without having to write Python scripts
in order to do so.
Furthermore, I found the scripts tedious to use over time, especially since I had to run
[four separate Python scripts](https://simeonat.github.io/blog/git-python-scripts/#does-it-work)
every time I had to update Gitea. It didn't particularly help either that I had to manually go in and fix things
every time my scripts had an issue (e.g. such as when the scripts can't clone a repository due to Internet connection issues).

As a result, I realized that it was time for me to find a *proper* solution for this problem. My research has led me to
find not only a solution to this Gitea repository backup problem, but also its underlying *root cause*.

## The Root Problem

