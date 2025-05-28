---
title: 'How to set the TX Power on ESP32 OpenThread Devices'
description: "Tutorial on how to set and get the TX power on ESP32 OpenThread devices when using ESP-IDF."
date: 2024-06-5
draft: false
---

When developing on ESP32 devices running OpenThread, a key feature that I needed was the ability to set the transmission (TX) power of these devices. However, I could not find a tutorial or guide on how to do so. 

As a result, I wanted to write a quick guide on how you can change the TX power of ESP32 OpenThread devices, along with references to helpful resources.

## Setting TX Power in Code

Most settings on ESP32 devices would typically be set using `Kconfig` variables and configured using `idf.py menuconfig`. However, this is no such `Kconfig` configuration for the TX power.

According to the [ESP-Techpedia](https://docs.espressif.com/projects/esp-techpedia/en/latest/esp-friends/advanced-development/performance/modify-tx-power.html#thread-tx-power), the TX power must be set *programmatically* using the `otPlatRadioSetTransmitPower()` class method provided by OpenThread.