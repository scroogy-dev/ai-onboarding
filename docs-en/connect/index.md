# Part 2 Overview: Why Connect?

> This part is about letting the agents you met in Part 1 work with **data and tools outside your computer**. It is not a new stage. It continues Part 1 by widening **the range of data AI can use**.

---

## This continues from Part 1 { #from-part1 }

The [three stages of AI use](../index.md#stage-model) in Part 1 show, step by step, how much you put AI to work. Once you reach Stage 3 (working with agents), AI opens the files in your folder and works on them directly.

But one thing gets in the way there. **The data you need for your work is not only in that folder.** Meeting notes, policies, and planning documents are in Confluence; work requests and progress are in Jira. However well an agent works, if the data it can see is limited to your computer, what it can do stops there too.

**Connections are divided by a different criterion than the three stages in Part 1.** The three stages are divided by how much you put AI to work (your level of use). Connecting decides which data AI can use (the range of data). Because the criterion is different, connecting does not add another stage. You stay at your current stage, and **the data you can use** gets wider.

So you can use connections even at Stage 2, and at Stage 3 you can still work only with local files, without any connection. It is a **choice**, not a sequence.

Since it is a choice, **sometimes not connecting is the right call.** Public data that anyone can see does not need a connection, because AI can read it as it is once you give it the address. For data you will use only once, pasting it in yourself is faster.

You need a connection for **work that requires signing in and checking permissions**. That includes reading data you can only see after signing in, and also editing public data or leaving something on it. For tasks you repeat, a connection is more convenient, but being convenient is different from requiring a connection.

---

## What changes { #what-changes }

Put the same task side by side, before and after connecting, and the difference is clear.

<div class="grid" markdown>

!!! example "Before connecting"
    To summarize meeting notes, you find and open the page in Confluence, copy the text, and paste it into the chat.

    If there are three documents, you repeat this three times, and again next week.

!!! example "After connecting"
    Ask "Find last week's team meeting notes and list only the decisions," and AI **finds and reads them itself.**

    The pasting step disappears, and you can reuse the same request every week.

</div>

What a connection expands is **the range of data AI can see**. Deciding what to ask for and checking whether the result is right still stays with you. In fact, when AI fetches data on its own, unlike data you paste in yourself, it is easy to get only the result **without seeing what it read**. That is why [meta-principle ③, the duty to review and understand AI output](../index.md#meta-principles), matters even more after you connect. When you get a summary, also ask which documents it came from, and check.

---

## There are two ways to connect { #two-paths }

**External context** and **MCP** were already defined in Part 1, [Key Terms and Scope: External context](../basics.md#external-context). Part 2 uses those definitions as they are and does not define them again, so if the terms are unfamiliar, read that section first.

The two ways below **both run on MCP.** What differs is not the technology but how you find and register them. In Part 2, "MCP server" refers to the kind that is not already prepared in the built-in connector list.

|  | Built-in connectors | MCP servers |
|---|---|---|
| **How to connect** | Pick a service → sign in → review permissions → approve → turn it on in the chat | Pick a server → register → review permissions → approve → turn it on in the chat (extensions installed on your computer work right after installation) |
| **Details** | [Built-in Connectors: Atlassian and GitHub](connectors.md) | [Using MCP Servers](mcp-servers.md) |

Choosing is simple. **If the service you need is in the connector list, a connector is enough.** Look at MCP servers only when it is not in the list. How the range of choices and what you need to check differ is summarized in a table in [Using MCP Servers: Connectors and MCP servers are the same thing](mcp-servers.md#vs-connector).

**Even within Claude, connection support differs by product.** claude.ai, Cowork, and Code each support a different range of connections. What works in which product is summarized in the table in Part 1, [Tools and Products: Feature comparison](../intro.md#claude-comparison).

!!! note "Connecting through command-line tools is not covered here"
    Besides these two, you can also connect to outside services through **developer tools that you install on your computer and use by typing commands**, such as `gh` (GitHub CLI). That is developer territory, so Part 2 leaves it out.

---

## Before you start { #preparation }

- **This training assumes a paid plan.** This is the same requirement as in Part 1, [Preparation](../index.md#preparation), and it is what you need to use the lab tools (Claude Cowork and Code). Individuals use an individual plan at Pro or above. Employees use only **the Team or Enterprise plan your company has contracted**. Handling company work or data on an individual plan, whether free or paid, violates company security policy.
- For **accounts on the services you connect**, use your usual Jira and Confluence accounts. You do not need to create new ones.
- **At work, check company policy first and use only what your company allows.** This applies to both connectors and MCP servers. What you can use, and whether separate internal approval is needed, is covered in [In a company environment](connectors.md#enterprise).

!!! warning "Once connected, AI fetches and writes data on its own"
    You no longer have to paste data in piece by piece, but by the same measure, the range AI can reach also grows. On the approval screen, **read what you are allowing before you move on.** If company data will flow through the connection, check company policy first. The rules to follow are in [Security and Privacy Guide: External connections](../security-guide.md#external-connection).

---

## What this series covers { #scope }

**Covered**: how to connect and disconnect connectors, what to check on the approval screen, how to choose and register MCP servers, and what to check when something does not work.

**Not covered**: building your own MCP server (developer territory, so we only leave a pointer), and RAG's internal structure and implementation patterns.

This is the same line as in Part 1. The scope of this series is what non-developers **choose, connect, and decide** (→ [Key Terms and Scope: Agent = model + harness](../basics.md#model-harness)).

---

## Reading order { #reading-order }

1. Start with **[Built-in Connectors: Atlassian and GitHub](connectors.md)**. It is the easiest way in, and it covers most work data.
2. Read **[Using MCP Servers](mcp-servers.md)** when you need a tool that is not in the connector list.

Both pages make much more sense if you pick **one service you actually use** before reading. If you chose a repetitive task in Part 1, start by thinking about what data that task needs.
