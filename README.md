# portfolio
My Personal Portfolio Project

# Structure
- Most of this app's content can be controlled by editing `./src/contentConfig.ts`
- Each section of the page gets its own component, they can be found in `./src/components`
- Smaller components that are reused can be found in `./src/components/subcomponents/`
- Bundled files and assets can be found in `./public/`
- Requires the GitHub API for all project information
- To launch the app in dev mode run `bun dev` and go to localhost:3000
- To create a production build run from the current dev build `bun prod`
    - This will delete the contents of the docs folder and replace it with the currents content of the public folder
    - Github pages will serve the assets saved in the docs folder
