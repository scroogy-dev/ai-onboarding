# Key Terms and Scope

> A short summary of the **key terms** non-developer readers should know before starting this series, and of the **areas this series does not cover** (out-of-scope notes). The goal is not to study syntax or internals in depth, but to know the words well enough not to get stuck when they come up.

---

## Chatbot vs. agent { #chatbot-vs-agent }

Generative AI products can be divided into two kinds by **how you use them**. **This section defines what a chatbot and an agent each are**, and whenever these two words appear on other pages, they refer to the definitions here. They also connect directly to this training's [three-stage model](index.md#stage-model).

<div class="grid" markdown>

!!! note "Chatbot"
    You ask and the AI answers. After you get the result, **you do the actual work yourself**.

    **Good for**: gathering information, brainstorming ideas, polishing drafts

    **In this training**: Stage 1 (prerequisite, already experienced)

!!! note "Agent"
    The AI opens files and does the work itself. You **only set the goal and review the result**.

    **Good for**: repetitive tasks, multi-step automation, working with local files

    **In this training**: Stage 3 Claude Cowork labs

</div>

We separate the two because their **cost structure for repetitive work** is different. It decides whether you ask for the same thing from scratch every time, or set it up once so you can hand it off.

This training places **Stage 2 (reusing prompts)** between chatbots and agents as a bridge, so that you move naturally from chatbot user to agent user. The cost difference and where each stage sits are covered in detail in the [three-stage model](index.md#stage-model).

---

## Agent = model + harness { #model-harness }

Just above, in [Chatbot vs. agent](#chatbot-vs-agent), we described an agent as *"a way of using AI where the AI opens files and works on its own, and you only give the goal and review the result."* So **what is that agent made of?** Just two parts.

- **Model**: the thinking head. It is smart, but it **can be wrong, and its answers can differ slightly each time** (→ the same nature as the non-determinism in the [three forms](#three-forms) below). Several companies make models (Anthropic, OpenAI, Google, and others). The labs in this course use Claude.
- **Harness**: the **work structure around** that head; simply put, *a frame that people have set up*. Which tools and materials to use, in what order to work, and where to check the result all go here.

**A single message to the model (a prompt) is not a harness.** It is one question put to the head. Once you bundle the same instructions to save and reuse them (**Agent Skills**), they become part of the harness (→ the same line as the *one-off output vs. Skill* boundary in the [three forms](#three-forms) below).

### The harness is mostly "the things you set up"

If you unpack the harness, **most of it is choosing, connecting, and deciding on things that already exist**. It comes from three sources, and the part you newly create yourself is thin.

<div class="grid" markdown>

!!! note "What you make and decide (thin)"
    All of these are things this course already covers.

    - **Organize and save instructions**: polish a request you used to write out at length every time, once, into a Skill (→ [three forms](#three-forms))
    - **Attach materials**: which folders and documents to show (→ [meta-principle ④](index.md#meta-principles))
    - **Set the order**: "get the plan first → review → execute" (→ [meta-principle ①](index.md#meta-principles))
    - **Add a check step**: where you read and check the result yourself (→ [meta-principle ③](index.md#meta-principles))

!!! note "What you only choose and connect (not build)"
    You only choose and connect things that are already built.

    - **Choose the product and model**: which to use among claude.ai / Cowork / Code, and which model (Fable, Opus, Sonnet, Haiku) (→ [feature comparison](intro.md#claude-comparison))
    - **Connect external services**: you sign in to and approve services that already exist, such as GitHub or Slack, to connect them (→ [external context](#external-context)). You are not building them.

</div>

Then what is the big part that *"opens files and runs commands on its own"*? It is **a structure designed by the company that built the agent product**: a frame that calls tools in a set order inside an isolated environment (the isolated VM and egress policy, meaning outbound network rules, in [Cowork's protection model](intro.md#claude-cowork) are what this looks like in practice). The model is not autonomous on its own; **the harness the company built ran the model**.

!!! warning "A common misconception: 'Let the agents hold a meeting and a good conclusion will follow'"
    It is easy to expect that if you spin up several AIs and have them hold a meeting, they will research on their own and deliver the right answer without any human involvement. That is not how it works.

    - **The frame (harness) was designed by someone.** The company that built the product decided what to ask, which materials to give, and in what order to work, and you set things up on top of that.
    - **Even a smart model can be wrong.** Even when several AIs meet, they can reach a **plausible but jointly wrong conclusion** if they start from a wrong premise.
    - **Good conclusions do not come out "on their own."** They come from the person who designed the frame well and the person who reviewed the result.

    That is why the [duty to review and understand AI output](index.md#meta-principles) is not negotiable.

---

## The nature of outputs: one-off output · Skill · application { #three-forms }

Outputs fall into three kinds depending on their **nature**. Even for the same task, **how consistent the results are** and **how much it costs to make** vary greatly depending on which form you build.

| Aspect | One-off output | Skill *(this training)* | Application *(software; this training covers up to personal web apps)* |
|---|---|---|---|
| **What it is** | A single result you got that time from one instruction. It can be a chat answer or a document or Excel file, and you do not keep it to reuse | An asset that bundles frequently used prompts and procedures into a reusable form | A program written in code |
| **Determinism**{ .row-accent } | Non-deterministic | Non-deterministic *(calls an LLM inside)* | Deterministic |
| **Consistency of results** | Results can differ slightly each time | Same format and approach guaranteed *(values may differ)* | Same input → same output |
| **Cost to make, and who** | None: anyone, instantly | Low: **non-developers build it themselves** | Low for a personal web app, high for anything bigger: needs design, code, and testing (engineering territory) |
| **When it fits** | One-off, exploratory, or tasks whose context changes every time | Repetitive tasks with the same pattern | Tasks where scale, many users, or deterministic reliability are key |

!!! warning "Generative AI is non-deterministic by default"
    Even with the same instruction, the answer can differ slightly each time. How much of this non-determinism you can control depends on the **form** in which you use AI.

The **Skill** this training emphasizes can be built by non-developers, and once built, it greatly reduces repetitive work.

The third form, the **application** (deterministic, code-based software), splits into two kinds even though both are "apps."

- **Personal apps only you use** (small tools and programs): these days agents even help write the code, so non-developers can try building them too. **This training covers up to this point.**
- **Official systems and apps for many users**: deterministic reliability is key, so engineering such as design, testing, and maintenance still takes a lot of work. **This is outside the scope of this training.**

Personal apps also have a set scope. It goes **up to HTML and JavaScript web apps that work when you open a single file in a browser on your computer**. The three below are out of scope.

- **Apps that several people use together**: the moment an app is no longer personal, deterministic reliability and the burden of maintenance come with it.
- **Apps that need a separate server, installation, or build**: if it does not work with just HTML and JavaScript files, setting up a development environment becomes a different story.
- **Deploying it as a website beyond your computer**: this training's scope ends at opening the file and using it yourself. Once you create an address for others to access and upload it, you are dealing with hosting and access permissions.

The focus is still Skills that non-developers build themselves. And even for personal use, the further you go toward apps, the heavier your [responsibility to read, understand, and review](index.md#meta-principles) becomes.

---

## Markdown { #markdown }

Markdown is a **lightweight document format** that expresses formatting (headings, lists, emphasis, tables) using plain text only. The file extension is `.md`, and it is one of the output formats AI handles best.

One-line examples: `# Title` → large heading, `**bold**` → **bold**, `- item` → bullet.

**This course does not teach Markdown syntax.** Knowing it well enough not to get stuck when the word comes up is enough.

In this series, Markdown appears as an example of the **view** in [meta-principle ② "Separate data from view"](index.md#meta-principles), and in the [lab series](labs.md) `step04-wrong-answer-note` it is used as the output format for a child's study report.

---

## External context { #external-context }

The general idea of attaching your own materials (internal documents, the web, databases, and so on) to AI so it can answer from them is called **external context**. Materials you attach directly within one conversation are covered in [meta-principle ④ "Manage your context (conversations)"](index.md#meta-principles); **connecting external sources in a standard way** goes beyond that.

- **MCP (Model Context Protocol)**: a protocol that connects external sources to AI clients in a standard way. It answers **"how you connect."**
- **RAG (Retrieval-Augmented Generation)**: a flow that searches for relevant pieces and inserts them into the context to produce an answer. It answers **"what you do,"** and sits on a different layer from MCP.

**How to actually connect is covered in [Part 2: Connecting Tools and Data](connect/index.md).** Part 1 assumes [using Claude on its own](index.md#stage-model), so here it is enough to know what the two words mean. Part 2 walks you through, screen by screen, how to connect with connectors and how to choose and register MCP servers.

However, **Part 2 does not cover RAG's internal structure or implementation patterns either.** That is developer territory. Just know that such a flow exists.
