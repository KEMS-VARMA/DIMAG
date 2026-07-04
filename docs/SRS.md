# Software Requirements Specification (SRS)

# Project Name

DIMAG

Disaster Intelligence Management and Assistance Grid

---

# Version

1.0

---

# Prepared By

K Eshwar

B.Tech Computer Science Engineering

---

# Project Type

AI Powered Disaster Response and Relief Management Platform
---

# 1. Problem Statement

Natural and man-made disasters such as floods, cyclones, earthquakes, fires, and landslides often lead to significant loss of life and property due to delayed communication, lack of coordination, and inefficient resource management. Existing disaster management applications primarily focus on providing alerts and weather updates but do not offer a unified platform for real-time incident reporting, rescue coordination, volunteer management, shelter monitoring, and relief distribution.

As a result, citizens struggle to communicate emergencies, rescue teams face challenges in prioritizing rescue operations, NGOs experience difficulties in managing relief resources, and government authorities lack centralized visibility of ongoing disaster situations.

Therefore, there is a need for an intelligent, centralized, and user-friendly disaster management platform that enables effective communication, real-time coordination, and data-driven decision-making among all stakeholders involved in disaster response and recovery.
---

# 2. Project Objectives

The primary objective of DIMAG is to develop an AI-powered Disaster Intelligence Management and Assistance Grid that improves disaster preparedness, emergency response, rescue coordination, and relief management through a unified digital platform.

The specific objectives are:

- To provide citizens with a platform to report disasters and request emergency assistance.
- To enable rescue teams to efficiently manage and respond to rescue operations.
- To assist NGOs in coordinating volunteers and managing relief resources.
- To provide government authorities with a centralized monitoring dashboard.
- To integrate Artificial Intelligence for intelligent rescue prioritization and incident analysis.
- To improve communication among all disaster response stakeholders.
- To provide real-time information regarding shelters, rescue operations, and disaster reports.
---

# 3. Project Scope

DIMAG is designed as a web-based disaster response and relief management platform that enables effective communication and coordination among citizens, rescue teams, NGOs, and government authorities during disaster situations.

The system provides facilities for disaster reporting, emergency SOS requests, rescue coordination, shelter management, volunteer management, resource monitoring, and disaster analytics through role-based dashboards.

The project focuses on improving disaster response efficiency by integrating Artificial Intelligence for rescue prioritization, incident summarization, and intelligent decision support.

The current scope of the project is limited to disaster response and relief management through a web application and does not include IoT devices, drone-based monitoring, or live satellite image processing.
---

# 4. Database Planning

## Users Table

| Field Name | Data Type | Description |
|------------|----------|-------------|
| id | Integer | Unique User ID |
| full_name | String | User's Full Name |
| email | String | User Login Email |
| password | String | Encrypted Password |
| phone | String | Contact Number |
| city | String | User City/District |
| role | String | Citizen, Rescue Team, NGO, Admin |