<div align="center">
  <a href="https://www.linkedin.com/in/peeratchai-kleebbua/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://media.licdn.com/dms/image/v2/C5603AQER-pOTPo7xkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637471096087?e=1738195200&v=beta&t=-yYgkdMRHV_R6hJ0yYJEhykfQ3VDXf5GCLcoQRUIH5Q">
      <img alt="Peeratcha Kleebbua Picture" src="https://media.licdn.com/dms/image/v2/C5603AQER-pOTPo7xkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637471096087?e=1738195200&v=beta&t=-yYgkdMRHV_R6hJ0yYJEhykfQ3VDXf5GCLcoQRUIH5Q" height="128">
    </picture>
  </a>
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img alt="Next.js logo" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
  </a>
  <h1>DataWow Project By Peeratchai Kleebbua</h1>

<a href="https://www.linkedin.com/in/peeratchai-kleebbua/"><img alt="🔗 My Profile" src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"></a>

</div>

## Project Instruction

```bash
# install dependency
npm install
# start dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in any browser to see the web.

## Project Folder Structure

- This project for DataWow utilize Clean architecture to outline the project

  ![Logo](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

  ![Logo](https://storage.googleapis.com/bitloops-github-assets/Documentation%20Images/clean-architecture-and-ddd.png)

- For Client Architecture, I use MVVM-C and Group by feature

  ![Logo](https://raya.engineering/wp-content/uploads/2022/02/Bildschirmfoto-2021-01-07-um-16.25.53-1024x501-1.png)

- For Component Design Pattern, I use Atomic Design Pattern, but I rename each layer name to be more generic
  - Atoms     => Elements
  - Molecules => Fragments
  - Organisms => Sections
  - Templates => Templates
  - Pages     => Views

  ![Logo](https://miro.medium.com/v2/resize:fit:720/format:webp/1*PcQ-m317YX6ct9ccBi6H1Q.png)

### Top-level Project Structure layout

    .
    ├── app                                 # App Router for DataWow
    ├   ├── (auth)                            # Auth Route Group
    ├   ├── (main)                            # Main Route Group => Post Route
    ├── core                                # Entity and UseCase Layer (Entity & Business Logic)
    ├   ├── common                            # common entity and repository
    ├   ├── errors                            # common error
    ├   ├── models                            # Entity and UseCase
    ├       ├── auth                            # auth Entity
    ├           ├── entity                        # auth Entity and Repository
    ├           ├── use-cases                     # auth UseCase Business Logic
    ├       ├── comment                         # comment Entity
    ├           ├── entity                        # comment Entity and Repository
    ├           ├── use-cases                     # comment UseCase Business Logic
    ├       ├── post                            # post Entity
    ├           ├── entity                        # post Entity and Repository
    ├           ├── use-cases                     # post UseCase Business Logic
    ├       ├── user                            # user Entity
    ├           ├── entity                        # user Entity and Repository
    ├           ├── use-cases                     # user UseCase Business Logic
    ├── features                            # Feature folder
    ├   ├── shared                            # shared Feature
    ├   ├── auth                              # auth Feature
    ├       ├── components                      # Reusable Components for auth Feature
    ├       ├── hooks                           # Reusable Hooks for auth Feature
    ├           ├── coordinators                  # Reusable Coordinator Hooks for auth Feature
    ├           ├── viewModel                     # Reusable ViewModel Hooks for auth Feature
    ├   ├── post                              # post Feature
    ├       ├── components                      # Reusable Components for post Feature
    ├       ├── hooks                           # Reusable Hooks for post Feature
    ├           ├── coordinators                  # Reusable Coordinator Hooks for post Feature
    ├           ├── viewModel                     # Reusable ViewModel Hooks for post Feature
    ├── infrastructures                     # Infrastructure Layer
    ├   ├── remote-repository                 # remote repository in infrastructure layer => handle connect to backend
    ├       ├── config                          # Config folder for axios
    ├       ├── repository                      # Remote Repository Implementation using Repository pattern
    └── interface-adapters                  # Interface-adapters Layer
        ├── controllers                       # Controller for bridging between use-case and UI in framework&driver layer
        ├── presenter                         # Presenter for bridging between use-case and UI in framework&driver layer

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_API_BASE_URL`
`AUTH_SECRET`
`AUTH_URL`

## Authors

- [@peeratchaikleebbua](https://github.com/peeratchaikleebbua)