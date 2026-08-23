# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)

## Kenya Coast Field (KCF) Digital Web Portal

**Document Version:** 1.0
**Document Status:** Draft / Proposed
**Date:** 23 August 2026
**Prepared By:** Fredie Obiero Nyandiek
**Lead Engineer:** Fredie Obiero Nyandiek
**Target Deployment:** Cloudflare Pages / Cloudflare Workers Edge Network
**Organization:** Kenya Coast Field, Seventh-day Adventist Church

---

# Document Control

| Item               | Details                                             |
| ------------------ | --------------------------------------------------- |
| Project            | Kenya Coast Field Digital Web Portal                |
| Document           | Software Requirements Specification                 |
| Version            | 1.0                                                 |
| Status             | Draft / Proposed                                    |
| Date               | 23 August 2026                                      |
| Prepared By        | Fredie Obiero Nyandiek                              |
| Primary Users      | Public, Church Members, Pastors, KCF Administration |
| Primary Platform   | Responsive Web Application                          |
| Hosting            | Cloudflare Pages / Cloudflare Workers               |
| Content Management | Git-based / Headless CMS                            |
| Frontend           | Astro 5+                                            |
| Interactive UI     | React                                               |
| Styling            | Tailwind CSS + ALPS                                 |
| Package Manager    | pnpm                                                |
| Primary Region     | Kenya Coast Field                                   |

---

# Table of Contents

1. Introduction
2. Document Conventions
3. Project Background and Objectives
4. Product Scope
5. Overall System Description
6. Stakeholders and User Classes
7. System Architecture
8. Functional Requirements
9. External Interface Requirements
10. Data Requirements
11. Content Management Requirements
12. Security Requirements
13. Non-Functional Requirements
14. Accessibility and Usability Requirements
15. SEO and Discoverability Requirements
16. Analytics and Monitoring
17. Deployment and DevOps Requirements
18. Backup, Recovery and Business Continuity
19. Testing and Quality Assurance
20. Acceptance Criteria
21. Constraints, Assumptions and Dependencies
22. Future Enhancements
23. Traceability and Requirements Management
24. Glossary
25. Approval and Sign-Off

---

# 1. INTRODUCTION

## 1.1 Purpose

This Software Requirements Specification defines the functional, non-functional, technical, security, usability, performance, content, deployment, and operational requirements for the **Kenya Coast Field (KCF) Digital Web Portal**.

The document establishes a common understanding between KCF leadership, departmental stakeholders, content administrators, designers, developers, testers, and future maintenance teams.

The SRS shall serve as the primary reference for:

* System design
* UI/UX design
* Software development
* Database and content modelling
* API and integration development
* Security implementation
* Testing and quality assurance
* Deployment
* User acceptance testing
* Project handover
* Future maintenance and enhancement

---

## 1.2 Purpose of the Product

The KCF Digital Web Portal shall provide an official, centralized digital presence for the Kenya Coast Field of the Seventh-day Adventist Church.

The portal shall enable members, visitors, pastors, church leaders, and the general public to:

* Discover KCF and its mission.
* Find churches and districts.
* Find relevant worship and service information.
* Discover upcoming events.
* Read official news and announcements.
* Access departmental resources.
* Access official giving information.
* Watch sermons and livestreams.
* Submit contact enquiries.
* Submit prayer requests.
* Access official KCF leadership information.
* Access official contact and location information.
* Navigate to related SDA organizational websites.

---

# 2. DOCUMENT CONVENTIONS

The following terminology shall be used throughout this document.

| Term             | Meaning                             |
| ---------------- | ----------------------------------- |
| **SHALL / MUST** | Mandatory requirement               |
| **SHOULD**       | Recommended requirement             |
| **MAY**          | Optional requirement                |
| **FR**           | Functional Requirement              |
| **NFR**          | Non-Functional Requirement          |
| **UI**           | User Interface                      |
| **UX**           | User Experience                     |
| **CMS**          | Content Management System           |
| **API**          | Application Programming Interface   |
| **SEO**          | Search Engine Optimization          |
| **SRS**          | Software Requirements Specification |
| **KCF**          | Kenya Coast Field                   |
| **SDA**          | Seventh-day Adventist               |
| **EKUC**         | East Kenya Union Conference         |
| **ECD**          | East-Central Africa Division        |
| **GC**           | General Conference                  |
| **ALPS**         | Adventist Living Pattern System     |

---

# 3. PROJECT BACKGROUND AND OBJECTIVES

## 3.1 Background

The Kenya Coast Field requires a modern digital platform through which the organization can communicate effectively with church members, visitors, pastors, leaders, departments, and the wider community.

The system shall replace fragmented, static, or difficult-to-maintain digital communication channels with a centralized web platform.

The portal shall be designed for the realities of the Kenyan coastal region, including:

* Mobile-first usage.
* Variable network quality.
* Significant 3G/4G usage.
* Mobile access to church information.
* Need for simple navigation.
* Easy access to M-Pesa information.
* Frequent publication of announcements and events.

---

## 3.2 Project Objectives

The system shall achieve the following objectives:

### OBJ-01 — Digital Presence

Provide an official and professional online presence for KCF.

### OBJ-02 — Information Access

Provide centralized access to KCF information, news, events, leadership, departments, churches, and resources.

### OBJ-03 — Church Discovery

Allow users to quickly find churches, districts, pastors, locations, and service times.

### OBJ-04 — Communication

Provide official communication channels between KCF and visitors/members.

### OBJ-05 — Stewardship

Provide clear and reliable official M-Pesa and banking information.

### OBJ-06 — Content Management

Enable authorized KCF personnel to update website content without modifying source code.

### OBJ-07 — Performance

Provide a fast, mobile-first experience suitable for users operating on constrained networks.

### OBJ-08 — Organizational Alignment

Maintain visual and structural alignment with the wider Seventh-day Adventist digital ecosystem and ALPS design principles.

---

# 4. PRODUCT SCOPE

## 4.1 In-Scope Features

The initial system shall include:

1. Homepage
2. About KCF
3. Leadership directory
4. Church directory
5. Pastor/district information
6. Church location information
7. News and announcements
8. Events calendar
9. Camp meeting information
10. Media and livestreaming
11. Departmental/ministries hub
12. Resources/downloads
13. M-Pesa giving information
14. Bank transfer information
15. Contact page
16. Contact form
17. Prayer request form
18. Headquarters location/map
19. Parent organization links
20. Search and filtering
21. CMS/admin functionality
22. Responsive mobile interface
23. SEO functionality
24. Analytics
25. Security and anti-spam mechanisms

---

## 4.2 Out-of-Scope for Version 1.0

The following are not required for the initial release unless separately approved:

* Full church member accounts.
* Member authentication.
* Church member profiles.
* Online tithe transaction processing through the website.
* Direct M-Pesa API payment processing.
* Church attendance tracking.
* Pastoral case-management systems.
* Internal KCF financial accounting.
* Full ERP functionality.
* Private member messaging.
* Native Android/iOS applications.

These may be considered future enhancements.

---

# 5. OVERALL SYSTEM DESCRIPTION

## 5.1 Product Perspective

The KCF portal shall be a standalone web application integrated into the wider SDA organizational ecosystem.

The portal shall link users to relevant external organizations, including:

* Kenya Coast Field
* East Kenya Union Conference
* East-Central Africa Division
* General Conference
* Other approved SDA resources

The system shall not attempt to replace the systems operated by these organizations.

---

# 6. STAKEHOLDERS AND USER CLASSES

## 6.1 KCF Executive Leadership

Examples include:

* President
* Secretary
* Treasurer

Responsibilities:

* Approving official content.
* Approving organizational information.
* Providing official leadership information.
* Approving financial/giving information.

---

## 6.2 Departmental Directors

Examples may include:

* Youth
* Sabbath School
* Women's Ministries
* Health
* Stewardship
* Education
* Evangelism
* Communication

Responsibilities:

* Providing departmental content.
* Providing departmental events.
* Providing resources.
* Maintaining departmental contact information.

---

## 6.3 Content Administrators

Content administrators shall manage website content through the CMS.

They shall be able to:

* Create content.
* Edit content.
* Publish content.
* Schedule content.
* Archive content.
* Upload approved media.
* Manage events.
* Manage announcements.

They should not require programming knowledge.

---

## 6.4 Pastors and Church Leaders

Pastors and leaders shall primarily consume information and may be granted restricted content-management permissions where authorized.

---

## 6.5 Church Members

Members shall use the system to:

* Find churches.
* View worship times.
* Find events.
* Read announcements.
* Access resources.
* Access giving information.
* Submit prayer requests.
* Access media.

---

## 6.6 General Public

Visitors shall be able to access public information without authentication.

---

## 6.7 System Administrator / Developer

The system administrator shall be responsible for:

* Technical configuration.
* Deployment.
* Environment variables.
* CMS configuration.
* Security configuration.
* Dependency updates.
* Monitoring.
* Backups.
* Technical maintenance.

---

# 7. SYSTEM ARCHITECTURE

## 7.1 Architecture Model

The system shall use a modern **Jamstack / edge/serverless architecture**.

The logical architecture shall consist of:

```text
                    ┌─────────────────────────┐
                    │       Website Users     │
                    │ Mobile / Tablet / Web   │
                    └────────────┬────────────┘
                                 │
                              HTTPS
                                 │
                    ┌────────────▼────────────┐
                    │   Cloudflare Edge/CDN   │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┴──────────────────┐
              │                                     │
      ┌───────▼────────┐                  ┌─────────▼────────┐
      │ Astro Frontend │                  │ Cloudflare       │
      │ Static/Hybrid  │                  │ Workers/Functions│
      └───────┬────────┘                  └─────────┬────────┘
              │                                     │
              │                            ┌────────▼────────┐
              │                            │ External APIs   │
              │                            │ Email / Maps /  │
              │                            │ Turnstile / etc. │
              │                            └─────────────────┘
              │
      ┌───────▼──────────────┐
      │ Content Repository / │
      │ Headless CMS         │
      └──────────┬───────────┘
                 │
       ┌─────────▼─────────┐
       │ Media / Asset     │
       │ Storage           │
       └───────────────────┘
```

---

## 7.2 Frontend

The frontend shall use:

* Astro 5+
* React for interactive components
* TypeScript
* Tailwind CSS
* ALPS design principles

Astro shall be responsible for generating optimized pages, while React shall be used selectively for interactive components.

---

## 7.3 Rendering Strategy

The application shall use a hybrid rendering strategy.

### Static/Pre-rendered Content

The following should preferably be statically generated:

* Homepage
* About
* Leadership
* Department pages
* Church directory
* News
* Events
* Resources
* Contact information

### Server-side/Edge Processing

The following shall use server-side or edge functions:

* Contact submissions
* Prayer requests
* Anti-spam verification
* Email delivery
* Future API integrations

---

# 8. FUNCTIONAL REQUIREMENTS

# 8.1 Homepage

| ID         | Requirement                                                                            | Priority |
| ---------- | -------------------------------------------------------------------------------------- | -------- |
| FR-HOME-01 | The system shall provide a dedicated KCF homepage.                                     | Must     |
| FR-HOME-02 | The homepage shall display the official KCF identity and branding.                     | Must     |
| FR-HOME-03 | The homepage shall provide access to major portal sections.                            | Must     |
| FR-HOME-04 | The homepage shall display current featured announcements/news.                        | Must     |
| FR-HOME-05 | The homepage shall display upcoming major events.                                      | Should   |
| FR-HOME-06 | The homepage shall provide a prominent church finder entry point.                      | Must     |
| FR-HOME-07 | The homepage shall provide a prominent giving information entry point.                 | Must     |
| FR-HOME-08 | The homepage shall provide access to current media/livestream content where available. | Should   |

---

# 8.2 About KCF

| ID          | Requirement                                                      | Priority |
| ----------- | ---------------------------------------------------------------- | -------- |
| FR-ABOUT-01 | The system shall provide an About KCF section.                   | Must     |
| FR-ABOUT-02 | The system shall display KCF history.                            | Must     |
| FR-ABOUT-03 | The system shall display the organization's mission.             | Must     |
| FR-ABOUT-04 | The system shall display the organization's vision.              | Must     |
| FR-ABOUT-05 | The system shall display KCF territory information.              | Must     |
| FR-ABOUT-06 | The system shall display links to approved parent organizations. | Must     |

The final list of the ten counties shall be treated as authoritative organizational data supplied and approved by KCF. The software shall not hard-code an unverified county list into the requirements.

---

# 8.3 Leadership Directory

| ID         | Requirement                                                                                                        | Priority |
| ---------- | ------------------------------------------------------------------------------------------------------------------ | -------- |
| FR-LEAD-01 | The system shall provide a leadership page.                                                                        | Must     |
| FR-LEAD-02 | The system shall display the President.                                                                            | Must     |
| FR-LEAD-03 | The system shall display the Secretary.                                                                            | Must     |
| FR-LEAD-04 | The system shall display the Treasurer.                                                                            | Must     |
| FR-LEAD-05 | Each leadership profile may contain name, position, photograph, biography, and contact information where approved. | Should   |
| FR-LEAD-06 | Authorized administrators shall be able to update leadership information through the CMS.                          | Must     |

---

# 8.4 Church Directory

The Church Directory shall be one of the core features of the system.

| ID       | Requirement                                                                 | Priority |
| -------- | --------------------------------------------------------------------------- | -------- |
| FR-CH-01 | The system shall provide a searchable church directory.                     | Must     |
| FR-CH-02 | The system shall support all approved KCF churches in the official dataset. | Must     |
| FR-CH-03 | Users shall be able to search by church name.                               | Must     |
| FR-CH-04 | Users shall be able to search by district.                                  | Must     |
| FR-CH-05 | Users shall be able to search by pastor name.                               | Must     |
| FR-CH-06 | Users shall be able to filter by county.                                    | Must     |
| FR-CH-07 | Users should be able to filter by district.                                 | Should   |
| FR-CH-08 | Each church shall have a dedicated or expandable profile.                   | Must     |
| FR-CH-09 | Church profiles shall display location information.                         | Must     |
| FR-CH-10 | Church profiles shall display worship/service times where available.        | Must     |
| FR-CH-11 | Church profiles shall display pastor information where approved.            | Must     |
| FR-CH-12 | Church profiles should provide map directions.                              | Should   |
| FR-CH-13 | Authorized administrators shall be able to update church information.       | Must     |

### Church Information Model

A church record should support:

* Unique ID
* Church name
* District
* County
* Physical location
* Postal information where applicable
* Pastor
* Phone/contact
* Email where applicable
* Sabbath School time
* Divine Service time
* Adventist Youth Service time
* Latitude
* Longitude
* Image
* Status
* Last updated date

---

# 8.5 Search

| ID           | Requirement                                                              | Priority |
| ------------ | ------------------------------------------------------------------------ | -------- |
| FR-SEARCH-01 | The system shall provide site-wide search where technically appropriate. | Should   |
| FR-SEARCH-02 | Church directory search shall support name-based searching.              | Must     |
| FR-SEARCH-03 | Church search shall support district searching.                          | Must     |
| FR-SEARCH-04 | Church search shall support pastor searching.                            | Must     |
| FR-SEARCH-05 | Search results shall provide clear empty-state messaging.                | Must     |
| FR-SEARCH-06 | Search shall be optimized for mobile devices.                            | Must     |

---

# 8.6 M-Pesa and Giving

The giving section shall provide accurate, official, and clearly presented financial information.

| ID         | Requirement                                                                                                            | Priority |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- | -------- |
| FR-GIVE-01 | The system shall provide an official KCF giving page.                                                                  | Must     |
| FR-GIVE-02 | The system shall display the approved KCF M-Pesa Paybill number.                                                       | Must     |
| FR-GIVE-03 | The system shall display approved account/reference numbers for supported funds.                                       | Must     |
| FR-GIVE-04 | Users shall be able to copy the Paybill number.                                                                        | Must     |
| FR-GIVE-05 | Users shall be able to copy account/reference numbers.                                                                 | Must     |
| FR-GIVE-06 | The system shall display bank transfer information where approved.                                                     | Must     |
| FR-GIVE-07 | Giving information shall be editable by authorized administrators.                                                     | Must     |
| FR-GIVE-08 | The system shall clearly indicate that displayed payment details are official KCF information.                         | Must     |
| FR-GIVE-09 | The system shall not process financial transactions unless a separate payment integration is approved and implemented. | Must     |

### Initial Approved Giving Data

Where confirmed by KCF:

* Paybill: **522522**
* Tithe: **1100223**
* Offerings: **1100224**
* Camp Meeting: **1100225**

These values shall be configurable rather than embedded permanently in application code.

---

# 8.7 News and Announcements

| ID         | Requirement                                                                | Priority |
| ---------- | -------------------------------------------------------------------------- | -------- |
| FR-NEWS-01 | The system shall provide a news/announcements section.                     | Must     |
| FR-NEWS-02 | Administrators shall create news articles.                                 | Must     |
| FR-NEWS-03 | Administrators shall edit news articles.                                   | Must     |
| FR-NEWS-04 | Administrators shall publish/unpublish news articles.                      | Must     |
| FR-NEWS-05 | Articles shall support publication dates.                                  | Must     |
| FR-NEWS-06 | Articles shall support categories.                                         | Must     |
| FR-NEWS-07 | Articles should support featured images.                                   | Should   |
| FR-NEWS-08 | Articles should support author information.                                | Should   |
| FR-NEWS-09 | The system shall order published articles chronologically.                 | Must     |
| FR-NEWS-10 | The system shall provide article detail pages.                             | Must     |
| FR-NEWS-11 | Old content shall remain accessible unless explicitly archived or removed. | Should   |

---

# 8.8 Events Calendar

| ID          | Requirement                                                        | Priority |
| ----------- | ------------------------------------------------------------------ | -------- |
| FR-EVENT-01 | The system shall provide an events section.                        | Must     |
| FR-EVENT-02 | Administrators shall create events.                                | Must     |
| FR-EVENT-03 | Administrators shall edit events.                                  | Must     |
| FR-EVENT-04 | Administrators shall publish/unpublish events.                     | Must     |
| FR-EVENT-05 | Events shall contain a title.                                      | Must     |
| FR-EVENT-06 | Events shall contain start date and time.                          | Must     |
| FR-EVENT-07 | Events shall contain location.                                     | Must     |
| FR-EVENT-08 | Events shall support descriptions.                                 | Must     |
| FR-EVENT-09 | The system shall distinguish upcoming and past events.             | Must     |
| FR-EVENT-10 | The system should support calendar/list presentation.              | Should   |
| FR-EVENT-11 | The system should support camp meeting-specific event information. | Should   |

---

# 8.9 Media and Livestreaming

| ID          | Requirement                                                               | Priority |
| ----------- | ------------------------------------------------------------------------- | -------- |
| FR-MEDIA-01 | The system shall provide a media section.                                 | Must     |
| FR-MEDIA-02 | The system shall support embedding approved YouTube content.              | Must     |
| FR-MEDIA-03 | The system shall display the official KCF YouTube channel where approved. | Must     |
| FR-MEDIA-04 | The system should provide a latest videos section.                        | Should   |
| FR-MEDIA-05 | The system may support audio/podcast content.                             | May      |
| FR-MEDIA-06 | The system should support livestream links or embedded livestreams.       | Should   |

---

# 8.10 Leadership and Organizational Structure

The system shall represent KCF within the wider SDA organizational structure.

It shall provide approved links to:

* East Kenya Union Conference
* East-Central Africa Division
* General Conference
* Other approved SDA organizational entities

External links shall open securely and shall be configurable through the CMS where practical.

---

# 8.11 Ministries / Departments

| ID         | Requirement                                                              | Priority |
| ---------- | ------------------------------------------------------------------------ | -------- |
| FR-DEPT-01 | The system shall provide a ministries/departments section.               | Should   |
| FR-DEPT-02 | Each approved department shall have a dedicated page.                    | Should   |
| FR-DEPT-03 | Department pages shall support descriptions.                             | Should   |
| FR-DEPT-04 | Department pages shall support director information.                     | Should   |
| FR-DEPT-05 | Department pages shall support events.                                   | Should   |
| FR-DEPT-06 | Department pages shall support downloadable resources.                   | Should   |
| FR-DEPT-07 | Department administrators may be granted restricted content permissions. | May      |

Potential departments include:

* Youth
* Sabbath School
* Women's Ministries
* Health
* Stewardship
* Education
* Evangelism
* Communication

The final department list shall be approved by KCF.

---

# 8.12 Resources and Downloads

| ID        | Requirement                                                        | Priority |
| --------- | ------------------------------------------------------------------ | -------- |
| FR-RES-01 | The system shall support downloadable resources.                   | Should   |
| FR-RES-02 | Resources may include PDF documents.                               | Should   |
| FR-RES-03 | Resources shall have titles and descriptions.                      | Should   |
| FR-RES-04 | Resources should be categorized.                                   | Should   |
| FR-RES-05 | Administrators shall be able to upload or link approved resources. | Should   |

---

# 8.13 Contact

| ID        | Requirement                                                       | Priority |
| --------- | ----------------------------------------------------------------- | -------- |
| FR-CON-01 | The system shall provide official KCF contact information.        | Must     |
| FR-CON-02 | The system shall provide physical address information.            | Must     |
| FR-CON-03 | The system shall provide postal information where applicable.     | Must     |
| FR-CON-04 | The system shall provide approved phone numbers.                  | Must     |
| FR-CON-05 | The system shall provide approved email addresses.                | Must     |
| FR-CON-06 | The system shall provide a contact form.                          | Must     |
| FR-CON-07 | Contact submissions shall be routed to designated KCF recipients. | Must     |
| FR-CON-08 | The contact form shall include spam protection.                   | Must     |

---

# 8.14 Prayer Requests

The prayer request feature shall be treated as a protected communication channel because submissions may contain personal or sensitive information.

| ID         | Requirement                                                                 | Priority |
| ---------- | --------------------------------------------------------------------------- | -------- |
| FR-PRAY-01 | The system shall provide a prayer request form.                             | Must     |
| FR-PRAY-02 | Users shall be able to submit a prayer request without creating an account. | Must     |
| FR-PRAY-03 | The system shall validate required fields.                                  | Must     |
| FR-PRAY-04 | The system shall implement anti-spam protection.                            | Must     |
| FR-PRAY-05 | Prayer requests shall be transmitted securely.                              | Must     |
| FR-PRAY-06 | Prayer requests shall be routed only to authorized recipients.              | Must     |
| FR-PRAY-07 | Prayer requests shall not be publicly displayed.                            | Must     |
| FR-PRAY-08 | The system shall minimize storage of prayer request information.            | Must     |
| FR-PRAY-09 | Any retained prayer request data shall have an approved retention policy.   | Must     |

---

# 8.15 Multilingual Support

| ID         | Requirement                                                         | Priority |
| ---------- | ------------------------------------------------------------------- | -------- |
| FR-LANG-01 | The system should support English.                                  | Must     |
| FR-LANG-02 | The system may support Kiswahili.                                   | Should   |
| FR-LANG-03 | Navigation labels should support translation.                       | Should   |
| FR-LANG-04 | Translation architecture should permit future additional languages. | May      |

---

# 9. EXTERNAL INTERFACE REQUIREMENTS

# 9.1 User Interface

The UI shall:

* Be mobile-first.
* Be responsive.
* Support touch interaction.
* Maintain clear information hierarchy.
* Use consistent navigation.
* Provide accessible forms.
* Provide visible feedback for actions.
* Provide loading states where required.
* Provide error states.
* Provide empty states.
* Avoid unnecessary client-side JavaScript.

---

# 9.2 ALPS Design Compliance

The system shall follow applicable Adventist Living Pattern System principles.

The implementation shall maintain consistency in:

* Typography
* Color
* Spacing
* Grid
* Components
* Buttons
* Forms
* Navigation
* Accessibility
* Brand treatment

The final implementation shall use the official KCF/SDA branding assets supplied and approved by the organization.

---

# 9.3 Responsive Breakpoints

The interface shall support at minimum:

* Mobile phones
* Tablets
* Laptops
* Desktop displays
* Large desktop displays

No critical functionality shall be unavailable on mobile devices.

---

# 9.4 Browser Compatibility

The application shall support the latest two major versions of:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

Mobile support shall include current Android Chrome and iOS Safari versions.

---

# 9.5 Maps

The system may integrate:

* Google Maps
* OpenStreetMap
* Another approved mapping provider

The selected provider shall support:

* Church locations.
* Headquarters location.
* Directions where technically feasible.

API keys shall never be exposed unnecessarily in server-side secrets.

---

# 9.6 Email

Server-side functions shall process contact and prayer requests.

A transactional email service such as Resend or another approved provider may be used.

Email credentials and API keys shall be stored as encrypted environment variables.

---

# 9.7 Anti-Spam

Cloudflare Turnstile or an equivalent approved mechanism shall protect public forms.

---

# 10. DATA REQUIREMENTS

## 10.1 Data Categories

The system shall manage the following major data categories:

1. Church data
2. District data
3. Pastor data
4. Leadership data
5. News data
6. Event data
7. Department data
8. Resource data
9. Media data
10. Giving information
11. Contact information
12. Prayer request data
13. Site configuration

---

# 10.2 Church Data Model

Example:

```json
{
  "id": "mombasa-central",
  "name": "Mombasa Central SDA Church",
  "district": "Mombasa Central District",
  "county": "Mombasa",
  "location": "Tononoka / Off Ronald Ngala Road",
  "pastor": "Approved Pastor Name",
  "serviceTimes": {
    "sabbathSchool": "09:00",
    "divineService": "11:00",
    "adventistYouth": "14:30"
  },
  "coordinates": {
    "lat": -4.0435,
    "lng": 39.6682
  },
  "phone": "",
  "email": "",
  "image": "",
  "status": "active"
}
```

---

# 10.3 News Data Model

Each article shall support:

* ID/slug
* Title
* Summary/excerpt
* Content
* Author
* Category
* Featured image
* Publication date
* Last modified date
* Status
* SEO title
* SEO description
* Tags

---

# 10.4 Event Data Model

Each event shall support:

* ID
* Title
* Description
* Start date
* End date
* Start time
* End time
* Location
* Organizer
* Featured image
* Registration URL where applicable
* Status
* Category

---

# 10.5 Data Validation

The system shall validate:

* Required fields.
* Data types.
* Dates.
* URLs.
* Email addresses.
* Coordinate values.
* Uploaded file types.
* Uploaded file sizes.

---

# 11. CONTENT MANAGEMENT REQUIREMENTS

## 11.1 CMS

The CMS shall enable authorized non-technical users to manage content.

Candidate implementations include:

* Decap CMS
* Storyblok
* Contentful
* Another approved headless CMS

The final CMS shall be selected before production implementation.

---

## 11.2 CMS Content Types

The CMS should provide structured content types for:

* News
* Events
* Churches
* Districts
* Pastors
* Leaders
* Departments
* Resources
* Media
* Site configuration
* Giving information

---

## 11.3 Content Workflow

Where supported, the workflow should follow:

```text
Draft
  ↓
Review
  ↓
Approval
  ↓
Publish
  ↓
Archive
```

Sensitive organizational content shall only be published after authorization by designated KCF personnel.

---

# 12. SECURITY REQUIREMENTS

## 12.1 General Security

| ID     | Requirement                                                                          |
| ------ | ------------------------------------------------------------------------------------ |
| SEC-01 | All production traffic shall use HTTPS.                                              |
| SEC-02 | Administrative access shall require authentication.                                  |
| SEC-03 | Administrative accounts shall use strong passwords or approved OAuth authentication. |
| SEC-04 | Two-factor authentication should be enabled where supported.                         |
| SEC-05 | Secrets shall never be committed to Git.                                             |
| SEC-06 | API keys shall be stored as environment secrets.                                     |
| SEC-07 | User-submitted data shall be validated and sanitized.                                |
| SEC-08 | Public forms shall implement anti-spam protection.                                   |
| SEC-09 | Server-side endpoints shall implement rate limiting where appropriate.               |
| SEC-10 | Dependencies shall be periodically reviewed for known vulnerabilities.               |

---

## 12.2 Privacy

The system shall collect the minimum information necessary to perform its functions.

Prayer and contact submissions shall not be publicly exposed.

The system shall document:

* What information is collected.
* Why it is collected.
* Who can access it.
* How long it is retained.
* How it is deleted.

The implementation shall comply with applicable Kenyan data protection requirements and organizational policies.

---

# 13. NON-FUNCTIONAL REQUIREMENTS

# 13.1 Performance

| ID          | Requirement               | Target                          |
| ----------- | ------------------------- | ------------------------------- |
| NFR-PERF-01 | Lighthouse Performance    | ≥ 90                            |
| NFR-PERF-02 | Lighthouse Accessibility  | ≥ 90                            |
| NFR-PERF-03 | Lighthouse Best Practices | ≥ 90                            |
| NFR-PERF-04 | Lighthouse SEO            | ≥ 90                            |
| NFR-PERF-05 | LCP                       | Target ≤ 2.5 seconds            |
| NFR-PERF-06 | CLS                       | Target ≤ 0.1                    |
| NFR-PERF-07 | INP                       | Target ≤ 200 ms                 |
| NFR-PERF-08 | JavaScript                | Minimized on content pages      |
| NFR-PERF-09 | Images                    | Optimized and responsive        |
| NFR-PERF-10 | Static assets             | Served through CDN/edge caching |

FID and TTI shall not be used as primary modern Core Web Vitals because current web performance evaluation should prioritize LCP, INP, and CLS.

---

# 13.2 Network Performance

The system shall be optimized for:

* 3G
* 4G
* Typical Kenyan mobile networks
* High-latency connections

The system should remain usable even when non-critical third-party services fail.

---

# 13.3 Availability

| ID        | Requirement                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| NFR-AV-01 | Target production availability shall be ≥ 99.9%.                                       |
| NFR-AV-02 | Static content should remain accessible during temporary third-party service failures. |
| NFR-AV-03 | Deployment failures shall not replace the currently working production version.        |

A 99.99% availability target may be considered for future infrastructure maturity but shall not be treated as a guaranteed application-level SLA unless formally contracted.

---

# 13.4 Accessibility

The system shall target **WCAG 2.1 AA** compliance.

Requirements include:

* Keyboard navigation.
* Visible focus states.
* Sufficient color contrast.
* Alternative text for meaningful images.
* Semantic HTML.
* Accessible form labels.
* Accessible error messages.
* Screen-reader compatibility.
* Proper heading hierarchy.
* Accessible navigation.
* Touch-friendly controls.

---

# 13.5 Usability

| ID         | Requirement                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------- |
| NFR-USE-01 | Major website sections should be reachable within two or three interactions from the homepage. |
| NFR-USE-02 | Navigation shall be understandable to first-time users.                                        |
| NFR-USE-03 | Mobile users shall be able to copy giving information easily.                                  |
| NFR-USE-04 | Search and filtering shall provide immediate understandable feedback.                          |
| NFR-USE-05 | Forms shall clearly indicate required fields.                                                  |
| NFR-USE-06 | Error messages shall explain how users can recover.                                            |

---

# 13.6 Maintainability

| ID         | Requirement                                                   |
| ---------- | ------------------------------------------------------------- |
| NFR-MNT-01 | Source code shall be maintained in Git.                       |
| NFR-MNT-02 | TypeScript shall be used for application logic.               |
| NFR-MNT-03 | Components shall be modular.                                  |
| NFR-MNT-04 | Business/content data shall be separated from UI components.  |
| NFR-MNT-05 | Environment-specific configuration shall not be hard-coded.   |
| NFR-MNT-06 | The project shall contain setup and deployment documentation. |
| NFR-MNT-07 | Dependencies shall be periodically updated.                   |
| NFR-MNT-08 | The architecture should minimize vendor lock-in.              |

---

# 13.7 Scalability

The architecture shall support future expansion to include:

* Additional churches.
* Additional departments.
* Additional content types.
* Additional media.
* Additional counties.
* Additional integrations.
* Member authentication.
* Online giving APIs.
* Church-level administration.

---

# 14. SEO AND DISCOVERABILITY

The portal shall be optimized for search engines.

## 14.1 Requirements

| ID     | Requirement                                                   |
| ------ | ------------------------------------------------------------- |
| SEO-01 | Every indexable page shall have a unique title.               |
| SEO-02 | Every important page shall have a meta description.           |
| SEO-03 | URLs shall be human-readable.                                 |
| SEO-04 | Images shall support meaningful alternative text.             |
| SEO-05 | The system shall generate a sitemap.                          |
| SEO-06 | The system shall provide robots.txt.                          |
| SEO-07 | Canonical URLs shall be supported where required.             |
| SEO-08 | Social sharing metadata shall be supported.                   |
| SEO-09 | Structured data should be implemented where appropriate.      |
| SEO-10 | Church and event pages should be indexable where appropriate. |

---

# 15. ANALYTICS AND MONITORING

## 15.1 Analytics

The system may use:

* Google Analytics
* Plausible
* Another approved privacy-conscious analytics platform

Analytics shall not collect unnecessary personal information.

---

## 15.2 Monitoring

Production monitoring should track:

* Availability.
* Failed deployments.
* Form errors.
* Serverless function failures.
* CMS failures.
* Broken links.
* Performance.
* Core Web Vitals.

---

# 16. DEPLOYMENT AND DEVOPS

## 16.1 Source Control

The project shall be maintained in a Git repository.

Recommended branching model:

```text
main
  │
  ├── develop
  │
  └── feature/*
```

The exact branching strategy may be simplified depending on team size.

---

## 16.2 Continuous Deployment

The production workflow should follow:

```text
Developer
   ↓
Feature Branch
   ↓
Pull Request
   ↓
Code Review
   ↓
Automated Checks
   ↓
Merge
   ↓
Production Deployment
   ↓
Cloudflare Edge
```

---

## 16.3 Automated Checks

CI shall ideally execute:

* Dependency installation.
* Type checking.
* Linting.
* Unit tests where applicable.
* Build validation.
* Security/dependency checks.

---

# 17. ENVIRONMENT CONFIGURATION

The application shall support separate environments:

### Development

Local developer environment.

### Staging

Pre-production testing environment.

### Production

Public KCF website.

Environment-specific variables shall include, where required:

* CMS credentials.
* Email provider credentials.
* Cloudflare configuration.
* Turnstile keys.
* Analytics configuration.
* Map provider configuration.

Secrets shall never be stored in source control.

---

# 18. BACKUP, RECOVERY AND BUSINESS CONTINUITY

## 18.1 Source Code

Source code shall be maintained in a version-controlled Git repository.

---

## 18.2 Content

The content management strategy shall preserve historical content where supported.

For Git-backed CMS content, Git history shall provide version recovery.

For external CMS platforms, appropriate export or backup procedures shall be established.

---

## 18.3 Recovery

The project shall document procedures for:

* Recovering the production deployment.
* Reverting to a previous release.
* Recovering content.
* Rotating secrets.
* Reconfiguring third-party services.

---

# 19. TESTING AND QUALITY ASSURANCE

Testing shall occur at multiple levels.

## 19.1 Unit Testing

Where applicable:

* Utility functions.
* Search/filter logic.
* Data validation.
* Formatting functions.

---

## 19.2 Component Testing

Interactive components shall be tested for:

* Rendering.
* User interaction.
* Error handling.
* Responsive behavior.

---

## 19.3 Integration Testing

The following integrations shall be tested:

* CMS.
* Contact forms.
* Prayer forms.
* Email service.
* Turnstile.
* Maps.
* Media providers.

---

## 19.4 End-to-End Testing

Critical user journeys shall include:

### Church Search

```text
Open Website
→ Open Church Finder
→ Enter/Search Church
→ Filter County/District
→ Select Church
→ View Details
→ Open Directions
```

### Giving

```text
Open Website
→ Giving
→ View Paybill
→ Copy Paybill
→ View Account Number
→ Copy Account Number
```

### News

```text
Open Website
→ News
→ Select Article
→ Read Article
```

### Event

```text
Open Website
→ Events
→ Select Event
→ View Date/Time/Location
```

### Prayer Request

```text
Open Website
→ Prayer Request
→ Enter Information
→ Complete Anti-Spam Check
→ Submit
→ Receive Confirmation
```

### Administration

```text
Administrator Login
→ CMS
→ Create/Edit Content
→ Preview
→ Publish
→ Verify Public Page
```

---

# 20. ACCEPTANCE CRITERIA

The system shall be considered ready for production when:

## AC-01 — Core Navigation

All major navigation items function correctly on desktop and mobile.

## AC-02 — Church Directory

The approved church dataset is searchable and filterable.

## AC-03 — Church Details

Church details display accurately according to approved KCF records.

## AC-04 — Giving

Official giving information is displayed accurately and copy functionality works on supported browsers.

## AC-05 — News

Authorized administrators can create and publish news.

## AC-06 — Events

Authorized administrators can create and publish events.

## AC-07 — Media

Approved media content displays correctly.

## AC-08 — Forms

Contact and prayer forms submit successfully and securely.

## AC-09 — Anti-Spam

Public forms are protected against automated abuse.

## AC-10 — Mobile

All major functionality is usable on mobile devices.

## AC-11 — Accessibility

The system meets the agreed WCAG 2.1 AA target.

## AC-12 — Performance

The production website meets the agreed performance targets under representative testing conditions.

## AC-13 — Security

No critical security vulnerabilities remain unresolved at production release.

## AC-14 — CMS

Authorized KCF content administrators can manage approved content without developer intervention.

## AC-15 — Deployment

The application can be successfully deployed and rolled back through the documented deployment process.

---

# 21. CONSTRAINTS

The project is subject to the following constraints:

1. The portal must follow approved SDA/KCF branding.
2. The website must be mobile-first.
3. The application must operate efficiently on constrained networks.
4. Public financial information must be verified by KCF.
5. Organizational information must be approved before publication.
6. Sensitive prayer/contact information must be protected.
7. Third-party API availability may affect optional functionality.
8. CMS selection may affect content workflows.
9. Cloudflare service limits and pricing may affect future scaling.
10. The final county, church, leadership, and departmental datasets must be supplied and approved by KCF.

---

# 22. ASSUMPTIONS

The project assumes that:

1. KCF will provide official branding assets.
2. KCF will provide approved organizational information.
3. KCF will provide the authoritative church directory.
4. KCF will provide accurate pastor and district information.
5. KCF will verify giving information.
6. KCF will provide approved leadership photographs and biographies.
7. KCF will provide official contact information.
8. KCF will nominate CMS administrators.
9. KCF will approve published content.
10. Required third-party services will be available.

---

# 23. DEPENDENCIES

The project may depend on:

* Cloudflare.
* CMS provider.
* Email provider.
* Cloudflare Turnstile.
* Mapping provider.
* YouTube.
* Analytics provider.
* Git repository hosting.
* Approved KCF content.
* Approved SDA/ALPS branding resources.

---

# 24. FUTURE ENHANCEMENTS

The architecture should allow future implementation of:

## Phase 2

* Kiswahili localization.
* Advanced church search.
* Improved map discovery.
* Department-specific administration.
* Event registration.

## Phase 3

* Member authentication.
* Member profiles.
* Church-level administration.
* Online giving API integration.
* Notifications.
* Push notifications.

## Phase 4

* Mobile application.
* Church management functionality.
* Member directory.
* Digital certificates.
* Advanced analytics.
* Internal KCF administration platform.

Future features shall be introduced through separate requirements and shall not unnecessarily complicate Version 1.0.

---

# 25. REQUIREMENTS TRACEABILITY

A requirements traceability matrix shall be maintained during development.

Each requirement should map to:

```text
Requirement
     ↓
Design Component
     ↓
Implementation
     ↓
Test Case
     ↓
Acceptance Result
```

Example:

| Requirement | Implementation          | Test       | Acceptance |
| ----------- | ----------------------- | ---------- | ---------- |
| FR-CH-03    | Church Search Component | TC-CH-03   | Pass/Fail  |
| FR-GIVE-04  | Copy Paybill Component  | TC-GIVE-04 | Pass/Fail  |
| FR-NEWS-02  | CMS News Collection     | TC-NEWS-02 | Pass/Fail  |
| FR-PRAY-01  | Prayer Form             | TC-PRAY-01 | Pass/Fail  |

This traceability shall allow KCF and the development team to determine whether every approved requirement has been implemented and tested.

---

# 26. TECHNICAL STACK

| Layer                  | Technology                                      |
| ---------------------- | ----------------------------------------------- |
| Frontend Framework     | Astro 5+                                        |
| Programming Language   | TypeScript                                      |
| Interactive Components | React                                           |
| Styling                | Tailwind CSS                                    |
| Design System          | ALPS-aligned implementation                     |
| Rendering              | Static + Hybrid/Server-side where required      |
| Edge/Hosting           | Cloudflare Pages / Workers                      |
| CDN                    | Cloudflare                                      |
| CMS                    | Decap CMS / approved Headless CMS               |
| Content                | Markdown / structured CMS content               |
| Asset Storage          | Cloudflare R2 or approved storage               |
| Forms                  | Cloudflare Workers                              |
| Anti-Spam              | Cloudflare Turnstile                            |
| Email                  | Resend or approved transactional email provider |
| Maps                   | Google Maps / OpenStreetMap                     |
| Media                  | YouTube / approved media provider               |
| Analytics              | Google Analytics / Plausible                    |
| Package Manager        | pnpm                                            |
| Source Control         | Git                                             |

---

# 27. RECOMMENDED PROJECT STRUCTURE

A logical project structure may follow:

```text
kcf-portal/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── navigation/
│   │   ├── church/
│   │   ├── news/
│   │   ├── events/
│   │   ├── media/
│   │   └── forms/
│   │
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   │   ├── churches/
│   │   ├── news/
│   │   ├── events/
│   │   ├── departments/
│   │   └── resources/
│   │
│   ├── data/
│   ├── lib/
│   ├── services/
│   └── styles/
│
├── functions/
│   ├── contact/
│   └── prayer/
│
├── tests/
│
├── .env.example
├── astro.config.*
├── package.json
├── pnpm-lock.yaml
└── README.md
```

The final structure may be modified during implementation provided that maintainability and separation of concerns are preserved.

---

# 28. GLOSSARY

### ALPS

Adventist Living Pattern System, the design system used within the Seventh-day Adventist digital ecosystem.

### API

Application Programming Interface.

### CMS

Content Management System.

### ECD

East-Central Africa Division.

### EKUC

East Kenya Union Conference.

### FR

Functional Requirement.

### GC

General Conference.

### KCF

Kenya Coast Field.

### NFR

Non-Functional Requirement.

### SDA

Seventh-day Adventist.

### SEO

Search Engine Optimization.

### SSR

Server-Side Rendering.

### Jamstack

A web architecture emphasizing pre-rendered content, APIs, and client-side functionality where required.

### Edge Network

Distributed infrastructure that serves content close to users geographically.

---

# 29. PROJECT DELIVERABLES

The development project shall produce, at minimum:

1. Production-ready KCF website.
2. Responsive UI implementation.
3. Church directory.
4. News and announcements system.
5. Events system.
6. Giving information module.
7. Media section.
8. Leadership section.
9. Ministries/departments section.
10. Contact form.
11. Prayer request form.
12. CMS/admin workflow.
13. SEO configuration.
14. Analytics configuration.
15. Security configuration.
16. Automated deployment pipeline.
17. Source code repository.
18. Environment configuration documentation.
19. CMS administration guide.
20. Technical deployment documentation.
21. Test results.
22. Requirements traceability matrix.
23. Production handover documentation.

---

# 30. APPROVAL AND SIGN-OFF

Approval of this document confirms that the stakeholders have reviewed and agreed upon the requirements defined herein.

## Prepared By

**Name:** Fredie Obiero Nyandiek
**Role:** Lead Engineer / Developer

Signature: ______________________________

Date: __________________________________

## Reviewed By

**Name:** __________________________________
**Role:** KCF Representative / Communication Department

Signature: ______________________________

Date: __________________________________

## Approved By

**Name:** __________________________________
**Role:** KCF President / Authorized Representative

Signature: ______________________________

Date: __________________________________

## Technical Approval

**Name:** __________________________________
**Role:** Technical Reviewer / Project Lead

Signature: ______________________________

Date: __________________________________

# END OF SOFTWARE REQUIREMENTS SPECIFICATION
