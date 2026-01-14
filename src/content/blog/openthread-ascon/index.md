---
title: 'Modifying OpenThread to Support ASCON'
description: "How I modified OpenThread to support ASCON-128a and ASCON-128 encryption algorithms."
date: 09-13-2026
draft: false
---

For my [Master's Thesis](https://simeonat.github.io/research/thesis/), I modified [OpenThread](https://openthread.io/), Google's open source implementation of the [Thread](https://www.threadgroup.org/) commercial IoT protocol, to support the NIST endorsed [ASCON](https://ascon.isec.tugraz.at/) symmetric encryption algorithms. 

My thesis mainly focused on the *science*, showing that when the cipher built into OpenThread: AES-CCM, is replaced with ASCON AEAD, there is *no significant adverse impact* in the network performance and energy consumption of Thread devices. 

In this post, I'm going to focus on the *engineering* part of my thesis: how did I modify OpenThread to support ASCON-128a and ASCON-128 for ESP32 Thread devices. I will discuss the changes I made, along with the challenges I encountered, and how I went about solving them.