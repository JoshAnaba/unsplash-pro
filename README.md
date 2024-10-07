# Unsplash Photo Grid Clone with Nuxt 3

This is a Nuxt 3 application that displays a photo grid. The photos are fetched from an external API and displayed dynamically. It also handles query parameters such as `page` and `per_page`, and includes an image loading state and responsive layout.

## Features

- **Nuxt 3 Framework**: Leverages the power of Nuxt 3 for server-side rendering (SSR).
- **Photo Grid**: Displays a list of photos catering for their staggering sizes with smooth animations and a modal view for individual photos.
- **API Integration**: Fetches data from an external API using useAsyncData + $fetch.
- **Query Parameters Sync**: Syncs `page` and `per_page` query parameters with the router.
- **Lazy Loading**: Efficient image loading with low-quality placeholder images using the NuxtImg library.
- **Caching**: API response caching to avoid unnecessary requests and improve performance.
- **Error Handling**: Displays a "No Results" message if no photos are found.

## Technologies Used

- **Nuxt 3**: Server-side rendering and static site generation.
- **TypeScript**: Strict type checking for predictable, scalable code.
- **SCSS**: Styles written in CSS implementing nesting for easy maintainability and flexibility.
- **CSS Variables & Animations**: Utilized for smooth transitions and responsiveness.
- **Unsplash API**: External API for fetching images and metadata.
