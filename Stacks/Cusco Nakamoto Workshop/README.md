# Hacking Hour Challenge

![Blockcain](https://img.shields.io/badge/Blockchain.com-121D33?style=for-the-badge&logo=blockchain.com&logoColor=white)
![Javascritp](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

[**Event Page**](https://lu.ma/epcy9h7o?tk=A9Jo8a>)

**Duration 1h**

## Objetive

The idea of hacking hour is resolving small challenges to the first experience with stacks technologies.  Basically, write your first code with Clarity to do some pieces of smart contracts and understand that Clarity is an easy and secure language to write smart contracts.

## Dev tools

- **Write smart contract frictionless**
  - [Xverse wallet](https://www.xverse.app/)
  - _Examples:
    - [Clarity-examples Github](https://github.com/hirosystems/clarity-examples/)
    - [Hiro platform](https://platform.hiro.so/projects)
    - [Testnet Explorer](https://explorer.hiro.so/?chain=testnet&api=https://api.nakamoto.testnet.hiro.so)

- **Clarity & clarinet to developer smart contract**
  - [Clarity language](https://book.clarity-lang.org/title-page.html)
  - [Clarinet](https://docs.hiro.so/stacks/clarinet)

![Clarinet](../assets/images/Clarinet.avif)

- **Stacks Blockchain API**
  - [Stacks API by Hiro](https://docs.hiro.so/stacks)

![StacksAPIbyHiro](../assets/images/Stacks_API_by_Hiro.avif)

- **Stacks JS**
  - [Stacks.js](https://docs.hiro.so/stacks/stacks.js)

- **sBTC**
  - [sBTC Docs](https://stacks-network.github.io/sbtc-docs/introduction.html)

![Stacks.js](../assets/images/stacks_js.avif)

## Challenges by tools

Each tool section will have some challenges, with differences in points depend on difficulty.

### CLARITY

> Setup your local environment: Install clarinet, add plugins to your IDE and run a demo  (1 pts)
<details>
  <summary>code</summary>

```bash
sudo apt install build-essential pkg-config libssl-dev

git clone https://github.com/hirosystems/clarinet.git --recursive
cd clarinet
cargo clarinet-install

git checkout main

git pull
git submodule update --recursive

% clarinet --version
clarinet-cli 1.0.2
```
</details>

<details>
    <summary>Screenshot</summary>

![Imge](../doc/images/img1.png)
</details>

> Run smart contract locally with clarinet (3 pts)
<details>
  <summary>Code</summary>

```clarinet
;; An on-chain counter that stores a count for each individual

;; Define a map data structure
(define-map counters principal uint)

;; Function to retrieve the count for a given individual
(define-read-only (get-count (who principal))
  (default-to u0 (map-get? counters who))
)

;; Function to increment the count for the caller
(define-public (count-up)
  (ok (map-set counters tx-sender (+ (get-count tx-sender) u1)))
)
```

</details>

> Deploy an smart contract on testnet or mainnet using deployment plans. (5 pts)

### STACKS API

> **Retrieve account information:** Create a simple app that ca fetch information about on-chain addresses, including their account balance, their transaction history, and more. (1 pts)

> **Get recent transactions:** Create a simple app that can retrieve data about transactions on Stacks and broadcast new transactions to the network. (1 pts)

### STACKS JS

> **Authenticate your users:** connect to user wallets and verify their on-chain identity. (3 pts)

> **Interact with a contract:** Exacute write or read function of any existing contract. (5 pts)

## Rules

To be part of hacking hour, developers need to get these requirements:

- Submit a completion for, into this form we will request: complete name, email, public repository link, STX wallet address.

- About the repository content:
  - Create a README file with the list of resolved challenges.
  - We will verify is the repository was created this day and the commits were submitted during the timeline.
- It is allowed to request support from mentor during the hacking hour.

## Awards

To choose the winner, mentor will check each repository and check if all item mentioned into README were done successfully.

Finally, mentor will calculate the obtained total points and select the best 2 scores.
