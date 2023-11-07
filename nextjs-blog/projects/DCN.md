---
title: Benchmarking Matrix Approximations for Deep Learning Recommender Systems for TPUs
date: 'March-June 2022'
summary: 'We investigate how well do different matrix approximations perform on TPUs vs GPUs and CPU'
---

Recommender systems are prevalent across the internet. Many services rely on accurate recommendation systems, with deep learning recommenders becoming very popular due to their generalizable accuracy. However, as with many deep learning models, these recommenders have large magnitudes of parameters that have high computation cost. We seek to alleviate these issues by exploring the use of common matrix approximations, such as low rank, random Fourier features, and PCA, to compare their efficiency speedups on Google's TPU architecture versus traditional GPU and CPU setups. We focus on a case study of training a DCN model over the movielens dataset, where we apply the matrix approximations for cross layer interactions. While low rank approximation is often the best generalizable approach for GPUs and CPUs in terms of high complexity reduction and preserved accuracy, our results suggest that random Fourier Features may scale better for large batch training on TPUs.

>Advised by Rashmi Vinayak

[Milestone 1](/dcn/milestone1.pdf),
[Milestone 2](/dcn/milestone2.pdf),
[Milestone 3](/dcn/milestone3.pdf),
[Milestone 4](/dcn/milestone4.pdf),
[Milestone 5](/dcn/milestone5.pdf),
[Final Paper](/dcn/07400final.pdf) 

[Presentation at Meeting of the Minds](https://symposium.foragerone.com/meeting-of-the-minds-2022/presentations/46003)