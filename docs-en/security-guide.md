# Security and Privacy Guide

> The principles you need to know to use AI tools safely.

Security checks when using AI come down to **two questions**.

- **What you put in**: filter the text you paste, and the photos and documents you upload, before they go in. The sections from the common principles through the track-specific guidance below cover this question.
- **Where AI gets data from, and where it leaves things**: this question comes up once you connect outside services and AI moves between them on its own. The [External connections](#external-connection) section covers it.

The first question always applies, connected or not. The second is **added** the moment you use connections.

---

## Common principles

**Assume that anything you enter into AI "could be seen by someone."** However secure a system is, the surest protection is not entering sensitive information in the first place. Keep this basic attitude even in the [enterprise AI](#enterprise-ai) environment described below.

### 1. Information you must never enter { #never-input }

| Type | Examples |
|------|------|
| Personal identification | National ID number (e.g., resident registration number), passport number, driver's license number |
| Financial information | Card numbers, bank account numbers |
| Credentials | Passwords, API keys, authentication tokens |
| Other people's personal information | Other people's names and contact details, photos taken without consent |

This table only lists **what is prohibited**. In practice, this information slips in while you are talking about something else more often than it is written out openly, so the track-specific guidance covers the situations where that happens ([Employees](#enterprise-ai) · [Students and general users](#students)).

### 2. Don't take AI output at face value

What AI produces **may not match the facts.** It can make up false facts that sound plausible (this is called hallucination), so always follow the points below.

How deeply you review should match how far the output reaches (→ [Home: Meta-principles](index.md#meta-principles) ③). The three cases below are ones where the output's impact **reaches beyond you**, so under that principle, always review them closely.

- For content where facts matter (news, statistics, law, medicine, etc.), **check the original source separately**
- If you use it as work output, **review it against your company's, organization's, or school's standards before sharing it outside**
- Documents AI creates **may unintentionally include internal or personal information**, so check once more before sending them outside

### 3. If something goes wrong

If you accidentally entered personal or confidential information, or suspect you did, act **as quickly as possible**.

- Employee track (non-developers): **follow your company's security incident reporting process**
- Student and general user track (non-developers): immediately use the AI service's **delete conversation and turn off history** features, and follow your organization's or school's guidelines if needed

---

## Employees (non-developers): the company enterprise environment { #enterprise-ai }

### Is enterprise AI safe?

AI tools provided by your company run in **an environment your company operates under a separate contract** (enterprise). This means:

- **No training on your data**: what you enter is not used to train AI models
- **Data isolation**: your company's data is processed separately from other companies' data
- **Access control**: access is only through company accounts, and usage history is managed

### Still, be careful

Even in an enterprise environment, follow the points below. The company contract only protects **how data is handled** (storage, training, isolation); **you are still responsible for what you enter.**

1. **Check before using internal-only or confidential documents**: check the document's security classification, and follow security policy on whether that classification is allowed in company AI.
2. **Mask or remove personal information before entering data**: for customer data, employee information, and the like, remove or mask names, contact details, and so on before entering them. The technical term for this is **"de-identification."**
    - Example: `John Doe (010-1234-5678)` → `Customer A (XXX-XXXX-XXXX)`
    - Example: replace the customer number column with serial numbers
3. **Be careful sharing output outside**: AI-generated output may contain internal information. Always review it before sharing it outside.

!!! tip "In one line"
    Company AI is designed to be safe, but the habit of **'thinking once more before you enter something'** still matters.

---

## Students and general users (non-developers), including free AI tools { #students }

### What free AI tools are like

Free AI tools are different from an enterprise environment.

- **What you enter may be used to improve the service**: this means your conversations **may be used as training data that benefits other people** (depending on the terms of service)
- **Your conversations may be stored on servers**
- **Security may be weaker than in paid or business versions**

This training's labs use [paid Claude](index.md#preparation), but the same principles apply to other free AI tools you use day to day.

### Rules to follow

Applied to everyday situations, [information you must never enter](#never-input) turns into four rules.

#### 1. Don't enter your own personal information

- Your name, phone number, address, or student ID number **slips out in conversation** more often than it is written out openly. For example: "My name is ___ and I go to ___ School."
- When it seems that some background would improve the answer, write only **as much as doesn't identify you**, such as "high school student" or "office worker."

#### 2. Don't enter other people's information

- This is when names and contact details of friends, family, or teachers get mixed into a conversation. **Knowing someone does not make their information yours to hand over.**
- The same goes for **photos taken without the consent of the people in them**, such as group photos. You are the one uploading, but the information belongs to the people in the photo.

#### 3. Check photos for personal information

- When uploading a photo to AI, make sure things like **name tags, student ID cards, or address signs in the background** are not visible
- For photos of documents, cover sensitive parts before uploading

#### 4. Check the terms of service

- Check the **data handling terms** of the AI tool you use at least once
- In particular, the item on "whether your input is used for training" is important

!!! tip "In one line"
    Free AI tools are convenient, but remember: **'never enter your own or anyone else's personal information.'**

---

## External connections: connectors and MCP servers { #external-connection }

All the principles so far dealt with the first question: **what you put in**. Once you connect AI to outside services such as Jira, Confluence, and GitHub (→ [Part 2: Connecting Tools and Data](connect/index.md)), the second question begins. Even without you pasting anything, **AI fetches data itself**, and if you allowed writing, **it leaves things behind itself.**

**The 'should I hand this over?' judgment you made each time you pasted is made in advance, on the approval screen, when you connect.** Once you approve, AI chooses what to fetch from then on. What you set on the approval screen is **the widest range of data AI can see**. The range actually used narrows again through the connections you turn on in a chat and the approvals you give for each action.

### Common: follow these on any track

#### Don't connect to data that contains personal information

The rules for [information you must never enter](#never-input) apply to connections **just the same**. In fact, you need to be even more careful. When you paste something in yourself, you see with your own eyes what you are handing over, but once connected, **AI finds and reads things on its own.** Even if personal information is mixed in, there is no step where you filter it out.

- **Data that is a collection of personal information is not connected at all, rather than connected with reduced permissions.** This means places where personal information is the main content, such as HR and payroll records, customer lists, and health information.
- **If it is mixed in, leave that part out when approving.** If the service you want to connect also holds such data, approve only the repositories or spaces you need. If the service doesn't let you split the scope, hold off on connecting.
- **Being able to see it with your account does not mean you may hand it over.** What opens because you have permission and what is fine to entrust to AI are separate judgments.

#### Start with the least permissions

A connection does not create new permissions; it uses **your account's permissions as they are**. That is reassuring and a reason for caution at the same time, because it means the data you can see becomes **the widest range** you can entrust to AI. So what you decide on the approval screen is really **how much of your permissions to entrust to AI**, and you can reduce that in two directions.

- **Reduce what it can do**: if reading is enough, don't open up writing too. Writing is the permission to leave traces in that service.
- **Reduce how far it can reach**: pick only the repositories, projects, or spaces you need. Even if approving everything is the default, narrow it if you can.
- If your account's permissions are broad, approve with **that much less**.

What exactly to look for on the screen, and what to do for services where you can't narrow it on the screen, is covered in [What to check on the approval screen](connect/connectors.md#approval-screen).

#### Review your connections regularly

Once set up, connections are easy to forget. But forgetting doesn't disconnect them, so **access you granted stays in place even for connections you no longer use.** How to decide what to disconnect, and where to review it on screen, is in [Reviewing and disconnecting](connect/connectors.md#manage-disconnect).

### Employees (non-developers): connections that handle company data

#### Know where company data goes

When you connect, data from that service is sent to the AI service. **You didn't paste it, but it was handed over all the same.**

- A document's security classification **applies in exactly the same way** when it is read through a connection. Not having entered it yourself does not make it an exception.
- What the company contract (enterprise) protects is [how entered content is handled](#enterprise-ai), **not the judgment of what to hand over.**
- If you allow writing, what AI creates stays **under your name** in spaces your team sees. Always include a step where you read and fix it yourself before it goes up.

#### Company policy and approval processes come first

**At work, whether it is a connector or an MCP server, check company policy first and use only what your company allows. Don't use what is not allowed, and connect the way your company specifies.** Your company may have blocked connectors and MCP servers under its security policy.

- Connections that handle company work or data are made **only on the plan your company has contracted**. Using an individual plan, whether free or paid, violates security policy.
- The connections available in your organization are **set in advance by the admin** (→ [In a company environment](connect/connectors.md#enterprise)). If it is not in the list, it is outside what is allowed. Don't look for workarounds.
- With an **MCP server**, where you register a tool that is not in the ready-made list yourself, checking "is this source trustworthy?" falls to you. If your company has a registration or approval process, that process comes first (→ [Choosing a trustworthy server](connect/mcp-servers.md#choosing)).
- If your company provides **an MCP server for internal data**, the company also decides how to connect. Don't obtain addresses, accounts, or install files on your own; **follow exactly the method your company specifies** (→ [Where you set it up](connect/mcp-servers.md#remote-vs-local)).

#### Handle work data in work tools { #right-tool }

Even for the same data, whether connecting makes sense depends on which tool it lives in. For **tools that manage source code** (GitHub, GitHub Enterprise, etc.) in particular, first ask whether it is something a non-developer should connect at all.

- If there is a separate tool for managing issues and work, that comes first. **Content that developers and non-developers both need to see** is better managed in a shared tool (Jira, Confluence, etc.).
- This section is the rule for **when you end up handling company data in a source code tool**. Just reading public data does not call for a connection (→ [Deciding whether to connect GitHub](connect/connectors.md#github)).
- **GitHub Enterprise** run by your company comes with its own sign-in and license conditions. Giving a non-developer an account at all is the company's decision, so **check policy first**.

### Students and general users (non-developers): connecting personal accounts

When you connect a personal space such as your own drive, notes, or repositories, **everything stored in that space** becomes something AI can access. Here is how the personal information rules from the common section play out in personal spaces.

- Personal spaces easily have **your personal information** mixed into photos, documents, and notes. Before connecting, take a look at what is in that space.
- **Material containing other people's information**, such as group photos and shared documents, also becomes accessible. Not having pasted it yourself does not make it an exception.
- If it is a space many people share, such as a club or study group, consider before connecting that **other people's material may be sent too**.

!!! tip "In one line"
    Connections add convenience, and by the same measure they add **room for data you never looked at to get mixed into the results**. **Keep permissions minimal, and review regularly.**

---

## Summary

**Legend**: ✓ must follow / – not applicable, or applies at a different level for this track

| Principle | Employees | Students and general users |
|------|--------|------------|
| Never enter personal identification | ✓ | ✓ |
| Never enter other people's personal information | ✓ | ✓ |
| Check photos for personal information | ✓ | ✓ |
| Mask personal information before entering (de-identification) | ✓ | ✓ |
| Verify AI output against original sources | ✓ | ✓ |
| Review AI output before sharing outside | ✓ | ✓ |
| Don't connect to data containing personal information | ✓ | ✓ |
| Minimize permissions given to connections | ✓ | ✓ |
| Review and disconnect unused connections | ✓ | ✓ |
| Check document security classification | ✓ (internal documents) | – |
| Connect only on the company-contracted plan | ✓ (internal data) | – |
| Connect only what the company allows | ✓ (internal data) | – |
| Check for your own and others' data before connecting personal accounts | – | ✓ |
| Check terms of service | – (company contract) | ✓ |
