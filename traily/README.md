# 🌍 TrailShare  
*A social travel diary where paths meet stories.*  

---

## ✨ What is TrailShare?  
TrailShare is a mobile app (iOS & Android) built with **React Native** that lets travelers:  

- 🗺️ **Record trips** by tracking GPS from start to finish.  
- 📸 **Capture photos/videos** pinned to the exact location on the path.  
- 🗂️ **Generate interactive trip maps** with routes, stats, and geotagged memories.  
- 🌐 **Share journeys** with friends or the community.  
- 🔍 **Explore nearby trips** and retrace the steps of others.  

Think of it as a **travel diary on a map** — a way to relive journeys and inspire others.  

---

## 🚧 Project Status  
🚀 **Currently in active development**  

Planned features for the MVP:  
- [ ] Authentication (Supabase OAuth: Google & Apple)  
- [ ] GPS trip recording (start/stop, background tracking)  
- [ ] Live route drawing on interactive maps (MapTiler + MapLibre)  
- [ ] Media capture (camera + attach to path)  
- [ ] Offline-first support (local caching + sync on reconnect)  
- [ ] Trip summary (distance, duration, elevation)  
- [ ] Shareable trip links  
- [ ] Explore nearby trips  

Future ideas:  
- AI-generated trip highlights  
- Private “blurred” zones for privacy (home/work masking)  
- Gamification (badges, stats, challenges)  
- Augmented reality exploration mode  

---

## 🛠️ Tech Stack  

### Frontend  
- **React Native (TypeScript)**  
- **MapLibre GL** + MapTiler for maps  
- **Expo Location & Task Manager** for background GPS tracking  
- **Vision Camera** for capturing geotagged media  
- **Realm / SQLite** for offline queue & caching  

### Backend  
- **Supabase (PostgreSQL + PostGIS + Auth)**  
- **AWS S3** for media storage (presigned uploads)  
- **Supabase Edge Functions** for presigned URL generation & sync logic  

---

## 🌟 Why This Project?

This project is not only about travel, it’s about **engineering challenges:**
- Building an **offline-first, sync-safe architecture.**
- Handling **geospatial queries** at scale (PostGIS).
- Managing **media uploads and optimization pipelines.**
- Creating a **polished** UX for travelers and explorers.

It’s a playground for mobile development, mapping, and backend engineering.

---

## 📫 Contact

Built by [Florian Griffon](https://www.linkedin.com/in/floriangriffon/)
- 💼 Looking for opportunities in mobile & full-stack engineering.
- 📧 Reach me at: florian.griffon@epitech.eu