# DIMAG

## Disaster Intelligence Management and Assistance Grid

DIMAG is an AI-powered Disaster Response and Relief Management Platform designed to improve coordination between citizens, rescue teams, NGOs, and government authorities during natural and man-made disasters.

> 🚧 This project is currently under development as a Final Year B.Tech Computer Science Engineering Capstone Project.

---

## Project Status

🟢 Planning Phase

---

## Tech Stack

- Frontend: React.js
- Backend: Spring Boot (Java)
- Database: MySQL
- Version Control: Git & GitHub

---

## Team

Project under development.

---

## Work Updates

### Frontend Complete ✅

- **Built full React.js frontend** from scratch using Create React App.
- **Redesigned the UI** with a bold Neobrutalist design system — flat solid colors, black borders, hard drop shadows, no gradients.
- **Completed all citizen-facing screens:**
  - 🏠 Dashboard with action grid (SOS, Safe Zones, Report, Help, My Requests)
  - 🆘 SOS flow — location capture loading state, active SOS confirmation screen, and location error state
  - 🛡️ Safe Zones — skeleton loader + populated shelter list with status badges
  - 🚨 Report Disaster — form with custom validation (red borders + error text on empty fields) and success confirmation screen
  - 🤝 Offer Help — form with custom validation and success confirmation screen
  - 📋 My Requests — populated list with request type icons and colored status badges (Active, Pending, Resolved)
- **Added reusable `Header` component** across all inner pages for consistency (logo + back button).
- **Installed `lucide-react`** for clean, consistent SVG icons throughout the app.
- Frontend is fully responsive (mobile + desktop).
- No backend integration yet — all data is mocked/static UI only.

---

## Next Steps

1. **Backend Development:** Set up Spring Boot (Java) project structure and database connection.
2. **Database Design:** Create MySQL schemas for Users, SOS Requests, Safe Zones, and Reports.
3. **Authentication & Roles:** Implement backend login/registration and role-based endpoints (Citizen, Rescue, NGO, Admin).
4. **API Integration:** Connect React frontend forms and lists to live Spring Boot APIs.
5. **AI Integration:** Incorporate OpenAI API for incident analysis and rescue prioritization.
