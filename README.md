# Pokémon Application with tRPC, Prisma, Next.js, and React Query

This is a full-stack Pokémon application built with Next.js, tRPC, Prisma, and React Query. The application allows users to search for Pokémon by name, retrieve multiple Pokémon at once, and filter Pokémon by type.


## Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/en/download/)
- **SQLite**: This project uses SQLite as the default database (already included with Prisma).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   
2. **Install dependencies**
      ``` bash
      npm install
      
3. **Set Up Environment Variables**
   - Create a .env file in the root of the project and add this
     
   ```bash
      DATABASE_URL="file:./dev.db"

4. **Set up the database**
   ``` bash
     npx prisma migrate dev --name init

5. **Seed the Database**
    ``` bash
      npx prisma db seed

6. **Start the developement server**
    ```bash
    npm run dev
