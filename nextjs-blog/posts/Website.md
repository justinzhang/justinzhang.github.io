---
title: The Birth of My Website
date: '2022-12-01'
---
With my goals of applying to graduate schools, I thought it was nigh time to invest some time into creating a personal website. So, I put on my special 'web dev' hat and got to work. 

# The Stack

This website is constructed using Node, React, and Next.js. With Next.js, I created a static website that, in conjunction with react, is fast and responsive. Additionally, the Next.js framework is pretty easily extensible with functionalities like dynamic routing and server-side rendering. One thing I am really proud of is the katex rendering. I was able to create a custom component that takes in a string and renders it as a katex equation. This is really cool because it allows me to write my posts in markdown and then render the equations in latex. For example, if I really wanted to tell you the definition of the totient function, I could write:

$$ \begin{aligned}\phi(n) &= n\left(1 - \frac{1}{p_1}\right)\dots\left(1 - \frac{1}{p_k}\right) && \text{ prime } p_i, p_i \mid n  \\ &\implies \sum_{d \mid n} \varphi(d) = n\end{aligned}$$

Isn't that cool? I think it is.