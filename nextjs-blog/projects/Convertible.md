---
title: The Convertible Codes Framework
date: 'February 2023-Present'
summary: 'Cost of Conversion for Erasure Codes in Distributed Storage Systems and Optimal Constructions'
---

Erasure codes have found tremendous application in distributed and cloud storage systems. In this setting, large amounts of data must be stored in a fault-tolerant manner, where overhead can be extremely costly, especially if that overhead is linear (simple replication is fault tolerant but expensive!). Erasure codes provide fault tolerance guarentees through properties like Maximum Distance Seperable (MDS) with sub-linear overhead! Classical erasure codes like Reed-Solomon codes are often used in distributed storage systems.

&nbsp;

Observations of real-world distributed storage systems have shown that storage devices often follow a "bathtub" curve, where failure rates are highest at the beginning and end of the device's lifetime, while the middle-life has a relatively low failure rate. This observation has led to the development of **convertible codes**, which are erasure codes that can be converted from one code to another. The idea is that a code can be converted from a high-overhead code to a low-overhead code when the failure rate is low, and then converted back to the high-overhead code when the failure rate is high. This allows for a reduction in the overall overhead of the system, depending on the failure rate of the system. In this project, we are interested in finding lower bounds on different metrics of costs of conversion and using those costs to motivate optimal convertible code constructions.

&nbsp;

Previously, convertible codes have been extensively studied with respect to access cost, where constructions and bounds for all parameters have been found. My contribution is to extend the development of current bandwidth cost bounds. In particular, for the split regime, the bandwidth bound is based on a conjectured bound and relies on a network flow argument that is not tight for the multi-cast problem. I am currently working on developing linear programming methods for convertible codes which will allow tighter bounds to be proven in many general cases with the use of strong duality. Manuscript to be posted soon.

&nbsp;

>I thank Rashmi Vinayak and Francisco Maturana for their guidance and support for my contributions to the project. Their previous work on convertible codes: 

[Access Cost of Convertible Codes](https://arxiv.org/abs/1907.13119)

[Access Cost of Convertible Codes for All Parameters](https://arxiv.org/abs/2006.03042)

[Bandwidth Costs of Convertible Codes in the Merge Regime](https://arxiv.org/abs/2008.12707)

[Bandwidth Costs of Convertible Codes in the Split Regime (Conjectured Bound)](https://arxiv.org/abs/2205.06793)
