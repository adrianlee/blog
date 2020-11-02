---
title: "Terraform for scaling infrastructure"
date: "2020-09-25"
---

I'm now using Terraform Cloud to scale VM servers horizontally! Since most of the tournaments run on a weekend. I can manually scale servers by location via Terraform Variables. All I do is change a variable on website, queue the plan, and apply the infrastructure changes. That's all I need to do! Auto-scaling is something I looked into but I can't predict 10+ matches start at the same time. It's a challenging problem that is worth exploring but I don't need to think about capacity planning and resource availability just yet.

![Terraform variables](/images/2020/terraform.png "Terraform variables")

I have an in-house solutions for managing and scaling docker containers within each VM. I'm interested in using Kubernetes to manage the lifecycle of the containers but I haven't found a need to migrate. If things aren't broken, why fix it? Or in my case, it doesn't make sense to potentially break production for the sake of my interests!