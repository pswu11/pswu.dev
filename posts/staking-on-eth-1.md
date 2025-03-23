---
author: "Pei-Shan Wu"
title: "Learning notes: staking on Ethereum"
date: 2023-05-07
tags:
  - blockchain
  - ethereum
---

_This post is not investment advice, so I intentionally avoid mentioning
specific staking providers. If you find any information unclear/incorrect, just
let me know as I'm also learning. 🙏_

We talked about staking during the recent [SheFi](https://www.shefi.org/)
session. And I noticed it is among the most confusing topics for many other
SheFi memebers, including myself. It's not hard to grasp the concept of why
staking is necessary for security and decentralization, and why it might be an
interesting way to invest. But with all the staking options out there, what are
the differences? While learning about this, I created a mental map to organize
my thoughts. I'd like to share this mental map and my train of thoughts in this
blog post, and hopefully it's helpful for others who are also learning the same
topic.

I use a tree graph to highlight relevant traits and requirements of different
staking options from the perspective of stakers:

![mental mapstaking for staking on eth2](/images/mental-map-staking.png)

To add more context to the tree graph above, I also put together a list of
(non-exhaustive) questions a potential staker could ask when evaluating
different staking providers (especially staking pools) and why these questions
matter.

#### Can I stake using a non-custodial wallet?

This is the key to determining whether you have full ownership of your staking
rewards. You might have heard people saying - staking pools are decentralized,
so your rewards are safe. Be careful not to take it too literally because it's
based on many assumptions[^1]. If you participate in staking pools using a
custodial exchange, the tokens technically go to your custodial wallet. So you
don't **truly own** them until you transfer them back to your non-custodial
wallet.

#### Is the staking process based on a smart contract?

It's worth noticing that **not all staking pools are based on smart contracts**.
Therefore, not all of them are decentralized. It's more ideal when smart
contracts own[^2] the whole staking process, not the node operators or the
service providers. Also, there should be a built-in incentivization mechanism to
prevent malicious node operators. That said, not all smart contracts are secure,
so you should ask more questions.

#### Has the smart contract (or even other parts of the system) been audited? If so, has the team published the audit reports?

There are many staking pools out there that are based on smart contracts. But we
know that smart contracts are written by humans, and humans make mistakes. It's
important to observe whether the developers behind the project have done their
best to secure the system and resolve the vulnerabilities found. One indicator
would be whether they have sought smart contract auditors to audit their code
**AND** whether they have published the reports with follow-up actions.

#### Who controls the withdrawal key?

If you are more technical, you might even want to understand who controls the
withdrawal credentials. For example, some staking pools make node operators
delegate their withdrawal keys to a smart contract, which points to the staking
pools. **This prevents the node operators from withdrawing staked ETH or
excessive rewards.** To learn more about the withdrawal key, you could refer to
the
[Ethereum documentation](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/).

#### What is the liquidity of staking pools?

In normal staking, your staked ETH becomes illiquidable. But in liquid staking,
a type of staking pool, you receive ERC-20 tokens that represent your staking
rewards. You could then reinvest these tokens or use them as collateral. The
liquidity doesn't only depend on whether the token is ERC-20 (fungible); it's
also relevant to check whether you could resell your tokens back to the
platform, the trading volumes of this token, and what the ratio vs. ETH is,
etc., **depending on your own investment preference**.

#### Is the project open-source?

A common misconception is that being open-source only means publishing the code.
Indeed, code transparency is one of the benefits of being open source. However,
being open source also means the project welcomes community feedback, issues,
and contributions. It's important to note that **open source is not proof of
secure code or trustworthiness**, even though an active open source community is
often seen as a positive signal.

[^1]:
    In some occassions, **stakings pools** is used interchangeably with
    **smart-contract based liquid staking**, and it's assumed that users
    interact with the platform using a non-custodial wallet.

[^2]:
    Note that smart contracts could also have some owner addresses with
    unreasonable privileges that compromise security.

## At last...

Thank you for reading until here. Let me know if you feel any key information
needs to be included to help more people understand this topic! Happy to
exchange ideas!

Special thanks to [Polygon](https://polygon.technology/) for sponsoring my
participation at SheFi! 🫶

References:

- [Ethereum Staking Page](https://ethereum.org/en/staking/)
- SheFi Course Material
