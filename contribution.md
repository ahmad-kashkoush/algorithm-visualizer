# Contributing

> #### Table of Contents
>
> - [Running Locally](#running-locally)
> - [General contribution rules](#general-contribution-rules)
> - [Directory Structure](#directory-structure)

## Run Locally

1. Fork this repository.

2. Clone your forked repo to your machine.

   ```bash
   git clone repo-link
   ```

3. Install dependencies, and run the web app.

   ```bash
   cd algorithm-visualizer

   npm install

   npm dev
   ```

## General contribution rules

1. follow [commit message convention](https://github.com/iamturns/til/blob/master/dev/git/conventional-commits-cheatsheet.md) when typing commits
2. follow the same structure of the project when creating a new algorithm

## Directory Structure

- [**public/**](public) contains static files to be served.
- [**src/**](src) contains source code.

  - [**ui/**](src/ui) contains UI components.

- [**pages/**](src/pages/) contains folders where each folder represents a category, each nested folder contains:
  - page of an algorithm to represent the page
  - logic in the hook to set how this algo should work
