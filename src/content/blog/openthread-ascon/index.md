---
title: 'Modifying OpenThread to Support ASCON'
description: "How I modified OpenThread to support ASCON-128a and ASCON-128 encryption algorithms."
date: 09-13-2026
draft: false
---

For my [Master's Thesis](https://simeonat.github.io/research/thesis/), I modified [OpenThread](https://openthread.io/), Google's open source implementation of the [Thread](https://www.threadgroup.org/) commercial IoT protocol, to support the NIST endorsed [ASCON](https://ascon.isec.tugraz.at/) symmetric encryption algorithms. 

My thesis mainly focused on the *science*, showing that when the cipher built into OpenThread: AES-CCM, is replaced with ASCON AEAD, there is *no significant adverse impact* in both the network performance and energy consumption of Thread devices. I discussed how I replaced AES-CCM with the ASCON symmetric encryption algorithms at a higher level; but I did not describe 