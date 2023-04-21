# Curriculum Vitae Website

## Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone --depth 1 https://github.com/tandv592082/tandv592082.github.io.git
cd tandv592082.github.io
npx rimraf ./.git
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Table of Contents

- [Curriculum Vitae Website](#curriculum-vitae-website)
  - [Installation](#installation)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Commands](#commands)

## Features

- **Mutiple languages**: Support creating CV with multiple languages
- **Download file**: Automatically download CV based on the selected language
- **Deploy Github Page**: Support automatic deployment to personal github page
- **PDF Generator**: Support automatic generation of PDF file
- **Page view tracking**: Support page view counter
- **Dark mode**: Support both dark light mode
- **Responsive**: Support layout for both web and mobile
- Present CV in a standard and easy-to-understand format.

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn preview
```

Deploy:

```bash
# generate
yarn ghGenerateAndDeploy

# deploy to github page 
yarn gh-pages-deploy
```
