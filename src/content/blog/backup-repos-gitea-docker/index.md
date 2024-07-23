---
title: 'How to Backup the Git Repositories Hosted on a Gitea Docker Instance'
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

As a result, I realized that it was time for me to find a *proper* solution for this problem.

## The Root Problem

Before I could find a solution for this problem, I first needed to investigate *why*
this issue was happening: what is the root cause of the problem that results in the
error message `The Git data underlying repository cannot be read`.

My research on this problem led me to a Github Gist titled
[**Restoring Git Repositories on a Gitea Instance: A Step-by-Step Guide**](https://gist.github.com/HWiese1980/2548e5c150d73d6a55bf52530f11d2d3), written
by Github user [Hendrik Wiese](https://gist.github.com/HWiese1980). In his Github Gist
`README`, Wiese highlights that all repositories hosted on a Gitea instance
are stored in
the `/data/git/gitea-repositories` directory. In other words, to ensure that all
Git repositories can be read in Gitea, Wiese states that one must `clone` all their
repositories locally on their computer, and then copy those repositories into
`/data/git/gitea-repositories`.

This insights provided by Wiese allowed me to discover why I was getting the
`The Git data underlying repository cannot be read` error message in the first place:
the `gitea-repositories` directory was *not* present in the `/data/git` directory of
my Gitea instance after I updated Gitea. In other words, *none* of my respositories
were saved when I updated Gitea.

<figure>
  <img src="/images/gitea-permanent-fix-blog-post/no-dir.png"/>
  <figcaption>
    The <code>gitea-repositories</code> directory was not present after
    updating Gitea.
  </figcaption>
</figure>

Thus, the error message `The Git data underlying repository cannot be read` began
to make much more sense: how could the underlying repositories be read
if there were *not even there* in the first place?

## The Solution

### Hendrik Wiese's Solution

At a higher level, the [solution](https://gist.github.com/HWiese1980/2548e5c150d73d6a55bf52530f11d2d3) 
proposed by Hendrik Wiese is to save all the
Git repositories hosted on the Gitea instance locally on your computer. Whenever
the you encounter the `The Git data underlying repository cannot be read` error,
you navigate to `/data/git`, and place all your locally hosted repositories into
a newly made `gitea-repositories` directory.

Although this solution fixes the problem at its core,
I would have to save the latest versions
of all of my Gitea repositories locally on computer, and would have to manually
create and place all my repositories in `/data/git/gitea-repositories` everytime I
would have to update Gitea. As a result, this led me to think about a more convenient
solution that could address this issue.

### Building Upon It